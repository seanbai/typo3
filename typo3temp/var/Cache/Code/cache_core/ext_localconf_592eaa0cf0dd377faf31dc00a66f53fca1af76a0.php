<?php
/**
 * Compiled ext_localconf.php cache file
 */

global $TYPO3_CONF_VARS, $T3_SERVICES, $T3_VAR;

/**
 * Extension: core
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/core/ext_localconf.php
 */

$_EXTKEY = 'core';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

/** @var \TYPO3\CMS\Extbase\SignalSlot\Dispatcher $signalSlotDispatcher */
$signalSlotDispatcher = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class);

if (TYPO3_MODE === 'BE' && !(TYPO3_REQUESTTYPE & TYPO3_REQUESTTYPE_INSTALL)) {
    // FAL SECURITY CHECKS
    $signalSlotDispatcher->connect(
        \TYPO3\CMS\Core\Resource\ResourceFactory::class,
        \TYPO3\CMS\Core\Resource\ResourceFactoryInterface::SIGNAL_PostProcessStorage,
        \TYPO3\CMS\Core\Resource\Security\StoragePermissionsAspect::class,
        'addUserPermissionsToStorage'
    );
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass'][] = \TYPO3\CMS\Core\Resource\Security\FileMetadataPermissionsAspect::class;
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass'][] = \TYPO3\CMS\Core\Hooks\BackendUserGroupIntegrityCheck::class;
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/alt_doc.php']['makeEditForm_accessCheck'][] = \TYPO3\CMS\Core\Resource\Security\FileMetadataPermissionsAspect::class . '->isAllowedToShowEditForm';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tceforms_inline.php']['checkAccess'][] = \TYPO3\CMS\Core\Resource\Security\FileMetadataPermissionsAspect::class . '->isAllowedToShowEditForm';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['checkModifyAccessList'][] = \TYPO3\CMS\Core\Resource\Security\FileMetadataPermissionsAspect::class;

    // PACKAGE MANAGEMENT
    $signalSlotDispatcher->connect(
        'PackageManagement',
        'packagesMayHaveChanged',
        \TYPO3\CMS\Core\Package\PackageManager::class,
        'scanAvailablePackages'
    );
}

$signalSlotDispatcher->connect(
    \TYPO3\CMS\Core\Resource\ResourceStorage::class,
    \TYPO3\CMS\Core\Resource\ResourceStorageInterface::SIGNAL_PostFileDelete,
    \TYPO3\CMS\Core\Resource\Processing\FileDeletionAspect::class,
    'removeFromRepository'
);

$signalSlotDispatcher->connect(
    \TYPO3\CMS\Core\Resource\ResourceStorage::class,
    \TYPO3\CMS\Core\Resource\ResourceStorageInterface::SIGNAL_PostFileAdd,
    \TYPO3\CMS\Core\Resource\Processing\FileDeletionAspect::class,
    'cleanupProcessedFilesPostFileAdd'
);

$signalSlotDispatcher->connect(
    \TYPO3\CMS\Core\Resource\ResourceStorage::class,
    \TYPO3\CMS\Core\Resource\ResourceStorageInterface::SIGNAL_PostFileReplace,
    \TYPO3\CMS\Core\Resource\Processing\FileDeletionAspect::class,
    'cleanupProcessedFilesPostFileReplace'
);

if (!\TYPO3\CMS\Core\Core\Bootstrap::usesComposerClassLoading()) {
    $signalSlotDispatcher->connect(
        \TYPO3\CMS\Extensionmanager\Utility\InstallUtility::class,
        'afterExtensionInstall',
        \TYPO3\CMS\Core\Core\ClassLoadingInformation::class,
        'dumpClassLoadingInformation'
    );
    $signalSlotDispatcher->connect(
        \TYPO3\CMS\Extensionmanager\Utility\InstallUtility::class,
        'afterExtensionUninstall',
        \TYPO3\CMS\Core\Core\ClassLoadingInformation::class,
        'dumpClassLoadingInformation'
    );
}
$signalSlotDispatcher->connect(
    TYPO3\CMS\Core\Resource\ResourceStorage::class,
    \TYPO3\CMS\Core\Resource\Service\FileProcessingService::SIGNAL_PreFileProcess,
    \TYPO3\CMS\Core\Resource\OnlineMedia\Processing\PreviewProcessing::class,
    'processFile'
);

$signalSlotDispatcher->connect(
    \TYPO3\CMS\Install\Service\SqlExpectedSchemaService::class,
    'tablesDefinitionIsBeingBuilt',
    \TYPO3\CMS\Core\DataHandling\DatabaseSchemaService::class,
    'getLocalizationRequiredDatabaseSchema'
);

$signalSlotDispatcher->connect(
    \TYPO3\CMS\Extensionmanager\Utility\InstallUtility::class,
    'tablesDefinitionIsBeingBuilt',
    \TYPO3\CMS\Core\DataHandling\DatabaseSchemaService::class,
    'getLocalizationRequiredDatabaseSchemaForExtension'
);

unset($signalSlotDispatcher);

$GLOBALS['TYPO3_CONF_VARS']['FE']['eID_include']['dumpFile'] = \TYPO3\CMS\Core\Controller\FileDumpController::class . '::dumpAction';

/** @var \TYPO3\CMS\Core\Resource\Rendering\RendererRegistry $rendererRegistry */
$rendererRegistry = \TYPO3\CMS\Core\Resource\Rendering\RendererRegistry::getInstance();
$rendererRegistry->registerRendererClass(\TYPO3\CMS\Core\Resource\Rendering\AudioTagRenderer::class);
$rendererRegistry->registerRendererClass(\TYPO3\CMS\Core\Resource\Rendering\VideoTagRenderer::class);
$rendererRegistry->registerRendererClass(\TYPO3\CMS\Core\Resource\Rendering\YouTubeRenderer::class);
$rendererRegistry->registerRendererClass(\TYPO3\CMS\Core\Resource\Rendering\VimeoRenderer::class);
unset($rendererRegistry);

$textExtractorRegistry = \TYPO3\CMS\Core\Resource\TextExtraction\TextExtractorRegistry::getInstance();
$textExtractorRegistry->registerTextExtractor(\TYPO3\CMS\Core\Resource\TextExtraction\PlainTextExtractor::class);
unset($textExtractorRegistry);

$extractorRegistry = \TYPO3\CMS\Core\Resource\Index\ExtractorRegistry::getInstance();
$extractorRegistry->registerExtractionService(\TYPO3\CMS\Core\Resource\OnlineMedia\Metadata\Extractor::class);
unset($extractorRegistry);


/**
 * Extension: extbase
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/extbase/ext_localconf.php
 */

$_EXTKEY = 'extbase';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// We set the default implementation for Storage Backend & Query Settings in Backend and Frontend.
// The code below is NO PUBLIC API!
/** @var $extbaseObjectContainer \TYPO3\CMS\Extbase\Object\Container\Container */
$extbaseObjectContainer = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\Object\Container\Container::class);
// Singleton
$extbaseObjectContainer->registerImplementation(\TYPO3\CMS\Extbase\Persistence\QueryInterface::class, \TYPO3\CMS\Extbase\Persistence\Generic\Query::class);
$extbaseObjectContainer->registerImplementation(\TYPO3\CMS\Extbase\Persistence\QueryResultInterface::class, \TYPO3\CMS\Extbase\Persistence\Generic\QueryResult::class);
$extbaseObjectContainer->registerImplementation(\TYPO3\CMS\Extbase\Persistence\PersistenceManagerInterface::class, \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager::class);
$extbaseObjectContainer->registerImplementation(\TYPO3\CMS\Extbase\Persistence\Generic\Storage\BackendInterface::class, \TYPO3\CMS\Extbase\Persistence\Generic\Storage\Typo3DbBackend::class);
$extbaseObjectContainer->registerImplementation(\TYPO3\CMS\Extbase\Persistence\Generic\QuerySettingsInterface::class, \TYPO3\CMS\Extbase\Persistence\Generic\Typo3QuerySettings::class);
unset($extbaseObjectContainer);

// Register type converters
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\ArrayConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\BooleanConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\DateTimeConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\FloatConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\IntegerConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\ObjectStorageConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\PersistentObjectConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\ObjectConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\StringConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\CoreTypeConverter::class);
// Experimental FAL<->extbase converters
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\FileConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\FileReferenceConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\FolderBasedFileCollectionConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\StaticFileCollectionConverter::class);
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(\TYPO3\CMS\Extbase\Property\TypeConverter\FolderConverter::class);

