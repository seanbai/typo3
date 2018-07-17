<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'Subscriptions.' . $_EXTKEY,
	'Subscriptions',
	array(
		'List' => 'list, add, update',
		
	),
	// non-cacheable actions
	array(
		'List' => 'list, add, update',
		
	)
);


$TYPO3_CONF_VARS['MAIL']['transport'] = 'smtp';
$TYPO3_CONF_VARS['MAIL']['transport_smtp_server'] = 'smtp.163.com:994';
$TYPO3_CONF_VARS['MAIL']['transport_smtp_encrypt'] ='ssl'; # requires openssl in PHP
$TYPO3_CONF_VARS['MAIL']['transport_smtp_username'] = '18380475407@163.com';
$TYPO3_CONF_VARS['MAIL']['transport_smtp_password'] = 'bai5kuei33';