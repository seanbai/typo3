<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
	{

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Useradmin.Useradmin',
            'Useradmin',
            [
                'User' => 'list'
            ],
            // non-cacheable actions
            [
                'User' => ''
            ]
        );

	// wizards
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
		'mod {
			wizards.newContentElement.wizardItems.plugins {
				elements {
					useradmin {
						icon = ' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($extKey) . 'Resources/Public/Icons/user_plugin_useradmin.svg
						title = LLL:EXT:useradmin/Resources/Private/Language/locallang_db.xlf:tx_useradmin_domain_model_useradmin
						description = LLL:EXT:useradmin/Resources/Private/Language/locallang_db.xlf:tx_useradmin_domain_model_useradmin.description
						tt_content_defValues {
							CType = list
							list_type = useradmin_useradmin
						}
					}
				}
				show = *
			}
	   }'
	);
    },
    $_EXTKEY
);
