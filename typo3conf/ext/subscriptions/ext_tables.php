<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
	'Subscriptions.' . $_EXTKEY,
	'Subscriptions',
	'Subscriptions'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Email-Subscriptions');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_subscriptions_domain_model_list', 'EXT:subscriptions/Resources/Private/Language/locallang_csh_tx_subscriptions_domain_model_list.xlf');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_subscriptions_domain_model_list');
