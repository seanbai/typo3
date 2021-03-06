<?php

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array(
    '_DEFAULT' => array(
        'init' => array(
            'doNotRawUrlEncodeParameterNames' => 0,
            'enableCHashCache'                => 1,
            'respectSimulateStaticURLs'       => 1,
            'adminJumpToBackend'              => 0,
            'enableUrlDecodeCache'            => 1,
            'enableUrlEncodeCache'            => 0,
            'appendMissingSlash'              => 'ifNotFile'
        ),
        'pagePath' => array(
            'type' => 'user',
            'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
            'spaceCharacter' => '-',
            'languageGetVar' => 'L',
            'rootpage_id' => 1,
        ),
        'redirects' => array(
        ),
        'preVars' => array(
            array(
                'GETvar' => 'L',
                'valueMap' => array(
                    '' => '0',
                    'en' => '1',
                    '' => '2',
                ),
            ),
            array(
                'GETvar' => 'no_cache',
                'valueMap' => array(
                    '' => '1',
                    '' => '2',
                ),
                'noMatch' => 'bypass',
            ),
        ),
        'fixedPostVars' => array(
            'newsDetailConfiguration' => array(
                array(
                    'GETvar' => 'tx_news_pi1[action]',
                    'valueMap' => array(
                        'detail' => '',
                    ),
                    'noMatch' => 'bypass'
                ),
                array(
                    'GETvar' => 'tx_news_pi1[controller]',
                    'valueMap' => array(
                        'News' => '',
                    ),
                    'noMatch' => 'bypass'
                ),
                array(
                    'GETvar' => 'tx_news_pi1[news]',
                    'lookUpTable' => array(
                        'table' => 'tx_news_domain_model_news',
                        'id_field' => 'uid',
                        'alias_field' => 'title',
                        'addWhereClause' => ' AND NOT deleted',
                        'useUniqueCache' => 1,
                        'useUniqueCache_conf' => array(
                            'strtolower' => 1,
                            'spaceCharacter' => '-'
                        ),
                        'languageGetVar' => 'L',
                        'languageExceptionUids' => '',
                        'languageField' => 'sys_language_uid',
                        'transOrigPointerField' => 'l10n_parent',
                        'autoUpdate' => 1,
                        'expireDays' => 180,
                    )
                )
            ),
            '70' => 'newsDetailConfiguration',
        ),
        'postVarSets' => array(
            '_DEFAULT' => array(
                'page' => array(
                    array(
                        'GETvar' => 'tx_news_pi1[@widget_0][currentPage]',
                    ),
                ),
                'news' => array(
                    array(
                        'GETvar' => 'tx_news_pi1[action]',
                        'valueMap' => array(
                            'detail' => '',
                        ),
                        'noMatch' => 'bypass'
                    ),
                    array(
                        'GETvar' => 'tx_news_pi1[controller]',
                        'valueMap' => array(
                            'News' => '',
                        ),
                        'noMatch' => 'bypass'
                    ),
                    array(
                        'GETvar' => 'tx_news_pi1[news]',
                        'lookUpTable' => array(
                            'table' => 'tx_news_domain_model_news',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => ' AND NOT deleted',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => array(
                                'strtolower' => 1,
                                'spaceCharacter' => '-'
                            ),
                            'languageGetVar' => 'L',
                            'languageExceptionUids' => '',
                            'languageField' => 'sys_language_uid',
                            'transOrigPointerField' => 'l10n_parent',
                            'autoUpdate' => 1,
                            'expireDays' => 180,
                        ),
                    ),
                ),
                'jobs' => array(
                    array(
                        'GETvar' => 'tx_tp3jobs_offers[action]',
                            'valueMap' => array(
                        ),
                    ),
                    array(
                        'GETvar' => 'tx_tp3jobs_offers[controller]',
                        'valueMap' => array(
                        ),
                        'noMatch' => 'bypass'
                    ),
                    array(
                        'GETvar' => 'tx_tp3jobs_offers[id]',
                        'lookUpTable' => array(
                            'table' => 'tx_tp3jobs_domain_model_joboffer',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => ' AND NOT deleted',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => array(
                                'strtolower' => 1,
                                'spaceCharacter' => '-'
                            ),
                            'languageGetVar' => 'L',
                            'languageExceptionUids' => '',
                            'languageField' => 'sys_language_uid',
                            'transOrigPointerField' => 'l10n_parent',
                            'autoUpdate' => 1,
                            'expireDays' => 180,
                        ),
                    ),
                    array(
                        'GETvar' => 'tx_tp3jobs_offers[appleid]',
                        'lookUpTable' => array(
                            'table' => 'tx_tp3jobs_domain_model_joboffer',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => 'AND NOT deleted',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => array(
                                'strtolower' => 1,
                                'spaceCharacter' => '-'
                            ),
                            'languageGetVar' => 'L',
                            'languageExceptionUids' => '',
                            'languageField' => 'sys_language_uid',
                            'transOrigPointerField' => 'l10n_parent',
                            'autoUpdate' => 1,
                            'expireDays' => 180,
                        ),
                    ),
                ),
                'apply' => array(
                    array(
                        'GETvar' => 'tx_uploadexample_offers[action]',
                            'valueMap' => array(
                             ),
                    ),
                    array(
                        'GETvar' => 'tx_uploadexample_offers[controller]',
                        'valueMap' => array(
                        ),
                        'noMatch' => 'bypass'
                    ),
                    array(
                        'GETvar' => 'tx_uploadexample_offers[appleid]',
                        'lookUpTable' => array(
                            'table' => 'tx_tp3jobs_domain_model_joboffer',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => 'AND NOT deleted',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => array(
                                'strtolower' => 1,
                                'spaceCharacter' => '-'
                            ),
                            'languageGetVar' => 'L',
                            'languageExceptionUids' => '',
                            'languageField' => 'sys_language_uid',
                            'transOrigPointerField' => 'l10n_parent',
                            'autoUpdate' => 1,
                            'expireDays' => 180,
                        ),
                    ),
                ),
                'login' => array(
                    array(
                        'GETvar' => 'tx_login_login[action]',
                        'valueMap' => array(
                        ),
                    ),
                    array(
                        'GETvar' => 'tx_login_login[controller]',
                        'valueMap' => array(
                        ),
                        'noMatch' => 'bypass'
                    ),
                ),
            ),
        ),
        'fileName' => array(
            'defaultToHTMLsuffixOnPrev' => false,
            'index' => array(
                'rss.xml' => array(
                    'keyValues' => array(
                        'type' => 100,
                    )
                ),
            )
        ),
    )
);
