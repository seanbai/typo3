<?php
namespace TYPO3\CMS\Workspaces\Controller;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Backend\View\BackendTemplateView;
use TYPO3\CMS\Core\Messaging\FlashMessage;
use TYPO3\CMS\Core\Messaging\FlashMessageService;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;
use TYPO3\CMS\Extbase\Mvc\View\ViewInterface;
use TYPO3\CMS\Extbase\Mvc\Web\Routing\UriBuilder;
use TYPO3\CMS\Workspaces\Service\StagesService;
use TYPO3\CMS\Workspaces\Service\WorkspaceService;

/**
 * Implements the preview controller of the workspace module.
 */
class PreviewController extends AbstractController
{
    /**
     * @var StagesService
     */
    protected $stageService;

    /**
     * @var WorkspaceService
     */
    protected $workspaceService;

    /**
     * Set up the doc header properly here
     *
     * @param ViewInterface $view
     */
    protected function initializeView(ViewInterface $view)
    {
        if ($view instanceof BackendTemplateView) {
            /** @var BackendTemplateView $view */
            parent::initializeView($view);
            $view->getModuleTemplate()->getDocHeaderComponent()->disable();
            $this->view->getModuleTemplate()->setFlashMessageQueue($this->controllerContext->getFlashMessageQueue());
        }
    }

    /**
     * Initializes the controller before invoking an action method.
     */
    protected function initializeAction()
    {
        parent::initializeAction();
        $this->stageService = GeneralUtility::makeInstance(StagesService::class);
        $this->workspaceService = GeneralUtility::makeInstance(WorkspaceService::class);
        $states = $this->getBackendUser()->uc['moduleData']['Workspaces']['States'];
        $this->pageRenderer->addInlineSetting('Workspaces', 'States', $states);
        $this->pageRenderer->addInlineSetting('FormEngine', 'moduleUrl', BackendUtility::getModuleUrl('record_edit'));
        $this->pageRenderer->addInlineSetting('RecordHistory', 'moduleUrl', BackendUtility::getModuleUrl('record_history'));
        // @todo this part should be done with inlineLocallanglabels
        $this->pageRenderer->addJsInlineCode('workspace-inline-code', $this->generateJavascript());
    }

