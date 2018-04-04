<?php
defined('TYPO3_MODE') || die();

/***************
 * Add Content Element
 */
$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['quote'] = 'content-quote';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:content_element.quote',
        'quote',
        'mimetypes-x-content-multimedia'
    ],
    'panel',
    'after'
);

/***************
 * Configure element type
 */
if (!is_array($GLOBALS['TCA']['tt_content']['types']['quote'])) {
    $GLOBALS['TCA']['tt_content']['types']['quote'] = [];
}
$GLOBALS['TCA']['tt_content']['types']['quote'] = array_replace_recursive(
    $GLOBALS['TCA']['tt_content']['types']['quote'],
    [
        'showitem' => '
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
                header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header.ALT.div_formlabel,
                quote_link;LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:quote.link,
                quote_source;LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:quote.source,
                bodytext;LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:quote.text,
            --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
                --palette--;;language,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
                --palette--;;hidden,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
                categories,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,
                rowDescription,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,
        '
    ]
);

/***************
 * Register fields
 */
$GLOBALS['TCA']['tt_content']['columns'] = array_replace_recursive(
    $GLOBALS['TCA']['tt_content']['columns'],
    [
        'quote_source' => [
            'label' => 'LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:quote.source',
            'config' => [
                'type' => 'input',
                'size' => 50,
                'max' => 255
            ]
        ],
        'quote_link' => [
            'exclude' => true,
            'label' => 'LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:quote.link',
            'config' => [
                'type' => 'input',
                'renderType' => 'inputLink',
                'size' => 50,
                'max' => 1024,
                'eval' => 'trim',
                'fieldControl' => [
                    'linkPopup' => [
                        'options' => [
                            'title' => 'LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:quote.link',
                        ],
                    ],
                ],
                'softref' => 'typolink'
            ]
        ],
    ]
);
