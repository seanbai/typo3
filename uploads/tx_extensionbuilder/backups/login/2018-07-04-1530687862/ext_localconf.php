<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
	{

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Login.Login',
            'Login',
            [
                'Login' => 'list, show, new, create, edit, update, delete'
            ],
            // non-cacheable actions
            [
                'Login' => 'create, update, delete'
            ]
        );

	// wizards
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
		'mod {
			wizards.newContentElement.wizardItems.plugins {
				elements {
					login {
						icon = &#039; . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($extKey) . &#039;Resources/Public/Icons/user_plugin_login.svg
						title = LLL:EXT:login/Resources/Private/Language/locallang_db.xlf:tx_login_domain_model_login
						description = LLL:EXT:login/Resources/Private/Language/locallang_db.xlf:tx_login_domain_model_login.description
						tt_content_defValues {
							CType = list
							list_type = login_login
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