if (TYPO3_MODE === 'BE') {
    // registers Extbase at the cli_dispatcher with key "extbase".
    // Using cliKeys is deprecated as of TYPO3 v8 and will be removed in TYPO3 v9, use Configuration/Commands.php instead
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['GLOBAL']['cliKeys']['extbase'] = [
        function () {
            $bootstrap = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\Core\Bootstrap::class);
            echo $bootstrap->run('', []);
        }
    ];
    // register help command
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers'][] = \TYPO3\CMS\Extbase\Command\HelpCommandController::class;
}


/**
 * Extension: frontend
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/frontend/ext_localconf.php
 */

$_EXTKEY = 'frontend';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

if (TYPO3_MODE === 'FE' && !isset($_REQUEST['eID'])) {
    \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class)->connect(
        \TYPO3\CMS\Core\Resource\Index\MetaDataRepository::class,
        'recordPostRetrieval',
        \TYPO3\CMS\Frontend\Aspect\FileMetadataOverlayAspect::class,
        'languageAndWorkspaceOverlay'
    );
}

// Register all available content objects
$GLOBALS['TYPO3_CONF_VARS']['FE']['ContentObjects'] = array_merge($GLOBALS['TYPO3_CONF_VARS']['FE']['ContentObjects'], [
    'TEXT'             => \TYPO3\CMS\Frontend\ContentObject\TextContentObject::class,
    'CASE'             => \TYPO3\CMS\Frontend\ContentObject\CaseContentObject::class,
    'COA'              => \TYPO3\CMS\Frontend\ContentObject\ContentObjectArrayContentObject::class,
    'COA_INT'          => \TYPO3\CMS\Frontend\ContentObject\ContentObjectArrayInternalContentObject::class,
    'USER'             => \TYPO3\CMS\Frontend\ContentObject\UserContentObject::class,
    'USER_INT'         => \TYPO3\CMS\Frontend\ContentObject\UserInternalContentObject::class,
    'FILE'             => \TYPO3\CMS\Frontend\ContentObject\FileContentObject::class,
    'FILES'            => \TYPO3\CMS\Frontend\ContentObject\FilesContentObject::class,
    'IMAGE'            => \TYPO3\CMS\Frontend\ContentObject\ImageContentObject::class,
    'IMG_RESOURCE'     => \TYPO3\CMS\Frontend\ContentObject\ImageResourceContentObject::class,
    'CONTENT'          => \TYPO3\CMS\Frontend\ContentObject\ContentContentObject::class,
    'RECORDS'          => \TYPO3\CMS\Frontend\ContentObject\RecordsContentObject::class,
    'HMENU'            => \TYPO3\CMS\Frontend\ContentObject\HierarchicalMenuContentObject::class,
    'LOAD_REGISTER'    => \TYPO3\CMS\Frontend\ContentObject\LoadRegisterContentObject::class,
    'RESTORE_REGISTER' => \TYPO3\CMS\Frontend\ContentObject\RestoreRegisterContentObject::class,
    'TEMPLATE'         => \TYPO3\CMS\Frontend\ContentObject\TemplateContentObject::class,
    'FLUIDTEMPLATE'    => \TYPO3\CMS\Frontend\ContentObject\FluidTemplateContentObject::class,
    'SVG'              => \TYPO3\CMS\Frontend\ContentObject\ScalableVectorGraphicsContentObject::class,
    'EDITPANEL'        => \TYPO3\CMS\Frontend\ContentObject\EditPanelContentObject::class
]);

// Register eID provider for showpic
$GLOBALS['TYPO3_CONF_VARS']['FE']['eID_include']['tx_cms_showpic'] = \TYPO3\CMS\Frontend\Controller\ShowImageController::class . '::processRequest';

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('
	options.saveDocView = 1
	options.saveDocNew = 1
	options.saveDocNew.pages = 0
	options.saveDocNew.sys_file = 0
	options.saveDocNew.sys_file_metadata = 0
	options.disableDelete.sys_file = 1
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
    '
# Content selection
styles.content.get = CONTENT
styles.content.get {
    table = tt_content
    select {
        orderBy = sorting
        where = {#colPos}=0
    }
}


# Content element rendering
tt_content = CASE
tt_content {
    key {
        field = CType
    }
    default = TEXT
    default {
        field = CType
        htmlSpecialChars = 1
        wrap = <p style="background-color: yellow; padding: 0.5em 1em;"><strong>ERROR:</strong> Content Element with uid "{field:uid}" and type "|" has no rendering definition!</p>
        wrap.insertData = 1
    }
}
    '
);

// Registering hooks for the tree list cache
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass'][] = \TYPO3\CMS\Frontend\Hooks\TreelistCacheUpdateHooks::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processCmdmapClass'][] = \TYPO3\CMS\Frontend\Hooks\TreelistCacheUpdateHooks::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['moveRecordClass'][] = \TYPO3\CMS\Frontend\Hooks\TreelistCacheUpdateHooks::class;

// Register hook to show preview info
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['hook_previewInfo']['cms'] = \TYPO3\CMS\Frontend\Hooks\FrontendHooks::class . '->hook_previewInfo';

// Register for hookss to show preview of tt_content elements in page module
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['image'] =
    \TYPO3\CMS\Frontend\Hooks\PageLayoutView\ImagePreviewRenderer::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['textpic'] =
    \TYPO3\CMS\Frontend\Hooks\PageLayoutView\TextpicPreviewRenderer::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['text'] =
    \TYPO3\CMS\Frontend\Hooks\PageLayoutView\TextPreviewRenderer::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['textmedia'] =
    \TYPO3\CMS\Frontend\Hooks\PageLayoutView\TextmediaPreviewRenderer::class;

// Register search key shortcuts
$GLOBALS['TYPO3_CONF_VARS']['SYS']['livesearch']['content'] = 'tt_content';

// Register URL handler for external pages.
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['urlProcessing']['urlHandlers']['frontendExternalUrl'] = [
    'handler' => \TYPO3\CMS\Frontend\Page\ExternalPageUrlHandler::class,
];

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class)
    ->registerIcon(
        'wizard-backendlayout',
        \TYPO3\CMS\Core\Imaging\IconProvider\FontawesomeIconProvider::class,
        ['name' => 'table']
    );

// Include new content elements to modWizards
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend/Configuration/TSconfig/Page/Mod/Wizards/NewContentElement.txt">'
);
// Include FormEngine adjustments
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend/Configuration/TSconfig/Page/TCEFORM.txt">'
);


/**
 * Extension: fluid_styled_content
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/fluid_styled_content/ext_localconf.php
 */

$_EXTKEY = 'fluid_styled_content';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Define TypoScript as content rendering template
$GLOBALS['TYPO3_CONF_VARS']['FE']['contentRenderingTemplates'][] = 'fluidstyledcontent/Configuration/TypoScript/';


/**
 * Extension: extensionmanager
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/extensionmanager/ext_localconf.php
 */

$_EXTKEY = 'extensionmanager';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Register extension list update task
$extConf = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['extensionmanager'], ['allowed_classes' => false]);
if (empty($extConf['offlineMode'])) {
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['scheduler']['tasks'][\TYPO3\CMS\Extensionmanager\Task\UpdateExtensionListTask::class] = [
        'extension' => 'extensionmanager',
        'title' => 'LLL:EXT:extensionmanager/Resources/Private/Language/locallang.xlf:task.updateExtensionListTask.name',
        'description' => 'LLL:EXT:extensionmanager/Resources/Private/Language/locallang.xlf:task.updateExtensionListTask.description',
        'additionalFields' => '',
    ];
}

if (TYPO3_MODE === 'BE') {
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers'][] = \TYPO3\CMS\Extensionmanager\Command\ExtensionCommandController::class;
    if (!(TYPO3_REQUESTTYPE & TYPO3_REQUESTTYPE_INSTALL)) {
        $signalSlotDispatcher = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class);
        $signalSlotDispatcher->connect(
            \TYPO3\CMS\Extensionmanager\Service\ExtensionManagementService::class,
            'willInstallExtensions',
            \TYPO3\CMS\Core\Package\PackageManager::class,
            'scanAvailablePackages'
        );
        $signalSlotDispatcher->connect(
            \TYPO3\CMS\Extensionmanager\Utility\InstallUtility::class,
            'tablesDefinitionIsBeingBuilt',
            \TYPO3\CMS\Core\Cache\DatabaseSchemaService::class,
            'addCachingFrameworkRequiredDatabaseSchemaForInstallUtility'
        );
        $signalSlotDispatcher->connect(
            \TYPO3\CMS\Extensionmanager\Utility\InstallUtility::class,
            'tablesDefinitionIsBeingBuilt',
            \TYPO3\CMS\Core\Category\CategoryRegistry::class,
            'addExtensionCategoryDatabaseSchemaToTablesDefinition'
        );
        unset($signalSlotDispatcher);
    }
}

unset($extConf);