    /**
     * Basically makes sure that the workspace preview is rendered.
     * The preview itself consists of three frames, so there are
     * only the frames-urls we've to generate here
     *
     * @param int $previewWS
     */
    public function indexAction($previewWS = null)
    {
        $backendUser = $this->getBackendUser();

        // Get all the GET parameters to pass them on to the frames
        $queryParameters = GeneralUtility::_GET();

        // Remove the GET parameters related to the workspaces module and the page id
        unset($queryParameters['tx_workspaces_web_workspacesworkspaces']);
        unset($queryParameters['M']);
        unset($queryParameters['id']);

        // Assemble a query string from the retrieved parameters
        $queryString = GeneralUtility::implodeArrayForUrl('', $queryParameters);

        // fetch the next and previous stage
        $workspaceItemsArray = $this->workspaceService->selectVersionsInWorkspace($this->stageService->getWorkspaceId(), ($filter = 1), ($stage = -99), $this->pageId, ($recursionLevel = 0), ($selectionType = 'tables_modify'));
        list(, $nextStage) = $this->stageService->getNextStageForElementCollection($workspaceItemsArray);
        list(, $previousStage) = $this->stageService->getPreviousStageForElementCollection($workspaceItemsArray);
        /** @var $wsService WorkspaceService */
        $wsService = GeneralUtility::makeInstance(WorkspaceService::class);
        $wsList = $wsService->getAvailableWorkspaces();
        $activeWorkspace = $backendUser->workspace;
        if (!is_null($previewWS)) {
            if (in_array($previewWS, array_keys($wsList)) && $activeWorkspace != $previewWS) {
                $activeWorkspace = $previewWS;
                $backendUser->setWorkspace($activeWorkspace);
                BackendUtility::setUpdateSignal('updatePageTree');
            }
        }
        /** @var $uriBuilder UriBuilder */
        $uriBuilder = $this->objectManager->get(UriBuilder::class);
        $wsSettingsPath = GeneralUtility::getIndpEnv('TYPO3_SITE_URL');
        $wsSettingsUri = $uriBuilder->uriFor('singleIndex', [], ReviewController::class, 'workspaces', 'web_workspacesworkspaces');
        $wsSettingsParams = '&tx_workspaces_web_workspacesworkspaces[controller]=Review';
        $wsSettingsUrl = $wsSettingsPath . $wsSettingsUri . $wsSettingsParams;
        $viewDomain = BackendUtility::getViewDomain($this->pageId);
        $wsBaseUrl = $viewDomain . '/index.php?id=' . $this->pageId . $queryString;
        // @todo - handle new pages here
        // branchpoints are not handled anymore because this feature is not supposed anymore
        if (WorkspaceService::isNewPage($this->pageId)) {
            $wsNewPageUri = $uriBuilder->uriFor('newPage', [], self::class, 'workspaces', 'web_workspacesworkspaces');
            $wsNewPageParams = '&tx_workspaces_web_workspacesworkspaces[controller]=Preview';
            $liveUrl = $wsSettingsPath . $wsNewPageUri . $wsNewPageParams . '&ADMCMD_prev=IGNORE';
        } else {
            $liveUrl = $wsBaseUrl . '&ADMCMD_noBeUser=1&ADMCMD_prev=IGNORE';
        }
        $wsUrl = $wsBaseUrl . '&ADMCMD_prev=IGNORE&ADMCMD_view=1&ADMCMD_editIcons=1&ADMCMD_previewWS=' . $backendUser->workspace;
        $backendDomain = GeneralUtility::getIndpEnv('TYPO3_HOST_ONLY');
        $splitPreviewTsConfig = BackendUtility::getModTSconfig($this->pageId, 'workspaces.splitPreviewModes');
        $splitPreviewModes = GeneralUtility::trimExplode(',', $splitPreviewTsConfig['value']);
        $allPreviewModes = ['slider', 'vbox', 'hbox'];
        if (!array_intersect($splitPreviewModes, $allPreviewModes)) {
            $splitPreviewModes = $allPreviewModes;
        }

        $wsList = $wsService->getAvailableWorkspaces();
        $activeWorkspace = $backendUser->workspace;

        $this->pageRenderer->loadRequireJsModule('TYPO3/CMS/Workspaces/Preview');
        $this->pageRenderer->addInlineSetting('Workspaces', 'SplitPreviewModes', $splitPreviewModes);

        $cssFile = 'EXT:workspaces/Resources/Public/Css/preview.css';
        $cssFile = GeneralUtility::getFileAbsFileName($cssFile);
        $this->pageRenderer->addCssFile(PathUtility::getAbsoluteWebPath($cssFile));

        $backendUser->setAndSaveSessionData('workspaces.backend_domain', GeneralUtility::getIndpEnv('TYPO3_HOST_ONLY'));

        $logoPath = GeneralUtility::getFileAbsFileName('EXT:backend/Resources/Public/Images/typo3_logo_orange.svg');
        $logoWidth = 22;
        $logoHeight = 22;

        $this->view->assignMultiple([
            'logoUrl' => PathUtility::getAbsoluteWebPath($logoPath),
            'logoLink' => TYPO3_URL_GENERAL,
            'logoWidth' => $logoWidth,
            'logoHeight' => $logoHeight,
            'liveUrl' => $liveUrl,
            'wsUrl' => $wsUrl,
            'wsSettingsUrl' => $wsSettingsUrl,
            'backendDomain' => $backendDomain,
            'activeWorkspace' => $wsList[$activeWorkspace],
            'splitPreviewModes' => $splitPreviewModes,
            'firstPreviewMode' => current($splitPreviewModes),
            'enablePreviousStageButton' => !$this->isInvalidStage($previousStage),
            'enableNextStageButton' => !$this->isInvalidStage($nextStage),
            'enableDiscardStageButton' => !$this->isInvalidStage($nextStage) || !$this->isInvalidStage($previousStage),
            'nextStage' => $nextStage['title'],
            'nextStageId' => $nextStage['uid'],
            'prevStage' => $previousStage['title'],
            'prevStageId' => $previousStage['uid'],
        ]);
        foreach ($this->getAdditionalResourceService()->getLocalizationResources() as $localizationResource) {
            $this->pageRenderer->addInlineLanguageLabelFile($localizationResource);
        }
    }

