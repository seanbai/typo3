<?php
namespace TYPO3\CMS\CssStyledContent\Controller;

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

use TYPO3\CMS\Core\TypoScript\TypoScriptService;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\MathUtility;

/**
 * Plugin class - instantiated from TypoScript.
 * Rendering some content elements from tt_content table.
 */
class CssStyledContentController extends \TYPO3\CMS\Frontend\Plugin\AbstractPlugin
{
    /**
     * Same as class name
     *
     * @var string
     */
    public $prefixId = 'tx_cssstyledcontent_pi1';

    /**
     * Path to this script relative to the extension dir.
     *
     * @var string
     */
    public $scriptRelPath = 'Classes/Controller/CssStyledContentController.php';

    /**
     * The extension key
     *
     * @var string
     */
    public $extKey = 'css_styled_content';

    /**
     * @var array
     */
    public $conf = [];

    /***********************************
     * Rendering of Content Elements:
     ***********************************/

    /**
     * Rendering the "Table" type content element, called from TypoScript (tt_content.table.20)
     *
     * @param string $content Content input. Not used, ignore.
     * @param array $conf TypoScript configuration
     * @return string HTML output.
     */
    public function render_table($content, $conf)
    {
        // Look for hook before running default code for function
        if ($hookObj = $this->hookRequest('render_table')) {
            return $hookObj->render_table($content, $conf);
        } else {
            // Init FlexForm configuration
            $this->pi_initPIflexForm();
            // Get bodytext field content
            $field = isset($conf['field']) && trim($conf['field']) ? trim($conf['field']) : 'bodytext';
            $content = trim($this->cObj->data[$field]);
            if ($content === '') {
                return '';
            }
            // Get configuration
            $caption = trim($this->cObj->data['table_caption']);
            $useTfoot = trim($this->cObj->data['table_tfoot']);
            $headerPosition = trim($this->cObj->data['table_header_position']);
            switch ($headerPosition) {
                case '1':
                    $headerPos = 'top';
                    break;
                case '2':
                    $headerPos = 'left';
                    break;
                default:
                    $headerPos = '';
                    break;
            }
            $tableClass = trim($this->cObj->data['table_class']);
            $delimiter = trim($this->cObj->data['table_delimiter']);
            if ($delimiter) {
                $delimiter = chr((int)$delimiter);
            } else {
                $delimiter = '|';
            }
            $quotedInput = trim($this->cObj->data['table_enclosure']);
            if ($quotedInput) {
                $quotedInput = chr((int)$quotedInput);
            } else {
                $quotedInput = '';
            }
            // Generate id prefix for accessible header
            $headerScope = $headerPos === 'top' ? 'col' : 'row';
            $headerIdPrefix = $headerScope . $this->cObj->data['uid'] . '-';
            // Split into single lines (will become table-rows):
            $rows = GeneralUtility::trimExplode(LF, $content);
            reset($rows);
            // Find number of columns to render:
            $cols = \TYPO3\CMS\Core\Utility\MathUtility::forceIntegerInRange(
                $this->cObj->data['cols'] ? $this->cObj->data['cols'] : count(str_getcsv(current($rows), $delimiter, $quotedInput)),
                0,
                100
            );
            // Traverse rows (rendering the table here)
            $rCount = count($rows);
            foreach ($rows as $k => $v) {
                $cells = str_getcsv($v, $delimiter, $quotedInput);
                $newCells = [];
                for ($a = 0; $a < $cols; $a++) {
                    if (trim($cells[$a]) === '') {
                        $cells[$a] = ' ';
                    }
                    $cells[$a] = preg_replace('|<br */?>|i', LF, $cells[$a]);
                    if ($headerPos === 'top' && !$k || $headerPos === 'left' && !$a) {
                        $scope = ' scope="' . $headerScope . '"';
                        $scope .= ' id="' . $headerIdPrefix . ($headerScope === 'col' ? $a : $k) . '"';
                        $newCells[$a] = '<th' . $scope . '>' . $this->cObj->stdWrap($cells[$a], $conf['innerStdWrap.']) . '</th>';
                    } else {
                        if (empty($headerPos)) {
                            $accessibleHeader = '';
                        } else {
                            $accessibleHeader = ' headers="' . $headerIdPrefix . ($headerScope === 'col' ? $a : $k) . '"';
                        }
                        $newCells[$a] = '<td' . $accessibleHeader . '>' . $this->cObj->stdWrap($cells[$a], $conf['innerStdWrap.']) . '</td>';
                    }
                }
                $rows[$k] = '<tr>' . implode('', $newCells) . '</tr>';
            }
            $addTbody = 0;
            $tableContents = '';
            if ($caption) {
                $tableContents .= '
					<caption>' . $caption . '</caption>';
            }
            if ($headerPos === 'top' && $rows[0]) {
                $tableContents .= '<thead>' . $rows[0] . '</thead>';
                unset($rows[0]);
                $addTbody = 1;
            }
            if ($useTfoot) {
                $tableContents .= '<tfoot>' . $rows[$rCount - 1] . '</tfoot>';
                unset($rows[$rCount - 1]);
                $addTbody = 1;
            }
            $tmpTable = implode('', $rows);
            if ($addTbody) {
                $tmpTable = '<tbody>' . $tmpTable . '</tbody>';
            }
            $tableContents .= $tmpTable;
            // Set header type:
            $type = (int)$this->cObj->data['layout'];
            // Table tag params.
            $tableTagParams = [];
            $tableTagParams['class'] = 'contenttable contenttable-' . $type . ($tableClass ? ' contenttable-' . $tableClass : '');
            // Compile table output:
            $out = '<table ' . GeneralUtility::implodeAttributes($tableTagParams) . '>' . $tableContents . '</table>';
            // Return value
            return $out;
        }
    }