/**
 * Extension: lang
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/lang/ext_localconf.php
 */

$_EXTKEY = 'lang';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Register language update command controller
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers'][] = \TYPO3\CMS\Lang\Command\LanguageCommandController::class;


/**
 * Extension: rte_ckeditor
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/rte_ckeditor/ext_localconf.php
 */

$_EXTKEY = 'rte_ckeditor';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Register FormEngine node type resolver hook to render RTE in FormEngine if enabled
$GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['nodeResolver'][1480314091] = [
    'nodeName' => 'text',
    'priority' => 50,
    'class' => \TYPO3\CMS\RteCKEditor\Form\Resolver\RichTextNodeResolver::class,
];

if (TYPO3_MODE === 'BE' && !(TYPO3_REQUESTTYPE & TYPO3_REQUESTTYPE_CLI)) {
    \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
        \TYPO3\CMS\Core\Page\PageRenderer::class
    )->addRequireJsConfiguration([
        'shim' => [
            'ckeditor' => ['exports' => 'CKEDITOR']
        ],
        'paths' => [
            'ckeditor' => \TYPO3\CMS\Core\Utility\PathUtility::getAbsoluteWebPath(
                    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('rte_ckeditor', 'Resources/Public/JavaScript/Contrib/')
                ) . 'ckeditor'
        ]
    ]);
}

// Register the presets
if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'])) {
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:rte_ckeditor/Configuration/RTE/Default.yaml';
}
if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['minimal'])) {
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['minimal'] = 'EXT:rte_ckeditor/Configuration/RTE/Minimal.yaml';
}
if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['full'])) {
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['full'] = 'EXT:rte_ckeditor/Configuration/RTE/Full.yaml';
}


/**
 * Extension: rsaauth
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/rsaauth/ext_localconf.php
 */

$_EXTKEY = 'rsaauth';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Add the service
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addService('rsaauth', 'auth', \TYPO3\CMS\Rsaauth\RsaAuthService::class, [
    'title' => 'RSA authentication',
    'description' => 'Authenticates users by using encrypted passwords',
    'subtype' => 'processLoginDataBE,processLoginDataFE',
    'available' => true,
    'priority' => 60,
    // tx_svauth_sv1 has 50, t3sec_saltedpw has 55. This service must have higher priority!
    'quality' => 60,
    // tx_svauth_sv1 has 50. This service must have higher quality!
    'os' => '',
    'exec' => '',
    // Do not put a dependency on openssh here or service loading will fail!
    'className' => \TYPO3\CMS\Rsaauth\RsaAuthService::class
]);

// Add hook for user setup module
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/setup/mod/index.php']['setupScriptHook']['rsaauth'] = \TYPO3\CMS\Rsaauth\Hook\UserSetupHook::class . '->getLoginScripts';
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/setup/mod/index.php']['modifyUserDataBeforeSave']['rsaauth'] = \TYPO3\CMS\Rsaauth\Hook\UserSetupHook::class . '->decryptPassword';
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/backend.php']['constructPostProcess'][] = \TYPO3\CMS\Rsaauth\RsaEncryptionEncoder::class . '->enableEncryptionFromBackendControllerPostConstructor';
// Add a hook to the FE login form (felogin system extension)
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['felogin']['loginFormOnSubmitFuncs']['rsaauth'] = \TYPO3\CMS\Rsaauth\Hook\FrontendLoginHook::class . '->loginFormHook';
// Add a hook to show Backend warnings
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_befunc.php']['displayWarningMessages']['rsaauth'] = \TYPO3\CMS\Rsaauth\BackendWarnings::class;

// eID for FrontendLoginRsaPublicKey
$GLOBALS['TYPO3_CONF_VARS']['FE']['eID_include']['RsaPublicKeyGenerationController'] = \TYPO3\CMS\Rsaauth\Controller\RsaPublicKeyGenerationController::class . '::processRequest';

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class)->connect(
    \TYPO3\CMS\Backend\LoginProvider\UsernamePasswordLoginProvider::class,
    \TYPO3\CMS\Backend\LoginProvider\UsernamePasswordLoginProvider::SIGNAL_getPageRenderer,
    \TYPO3\CMS\Rsaauth\Slot\UsernamePasswordProviderSlot::class,
    'getPageRenderer'
);

// Register automatic decryption in DataHandler
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass']['rsaauth'] = \TYPO3\CMS\Rsaauth\Hook\DecryptionHook::class;

// Add own form element
$GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['nodeRegistry'][1436965601] = [
    'nodeName' => 'rsaInput',
    'priority' => '70',
    'class' => \TYPO3\CMS\Rsaauth\Form\Element\RsaInputElement::class,
];


/**
 * Extension: saltedpasswords
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/saltedpasswords/ext_localconf.php
 */

$_EXTKEY = 'saltedpasswords';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Form evaluation function for fe_users
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tce']['formevals'][\TYPO3\CMS\Saltedpasswords\Evaluation\FrontendEvaluator::class] = '';
// Form evaluation function for be_users
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tce']['formevals'][\TYPO3\CMS\Saltedpasswords\Evaluation\BackendEvaluator::class] = '';

// Hook for processing "forgotPassword" in felogin
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['felogin']['password_changed'][] = \TYPO3\CMS\Saltedpasswords\Utility\SaltedPasswordsUtility::class . '->feloginForgotPasswordHook';

// Extension may register additional salted hashing methods in this array
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/saltedpasswords']['saltMethods'] = [];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addService('saltedpasswords', 'auth', \TYPO3\CMS\Saltedpasswords\SaltedPasswordService::class, [
    'title' => 'FE/BE Authentification salted',
    'description' => 'Salting of passwords for Frontend and Backend',
    'subtype' => 'authUserFE,authUserBE',
    'available' => true,
    'priority' => 70,
    // must be higher than \TYPO3\CMS\Sv\AuthenticationService (50) and rsaauth (60) but lower than OpenID (75)
    'quality' => 70,
    'os' => '',
    'exec' => '',
    'className' => \TYPO3\CMS\Saltedpasswords\SaltedPasswordService::class
]);

// Register bulk update task
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['scheduler']['tasks'][\TYPO3\CMS\Saltedpasswords\Task\BulkUpdateTask::class] = [
    'extension' => 'saltedpasswords',
    'title' => 'LLL:EXT:saltedpasswords/Resources/Private/Language/locallang.xlf:ext.saltedpasswords.tasks.bulkupdate.name',
    'description' => 'LLL:EXT:saltedpasswords/Resources/Private/Language/locallang.xlf:ext.saltedpasswords.tasks.bulkupdate.description',
    'additionalFields' => \TYPO3\CMS\Saltedpasswords\Task\BulkUpdateFieldProvider::class
];


/**
 * Extension: backend
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/backend/ext_localconf.php
 */

$_EXTKEY = 'backend';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

if (TYPO3_MODE === 'BE') {
    \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class)->connect(
        \TYPO3\CMS\Core\Tree\TableConfiguration\DatabaseTreeDataProvider::class,
        \TYPO3\CMS\Core\Tree\TableConfiguration\DatabaseTreeDataProvider::SIGNAL_PostProcessTreeData,
        \TYPO3\CMS\Backend\Security\CategoryPermissionsAspect::class,
        'addUserPermissionsToCategoryTreeData'
    );

    $GLOBALS['TYPO3_CONF_VARS']['BE']['toolbarItems'][1435433106] = \TYPO3\CMS\Backend\Backend\ToolbarItems\ClearCacheToolbarItem::class;
    $GLOBALS['TYPO3_CONF_VARS']['BE']['toolbarItems'][1435433107] = \TYPO3\CMS\Backend\Backend\ToolbarItems\HelpToolbarItem::class;
    $GLOBALS['TYPO3_CONF_VARS']['BE']['toolbarItems'][1435433108] = \TYPO3\CMS\Backend\Backend\ToolbarItems\LiveSearchToolbarItem::class;
    $GLOBALS['TYPO3_CONF_VARS']['BE']['toolbarItems'][1435433109] = \TYPO3\CMS\Backend\Backend\ToolbarItems\ShortcutToolbarItem::class;
    $GLOBALS['TYPO3_CONF_VARS']['BE']['toolbarItems'][1435433110] = \TYPO3\CMS\Backend\Backend\ToolbarItems\SystemInformationToolbarItem::class;
    $GLOBALS['TYPO3_CONF_VARS']['BE']['toolbarItems'][1435433111] = \TYPO3\CMS\Backend\Backend\ToolbarItems\UserToolbarItem::class;

    $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['backend']['loginProviders'][1433416747] = [
        'provider' => \TYPO3\CMS\Backend\LoginProvider\UsernamePasswordLoginProvider::class,
        'sorting' => 50,
        'icon-class' => 'fa-key',
        'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang.xlf:login.link'
    ];

    $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['backend']['avatarProviders']['defaultAvatarProvider'] = [
        'provider' => \TYPO3\CMS\Backend\Backend\Avatar\DefaultAvatarProvider::class
    ];

    $GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['nodeRegistry'][1460321142] = [
        'nodeName' => 'belayoutwizard',
        'priority' => 40,
        'class' => \TYPO3\CMS\Backend\View\Wizard\Element\BackendLayoutWizardElement::class,
    ];
}

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tsfebeuserauth.php']['frontendEditingController']['default'] = \TYPO3\CMS\Core\FrontendEditing\FrontendEditingController::class;

