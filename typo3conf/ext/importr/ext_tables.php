<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

/** @var string $_EXTKEY */

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule('HDNET.' . $_EXTKEY, 'file', 'tx_importr_mod', '', [
    'Importr' => 'list,index,spare,import,imports,preview,create,dataimport,cspare',
], [
    'access' => 'user,group',
    'icon' => 'EXT:' . $_EXTKEY . '/ext_icon.gif',
    'labels' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_mod.xlf'
]);
