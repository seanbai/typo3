<?php
defined('TYPO3_MODE') || die();
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
    'Tp3.Tp3Jobs',
    'Offers',
    'JobOffers'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_tp3jobs_domain_model_joboffer', 'EXT:tp3_jobs/Resources/Private/Language/locallang_csh_tx_tp3jobs_domain_model_joboffer.xlf');