// Register search key shortcuts
$GLOBALS['TYPO3_CONF_VARS']['SYS']['livesearch']['page'] = 'pages';

// Include base TSconfig setup
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:backend/Configuration/TSconfig/Page/Mod/Wizards/NewContentElement.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:backend/Configuration/TSconfig/User/Options.ts">');


/**
 * Extension: belog
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/belog/ext_localconf.php
 */

$_EXTKEY = 'belog';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

if (TYPO3_MODE === 'BE' && !(TYPO3_REQUESTTYPE & TYPO3_REQUESTTYPE_INSTALL)) {
    \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class)
        ->connect(
            \TYPO3\CMS\Backend\Backend\ToolbarItems\SystemInformationToolbarItem::class,
            'loadMessages',
            \TYPO3\CMS\Belog\Controller\SystemInformationController::class,
            'appendMessage'
        );
}


/**
 * Extension: beuser
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/beuser/ext_localconf.php
 */

$_EXTKEY = 'beuser';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_userauth.php']['logoff_pre_processing'][] = \TYPO3\CMS\Beuser\Hook\SwitchBackUserHook::class . '->switchBack';

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/backend.php']['constructPostProcess'][] = \TYPO3\CMS\Beuser\Hook\BackendControllerHook::class . '->addJavaScript';


/**
 * Extension: documentation
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/documentation/ext_localconf.php
 */

$_EXTKEY = 'documentation';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Open extension manual from within Extension Manager
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class)
    ->connect(
        \TYPO3\CMS\Extensionmanager\ViewHelpers\ProcessAvailableActionsViewHelper::class,
        'processActions',
        \TYPO3\CMS\Documentation\Slots\ExtensionManager::class,
        'processActions'
    );


/**
 * Extension: felogin
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/felogin/ext_localconf.php
 */

$_EXTKEY = 'felogin';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Add a default TypoScript for the CType "login"
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants(
    '
# customsubcategory=01_Storage=Storage
# customsubcategory=02_Template=Template
# customsubcategory=03_Features=Features
# customsubcategory=04_EMail=E-Mail
# customsubcategory=05_Redirects=Redirects
# customsubcategory=06_Security=Security

styles.content.loginform {
    # cat=Frontend Login/01_Storage/100; type=int+; label= Storage Folder: Define the Storage Folder with the Website User Records, using a comma separated list or single value
    pid = 0
    # cat=Frontend Login/01_Storage/101; type=boolean; label= Recursive: If set, also any subfolders of the storagePid will be used
    recursive = 0

    # cat=Frontend Login/02_Template/100; type=string; label= Login template: Enter the path for the HTML template to be used
    templateFile = EXT:felogin/Resources/Private/Templates/FrontendLogin.html
    # cat=Frontend Login/02_Template/101; type=string; label= BaseURL for generated links: Base url if something other than the system base URL is needed
    feloginBaseURL =
    # cat=Frontend Login/02_Template/102; type=string; label= Date format: Format for the link is valid until message (forget password email)
    dateFormat = Y-m-d H:i

    # cat=Frontend Login/03_Features/100; type=boolean; label= Display Password Recovery Link: If set, the section in the template to display the link to the forget password dialogue is visible.
    showForgotPasswordLink = 0
    # cat=Frontend Login/03_Features/101; type=boolean; label= Display Remember Login Option: If set, the section in the template to display the option to remember the login (with a cookie) is visible.
    showPermaLogin = 0
    # cat=Frontend Login/03_Features/102; type=boolean; label= Disable redirect after successful login, but display logout-form: If set, the logout form will be displayed immediately after successful login.
    showLogoutFormAfterLogin = 0

    # cat=Frontend Login/04_EMail/100; type=string; label= E-Mail Sender Address: E-Mail address used as sender of the change password emails
    emailFrom =
    # cat=Frontend Login/04_EMail/101; type=string; label= E-Mail Sender Name: Name used as sender of the change password emails
    emailFromName =
    # cat=Frontend Login/04_EMail/102; type=string; label= Reply To E-Mail Address: Reply-to address used in the change password emails
    replyToEmail =

    # cat=Frontend Login/05_Redirects/101; type=string; label= Redirect Mode: Comma separated list of redirect modes. Possible values: groupLogin, userLogin, login, getpost, referer, refererDomains, loginError, logout
    redirectMode =
    # cat=Frontend Login/05_Redirects/102; type=boolean; label= Use First Supported Mode from Selection: If set the first method from redirectMode which is possible will be used
    redirectFirstMethod = 0
    # cat=Frontend Login/05_Redirects/103; type=int+; label= After Successful Login Redirect to Page: Page id to redirect to after Login
    redirectPageLogin = 0
    # cat=Frontend Login/05_Redirects/104; type=int+; label= After Failed Login Redirect to Page: Page id to redirect to after Login Error
    redirectPageLoginError = 0
    # cat=Frontend Login/05_Redirects/105; type=int+; label= After Logout Redirect to Page: Page id to redirect to after Logout
    redirectPageLogout = 0
    # cat=Frontend Login/05_Redirects/106; type=boolean; label= Disable Redirect: If set redirecting is disabled
    redirectDisable = 0

    # cat=Frontend Login/06_Security/100; type=int+; label= Time in hours how long the link for forget password is valid: How many hours the link for forget password is valid
    forgotLinkHashValidTime = 12
    # cat=Frontend Login/06_Security/101; type=int+; label= Minimum amount of characters, when setting a new password: Minimum length of the new password a user sets
    newPasswordMinLength = 6
    # cat=Frontend Login/06_Security/102; type=string; label= Allowed Referrer-Redirect-Domains: Comma separated list of domains which are allowed for the referrer redirect mode
    domains =
    # cat=Frontend Login/06_Security/103; type=boolean; label= Expose existing users: Expose the information on whether or not the account for which a new password was requested exists. By default, that information is not disclosed for privacy reasons.
    exposeNonexistentUserInForgotPasswordDialog = 0
}
    '
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
    '
# Setting "felogin" plugin TypoScript
plugin.tx_felogin_pi1 = USER_INT
plugin.tx_felogin_pi1 {
    userFunc = TYPO3\CMS\Felogin\Controller\FrontendLoginController->main

    # Storage
    storagePid = {$styles.content.loginform.pid}
    recursive = {$styles.content.loginform.recursive}

    # Template
    templateFile = {$styles.content.loginform.templateFile}
    feloginBaseURL = {$styles.content.loginform.feloginBaseURL}
    dateFormat = {$styles.content.loginform.dateFormat}

    # Features
    showForgotPasswordLink = {$styles.content.loginform.showForgotPasswordLink}
    showPermaLogin = {$styles.content.loginform.showPermaLogin}
    showLogoutFormAfterLogin = {$styles.content.loginform.showLogoutFormAfterLogin}

    # E-Mail Settings
    email_from = {$styles.content.loginform.emailFrom}
    email_fromName = {$styles.content.loginform.emailFromName}
    replyTo = {$styles.content.loginform.replyToEmail}

    # Redirects
    redirectMode = {$styles.content.loginform.redirectMode}
    redirectFirstMethod = {$styles.content.loginform.redirectFirstMethod}
    redirectPageLogin = {$styles.content.loginform.redirectPageLogin}
    redirectPageLoginError = {$styles.content.loginform.redirectPageLoginError}
    redirectPageLogout = {$styles.content.loginform.redirectPageLogout}
    redirectDisable = {$styles.content.loginform.redirectDisable}

    # Security
    forgotLinkHashValidTime = {$styles.content.loginform.forgotLinkHashValidTime}
    newPasswordMinLength = {$styles.content.loginform.newPasswordMinLength}
    domains = {$styles.content.loginform.domains}
    exposeNonexistentUserInForgotPasswordDialog = {$styles.content.loginform.exposeNonexistentUserInForgotPasswordDialog}

    # should a wrapper class be set for this content element
    wrapContentInBaseClass = 1

    # typolink-configuration for links / urls
    # parameter and additionalParams are set by extension
    linkConfig {
        target =
        ATagParams = rel="nofollow"
    }

    # preserve GET vars - define "all" or comma separated list of GET-vars that should be included by link generation
    preserveGETvars = all

    welcomeHeader_stdWrap {
        required = 1
        wrap = <h3>|</h3>
        htmlSpecialChars = 1
    }
    successHeader_stdWrap < .welcomeHeader_stdWrap
    logoutHeader_stdWrap < .welcomeHeader_stdWrap
    errorHeader_stdWrap < .welcomeHeader_stdWrap
    forgotHeader_stdWrap < .welcomeHeader_stdWrap
    changePasswordHeader_stdWrap < .welcomeHeader_stdWrap

    welcomeMessage_stdWrap {
        required = 1
        wrap = <div>|</div>
        htmlSpecialChars = 1
    }
    successMessage_stdWrap < .welcomeMessage_stdWrap
    logoutMessage_stdWrap < .welcomeMessage_stdWrap
    errorMessage_stdWrap < .welcomeMessage_stdWrap
    forgotMessage_stdWrap < .welcomeMessage_stdWrap
    forgotErrorMessage_stdWrap < .welcomeMessage_stdWrap
    forgotResetMessageEmailSentMessage_stdWrap < .welcomeMessage_stdWrap
    changePasswordNotValidMessage_stdWrap < .welcomeMessage_stdWrap
    changePasswordTooShortMessage_stdWrap < .welcomeMessage_stdWrap
    changePasswordNotEqualMessage_stdWrap < .welcomeMessage_stdWrap
    changePasswordMessage_stdWrap < .welcomeMessage_stdWrap
    changePasswordDoneMessage_stdWrap < .welcomeMessage_stdWrap

    cookieWarning_stdWrap {
        required = 1
        wrap = <p style="color:red; font-weight:bold;">|</p>
        htmlSpecialChars = 1
    }

    # stdWrap for fe_users fields used in Messages
    userfields {
        username {
            htmlSpecialChars = 1
            wrap = <strong>|</strong>
        }
    }
}

# Setting "felogin" plugin TypoScript
tt_content.login =< lib.contentElement
tt_content.login {
    templateName = Generic
    variables {
        content =< plugin.tx_felogin_pi1
    }
}
    '
);