    /**
     * Returns an array containing width relations for $colCount columns.
     *
     * Tries to use "colRelations" setting given by TS.
     * uses "1:1" column relations by default.
     *
     * @param array $conf TS configuration for img
     * @param int $colCount number of columns
     * @return array
     */
    protected function getImgColumnRelations($conf, $colCount)
    {
        $relations = [];
        $equalRelations = array_fill(0, $colCount, 1);
        $colRelationsTypoScript = trim($this->cObj->stdWrap($conf['colRelations'], $conf['colRelations.']));
        if ($colRelationsTypoScript) {
            // Try to use column width relations given by TS
            $relationParts = explode(':', $colRelationsTypoScript);
            // Enough columns defined?
            if (count($relationParts) >= $colCount) {
                $out = [];
                for ($a = 0; $a < $colCount; $a++) {
                    $currentRelationValue = (int)$relationParts[$a];
                    if ($currentRelationValue >= 1) {
                        $out[$a] = $currentRelationValue;
                    } else {
                        GeneralUtility::devLog('colRelations used with a value smaller than 1 therefore colRelations setting is ignored.', $this->extKey, 2);
                        unset($out);
                        break;
                    }
                }
                if (max($out) / min($out) <= 10) {
                    $relations = $out;
                } else {
                    GeneralUtility::devLog(
                        'The difference in size between the largest and smallest colRelation was not within' .
                        ' a factor of ten therefore colRelations setting is ignored..',
                        $this->extKey,
                        2
                    );
                }
            }
        }
        return $relations ?: $equalRelations;
    }

    /**
     * Returns an array containing the image widths for an image row with $colCount columns.
     *
     * @param array $conf TS configuration of img
     * @param int $colCount number of columns
     * @param int $netW max usable width for images (without spaces and borders)
     * @return array
     */
    protected function getImgColumnWidths($conf, $colCount, $netW)
    {
        $columnWidths = [];
        $colRelations = $this->getImgColumnRelations($conf, $colCount);
        $accumWidth = 0;
        $accumDesiredWidth = 0;
        $relUnitCount = array_sum($colRelations);
        for ($a = 0; $a < $colCount; $a++) {
            // This much width is available for the remaining images in this row (int)
            $availableWidth = $netW - $accumWidth;
            // Theoretical width of resized image. (float)
            $desiredWidth = $netW / $relUnitCount * $colRelations[$a];
            // Add this width. $accumDesiredWidth becomes the desired horizontal position
            $accumDesiredWidth += $desiredWidth;
            // Calculate width by comparing actual and desired horizontal position.
            // this evenly distributes rounding errors across all images in this row.
            $suggestedWidth = round($accumDesiredWidth - $accumWidth);
            // finalImgWidth may not exceed $availableWidth
            $finalImgWidth = (int)min($availableWidth, $suggestedWidth);
            $accumWidth += $finalImgWidth;
            $columnWidths[$a] = $finalImgWidth;
        }
        return $columnWidths;
    }

