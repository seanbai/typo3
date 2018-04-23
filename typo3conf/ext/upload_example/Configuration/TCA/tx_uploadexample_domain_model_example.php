<?php
$_EXTKEY = 'upload_example';
return [
    'ctrl' => [
        'title'    => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example',
        'label' => 'title',
        'tstamp' => 'tstamp',
        'crdate' => 'crdate',
        'cruser_id' => 'cruser_id',
        'dividers2tabs' => true,

        'versioningWS' => 2,
        'versioning_followPages' => true,

        'origUid' => 't3_origuid',
        'languageField' => 'sys_language_uid',
        'transOrigPointerField' => 'l10n_parent',
        'transOrigDiffSourceField' => 'l10n_diffsource',

        'delete' => 'deleted',
        'enablecolumns' => [
            'disabled' => 'hidden',
            'starttime' => 'starttime',
            'endtime' => 'endtime',
        ],
        'searchFields' => 'title,',
        'iconfile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Icons/tx_uploadexample_domain_model_example.gif'
    ],
    'interface' => [
        'showRecordFieldList' => 'sys_language_uid, l10n_parent, l10n_diffsource, hidden, title, image',
    ],
    'types' => [
        '1' => [
            'showitem' => 'sys_language_uid;;;;1-1-1, l10n_parent, l10n_diffsource, hidden;;1, title,
                --div--;LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:user.information, username, user, sex,language,languagelevel,
                --div--;LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:contact.us, profession,citizenship,phone,age,education,address,email,school,privacy,content, image,
                '
            ],
    ],
    'palettes' => [
        '1' => ['showitem' => ''],
    ],
    'columns' => [

        'sys_language_uid' => [
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.language',
            'config' => [
                'type' => 'select',
                'foreign_table' => 'sys_language',
                'foreign_table_where' => 'ORDER BY sys_language.title',
                'items' => [
                    ['LLL:EXT:lang/locallang_general.xlf:LGL.allLanguages', -1],
                    ['LLL:EXT:lang/locallang_general.xlf:LGL.default_value', 0]
                ],
            ],
        ],
        'l10n_parent' => [
            'displayCond' => 'FIELD:sys_language_uid:>:0',
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.l18n_parent',
            'config' => [
                'type' => 'select',
                'items' => [
                    ['', 0],
                ],
                'foreign_table' => 'tx_uploadexample_domain_model_example',
                'foreign_table_where' => 'AND tx_uploadexample_domain_model_example.pid=###CURRENT_PID### AND tx_uploadexample_domain_model_example.sys_language_uid IN (-1,0)',
            ],
        ],
        'l10n_diffsource' => [
            'config' => [
                'type' => 'passthrough',
            ],
        ],

        't3ver_label' => [
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.versionLabel',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'max' => 255,
            ]
        ],

        'hidden' => [
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.hidden',
            'config' => [
                'type' => 'check',
            ],
        ],
        'starttime' => [
            'exclude' => 1,
            'l10n_mode' => 'mergeIfNotBlank',
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.starttime',
            'config' => [
                'type' => 'input',
                'size' => 13,
                'max' => 20,
                'eval' => 'datetime',
                'checkbox' => 0,
                'default' => 0,
            ],
        ],
        'endtime' => [
            'exclude' => 1,
            'l10n_mode' => 'mergeIfNotBlank',
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.endtime',
            'config' => [
                'type' => 'input',
                'size' => 13,
                'max' => 20,
                'eval' => 'datetime',
                'checkbox' => 0,
                'default' => 0,
            ],
        ],
        'title' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.title',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim,required'
            ],
        ],
        'username' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.username',
            'config' => [
                'type' => 'input',
                'size' => 10,
                'eval' => 'trim,required'
            ],
        ],
        'user' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.user',
            'config' => [
                'type' => 'input',
                'size' => 10,
                'eval' => 'trim,required'
            ],
        ],
        'sex' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.sex',
            'config' => [
                'type' => 'input',
                'size' => 10,
                'eval' => 'trim,required'
            ],
        ],
        'profession' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.profession',
            'config' => [
                'type' => 'input',
                'size' => 15,
                'eval' => 'trim,required'
            ],
        ],
        'citizenship' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.citizenship',
            'config' => [
                'type' => 'input',
                'size' => 15,
                'eval' => 'trim,required'
            ],
        ],
        'phone' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.phone',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim,required'
            ],
        ],
        'age' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.age',
            'config' => [
                'type' => 'input',
                'size' => 15,
                'eval' => 'trim,required'
            ],
        ],
        'education' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.education',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim,required'
            ],
        ],
        'address' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.address',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim,required'
            ],
        ],
        'email' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.email',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim,required'
            ],
        ],
        'language' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.language',
            'config' => [
                'type' => 'input',
                'size' => 10,
                'eval' => 'trim,required'
            ],
        ],
        'languagelevel' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.languagelevel',
            'config' => [
                'type' => 'input',
                'size' => 10,
                'eval' => 'trim,required'
            ],
        ],
        'school' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.school',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim,required'
            ],
        ],
        'privacy' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.privacy',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim,required'
            ],
        ],
        'content' => [
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.content',
            'config' => [
                'type' => 'text',
                'cols' => '40',
                'rows' => '5',
                'richtextConfiguration' => 'default'
            ],
        ],
        'image' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.image',
            'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('image', [
                'appearance' => [
                    'createNewRelationLinkTitle' => 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference',
                ],
                'maxitems' => 1,
                'foreign_match_fields' => [
                    'fieldname' => 'image',
                    'tablenames' => 'tx_uploadexample_domain_model_example',
                    'table_local' => 'sys_file',
                ],
                'foreign_types' => [
                    '0' => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_AUDIO => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_VIDEO => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ]
                ]
            ], 'doc,docx,txt,rtf,pdf')
        ],
        'image_collection' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:upload_example/Resources/Private/Language/locallang_db.xlf:tx_uploadexample_domain_model_example.image_collection',
            'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('image_collection', [
                'appearance' => [
                    'createNewRelationLinkTitle' => 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference'
                ],
                // custom configuration for displaying fields in the overlay/reference table
                // to use the imageoverlayPalette instead of the basicoverlayPalette
                'foreign_match_fields' => [
                    'fieldname' => 'image_collection',
                    'tablenames' => 'tx_uploadexample_domain_model_example',
                    'table_local' => 'sys_file',
                ],
                'foreign_types' => [
                    '0' => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_AUDIO => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_VIDEO => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => [
                        'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                    ]
                ]
            ], 'doc,docx,txt,rtf,pdf')
        ],
    ],
];
