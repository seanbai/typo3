<?php

return array(
    'ctrl' => array(
        'title' => 'LLL:EXT:job_areas/Resources/Private/Language/locallang_db.xlf:tx_jobareas_domain_model_job',
        'label' => 'title',
        'tstamp' => 'tstamp',
        'crdate' => 'crdate',
        'cruser_id' => 'cruser_id',
        'dividers2tabs' => TRUE,
        'versioningWS' => 2,
        'versioning_followPages' => TRUE,
        'languageField' => 'sys_language_uid',
        'transOrigPointerField' => 'l10n_parent',
        'transOrigDiffSourceField' => 'l10n_diffsource',
        'delete' => 'deleted',
        'enablecolumns' => array(
            'disabled' => 'hidden',
            'starttime' => 'starttime',
            'endtime' => 'endtime',
        ),
        'searchFields' => 'title,introduction,text,',
        'iconfile' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('job_areas') . 'Resources/Public/Icons/tx_jobareas_domain_model_job.gif'
    ),
    'interface' => array(
        'showRecordFieldList' => 'sys_language_uid, l10n_parent, l10n_diffsource, hidden, title, introduction, text',
    ),
    'types' => array(
        '1' => array(
            'showitem' => '
                sys_language_uid;;;;1-1-1, l10n_parent, l10n_diffsource, hidden;;1, title, introduction, bodytext, 
                --div--;LLL:EXT:job_areas/Resources/Private/Language/locallang_db.xlf:categories, category,
                --div--;LLL:EXT:job_areas/Resources/Private/Language/locallang_db.xlf:tabs.access, starttime, endtime,
            '
        ),
    ),
    'palettes' => array(
        '1' => array('showitem' => ''),
    ),
    'columns' => array(
        'sys_language_uid' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.language',
            'config' => array(
                'type' => 'select',
                'renderType' => 'selectSingle',
                'foreign_table' => 'sys_language',
                'foreign_table_where' => 'ORDER BY sys_language.title',
                'items' => array(
                    array('LLL:EXT:lang/locallang_general.xlf:LGL.allLanguages', -1),
                    array('LLL:EXT:lang/locallang_general.xlf:LGL.default_value', 0)
                ),
            ),
        ),
        'l10n_parent' => array(
            'displayCond' => 'FIELD:sys_language_uid:>:0',
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.l18n_parent',
            'config' => array(
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => array(
                    array('', 0),
                ),
                'foreign_table' => 'tx_jobareas_domain_model_job',
                'foreign_table_where' => 'AND tx_jobareas_domain_model_job.pid=###CURRENT_PID### AND tx_jobareas_domain_model_job.sys_language_uid IN (-1,0)',
            ),
        ),
        'l10n_diffsource' => array(
            'config' => array(
                'type' => 'passthrough',
            ),
        ),
        't3ver_label' => array(
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.versionLabel',
            'config' => array(
                'type' => 'input',
                'size' => 30,
                'max' => 255,
            )
        ),
        'hidden' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.hidden',
            'config' => array(
                'type' => 'check',
            ),
        ),
        'starttime' => array(
            'exclude' => 1,
            'l10n_mode' => 'mergeIfNotBlank',
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.starttime',
            'config' => array(
                'type' => 'input',
                'size' => 13,
                'max' => 20,
                'eval' => 'datetime',
                'checkbox' => 0,
                'default' => 0,
                'range' => array(
                    'lower' => mktime(0, 0, 0, date('m'), date('d'), date('Y'))
                ),
            ),
        ),
        'endtime' => array(
            'exclude' => 1,
            'l10n_mode' => 'mergeIfNotBlank',
            'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.endtime',
            'config' => array(
                'type' => 'input',
                'size' => 13,
                'max' => 20,
                'eval' => 'datetime',
                'checkbox' => 0,
                'default' => 0,
                'range' => array(
                    'lower' => mktime(0, 0, 0, date('m'), date('d'), date('Y'))
                ),
            ),
        ),
        'title' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:job_areas/Resources/Private/Language/locallang_db.xlf:tx_jobareas_domain_model_job.title',
            'config' => array(
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim'
            ),
        ),
        'introduction' => array(
            'exclude' => 1,
            'label' => 'LLL:EXT:job_areas/Resources/Private/Language/locallang_db.xlf:tx_jobareas_domain_model_job.introduction',
            'config' => array(
                'type' => 'text',
                'cols' => 30,
                'rows' => 2,
                'eval' => 'trim'
            )
        ),
        'bodytext' => array(
            'label' => 'LLL:EXT:job_areas/Resources/Private/Language/locallang_db.xlf:tx_jobareas_domain_model_job.text',
            'l10n_mode' => 'prefixLangTitle',
            'l10n_cat' => 'text',
            'config' => array(
                'type' => 'text',
                'cols' => '40',
                'rows' => '10',
                'softref' => 'typolink_tag,images,email[subst],url',
            )
        ),
        'category' => [
            'label' => 'LLL:EXT:lang/Resources/Private/Language/locallang_tca.xlf:sys_file_collection.category',
            'config' => [
                'minitems' => 0,
                'maxitems' => 1,
                'type' => 'select',
                'renderType' => 'selectTree',
                'foreign_table' => 'sys_category',
                'foreign_table_where' => ' AND sys_category.sys_language_uid IN (-1,0) ORDER BY sys_category.sorting ASC',
                'treeConfig' => [
                    'parentField' => 'parent',
                    'appearance' => [
                        'expandAll' => true,
                        'showHeader' => true,
                    ]
                ]
            ]
        ]
    ),
);
