<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'Job.' . $_EXTKEY,
	'Job',
	array(
		'Job' => 'list',
		
	),
	// non-cacheable actions
	array(
		'Job' => '',
		
	)
);



/***************
 * Add default RTE configuration for bootstrap package
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:bootstrap_package/Configuration/RTE/Default.yaml';