// Add login to new content element wizard
if (TYPO3_MODE === 'BE') {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
        mod.wizards.newContentElement.wizardItems.forms {
            elements.login {
                iconIdentifier = content-elements-login
                title = LLL:EXT:backend/Resources/Private/Language/locallang_db_new_content_el.xlf:forms_login_title
                description = LLL:EXT:backend/Resources/Private/Language/locallang_db_new_content_el.xlf:forms_login_description
                tt_content_defValues {
                    CType = login
                }
            }
            show :=addToList(login)
        }
    ');
}

// Page module hook
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['felogin'] = \TYPO3\CMS\Felogin\Hooks\CmsLayout::class;


/**
 * Extension: filelist
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/filelist/ext_localconf.php
 */

$_EXTKEY = 'filelist';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/backend.php']['constructPostProcess'][] = \TYPO3\CMS\Filelist\Hook\BackendControllerHook::class . '->addJavaScript';


/**
 * Extension: form
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/form/ext_localconf.php
 */

$_EXTKEY = 'form';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

call_user_func(function () {
    if (TYPO3_MODE === 'BE') {
        // Hook to enrich tt_content form flex element with finisher settings and form list drop down
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS'][\TYPO3\CMS\Core\Configuration\FlexForm\FlexFormTools::class]['flexParsing'][
            \TYPO3\CMS\Form\Hooks\DataStructureIdentifierHook::class
        ] = \TYPO3\CMS\Form\Hooks\DataStructureIdentifierHook::class;

        // Hook to count used forms elements in tt_content
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['GLOBAL']['softRefParser']['formPersistenceIdentifier'] =
            \TYPO3\CMS\Form\Hooks\SoftReferenceParserHook::class;

        // Register for hook to show preview of tt_content element of CType="form_formframework" in page module
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['form_formframework'] =
            \TYPO3\CMS\Form\Hooks\FormPagePreviewRenderer::class;

        // Add a bunch of icons to icon registry
        $iconIdentifiers = [
            'advanced-password',
            'checkbox',
            'content-element',
            'date-picker',
            'duplicate',
            'fieldset',
            'file-upload',
            'finisher',
            'form-element-selector',
            'gridcontainer',
            'gridrow',
            'hidden',
            'image-upload',
            'insert-after',
            'insert-in',
            'multi-checkbox',
            'multi-select',
            'page',
            'password',
            'radio-button',
            'single-select',
            'static-text',
            'summary-page',
            'text',
            'textarea',
            'validator'
        ];
        $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
        foreach ($iconIdentifiers as $iconIdentifier) {
            $iconRegistry->registerIcon(
                't3-form-icon-' . $iconIdentifier,
                \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
                ['source' => 'EXT:form/Resources/Public/Images/' . $iconIdentifier . '.svg']
            );
        }

        // Add new content element wizard entry
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:form/Configuration/PageTS/modWizards.ts">'
        );
    }

    if (TYPO3_MODE === 'FE') {
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/form']['afterSubmit'][1489772699]
            = \TYPO3\CMS\Form\Hooks\FormElementsOnSubmitHooks::class;

        // FE file upload processing
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/form']['afterBuildingFinished'][1489772699]
            = \TYPO3\CMS\Form\Mvc\Property\PropertyMappingConfiguration::class;

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerTypeConverter(
            \TYPO3\CMS\Form\Mvc\Property\TypeConverter\UploadedFileReferenceConverter::class
        );
    }

    // Register "formvh:" namespace
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['fluid']['namespaces']['formvh'][] = 'TYPO3\\CMS\\Form\\ViewHelpers';

    // Register FE plugin
    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
        'TYPO3.CMS.Form',
        'Formframework',
        ['FormFrontend' => 'render, perform'],
        ['FormFrontend' => 'perform'],
        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::PLUGIN_TYPE_CONTENT_ELEMENT
    );
});


/**
 * Extension: impexp
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/impexp/ext_localconf.php
 */

$_EXTKEY = 'impexp';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/backend.php']['constructPostProcess'][] = \TYPO3\CMS\Impexp\Hook\BackendControllerHook::class . '->addJavaScript';


/**
 * Extension: install
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/install/ext_localconf.php
 */

$_EXTKEY = 'install';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// TYPO3 CMS 7
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['accessRightParameters'] = \TYPO3\CMS\Install\Updates\AccessRightParametersUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['languageIsoCode'] = \TYPO3\CMS\Install\Updates\LanguageIsoCodeUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['PageShortcutParent'] = \TYPO3\CMS\Install\Updates\PageShortcutParentUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['backendShortcuts'] = \TYPO3\CMS\Install\Updates\MigrateShortcutUrlsAgainUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['processedFilesChecksum'] = \TYPO3\CMS\Install\Updates\ProcessedFileChecksumUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['filesReplacePermission'] = \TYPO3\CMS\Install\Updates\FilesReplacePermissionUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['tableCType'] = \TYPO3\CMS\Install\Updates\TableFlexFormToTtContentFieldsUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\FileListInAccessModuleListUpdate::class] = \TYPO3\CMS\Install\Updates\FileListInAccessModuleListUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\FileListIsStartModuleUpdate::class] = \TYPO3\CMS\Install\Updates\FileListIsStartModuleUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\WorkspacesNotificationSettingsUpdate::class] = \TYPO3\CMS\Install\Updates\WorkspacesNotificationSettingsUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['textmediaAssets'] = \TYPO3\CMS\Install\Updates\MigrateMediaToAssetsForTextMediaCe::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['compatibility6Extension'] = \TYPO3\CMS\Install\Updates\Compatibility6ExtractionUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['mediaceExtension'] = \TYPO3\CMS\Install\Updates\MediaceExtractionUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['openidExtension'] = \TYPO3\CMS\Install\Updates\OpenidExtractionUpdate::class;

$signalSlotDispatcher = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\SignalSlot\Dispatcher::class);
$signalSlotDispatcher->connect(
    \TYPO3\CMS\Install\Service\SqlExpectedSchemaService::class,
    'tablesDefinitionIsBeingBuilt',
    \TYPO3\CMS\Core\Cache\DatabaseSchemaService::class,
    'addCachingFrameworkRequiredDatabaseSchemaForSqlExpectedSchemaService'
);
$signalSlotDispatcher->connect(
    \TYPO3\CMS\Install\Service\SqlExpectedSchemaService::class,
    'tablesDefinitionIsBeingBuilt',
    \TYPO3\CMS\Core\Category\CategoryRegistry::class,
    'addCategoryDatabaseSchemaToTablesDefinition'
);
unset($signalSlotDispatcher);