    /**
     * Rendering the text w/ image content element, called from TypoScript (tt_content.textpic.20)
     *
     * @param string $content Content input. Not used, ignore.
     * @param array $conf TypoScript configuration. See TSRef "IMGTEXT". This function aims to be compatible.
     * @return string HTML output.
     */
    public function render_textpic($content, $conf)
    {
        // Look for hook before running default code for function
        if (method_exists($this, 'hookRequest') && ($hookObj = $this->hookRequest('render_textpic'))) {
            return $hookObj->render_textpic($content, $conf);
        }
        $renderMethod = $this->cObj->stdWrap($conf['renderMethod'], $conf['renderMethod.']);
        // Render using the default IMGTEXT code (table-based)
        if (!$renderMethod || $renderMethod === 'table') {
            return $this->cObj->cObjGetSingle('IMGTEXT', $conf);
        }

        $typoScriptService = GeneralUtility::makeInstance(TypoScriptService::class);

        $restoreRegisters = false;
        if (isset($conf['preRenderRegisters.'])) {
            $restoreRegisters = true;
            $this->cObj->cObjGetSingle('LOAD_REGISTER', $conf['preRenderRegisters.']);
        }
        // Specific configuration for the chosen rendering method
        if (is_array($conf['rendering.'][$renderMethod . '.'])) {
            $conf = array_replace_recursive($conf, $conf['rendering.'][$renderMethod . '.']);
        }
        // Image or Text with Image?
        if (is_array($conf['text.'])) {
            $content = $this->cObj->stdWrap($this->cObj->cObjGet($conf['text.'], 'text.'), $conf['text.']);
        }
        $imgList = trim($this->cObj->stdWrap($conf['imgList'], $conf['imgList.']));
        if (!$imgList) {
            // No images, that's easy
            if ($restoreRegisters) {
                $this->cObj->cObjGetSingle('RESTORE_REGISTER', []);
            }
            return $content;
        }
        $imgs = GeneralUtility::trimExplode(',', $imgList, true);
        if (empty($imgs)) {
            // The imgList was not empty but did only contain empty values
            if ($restoreRegisters) {
                $this->cObj->cObjGetSingle('RESTORE_REGISTER', []);
            }
            return $content;
        }
        $imgStart = (int)$this->cObj->stdWrap($conf['imgStart'], $conf['imgStart.']);
        $imgCount = count($imgs) - $imgStart;
        $imgMax = (int)$this->cObj->stdWrap($conf['imgMax'], $conf['imgMax.']);
        if ($imgMax) {
            $imgCount = MathUtility::forceIntegerInRange($imgCount, 0, $imgMax);
        }
        $imgPath = $this->cObj->stdWrap($conf['imgPath'], $conf['imgPath.']);
        // Does we need to render a "global caption" (below the whole image block)?
        $renderGlobalCaption = !$conf['captionSplit'] && !$conf['imageTextSplit'] && is_array($conf['caption.']);
        if ($imgCount == 1) {
            // If we just have one image, the caption relates to the image, so it is not "global"
            $renderGlobalCaption = false;
        }
        $imgListContainsReferenceUids = (bool)(isset($conf['imgListContainsReferenceUids.'])
            ? $this->cObj->stdWrap($conf['imgListContainsReferenceUids'], $conf['imgListContainsReferenceUids.'])
            : $conf['imgListContainsReferenceUids']);
        // Use the calculated information (amount of images, if global caption is wanted) to choose a different rendering method for the images-block
        $this->frontendController->register['imageCount'] = $imgCount;
        $this->frontendController->register['renderGlobalCaption'] = $renderGlobalCaption;
        $fallbackRenderMethod = '';
        if ($conf['fallbackRendering']) {
            $fallbackRenderMethod = $this->cObj->cObjGetSingle($conf['fallbackRendering'], $conf['fallbackRendering.']);
        }
        if ($fallbackRenderMethod && is_array($conf['rendering.'][$fallbackRenderMethod . '.'])) {
            $conf = array_replace_recursive($conf, $conf['rendering.'][$fallbackRenderMethod . '.']);
        }
        // Set the accessibility mode which uses a different type of markup, used 4.7+
        $accessibilityMode = false;
        if (strpos(strtolower($renderMethod), 'caption') || strpos(strtolower($fallbackRenderMethod), 'caption')) {
            $accessibilityMode = true;
        }
        // Global caption
        $globalCaption = '';
        if ($renderGlobalCaption) {
            $globalCaption = $this->cObj->stdWrap($this->cObj->cObjGet($conf['caption.'], 'caption.'), $conf['caption.']);
        }
        // Positioning
        $position = $this->cObj->stdWrap($conf['textPos'], $conf['textPos.']);
        // 0,1,2 = center,right,left
        $imagePosition = $position & 7;
        // 0,8,16,24 (above,below,intext,intext-wrap)
        $contentPosition = $position & 24;
        $textMargin = (int)$this->cObj->stdWrap($conf['textMargin'], $conf['textMargin.']);
        if (!$conf['textMargin_outOfText'] && $contentPosition < 16) {
            $textMargin = 0;
        }
        $colspacing = (int)$this->cObj->stdWrap($conf['colSpace'], $conf['colSpace.']);
        $border = (int)$this->cObj->stdWrap($conf['border'], $conf['border.']) ? 1 : 0;
        $borderThickness = (int)$this->cObj->stdWrap($conf['borderThick'], $conf['borderThick.']);
        $borderThickness = $borderThickness ?: 1;
        $borderSpace = $conf['borderSpace'] && $border ? (int)$conf['borderSpace'] : 0;
        // Generate cols
        $cols = (int)$this->cObj->stdWrap($conf['cols'], $conf['cols.']);
        $colCount = $cols > 1 ? $cols : 1;
        if ($colCount > $imgCount) {
            $colCount = $imgCount;
        }
        $rowCount = ceil($imgCount / $colCount);
        // Generate rows
        $rows = (int)$this->cObj->stdWrap($conf['rows'], $conf['rows.']);
        if ($rows > 1) {
            $rowCount = $rows;
            if ($rowCount > $imgCount) {
                $rowCount = $imgCount;
            }
            $colCount = $rowCount > 1 ? ceil($imgCount / $rowCount) : $imgCount;
        }
        // Max Width
        $maxW = (int)$this->cObj->stdWrap($conf['maxW'], $conf['maxW.']);
        $maxWInText = (int)$this->cObj->stdWrap($conf['maxWInText'], $conf['maxWInText.']);
        $fiftyPercentWidthInText = round($maxW / 100 * 50);
        // in Text
        if ($contentPosition >= 16) {
            if (!$maxWInText) {
                // If maxWInText is not set, it's calculated to the 50% of the max
                $maxW = $fiftyPercentWidthInText;
            } else {
                $maxW = $maxWInText;
            }
        }
        // max usuable width for images (without spacers and borders)
        $netW = $maxW - $colspacing * ($colCount - 1) - $colCount * $border * ($borderThickness + $borderSpace) * 2;
        // Specify the maximum width for each column
        $columnWidths = $this->getImgColumnWidths($conf, $colCount, $netW);
        $image_frames = (int)$this->cObj->stdWrap($conf['image_frames.']['key'], $conf['image_frames.']['key.']);
        // EqualHeight
        $equalHeight = (int)$this->cObj->stdWrap($conf['equalH'], $conf['equalH.']);
        if ($equalHeight) {
            $relations_cols = [];
            // contains the individual width of all images after scaling to $equalHeight
            $imgWidths = [];
            for ($a = 0; $a < $imgCount; $a++) {
                $imgKey = $a + $imgStart;

                /** @var $file \TYPO3\CMS\Core\Resource\File */
                if (MathUtility::canBeInterpretedAsInteger($imgs[$imgKey])) {
                    if ($imgListContainsReferenceUids) {
                        $file = $this->getResourceFactory()->getFileReferenceObject((int)$imgs[$imgKey])->getOriginalFile();
                    } else {
                        $file = $this->getResourceFactory()->getFileObject((int)$imgs[$imgKey]);
                    }
                } else {
                    $file = $this->getResourceFactory()->getFileObjectFromCombinedIdentifier($imgPath . $imgs[$imgKey]);
                }

                // relationship between the original height and the wished height
                $rel = $file->getProperty('height') / $equalHeight;
                // if relations is zero, then the addition of this value is omitted as the image is not expected to display because of some error.
                if ($rel) {
                    $imgWidths[$a] = $file->getProperty('width') / $rel;
                    // counts the total width of the row with the new height taken into consideration.
                    $relations_cols[(int)floor($a / $colCount)] += $imgWidths[$a];
                }
            }
        }
        // Fetches pictures
        $splitArr = [];
        $splitArr['imgObjNum'] = $conf['imgObjNum'];
        $splitArr = $typoScriptService->explodeConfigurationForOptionSplit($splitArr, (int)$imgCount);
        // Contains the width of every image row
        $imageRowsFinalWidths = [];
        // Array index of $imgsTag will be the same as in $imgs, but $imgsTag only contains the images that are actually shown
        $imgsTag = [];
        $origImages = [];
        $rowIdx = 0;
        for ($a = 0; $a < $imgCount; $a++) {
            $imgKey = $a + $imgStart;
            // If the image cannot be interpreted as integer (therefore filename and no FAL id), add the image path
            if (MathUtility::canBeInterpretedAsInteger($imgs[$imgKey])) {
                $totalImagePath = (int)$imgs[$imgKey];
                $this->initializeCurrentFileInContentObjectRenderer($totalImagePath, $imgListContainsReferenceUids);
            } else {
                $totalImagePath = $imgPath . $imgs[$imgKey];
            }
            // register IMG_NUM is kept for backwards compatibility
            $this->frontendController->register['IMAGE_NUM'] = $imgKey;
            $this->frontendController->register['IMAGE_NUM_CURRENT'] = $imgKey;
            $this->frontendController->register['ORIG_FILENAME'] = $totalImagePath;
            $this->cObj->data[$this->cObj->currentValKey] = $totalImagePath;
            $imgObjNum = (int)$splitArr[$a]['imgObjNum'];
            $imgConf = $conf[$imgObjNum . '.'];
            if ($equalHeight) {
                if ($a % $colCount == 0) {
                    // A new row starts
                    // Reset accumulated net width
                    $accumWidth = 0;
                    // Reset accumulated desired width
                    $accumDesiredWidth = 0;
                    $rowTotalMaxW = $relations_cols[$rowIdx];
                    if ($rowTotalMaxW > $netW && $netW > 0) {
                        $scale = $rowTotalMaxW / $netW;
                    } else {
                        $scale = 1;
                    }
                    $desiredHeight = $equalHeight / $scale;
                    $rowIdx++;
                }
                // This much width is available for the remaining images in this row (int)
                $availableWidth = $netW - $accumWidth;
                // Theoretical width of resized image. (float)
                $desiredWidth = $imgWidths[$a] / $scale;
                // Add this width. $accumDesiredWidth becomes the desired horizontal position
                $accumDesiredWidth += $desiredWidth;
                // Calculate width by comparing actual and desired horizontal position.
                // this evenly distributes rounding errors across all images in this row.
                $suggestedWidth = round($accumDesiredWidth - $accumWidth);
                // finalImgWidth may not exceed $availableWidth
                $finalImgWidth = (int)min($availableWidth, $suggestedWidth);
                $accumWidth += $finalImgWidth;
                $imgConf['file.']['width'] = $finalImgWidth;
                $imgConf['file.']['height'] = round($desiredHeight);
                // other stuff will be calculated accordingly:
                unset($imgConf['file.']['maxW']);
                unset($imgConf['file.']['maxH']);
                unset($imgConf['file.']['minW']);
                unset($imgConf['file.']['minH']);
                unset($imgConf['file.']['width.']);
                unset($imgConf['file.']['maxW.']);
                unset($imgConf['file.']['maxH.']);
                unset($imgConf['file.']['minW.']);
                unset($imgConf['file.']['minH.']);
            } else {
                $imgConf['file.']['maxW'] = $columnWidths[$a % $colCount];
            }
            $titleInLink = $this->cObj->stdWrap($imgConf['titleInLink'], $imgConf['titleInLink.']);
            $titleInLinkAndImg = $this->cObj->stdWrap($imgConf['titleInLinkAndImg'], $imgConf['titleInLinkAndImg.']);
            $oldATagParms = $this->frontendController->ATagParams;
            if ($titleInLink) {
                // Title in A-tag instead of IMG-tag
                $titleText = trim($this->cObj->stdWrap($imgConf['titleText'], $imgConf['titleText.']));
                if ($titleText) {
                    // This will be used by the IMAGE call later:
                    $this->frontendController->ATagParams .= ' title="' . htmlspecialchars($titleText) . '"';
                }
            }

            // hook to allow custom rendering of a single element
            // This hook is needed to render alternative content which is not just a plain image,
            // like showing other FAL content, like videos, things which need to be embedded as JS, ...
            $customRendering = '';
            if (isset($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['css_styled_content']['pi1_hooks']['render_singleMediaElement'])
                && is_array($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['css_styled_content']['pi1_hooks']['render_singleMediaElement'])) {
                $hookParameters = [
                    'file' => $totalImagePath,
                    'imageConfiguration' => $imgConf
                ];

                foreach ($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['css_styled_content']['pi1_hooks']['render_singleMediaElement'] as $reference) {
                    $customRendering = \TYPO3\CMS\Core\Utility\GeneralUtility::callUserFunction($reference, $hookParameters, $this);
                    // if there is a renderer found, don't run through the other renderers
                    if (!empty($customRendering)) {
                        break;
                    }
                }
            }

            if (!empty($customRendering)) {
                $imgsTag[$imgKey] = $customRendering;
            } elseif ($imgConf || $imgConf['file']) {
                if ($image_frames) {
                    if (is_array($conf['image_frames.'][$image_frames . '.'])) {
                        $imgConf['file.']['m.'] = $conf['image_frames.'][$image_frames . '.'];
                    }
                }
                if ($titleInLink && !$titleInLinkAndImg) {
                    // Check if the image will be linked
                    $link = $this->cObj->imageLinkWrap('', $this->cObj->getCurrentFile() ?: $totalImagePath, $imgConf['imageLinkWrap.']);
                    if ($link) {
                        // Title in A-tag only (set above: ATagParams), not in IMG-tag
                        unset($imgConf['titleText']);
                        unset($imgConf['titleText.']);
                        $imgConf['emptyTitleHandling'] = 'removeAttr';
                    }
                }
                $imgsTag[$imgKey] = $this->cObj->cObjGetSingle('IMAGE', $imgConf);
            } else {
                // currentValKey !!!
                $imgsTag[$imgKey] = $this->cObj->cObjGetSingle('IMAGE', ['file' => $totalImagePath]);
            }
            // Restore our ATagParams
            $this->frontendController->ATagParams = $oldATagParms;
            // Store the original filepath
            $origImages[$imgKey] = $this->frontendController->lastImageInfo;
            if ($this->frontendController->lastImageInfo[0] == 0) {
                $imageRowsFinalWidths[(int)floor($a / $colCount)] += $this->cObj->data['imagewidth'];
            } else {
                $imageRowsFinalWidths[(int)floor($a / $colCount)] += $this->frontendController->lastImageInfo[0];
            }
        }
        // How much space will the image-block occupy?
        $imageBlockWidth = max($imageRowsFinalWidths) + $colspacing * ($colCount - 1) + $colCount * $border * ($borderSpace + $borderThickness) * 2;
        $this->frontendController->register['rowwidth'] = $imageBlockWidth;
        $this->frontendController->register['rowWidthPlusTextMargin'] = $imageBlockWidth + $textMargin;
        // Edit icons:
        if (!is_array($conf['editIcons.'])) {
            $conf['editIcons.'] = [];
        }
        $editIconsHTML = $conf['editIcons'] && $this->frontendController->beUserLogin ? $this->cObj->editIcons('', $conf['editIcons'], $conf['editIcons.']) : '';
        $imageWrapCols = 1;
        // User wants to separate the rows, but only do that if we do have rows
        $separateRows = $this->cObj->stdWrap($conf['separateRows'], $conf['separateRows.']);
        if ($rowCount == 1) {
            $separateRows = 0;
        }
        if ($accessibilityMode) {
            $imagesInColumns = round($imgCount / ($rowCount * $colCount), 0, PHP_ROUND_HALF_UP);
            // Apply optionSplit to the list of classes that we want to add to each column
            $addClassesCol = $conf['addClassesCol'];
            if (isset($conf['addClassesCol.'])) {
                $addClassesCol = $this->cObj->stdWrap($addClassesCol, $conf['addClassesCol.']);
            }
            $addClassesColConf = $typoScriptService->explodeConfigurationForOptionSplit(['addClassesCol' => $addClassesCol], $colCount);
            // Apply optionSplit to the list of classes that we want to add to each image
            $addClassesImage = $conf['addClassesImage'];
            if (isset($conf['addClassesImage.'])) {
                $addClassesImage = $this->cObj->stdWrap($addClassesImage, $conf['addClassesImage.']);
            }
            $addClassesImageConf = $typoScriptService->explodeConfigurationForOptionSplit(['addClassesImage' => $addClassesImage], $imagesInColumns);
            $rows = [];
            $currentImage = 0;
            // Iterate over the rows
            for ($rowCounter = 1; $rowCounter <= $rowCount; $rowCounter++) {
                $rowColumns = [];
                // Iterate over the columns
                for ($columnCounter = 1; $columnCounter <= $colCount; $columnCounter++) {
                    $columnImages = [];
                    // Iterate over the amount of images allowed in a column
                    for ($imagesCounter = 1; $imagesCounter <= $imagesInColumns; $imagesCounter++) {
                        $image = null;
                        $splitCaption = null;
                        $imageMarkers = ($captionMarkers = []);
                        $single = '&nbsp;';
                        // Set the key of the current image
                        $imageKey = $currentImage + $imgStart;
                        // Register IMAGE_NUM_CURRENT for the caption
                        $this->frontendController->register['IMAGE_NUM_CURRENT'] = $imageKey;
                        $this->cObj->data[$this->cObj->currentValKey] = $origImages[$imageKey]['origFile'];
                        if (MathUtility::canBeInterpretedAsInteger($imgs[$imageKey])) {
                            $this->initializeCurrentFileInContentObjectRenderer((int)$imgs[$imageKey], $imgListContainsReferenceUids);
                        } elseif (!isset($imgs[$imageKey])) {
                            // If not all columns in the last row are filled $imageKey gets larger than
                            // the array. In that case we clear the current file.
                            $this->cObj->setCurrentFile(null);
                        }
                        // Get the image if not an empty cell
                        if (isset($imgsTag[$imageKey])) {
                            $image = $this->cObj->stdWrap($imgsTag[$imageKey], $conf['imgTagStdWrap.']);
                            // Add the edit icons
                            if ($editIconsHTML) {
                                $image .= $this->cObj->stdWrap($editIconsHTML, $conf['editIconsStdWrap.']);
                            }
                            // Wrap the single image
                            $single = $this->cObj->stdWrap($image, $conf['singleStdWrap.']);
                            // Get the caption
                            if (!$renderGlobalCaption) {
                                $imageMarkers['caption'] = $this->cObj->stdWrap($this->cObj->cObjGet($conf['caption.'], 'caption.'), $conf['caption.']);
                                $imageMarkers['caption'] = $this->templateService->substituteMarkerArray($imageMarkers['caption'], $captionMarkers, '###|###', 1, 1);
                            }
                            if ($addClassesImageConf[$imagesCounter - 1]['addClassesImage']) {
                                $imageMarkers['classes'] = ' ' . $addClassesImageConf[$imagesCounter - 1]['addClassesImage'];
                            }
                        }
                        $columnImages[] = $this->templateService->substituteMarkerArray($single, $imageMarkers, '###|###', 1, 1);
                        $currentImage++;
                    }
                    $rowColumn = $this->cObj->stdWrap(implode(LF, $columnImages), $conf['columnStdWrap.']);
                    // Start filling the markers for columnStdWrap
                    $columnMarkers = [];
                    if ($addClassesColConf[$columnCounter - 1]['addClassesCol']) {
                        $columnMarkers['classes'] = ' ' . $addClassesColConf[$columnCounter - 1]['addClassesCol'];
                    }
                    $rowColumns[] = $this->templateService->substituteMarkerArray($rowColumn, $columnMarkers, '###|###', 1, 1);
                }
                if ($rowCounter == $rowCount) {
                    $rowConfiguration = $conf['lastRowStdWrap.'];
                } else {
                    $rowConfiguration = $conf['rowStdWrap.'];
                }
                $row = $this->cObj->stdWrap(implode(LF, $rowColumns), $rowConfiguration);
                // Start filling the markers for columnStdWrap
                $rowMarkers = [];
                $rows[] = $this->templateService->substituteMarkerArray($row, $rowMarkers, '###|###', 1, 1);
            }
            $images = $this->cObj->stdWrap(implode(LF, $rows), $conf['allStdWrap.']);
            // Start filling the markers for allStdWrap
            $allMarkers = [];
            $classes = [];
            // Add the global caption to the allStdWrap marker array if set
            if ($globalCaption) {
                $allMarkers['caption'] = $globalCaption;
            }
            // Set the margin for image + text, no wrap always to avoid multiple stylesheets
            $noWrapMargin = (int)(($maxWInText ? $maxWInText : $fiftyPercentWidthInText) + (int)$this->cObj->stdWrap($conf['textMargin'], $conf['textMargin.']));
            $this->addPageStyle('.csc-textpic-intext-right-nowrap .csc-textpic-text', 'margin-right: ' . $noWrapMargin . 'px;');
            $this->addPageStyle('.csc-textpic-intext-left-nowrap .csc-textpic-text', 'margin-left: ' . $noWrapMargin . 'px;');
            // Beside Text where the image block width is not equal to maxW
            if ($contentPosition == 24 && $maxW != $imageBlockWidth) {
                $noWrapMargin = $imageBlockWidth + $textMargin;
                // Beside Text, Right
                if ($imagePosition == 1) {
                    $this->addPageStyle('.csc-textpic-intext-right-nowrap-' . $noWrapMargin . ' .csc-textpic-text', 'margin-right: ' . $noWrapMargin . 'px;');
                    $classes[] = 'csc-textpic-intext-right-nowrap-' . $noWrapMargin;
                } elseif ($imagePosition == 2) {
                    $this->addPageStyle('.csc-textpic-intext-left-nowrap-' . $noWrapMargin . ' .csc-textpic-text', 'margin-left: ' . $noWrapMargin . 'px;');
                    $classes[] = 'csc-textpic-intext-left-nowrap-' . $noWrapMargin;
                }
            }
            // Add the border class if needed
            if ($border) {
                $classes[] = $conf['borderClass'] ?: 'csc-textpic-border';
            }
            // Add the class for equal height if needed
            if ($equalHeight) {
                $classes[] = 'csc-textpic-equalheight';
            }
            $addClasses = $this->cObj->stdWrap($conf['addClasses'], $conf['addClasses.']);
            if ($addClasses) {
                $classes[] = $addClasses;
            }
            if ($classes) {
                $class = ' ' . implode(' ', $classes);
            }
            // Fill the markers for the allStdWrap
            $images = $this->templateService->substituteMarkerArray($images, $allMarkers, '###|###', 1, 1);
        } else {
            // Apply optionSplit to the list of classes that we want to add to each image
            $addClassesImage = $conf['addClassesImage'];
            if (isset($conf['addClassesImage.'])) {
                $addClassesImage = $this->cObj->stdWrap($addClassesImage, $conf['addClassesImage.']);
            }
            $addClassesImageConf = $typoScriptService->explodeConfigurationForOptionSplit(['addClassesImage' => $addClassesImage], $colCount);
            // Render the images
            $images = '';
            for ($c = 0; $c < $imageWrapCols; $c++) {
                $tmpColspacing = $colspacing;
                if ($c == $imageWrapCols - 1 && $imagePosition == 2 || $c == 0 && ($imagePosition == 1 || $imagePosition == 0)) {
                    // Do not add spacing after column if we are first column (left) or last column (center/right)
                    $tmpColspacing = 0;
                }
                $thisImages = '';
                $allRows = '';
                $maxImageSpace = 0;
                $imgsTagCount = count($imgsTag);
                for ($i = $c; $i < $imgsTagCount; $i = $i + $imageWrapCols) {
                    $imgKey = $i + $imgStart;
                    $colPos = $i % $colCount;
                    if ($separateRows && $colPos == 0) {
                        $thisRow = '';
                    }
                    // Render one image
                    if ($origImages[$imgKey][0] == 0) {
                        $imageSpace = $this->cObj->data['imagewidth'] + $border * ($borderSpace + $borderThickness) * 2;
                    } else {
                        $imageSpace = $origImages[$imgKey][0] + $border * ($borderSpace + $borderThickness) * 2;
                    }
                    $this->frontendController->register['IMAGE_NUM'] = $imgKey;
                    $this->frontendController->register['IMAGE_NUM_CURRENT'] = $imgKey;
                    $this->frontendController->register['ORIG_FILENAME'] = $origImages[$imgKey]['origFile'];
                    $this->frontendController->register['imagewidth'] = $origImages[$imgKey][0];
                    $this->frontendController->register['imagespace'] = $imageSpace;
                    $this->frontendController->register['imageheight'] = $origImages[$imgKey][1];
                    if (MathUtility::canBeInterpretedAsInteger($imgs[$imgKey])) {
                        $this->initializeCurrentFileInContentObjectRenderer(intval($imgs[$imgKey]), $imgListContainsReferenceUids);
                    }
                    if ($imageSpace > $maxImageSpace) {
                        $maxImageSpace = $imageSpace;
                    }
                    $thisImage = '';
                    $thisImage .= $this->cObj->stdWrap($imgsTag[$imgKey], $conf['imgTagStdWrap.']);
                    if (!$renderGlobalCaption) {
                        $thisImage .= $this->cObj->stdWrap($this->cObj->cObjGet($conf['caption.'], 'caption.'), $conf['caption.']);
                    }
                    if ($editIconsHTML) {
                        $thisImage .= $this->cObj->stdWrap($editIconsHTML, $conf['editIconsStdWrap.']);
                    }
                    $thisImage = $this->cObj->stdWrap($thisImage, $conf['oneImageStdWrap.']);
                    $classes = '';
                    if ($addClassesImageConf[$colPos]['addClassesImage']) {
                        $classes = ' ' . $addClassesImageConf[$colPos]['addClassesImage'];
                    }
                    $thisImage = str_replace('###CLASSES###', $classes, $thisImage);
                    if ($separateRows) {
                        $thisRow .= $thisImage;
                    } else {
                        $allRows .= $thisImage;
                    }
                    $this->frontendController->register['columnwidth'] = $maxImageSpace + $tmpColspacing;
                    // Close this row at the end (colCount), or the last row at the final end
                    if ($separateRows && $i + 1 === count($imgsTag)) {
                        // Close the very last row with either normal configuration or lastRow stdWrap
                        $allRows .= $this->cObj->stdWrap(
                            $thisRow,
                            is_array($conf['imageLastRowStdWrap.']) ? $conf['imageLastRowStdWrap.'] : $conf['imageRowStdWrap.']
                        );
                    } elseif ($separateRows && $colPos == $colCount - 1) {
                        $allRows .= $this->cObj->stdWrap($thisRow, $conf['imageRowStdWrap.']);
                    }
                }
                $thisImages .= $allRows;
                $images .= $thisImages;
            }
            // Add the global caption, if not split
            if ($globalCaption) {
                $images .= $globalCaption;
            }
            // CSS-classes
            $borderClass = '';
            if ($border) {
                $borderClass = $conf['borderClass'] ?: 'csc-textpic-border';
            }
            // Multiple classes with all properties, to be styled in CSS
            $class = '';
            $class .= $borderClass ? ' ' . $borderClass : '';
            $class .= $equalHeight ? ' csc-textpic-equalheight' : '';
            $addClasses = $this->cObj->stdWrap($conf['addClasses'], $conf['addClasses.']);
            $class .= $addClasses ? ' ' . $addClasses : '';
            // Do we need a width in our wrap around images?
            $imgWrapWidth = '';
            if ($position == 0 || $position == 8) {
                // For 'center' we always need a width: without one, the margin:auto trick won't work
                $imgWrapWidth = $imageBlockWidth;
            }
            if ($rowCount > 1) {
                // For multiple rows we also need a width, so that the images will wrap
                $imgWrapWidth = $imageBlockWidth;
            }
            if ($globalCaption) {
                // If we have a global caption, we need the width so that the caption will wrap
                $imgWrapWidth = $imageBlockWidth;
            }
            // Wrap around the whole image block
            $this->frontendController->register['totalwidth'] = $imgWrapWidth;
            if ($imgWrapWidth) {
                $images = $this->cObj->stdWrap($images, $conf['imageStdWrap.']);
            } else {
                $images = $this->cObj->stdWrap($images, $conf['imageStdWrapNoWidth.']);
            }
        }

        $output = str_replace(
            [
                '###TEXT###',
                '###IMAGES###',
                '###CLASSES###'
            ],
            [
                $content,
                $images,
                $class
            ],
            $this->cObj->cObjGetSingle($conf['layout'], $conf['layout.'])
        );

        if ($restoreRegisters) {
            $this->cObj->cObjGetSingle('RESTORE_REGISTER', []);
        }

        return $output;
    }

