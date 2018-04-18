<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
	{

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Contact.Contact',
            'Contact',
            [
                'List' => 'list, add'
            ],
            // non-cacheable actions
            [
                'List' => 'list, add'
            ]
        );

	// wizards
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
		'mod {
			wizards.newContentElement.wizardItems.plugins {
				elements {
					contact {
						icon = ' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($extKey) . 'Resources/Public/Icons/user_plugin_contact.svg
						title = LLL:EXT:contact/Resources/Private/Language/locallang_db.xlf:tx_contact_domain_model_contact
						description = LLL:EXT:contact/Resources/Private/Language/locallang_db.xlf:tx_contact_domain_model_contact.description
						tt_content_defValues {
							CType = list
							list_type = contact_contact
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