// Do not delete this wizard. This makes sure new installations get the TER repository set in the database.
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\ExtensionManagerTables::class]
    = \TYPO3\CMS\Install\Updates\ExtensionManagerTables::class;

// Add update wizards below this line
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\WizardDoneToRegistry::class]
    = \TYPO3\CMS\Install\Updates\WizardDoneToRegistry::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\BackendUserStartModuleUpdate::class]
    = \TYPO3\CMS\Install\Updates\BackendUserStartModuleUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\FrontendUserImageUpdateWizard::class]
    = \TYPO3\CMS\Install\Updates\FrontendUserImageUpdateWizard::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\DbalAndAdodbExtractionUpdate::class]
    = \TYPO3\CMS\Install\Updates\DbalAndAdodbExtractionUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\DatabaseRowsUpdateWizard::class]
    = \TYPO3\CMS\Install\Updates\DatabaseRowsUpdateWizard::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\CommandLineBackendUserRemovalUpdate::class]
    = \TYPO3\CMS\Install\Updates\CommandLineBackendUserRemovalUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\FillTranslationSourceField::class]
    = \TYPO3\CMS\Install\Updates\FillTranslationSourceField::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\SectionFrameToFrameClassUpdate::class]
    = \TYPO3\CMS\Install\Updates\SectionFrameToFrameClassUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\SplitMenusUpdate::class]
    = \TYPO3\CMS\Install\Updates\SplitMenusUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\BulletContentElementUpdate::class]
    = \TYPO3\CMS\Install\Updates\BulletContentElementUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\UploadContentElementUpdate::class]
    = \TYPO3\CMS\Install\Updates\UploadContentElementUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\MigrateCscStaticTemplateUpdate::class]
    = \TYPO3\CMS\Install\Updates\MigrateCscStaticTemplateUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\MigrateFscStaticTemplateUpdate::class]
    = \TYPO3\CMS\Install\Updates\MigrateFscStaticTemplateUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\MigrateFeSessionDataUpdate::class]
    = \TYPO3\CMS\Install\Updates\MigrateFeSessionDataUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['compatibility7Extension']
    = \TYPO3\CMS\Install\Updates\Compatibility7ExtractionUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['formLegacyExtractionUpdate']
    = \TYPO3\CMS\Install\Updates\FormLegacyExtractionUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update']['rtehtmlareaExtension']
    = \TYPO3\CMS\Install\Updates\RteHtmlAreaExtractionUpdate::class;


/**
 * Extension: lowlevel
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/lowlevel/ext_localconf.php
 */

$_EXTKEY = 'lowlevel';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

if (TYPO3_MODE === 'BE') {
    // Setting up scripts that can be run from the cli_dispatch.phpsh script.
    // Using cliKeys is deprecated as of TYPO3 v8 and will be removed in TYPO3 v9, use Configuration/Commands.php instead
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['GLOBAL']['cliKeys']['lowlevel_cleaner'] = [
        function () {
            $cleanerObj = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Lowlevel\CleanerCommand::class);
            $cleanerObj->cli_main($_SERVER['argv']);
        }
    ];
}


/**
 * Extension: recordlist
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/recordlist/ext_localconf.php
 */

$_EXTKEY = 'recordlist';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Register default link handlers
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
    TCEMAIN.linkHandler {
        page {
            handler = TYPO3\\CMS\\Recordlist\\LinkHandler\\PageLinkHandler
            label = LLL:EXT:lang/Resources/Private/Language/locallang_browse_links.xlf:page
        }
        file {
            handler = TYPO3\\CMS\\Recordlist\\LinkHandler\\FileLinkHandler
            label = LLL:EXT:lang/Resources/Private/Language/locallang_browse_links.xlf:file
            displayAfter = page
            scanAfter = page
        }
        folder {
            handler = TYPO3\\CMS\\Recordlist\\LinkHandler\\FolderLinkHandler
            label = LLL:EXT:lang/Resources/Private/Language/locallang_browse_links.xlf:folder
            displayAfter = file
            scanAfter = file
        }
        url {
            handler = TYPO3\\CMS\\Recordlist\\LinkHandler\\UrlLinkHandler
            label = LLL:EXT:lang/Resources/Private/Language/locallang_browse_links.xlf:extUrl
            displayAfter = folder
            scanAfter = mail
        }
        mail {
            handler = TYPO3\\CMS\\Recordlist\\LinkHandler\\MailLinkHandler
            label = LLL:EXT:lang/Resources/Private/Language/locallang_browse_links.xlf:email
            displayAfter = url
        }
    }
');


/**
 * Extension: reports
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/reports/ext_localconf.php
 */

$_EXTKEY = 'reports';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['scheduler']['tasks'][\TYPO3\CMS\Reports\Task\SystemStatusUpdateTask::class] = [
    'extension' => 'reports',
    'title' => 'LLL:EXT:reports/Resources/Private/Language/locallang_reports.xlf:status_updateTaskTitle',
    'description' => 'LLL:EXT:reports/Resources/Private/Language/locallang_reports.xlf:status_updateTaskDescription',
    'additionalFields' => \TYPO3\CMS\Reports\Task\SystemStatusUpdateTaskNotificationEmailField::class
];

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_befunc.php']['displayWarningMessages']['tx_reports_WarningMessagePostProcessor'] = \TYPO3\CMS\Reports\Report\Status\WarningMessagePostProcessor::class;


/**
 * Extension: sv
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/sv/ext_localconf.php
 */

$_EXTKEY = 'sv';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Register base authentication service
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addService(
    'sv',
    'auth',
    \TYPO3\CMS\Sv\AuthenticationService::class,
    [
        'title' => 'User authentication',
        'description' => 'Authentication with username/password.',
        'subtype' => 'getUserBE,getUserFE,authUserFE,getGroupsFE,processLoginDataBE,processLoginDataFE',
        'available' => true,
        'priority' => 50,
        'quality' => 50,
        'os' => '',
        'exec' => '',
        'className' => \TYPO3\CMS\Sv\AuthenticationService::class
    ]
);


/**
 * Extension: sys_note
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/sys_note/ext_localconf.php
 */

$_EXTKEY = 'sys_note';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

// Register "switchableControllerActions" manually because there is no plugin or module for sys_note available
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['extbase']['extensions']['SysNote']['modules']['Note']['controllers'] = [
    'Note' => [
        'actions' => ['list']
    ]
];

// Hook into the list module
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['recordlist/Modules/Recordlist/index.php']['drawFooterHook']['sys_note'] = \TYPO3\CMS\SysNote\Hook\RecordListHook::class . '->render';
// Hook into the page module
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/db_layout.php']['drawFooterHook']['sys_note'] = \TYPO3\CMS\SysNote\Hook\PageHook::class . '->render';
// Hook into the info module
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/web_info/class.tx_cms_webinfo.php']['drawFooterHook']['sys_note'] = \TYPO3\CMS\SysNote\Hook\InfoModuleHook::class . '->render';


/**
 * Extension: t3editor
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3/sysext/t3editor/ext_localconf.php
 */

$_EXTKEY = 't3editor';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

if (TYPO3_MODE === 'BE') {
    // Register hooks for tstemplate module
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/template.php']['preStartPageHook'][] = \TYPO3\CMS\T3editor\Hook\TypoScriptTemplateInfoHook::class . '->preStartPageHook';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/tstemplate_info/class.tx_tstemplateinfo.php']['postOutputProcessingHook'][] = \TYPO3\CMS\T3editor\Hook\TypoScriptTemplateInfoHook::class . '->postOutputProcessingHook';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/t3editor/classes/class.tx_t3editor.php']['ajaxSaveCode']['tx_tstemplateinfo'] = \TYPO3\CMS\T3editor\Hook\TypoScriptTemplateInfoHook::class . '->save';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/t3editor/classes/class.tx_t3editor.php']['ajaxSaveCode']['file_edit'] = \TYPO3\CMS\T3editor\Hook\FileEditHook::class . '->save';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/template.php']['preStartPageHook'][] = \TYPO3\CMS\T3editor\Hook\FileEditHook::class . '->preStartPageHook';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/file_edit.php']['preOutputProcessingHook'][] = \TYPO3\CMS\T3editor\Hook\FileEditHook::class . '->preOutputProcessingHook';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/file_edit.php']['postOutputProcessingHook'][] = \TYPO3\CMS\T3editor\Hook\FileEditHook::class . '->postOutputProcessingHook';
}

$GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['nodeRegistry'][1433089350] = [
    'nodeName' => 't3editor',
    'priority' => 40,
    'class' => \TYPO3\CMS\T3editor\Form\Element\T3editorElement::class,
];


/**
 * Extension: rte_ckeditor_image
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3conf/ext/rte_ckeditor_image/ext_localconf.php
 */

