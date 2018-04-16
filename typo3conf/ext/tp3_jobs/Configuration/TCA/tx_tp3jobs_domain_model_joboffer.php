<?php

return [
    'ctrl' => [
        'title' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer',
        'label' => 'title',
        'tstamp' => 'tstamp',
        'crdate' => 'crdate',
        'cruser_id' => 'cruser_id',
        'versioningWS' => true,
        'languageField' => 'sys_language_uid',
        'transOrigPointerField' => 'l10n_parent',
        'transOrigDiffSourceField' => 'l10n_diffsource',
        'delete' => 'deleted',
        'enablecolumns' => [
            'disabled' => 'hidden',
            'starttime' => 'starttime',
            'endtime' => 'endtime',
        ],
        'iconfile' => 'EXT:tp3_jobs/Resources/Public/Icons/user_plugin_offers.svg',
        'typeicon_classes' => [
            'default' => 'ext-tp3_jobs-wizard-icon'
        ],
        'searchFields' => 'title,descr,tasks,qualification,refid,contactname,contactaddress,contacttel,contactmail',
    ],
    'interface' => [
        'showRecordFieldList' => 'sys_language_uid, l10n_parent, l10n_diffsource, hidden, title, descr, tasks, qualification, refid, contactname, contactaddress, contacttel, contactmail',
    ],
    'types' => [
        '1' => [
            'showitem' => '
                sys_language_uid, l10n_parent, l10n_diffsource, hidden, title, descr, tasks, qualification,
                --div--;LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:user, username, useremail,
                --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access, starttime, endtime,
                --div--;LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:categories, category,
                '
            ],
    ],
    'columns' => [
        'sys_language_uid' => [
            'exclude' => true,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.language',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'special' => 'languages',
                'items' => [
                    [
                        'LLL:EXT:lang/locallang_general.xlf:LGL.allLanguages',
                        -1,
                        'flags-multiple'
                    ]
                ],
                'default' => 0,
            ],
        ],
        'l10n_parent' => [
            'displayCond' => 'FIELD:sys_language_uid:>:0',
            'exclude' => true,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.l18n_parent',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['', 0],
                ],
                'foreign_table' => 'tx_tp3jobs_domain_model_joboffer',
                'foreign_table_where' => 'AND tx_tp3jobs_domain_model_joboffer.pid=###CURRENT_PID### AND tx_tp3jobs_domain_model_joboffer.sys_language_uid IN (-1,0)',
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
            ],
        ],
        'hidden' => [
            'exclude' => true,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.hidden',
            'config' => [
                'type' => 'check',
                'items' => [
                    '1' => [
                        '0' => 'LLL:EXT:lang/locallang_core.xlf:labels.enabled'
                    ]
                ],
            ],
        ],
        'starttime' => [
            'exclude' => true,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.starttime',
            'config' => [
                'type' => 'input',
                'size' => 13,
                'eval' => 'datetime',
                'renderType' => 'inputDateTime',
                'default' => 0,
                'behaviour' => [
                    'allowLanguageSynchronization' => true,
                ],]
        ],
        'endtime' => [
            'exclude' => true,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.endtime',
            'config' => [
                'type' => 'input',
                'size' => 13,
                'eval' => 'datetime',
                'renderType' => 'inputDateTime',
                'default' => 0,
                'behaviour' => [
                    'allowLanguageSynchronization' => true,
                ],
                'range' => [
                    'upper' => mktime(0, 0, 0, 1, 1, 2038)
                ]
            ],
        ],
        'title' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.title',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'username' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.username',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'useremail' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.useremail',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'descr' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.descr',
            'config' => [
                'type' => 'text',
                'cols' => '40',
                'rows' => '5',
                'richtextConfiguration' => 'default'
            ],
        ],
        'tasks' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.tasks',
            'config' => [
                'type' => 'text',
                'cols' => '80',
                'rows' => '15',
                'softref' => 'typolink_tag,images,email[subst],url',
                'enableRichtext' => true,
                'richtextConfiguration' => 'default'
            ],
        ),
        'qualification' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.qualification',
            'config' => [
                'type' => 'text',
                'cols' => '80',
                'rows' => '15',
                'softref' => 'typolink_tag,images,email[subst],url',
                'enableRichtext' => true,
                'richtextConfiguration' => 'default'
            ],
        ),
        'refid' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.refid',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'contactname' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.contactname',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'contactaddress' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.contactaddress',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'contacttel' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.contacttel',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'contactmail' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.contactmail',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'tstamp' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3jobs_domain_model_joboffer.contactmail',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ],
        ],
        'category' => [
            'label' => 'LLL:EXT:lang/Resources/Private/Language/locallang_tca.xlf:sys_file_collection.category',
            'config' => [
                'minitems' => 0,
                'maxitems' => 1,
                'type' => 'select',
                'renderType' => 'selectTree',
                'foreign_table' => 'pages',
                'foreign_table_where' => 'ORDER BY pages.sorting ASC',
                'treeConfig' => [
                    'parentField' => 'pid',
                    'rootUid' => '52',
                    'appearance' => [
                        'expandAll' => true,
                        'showHeader' => true,
                    ]
                ]
            ]
        ]
    ],
];
