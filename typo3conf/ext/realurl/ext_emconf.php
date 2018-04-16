<?php

/**
 * Extension Manager/Repository config file for ext "realurl".
 *
 * Auto generated 07-03-2018 11:41
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 */

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Speaking URLs for TYPO3',
	'description' => 'Makes TYPO3 URLs search engine friendly. Donations are welcome to dmitry.dulepov@gmail.com. They help to support the extension!',
	'category' => 'services',
	'shy' => 1,
	'version' => '2.3.2',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'stable',
	'uploadfolder' => 1,
	'createDirs' => '',
	'modify_tables' => 'pages,pages_language_overlay',
	'clearcacheonload' => 1,
	'lockType' => '',
	'author' => 'Dmitry Dulepov',
	'author_email' => 'dmitry.dulepov@gmail.com',
	'author_company' => '',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0-8.9.999',
			'php' => '5.4.0-7.1.999',
			'scheduler' => '6.2.0-8.9.999',
		),
		'conflicts' => array(
			'cooluri' => '',
			'simulatestatic' => '',
		),
	),
);

