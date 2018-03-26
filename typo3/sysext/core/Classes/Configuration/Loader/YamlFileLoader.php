<?php
namespace TYPO3\CMS\Core\Configuration\Loader;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use Symfony\Component\Yaml\Yaml;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * A Yaml file loader that allows to load YAML files, based on the Symfony/Yaml component
 *
 * In addition to just load a yaml file, it adds some special functionality.
 *
 * - A special "imports" key in the yaml file allows to include other yaml files recursively
 *   where the actual yaml file gets loaded after the import statements, which are interpreted at the very beginning
 *
 * - Merging configuration options of import files when having simple "lists" will add items to the list instead
 *   of overwriting them.
 *
 * - Special placeholder values set via %optionA.suboptionB% replace the value with the named path of the configuration
 *   The placeholders will act as a full replacement of this value.
 */
class YamlFileLoader
{

    /**
     * Loads and parses a YAML file, and returns an array with the found data
     *
     * @param string $fileName either relative to PATH_site or prefixed with EXT:...
     * @return array the configuration as array
     * @throws \RuntimeException when the file is empty or is of invalid format
     */
    public function load(string $fileName): array
    {
        $content = $this->getFileContents($fileName);
        $content = Yaml::parse($content);

        if (!is_array($content)) {
            throw new \RuntimeException('YAML file "' . $fileName . '" could not be parsed into valid syntax, probably empty?', 1497332874);
        }

        $content = $this->processImports($content);

        // Check for "%" placeholders
        $content = $this->processPlaceholders($content, $content);

        return $content;
    }

    /**
     * Put into a separate method to ease the pains with unit tests
     *
     * @param string $fileName either relative to PATH_site or prefixed with EXT:...
     *
     * @return string the contents of the file
     * @throws \RuntimeException when the file was not accessible
     */
    protected function getFileContents(string $fileName): string
    {
        $streamlinedFileName = GeneralUtility::getFileAbsFileName($fileName);
        if (!$streamlinedFileName) {
            throw new \RuntimeException('YAML File "' . $fileName . '" could not be loaded', 1485784246);
        }
        return file_get_contents($streamlinedFileName);
    }

    /**
     * Checks for the special "imports" key on the main level of a file,
     * which calls "load" recursively.
     * @param array $content
     *
     * @return array
     */
    protected function processImports(array $content): array
    {
        if (isset($content['imports']) && is_array($content['imports'])) {
            foreach ($content['imports'] as $import) {
                $importedContent = $this->load($import['resource']);
                // override the imported content with the one from the current file
                $content = $this->merge($importedContent, $content);
            }
            unset($content['imports']);
        }
        return $content;
    }

    /**
     * Main function that gets called recursively to check for %...% placeholders
     * inside the array
     *
     * @param array $content the current sub-level content array
     * @param array $referenceArray the global configuration array
     *
     * @return array the modified sub-level content array
     */
    protected function processPlaceholders(array $content, array $referenceArray): array
    {
        foreach ($content as $k => $v) {
            if ($this->isPlaceholder($v)) {
                $content[$k] = $this->getValueFromReferenceArray($v, $referenceArray);
            } elseif (is_array($v)) {
                $content[$k] = $this->processPlaceholders($v, $referenceArray);
            }
        }
        return $content;
    }

    /**
     * Returns the value for a placeholder as fetched from the referenceArray
     *
     * @param string $placeholder the string to search for
     * @param array $referenceArray the main configuration array where to look up the data
     *
     * @return array|mixed|string
     */
    protected function getValueFromReferenceArray(string $placeholder, array $referenceArray)
    {
        $pointer = trim($placeholder, '%');
        $parts = explode('.', $pointer);
        $referenceData = $referenceArray;
        foreach ($parts as $part) {
            if (isset($referenceData[$part])) {
                $referenceData = $referenceData[$part];
            } else {
                // return unsubstituted placeholder
                return $placeholder;
            }
        }
        if ($this->isPlaceholder($referenceData)) {
            $referenceData = $this->getValueFromReferenceArray($referenceData, $referenceArray);
        }
        return $referenceData;
    }

    /**
     * Checks if a value is a string and begins and ends with %...%
     *
     * @param mixed $value the probe to check for
     * @return bool
     */
    protected function isPlaceholder($value): bool
    {
        return is_string($value) && substr($value, 0, 1) === '%' && substr($value, -1) === '%';
    }

    /**
     * Same as array_replace_recursive except that when in simple arrays (= yaml lists), the entries are
     * appended (array_merge)
     *
     * @param array $val1
     * @param array $val2
     *
     * @return array
     */
    protected function merge(array $val1, array $val2): array
    {
        // Simple lists get merged / added up
        if (count(array_filter(array_keys($val1), 'is_int')) === count($val1)) {
            return array_merge($val1, $val2);
        } else {
            foreach ($val1 as $k => $v) {
                // The key also exists in second array, if it is a simple value
                // then $val2 will override the value, where an array is calling merge() recursively.
                if (isset($val2[$k])) {
                    if (is_array($v) && isset($val2[$k])) {
                        if (is_array($val2[$k])) {
                            $val1[$k] = $this->merge($v, $val2[$k]);
                        } else {
                            $val1[$k] = $val2[$k];
                        }
                    } else {
                        $val1[$k] = $val2[$k];
                    }
                    unset($val2[$k]);
                }
            }
            // If there are properties in the second array left, they are added up
            if (!empty($val2)) {
                foreach ($val2 as $k => $v) {
                    $val1[$k] = $v;
                }
            }
        }
        return $val1;
    }
}
