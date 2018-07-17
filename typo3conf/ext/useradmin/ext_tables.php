<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Useradmin.Useradmin',
            'Useradmin',
            'UserAdmin'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript', 'UserAdmin');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_useradmin_domain_model_user', 'EXT:useradmin/Resources/Private/Language/locallang_csh_tx_useradmin_domain_model_user.xlf');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_useradmin_domain_model_user');

    },
    $_EXTKEY
);
