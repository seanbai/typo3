<?php
defined('TYPO3_MODE') || die('Access denied.');


        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Tp3.Tp3Jobs',
            'Offers',
            [
                'JobOffer' => 'list, show, ajax'
            ],
            // non-cacheable actions
            [
                'JobOffer' => 'list, show, ajax'
            ]
        );

	// wizards
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
		'mod {
			wizards.newContentElement.wizardItems.plugins {
				elements {
					offers {
					    iconIdentifier = ext-'.$_EXTKEY.'-wizard-icon
						title = LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3_jobs_domain_model_offers
						description = LLL:EXT:tp3_jobs/Resources/Private/Language/locallang_db.xlf:tx_tp3_jobs_domain_model_offers.description
						tt_content_defValues {
							CType = list
							list_type = tp3jobs_offers
						}
					}
				}
				show = *
			}
	   }'
	);
        /*
       * Icons
       */
        if (TYPO3_MODE === 'BE') {
            $icons = [
                'ext-'.$_EXTKEY.'-wizard-icon' => 'user_plugin_offers.svg',
            ];
            $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
            foreach ($icons as $identifier => $path) {
                $iconRegistry->registerIcon(
                    $identifier,
                    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
                    ['source' => 'EXT:'.$_EXTKEY.'/Resources/Public/Icons/' . $path]
                );
            }
        }
