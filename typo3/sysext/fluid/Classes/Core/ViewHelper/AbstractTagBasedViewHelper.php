<?php
namespace TYPO3\CMS\Fluid\Core\ViewHelper;

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

/**
 * Tag based view helper.
 * Sould be used as the base class for all view helpers which output simple tags, as it provides some
 * convenience methods to register default attributes, ...
 *
 * @api
 */
abstract class AbstractTagBasedViewHelper extends AbstractViewHelper
{
    /**
     * Names of all registered tag attributes
     *
     * @var array
     */
    private static $tagAttributes = [];

    /**
     * name of the tag to be created by this view helper
     *
     * @var string
     * @api
     */
    protected $tagName = 'div';

    /**
     * @var \TYPO3Fluid\Fluid\Core\ViewHelper\TagBuilder
     */
    protected $tag;

    /**
     * @var bool
     */
    protected $escapeOutput = false;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->tag = new \TYPO3Fluid\Fluid\Core\ViewHelper\TagBuilder();
    }

    /**
     * Constructor
     *
     * @api
     */
    public function initializeArguments()
    {
        $this->registerArgument('additionalAttributes', 'array', 'Additional tag attributes. They will be added directly to the resulting HTML tag.', false);
        $this->registerArgument('data', 'array', 'Additional data-* attributes. They will each be added with a "data-" prefix.', false);
        parent::initializeArguments();
    }

    /**
     * Sets the tag name to $this->tagName.
     * Additionally, sets all tag attributes which were registered in
     * $this->tagAttributes and additionalArguments.
     *
     * Will be invoked just before the render method.
     *
     * @api
     */
    public function initialize()
    {
        parent::initialize();
        $this->tag->reset();
        $this->tag->setTagName($this->tagName);
        if ($this->hasArgument('additionalAttributes') && is_array($this->arguments['additionalAttributes'])) {
            $this->tag->addAttributes($this->arguments['additionalAttributes']);
        }

        if ($this->hasArgument('data') && is_array($this->arguments['data'])) {
            foreach ($this->arguments['data'] as $dataAttributeKey => $dataAttributeValue) {
                $this->tag->addAttribute('data-' . $dataAttributeKey, $dataAttributeValue);
            }
        }

        if (isset(self::$tagAttributes[get_class($this)])) {
            foreach (self::$tagAttributes[get_class($this)] as $attributeName) {
                if ($this->hasArgument($attributeName) && $this->arguments[$attributeName] !== '') {
                    $this->tag->addAttribute($attributeName, $this->arguments[$attributeName]);
                }
            }
        }
    }

    /**
     * Register a new tag attribute. Tag attributes are all arguments which will be directly appended to a tag if you call $this->initializeTag()
     *
     * @param string $name Name of tag attribute
     * @param string $type Type of the tag attribute
     * @param string $description Description of tag attribute
     * @param bool $required set to TRUE if tag attribute is required. Defaults to FALSE.
     * @param string $default Default value
     * @api
     */
    protected function registerTagAttribute($name, $type, $description, $required = false, $default = null)
    {
        $this->registerArgument($name, $type, $description, $required, $default);
        self::$tagAttributes[get_class($this)][$name] = $name;
    }

    /**
     * Registers all standard HTML universal attributes.
     * Should be used inside registerArguments();
     *
     * @api
     */
    protected function registerUniversalTagAttributes()
    {
        $this->registerTagAttribute('class', 'string', 'CSS class(es) for this element');
        $this->registerTagAttribute('dir', 'string', 'Text direction for this HTML element. Allowed strings: "ltr" (left to right), "rtl" (right to left)');
        $this->registerTagAttribute('id', 'string', 'Unique (in this file) identifier for this HTML element.');
        $this->registerTagAttribute('lang', 'string', 'Language for this element. Use short names specified in RFC 1766');
        $this->registerTagAttribute('style', 'string', 'Individual CSS styles for this element');
        $this->registerTagAttribute('title', 'string', 'Tooltip text of element');
        $this->registerTagAttribute('accesskey', 'string', 'Keyboard shortcut to access this element');
        $this->registerTagAttribute('tabindex', 'integer', 'Specifies the tab order of this element');
        $this->registerTagAttribute('onclick', 'string', 'JavaScript evaluated for the onclick event');
    }
}