    /**
     * Loads the file / file reference object and sets it in the
     * currentFile property of the ContentObjectRenderer.
     *
     * This makes the file data available during image rendering.
     *
     * @param int $fileUid The UID of the file or file reference (depending on $treatAsReference) that should be loaded.
     * @param bool $treatAsReference If TRUE the given UID will be used to load a file reference otherwise it will be used to load a regular file.
     */
    protected function initializeCurrentFileInContentObjectRenderer($fileUid, $treatAsReference)
    {
        $resourceFactory = \TYPO3\CMS\Core\Resource\ResourceFactory::getInstance();
        if ($treatAsReference) {
            $imageFile = $resourceFactory->getFileReferenceObject($fileUid);
        } else {
            $imageFile = $resourceFactory->getFileObject($fileUid);
        }
        $this->cObj->setCurrentFile($imageFile);
    }

    /***********************************
     * Rendering of Content Element properties
     ***********************************/

    /**
     * Add top or bottom margin to the content element
     *
     * Constructs and adds a class to the content element. This class selector
     * and its declaration are added to the specific page styles.
     *
     * @param string $content Content input. Not used, ignore.
     * @param array $configuration TypoScript configuration
     * @return string The class name
     */
    public function renderSpace($content, array $configuration)
    {
        // Look for hook before running default code for function
        if (method_exists($this, 'hookRequest') && ($hookObject = $this->hookRequest('renderSpace'))) {
            return $hookObject->renderSpace($content, $configuration);
        }
        if (isset($configuration['space']) && in_array($configuration['space'], ['before', 'after'])) {
            $constant = (int)$configuration['constant'];
            if ($configuration['space'] === 'before') {
                $value = $constant + $this->cObj->data['spaceBefore'];
                $declaration = 'margin-top: ' . $value . 'px !important;';
            } else {
                $value = $constant + $this->cObj->data['spaceAfter'];
                $declaration = 'margin-bottom: ' . $value . 'px !important;';
            }
            if (!empty($value)) {
                if ($configuration['classStdWrap.']) {
                    $className = $this->cObj->stdWrap($value, $configuration['classStdWrap.']);
                } else {
                    $className = $value;
                }
                $selector = '.' . trim($className);
                $this->addPageStyle($selector, $declaration);
                return $className;
            }
        }
    }