    /**
     * Evaluate the activate state based on given $stageArray.
     *
     * @param array $stageArray
     * @return bool
     */
    protected function isInvalidStage($stageArray)
    {
        return !(is_array($stageArray) && !empty($stageArray));
    }

    /**
     */
    public function newPageAction()
    {
        /** @var FlashMessage $flashMessage */
        $flashMessage = GeneralUtility::makeInstance(FlashMessage::class, $this->getLanguageService()->sL('LLL:EXT:workspaces/Resources/Private/Language/locallang.xlf:info.newpage.detail'), $this->getLanguageService()->sL('LLL:EXT:workspaces/Resources/Private/Language/locallang.xlf:info.newpage'), FlashMessage::INFO);
        /** @var $flashMessageService FlashMessageService */
        $flashMessageService = GeneralUtility::makeInstance(FlashMessageService::class);
        /** @var $defaultFlashMessageQueue \TYPO3\CMS\Core\Messaging\FlashMessageQueue */
        $defaultFlashMessageQueue = $flashMessageService->getMessageQueueByIdentifier();
        $defaultFlashMessageQueue->enqueue($flashMessage);
    }

    /**
     * Generates the JavaScript code for the backend,
     * and since we're loading a backend module outside of the actual backend
     * this copies parts of the index.php?M=main module
     *
     * @return string
     */
    protected function generateJavascript()
    {
        $backendUser = $this->getBackendUser();
        // If another page module was specified, replace the default Page module with the new one
        $newPageModule = trim($backendUser->getTSConfigVal('options.overridePageModule'));
        $pageModule = BackendUtility::isModuleSetInTBE_MODULES($newPageModule) ? $newPageModule : 'web_layout';
        if (!$backendUser->check('modules', $pageModule)) {
            $pageModule = '';
        }
        $t3Configuration = [
            'username' => htmlspecialchars($backendUser->user['username']),
            'uniqueID' => GeneralUtility::shortMD5(uniqid('', true)),
            'pageModule' => $pageModule,
            'inWorkspace' => $backendUser->workspace !== 0,
            'showRefreshLoginPopup' => isset($GLOBALS['TYPO3_CONF_VARS']['BE']['showRefreshLoginPopup']) ? (int)$GLOBALS['TYPO3_CONF_VARS']['BE']['showRefreshLoginPopup'] : false
        ];

        return '
		TYPO3.configuration = ' . json_encode($t3Configuration) . ';

		/**
		 * TypoSetup object.
		 */
		function typoSetup()	{	//
			this.username = TYPO3.configuration.username;
			this.uniqueID = TYPO3.configuration.uniqueID;
		}
		var TS = new typoSetup();
			//backwards compatibility
		';
    }

    /**
     * @return \TYPO3\CMS\Lang\LanguageService
     */
    protected function getLanguageService()
    {
        return $GLOBALS['LANG'];
    }

    /**
     * @return \TYPO3\CMS\Core\Authentication\BackendUserAuthentication
     */
    protected function getBackendUser()
    {
        return $GLOBALS['BE_USER'];
    }
}