$_EXTKEY = 'rte_ckeditor_image';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript(
    'rte_ckeditor_image', 'setup',
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rte_ckeditor_image/Configuration/TypoScript/ImageRendering/setup.txt">'
);


/**
 * Extension: bootstrap_package
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3conf/ext/bootstrap_package/ext_localconf.php
 */

$_EXTKEY = 'bootstrap_package';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

/***************
 * Define TypoScript as content rendering template
 */
$GLOBALS['TYPO3_CONF_VARS']['FE']['contentRenderingTemplates'][] = 'bootstrappackage/Configuration/TypoScript/';

/***************
 * Make the extension configuration accessible
 */
if (!is_array($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY])) {
    $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY] = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);
}

/***************
 * PageTS
 */

// Add Bootstrap Content Elements to newContentElement Wizard
if (!$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['disablePageTsNewContentElementWizard']) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/Mod/Wizards/newContentElement.txt">');
}

// Add Previews for Bootstrap Content Elements
if (!$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['disablePageTsTtContentPreviews']) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/Mod/WebLayout/TtContent/preview.txt">');
}

// Add BackendLayouts BackendLayouts for the BackendLayout DataProvider
if (!$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['disablePageTsBackendLayouts']) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/Mod/WebLayout/BackendLayouts.txt">');
}

// RTE
if (!$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['disablePageTsRTE']) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/RTE.txt">');
}

// TCEMAIN
if (!$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['disablePageTsTCEMAIN']) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/TCEMAIN.txt">');
}

// TCEFORM
if (!$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['disablePageTsTCEFORM']) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/TCEFORM.txt">');
}

if (TYPO3_MODE === 'BE') {
    /**
     * Provides an example .htaccess file for Apache after extension is installed and shows a warning if TYPO3 is not running on Apache.
     */
    $signalSlotDispatcher = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\SignalSlot\\Dispatcher');
    $signalSlotDispatcher->connect(
        'TYPO3\\CMS\\Extensionmanager\\Service\\ExtensionManagementService',
        'hasInstalledExtensions',
        'BK2K\\BootstrapPackage\\Service\\InstallService',
        'generateApacheHtaccess'
    );
}

/***************
 * Register hook for processing less files
 */
if (!$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['disableLessProcessing']) {
    if (TYPO3_MODE === 'FE') {
        require_once(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('bootstrap_package') . '/Contrib/less.php/Less.php');
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_pagerenderer.php']['render-preProcess'][] = 'BK2K\\BootstrapPackage\\Hooks\\PageRenderer\\PreProcessHook->execute';
    }
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['clearCachePostProc'][] = 'BK2K\\BootstrapPackage\\Hooks\\TceMain\\ClearCacheHook->clearLessCache';
}

/***************
 * Reset extConf array to avoid errors
 */
if (is_array($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY])) {
    $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY] = serialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);
}

/***************
 * Set alias for menu processor as fallback if the core menu
 * processor does not exist for TYPO3 Versions below 8.5
 */
if (!class_exists('TYPO3\CMS\Frontend\DataProcessing\MenuProcessor')) {
    class_alias(
        \BK2K\BootstrapPackage\DataProcessing\MenuProcessor::class,
        'TYPO3\CMS\Frontend\DataProcessing\MenuProcessor'
    );
}

/***************
 * Add default RTE configuration for bootstrap package
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['bootstrap'] = 'EXT:bootstrap_package/Configuration/RTE/Default.yaml';

/***************
 * Extend TYPO3 upgrade wizards to handle boostrap package specific upgrades
 */
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\TYPO3\CMS\Install\Updates\SectionFrameToFrameClassUpdate::class]
    = \BK2K\BootstrapPackage\Updates\SectionFrameToFrameClassUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\TableContentElementUpdate::class]
    = \BK2K\BootstrapPackage\Updates\TableContentElementUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\PanelContentElementUpdate::class]
    = \BK2K\BootstrapPackage\Updates\PanelContentElementUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\TexticonContentElement::class]
    = \BK2K\BootstrapPackage\Updates\TexticonContentElement::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\ListGroupContentElement::class]
    = \BK2K\BootstrapPackage\Updates\ListGroupContentElement::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\ExternalMediaContentElement::class]
    = \BK2K\BootstrapPackage\Updates\ExternalMediaContentElement::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\BulletContentElementUpdate::class]
    = \BK2K\BootstrapPackage\Updates\BulletContentElementUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\TabContentElementUpdate::class]
    = \BK2K\BootstrapPackage\Updates\TabContentElementUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\AccordionContentElementUpdate::class]
    = \BK2K\BootstrapPackage\Updates\AccordionContentElementUpdate::class;
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\BK2K\BootstrapPackage\Updates\CarouselContentElementUpdate::class]
    = \BK2K\BootstrapPackage\Updates\CarouselContentElementUpdate::class;


/**
 * Extension: news
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3conf/ext/news/ext_localconf.php
 */

$_EXTKEY = 'news';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


defined('TYPO3_MODE') or die();



$boot = function () {
    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
        'GeorgRinger.news',
        'Pi1',
        [
            'News' => 'list,detail,selectedList,dateMenu,searchForm,searchResult',
            'Category' => 'list',
            'Tag' => 'list',
        ],
        [
            'News' => 'searchForm,searchResult',
        ]
    );

    // Page module hook
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['list_type_Info']['news' . '_pi1']['news'] =
        \GeorgRinger\News\Hooks\PageLayoutView::class . '->getExtensionSummary';

    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['clearCachePostProc']['news_clearcache'] =
        \GeorgRinger\News\Hooks\DataHandler::class . '->clearCachePostProc';

    // Edit restriction for news records
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processCmdmapClass']['news'] =
        \GeorgRinger\News\Hooks\DataHandler::class;

    // FormEngine: Rendering of fields
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tceforms.php']['getSingleFieldClass']['news'] =
        \GeorgRinger\News\Hooks\FormEngine::class;

    // FormEngine: Rendering of the whole FormEngine
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tceforms.php']['getMainFieldsClass']['news'] =
        \GeorgRinger\News\Hooks\FormEngine::class;

    // Modify flexform values
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_befunc.php']['getFlexFormDSClass']['news'] =
        \GeorgRinger\News\Hooks\BackendUtility::class;
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS'][\TYPO3\CMS\Core\Configuration\FlexForm\FlexFormTools::class]['flexParsing']['news']
        = \GeorgRinger\News\Hooks\BackendUtility::class;

    // Modify flexform fields since core 8.5 via formEngine: Inject a data provider between TcaFlexPrepare and TcaFlexProcess
    if (\TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) >= 8005000) {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['formDataGroup']['tcaDatabaseRecord'][\GeorgRinger\News\Backend\FormDataProvider\NewsFlexFormManipulation::class] = [
            'depends' => [
                \TYPO3\CMS\Backend\Form\FormDataProvider\TcaFlexPrepare::class,
            ],
            'before' => [
                \TYPO3\CMS\Backend\Form\FormDataProvider\TcaFlexProcess::class,
            ],
        ];
    }

    // Hide content elements in page module for 7
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/class.db_list.inc']['makeQueryArray']['news'] =
        \GeorgRinger\News\Hooks\Backend\RecordListQueryHook::class;
    // Hide content elements in page module for 8
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['TYPO3\\CMS\\Recordlist\\RecordList\\DatabaseRecordList']['buildQueryParameters'][]
        = \GeorgRinger\News\Hooks\Backend\RecordListQueryHook8::class;

    // Inline records hook
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tceforms_inline.php']['tceformsInlineHook']['news'] =
        \GeorgRinger\News\Hooks\InlineElementHook::class;

    // Xclass InlineRecordContainer
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects'][\TYPO3\CMS\Backend\Form\Container\InlineRecordContainer::class] = [
        'className' => \GeorgRinger\News\Xclass\InlineRecordContainerForNews::class,
    ];

    /* ===========================================================================
        Custom cache, done with the caching framework
    =========================================================================== */
    if (!is_array($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_news_category'])) {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_news_category'] = [];
    }
    // Define string frontend as default frontend, this must be set with TYPO3 4.5 and below
    // and overrides the default variable frontend of 4.6
    if (!isset($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_news_category']['frontend'])) {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_news_category']['frontend'] = \TYPO3\CMS\Core\Cache\Frontend\StringFrontend::class;
    }

    /* ===========================================================================
        Add TSconfig
    =========================================================================== */
    // For linkvalidator
    if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('linkvalidator')) {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TSconfig/Page/mod.linkvalidator.txt">');
    }
    if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('guide')) {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('  <INCLUDE_TYPOSCRIPT: source="DIR:EXT:news/Configuration/TSconfig/Tours" extensions="ts">');
    }

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TSconfig/ContentElementWizard.txt">
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TSconfig/Administration.txt">
    ');

    /* ===========================================================================
        Hooks
    =========================================================================== */
    if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('realurl')) {
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration']['news'] =
            \GeorgRinger\News\Hooks\RealUrlAutoConfiguration::class . '->addNewsConfig';
    }

    // Register cache frontend for proxy class generation
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['news'] = [
        'frontend' => \TYPO3\CMS\Core\Cache\Frontend\PhpFrontend::class,
        'backend' => \TYPO3\CMS\Core\Cache\Backend\FileBackend::class,
        'groups' => [
            'all',
            'system',
        ],
        'options' => [
            'defaultLifetime' => 0,
        ]
    ];

    $GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['formDataGroup']['tcaDatabaseRecord'][\GeorgRinger\News\Backend\FormDataProvider\NewsRowInitializeNew::class] = [
        'depends' => [
            \TYPO3\CMS\Backend\Form\FormDataProvider\DatabaseRowInitializeNew::class,
        ]
    ];
    \GeorgRinger\News\Utility\ClassLoader::registerAutoloader();

    if (TYPO3_MODE === 'BE') {
        $icons = [
            'apps-pagetree-folder-contains-news' => 'ext-news-folder-tree.svg',
            'ext-news-wizard-icon' => 'plugin_wizard.svg',
            'ext-news-type-default' => 'news_domain_model_news.svg',
            'ext-news-type-internal' => 'news_domain_model_news_internal.svg',
            'ext-news-type-external' => 'news_domain_model_news_external.svg',
            'ext-news-tag' => 'news_domain_model_tag.svg',
            'ext-news-link' => 'news_domain_model_link.svg'
        ];
        $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
        foreach ($icons as $identifier => $path) {
            $iconRegistry->registerIcon(
                $identifier,
                \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
                ['source' => 'EXT:news/Resources/Public/Icons/' . $path]
            );
        }
    }

    if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dd_googlesitemap')) {
        $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['dd_googlesitemap']['sitemap']['txnews']
            = \GeorgRinger\News\Hooks\TxNewsSitemapGenerator::class . '->main';
    }

    /***************
    * Add default RTE configuration for bootstrap package
    */
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:news/Configuration/RTE/Default.yaml';
    
    
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers'][] = \GeorgRinger\News\Command\NewsImportCommandController::class;
};