    /************************************
     * Helper functions
     ************************************/

    /**
     * Returns table attributes for tables. Not used anymore.
     *
     * @param array $conf TypoScript configuration array
     * @param int $type The "layout" type
     * @return array Array with attributes inside.
     */
    public function getTableAttributes($conf, $type)
    {
        // Initializing:
        $tableTagParams_conf = $conf['tableParams_' . $type . '.'];
        $border = $this->cObj->data['table_border'] ? (int)$this->cObj->data['table_border'] : $tableTagParams_conf['border'];
        $cellSpacing = $this->cObj->data['table_cellspacing'] ? (int)$this->cObj->data['table_cellspacing'] : $tableTagParams_conf['cellspacing'];
        $cellPadding = $this->cObj->data['table_cellpadding'] ? (int)$this->cObj->data['table_cellpadding'] : $tableTagParams_conf['cellpadding'];
        $summary = trim(htmlspecialchars($this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'acctables_summary')));
        // Create table attributes and classes array:
        $tableTagParams = ($classes = []);
        // Table attributes for all doctypes except HTML5
        if ($this->frontendController->config['config']['doctype'] !== 'html5') {
            $tableTagParams['border'] = $border;
            $tableTagParams['cellspacing'] = $cellSpacing;
            $tableTagParams['cellpadding'] = $cellPadding;
            if ($summary) {
                $tableTagParams['summary'] = $summary;
            }
        } else {
            if ($border) {
                // Border property has changed, now with class
                $borderClass = 'contenttable-border-' . $border;
                $borderDeclaration = 'border-width: ' . $border . 'px; border-style: solid;';
                $this->addPageStyle('.' . $borderClass, $borderDeclaration);
                $classes[] = $borderClass;
            }
            if ($cellSpacing) {
                // Border attribute for HTML5 is 1 when there is cell spacing
                $tableTagParams['border'] = 1;
                // Use CSS3 border-spacing in class to have cell spacing
                $cellSpacingClass = 'contenttable-cellspacing-' . $cellSpacing;
                $cellSpacingDeclaration = 'border-spacing: ' . $cellSpacing . 'px;';
                $this->addPageStyle('.' . $cellSpacingClass, $cellSpacingDeclaration);
                $classes[] = $cellSpacingClass;
            }
            if ($cellPadding) {
                // Cell padding property has changed, now with class
                $cellPaddingClass = 'contenttable-cellpadding-' . $cellPadding;
                $cellSpacingSelector = '.' . $cellPaddingClass . ' td, .' . $cellPaddingClass . ' th';
                $cellPaddingDeclaration = 'padding: ' . $cellPadding . 'px;';
                $this->addPageStyle($cellSpacingSelector, $cellPaddingDeclaration);
                $classes[] = $cellPaddingClass;
            }
        }
        // Background color is class
        if (isset($conf['color.'][$this->cObj->data['table_bgColor']]) && !empty($conf['color.'][$this->cObj->data['table_bgColor']])) {
            $classes[] = 'contenttable-color-' . $this->cObj->data['table_bgColor'];
        }
        if (!empty($classes)) {
            $tableTagParams['class'] = ' ' . implode(' ', $classes);
        }
        // Return result:
        return $tableTagParams;
    }

    /**
     * Add a style to the page, specific for this page
     *
     * The selector can be a contextual selector, like '#id .class p'
     * The presence of the selector is checked to avoid multiple entries of the
     * same selector.
     *
     * @param string $selector The selector
     * @param string $declaration The declaration
     */
    protected function addPageStyle($selector, $declaration)
    {
        if (!isset($this->frontendController->tmpl->setup['plugin.']['tx_cssstyledcontent.']['_CSS_PAGE_STYLE'])) {
            $this->frontendController->tmpl->setup['plugin.']['tx_cssstyledcontent.']['_CSS_PAGE_STYLE'] = [];
        }
        if (!isset($this->frontendController->tmpl->setup['plugin.']['tx_cssstyledcontent.']['_CSS_PAGE_STYLE'][$selector])) {
            $this->frontendController->tmpl->setup['plugin.']['tx_cssstyledcontent.']['_CSS_PAGE_STYLE'][$selector] = TAB . $selector . ' { ' . $declaration . ' }';
        }
    }

    /**
     * Returns an object reference to the hook object if any
     *
     * @param string $functionName Name of the function you want to call / hook key
     * @return object|NULL Hook object, if any. Otherwise NULL.
     */
    public function hookRequest($functionName)
    {
        // Hook: menuConfig_preProcessModMenu
        if ($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['css_styled_content']['pi1_hooks'][$functionName]) {
            $hookObj = GeneralUtility::getUserObj($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['css_styled_content']['pi1_hooks'][$functionName]);
            if (method_exists($hookObj, $functionName)) {
                $hookObj->pObj = $this;
                return $hookObj;
            }
        }
    }

    /**
     * Get the ResourceFactory
     *
     * @return \TYPO3\CMS\Core\Resource\ResourceFactory
     */
    protected function getResourceFactory()
    {
        return \TYPO3\CMS\Core\Resource\ResourceFactory::getInstance();
    }
}