$boot();
unset($boot);


/**
 * Extension: vhs
 * File: F:/xampp2/htdocs/typo3-src-8.7.4/typo3conf/ext/vhs/ext_localconf.php
 */

$_EXTKEY = 'vhs';
$_EXTCONF = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY];


if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

/**
 * Polyfill ext-mbstring if not present. Can be removed with TYPO3 8.7 minimum-compatibility.
 */
if (false === function_exists('mb_strlen') || false === function_exists('mb_chr')) {
    if (!function_exists('mb_strlen')) {
        define('MB_CASE_UPPER', 0);
        define('MB_CASE_LOWER', 1);
        define('MB_CASE_TITLE', 2);

        function mb_convert_encoding($s, $to, $from = null) { return FluidTYPO3\Vhs\Mbstring::mb_convert_encoding($s, $to, $from); }
        function mb_decode_mimeheader($s) { return FluidTYPO3\Vhs\Mbstring::mb_decode_mimeheader($s); }
        function mb_encode_mimeheader($s, $charset = null, $transferEnc = null, $lf = null, $indent = null) { return FluidTYPO3\Vhs\Mbstring::mb_encode_mimeheader($s, $charset, $transferEnc, $lf, $indent); }
        function mb_convert_case($s, $mode, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_convert_case($s, $mode, $enc); }
        function mb_internal_encoding($enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_internal_encoding($enc); }
        function mb_language($lang = null) { return FluidTYPO3\Vhs\Mbstring::mb_language($lang); }
        function mb_list_encodings() { return FluidTYPO3\Vhs\Mbstring::mb_list_encodings(); }
        function mb_encoding_aliases($encoding) { return FluidTYPO3\Vhs\Mbstring::mb_encoding_aliases($encoding); }
        function mb_check_encoding($var = null, $encoding = null) { return FluidTYPO3\Vhs\Mbstring::mb_check_encoding($var, $encoding); }
        function mb_detect_encoding($str, $encodingList = null, $strict = false) { return FluidTYPO3\Vhs\Mbstring::mb_detect_encoding($str, $encodingList, $strict); }
        function mb_detect_order($encodingList = null) { return FluidTYPO3\Vhs\Mbstring::mb_detect_order($encodingList); }
        function mb_parse_str($s, &$result = array()) { parse_str($s, $result); }
        function mb_strlen($s, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strlen($s, $enc); }
        function mb_strpos($s, $needle, $offset = 0, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strpos($s, $needle, $offset, $enc); }
        function mb_strtolower($s, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strtolower($s, $enc); }
        function mb_strtoupper($s, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strtoupper($s, $enc); }
        function mb_substitute_character($char = null) { return FluidTYPO3\Vhs\Mbstring::mb_substitute_character($char); }
        function mb_substr($s, $start, $length = 2147483647, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_substr($s, $start, $length, $enc); }
        function mb_stripos($s, $needle, $offset = 0, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_stripos($s, $needle, $offset, $enc); }
        function mb_stristr($s, $needle, $part = false, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_stristr($s, $needle, $part, $enc); }
        function mb_strrchr($s, $needle, $part = false, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strrchr($s, $needle, $part, $enc); }
        function mb_strrichr($s, $needle, $part = false, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strrichr($s, $needle, $part, $enc); }
        function mb_strripos($s, $needle, $offset = 0, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strripos($s, $needle, $offset, $enc); }
        function mb_strrpos($s, $needle, $offset = 0, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strrpos($s, $needle, $offset, $enc); }
        function mb_strstr($s, $needle, $part = false, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strstr($s, $needle, $part, $enc); }
        function mb_get_info($type = 'all') { return FluidTYPO3\Vhs\Mbstring::mb_get_info($type); }
        function mb_http_output($enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_http_output($enc); }
        function mb_strwidth($s, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_strwidth($s, $enc); }
        function mb_substr_count($haystack, $needle, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_substr_count($haystack, $needle, $enc); }
        function mb_output_handler($contents, $status) { return FluidTYPO3\Vhs\Mbstring::mb_output_handler($contents, $status); }
        function mb_http_input($type = '') { return FluidTYPO3\Vhs\Mbstring::mb_http_input($type); }
        function mb_convert_variables($toEncoding, $fromEncoding, &$a = null, &$b = null, &$c = null, &$d = null, &$e = null, &$f = null) { return FluidTYPO3\Vhs\Mbstring::mb_convert_variables($toEncoding, $fromEncoding, $a, $b, $c, $d, $e, $f); }
    }

    if (!function_exists('mb_chr')) {
        function mb_ord($s, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_ord($s, $enc); }
        function mb_chr($code, $enc = null) { return FluidTYPO3\Vhs\Mbstring::mb_chr($code, $enc); }
        function mb_scrub($s, $enc = null) { $enc = null === $enc ? mb_internal_encoding() : $enc; return mb_convert_encoding($s, $enc, $enc); }
    }
}

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['vhs']['setup'] = unserialize($_EXTCONF);
if (!isset($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['vhs']['setup']['disableAssetHandling']) || !$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['vhs']['setup']['disableAssetHandling']) {
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['usePageCache'][] = 'FluidTYPO3\\Vhs\\Service\\AssetService';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['contentPostProc-output'][] = 'FluidTYPO3\\Vhs\\Service\\AssetService->buildAllUncached';
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['clearCachePostProc'][] = 'FluidTYPO3\\Vhs\\Service\\AssetService->clearCacheCommand';
}

if (FALSE === is_array($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['vhs_main'])) {
	$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['vhs_main'] = [
		'frontend' => 'TYPO3\\CMS\\Core\\Cache\\Frontend\\StringFrontend',
		'options' => [
			'defaultLifetime' => 804600
		],
		'groups' => ['pages', 'all']
	];
}

if (FALSE === is_array($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['vhs_markdown'])) {
	$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['vhs_markdown'] = [
		'frontend' => 'TYPO3\\CMS\\Core\\Cache\\Frontend\\StringFrontend',
		'options' => [
			'defaultLifetime' => 804600
		],
		'groups' => ['pages', 'all']
	];
}

$GLOBALS['TYPO3_CONF_VARS']['SYS']['fluid']['namespaces']['v'] = ['FluidTYPO3\\Vhs\\ViewHelpers'];

// add navigtion hide, url and urltype to fix the rendering of external url doktypes
if (isset($GLOBALS['TCA']['pages']['columns']['urltype'])) {
    $GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .= (TRUE === empty($GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields']) ? '' : ',') . 'nav_hide,url,urltype';
}


#