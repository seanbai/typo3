<?php
namespace Tp3\Tp3Jobs\Controller;

/***
 *
 * This file is part of the "tp3 Jobs" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018 Thomas Ruta <email@thomasruta.de>, tp3
 *
 ***/
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Utility\LocalizationUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface;

/**
 * JobOfferController
 */
class JobOfferController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * Contains the settings of the current extension
     *
     * @var array
     * @api
     */
    protected $settings;

    /**
     * @var \TYPO3\CMS\Extbase\Persistence\PersistenceManagerInterface
     */
    protected $persistenceManager;

    /**
     * @var \TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface
     *
     */
    protected $configurationManager;


    /**
     *
     * @var \TYPO3\CMS\Core\Page\PageRenderer
     */

    protected $pageRenderer;

    /**
    /**
     *
     * @var \TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer
     */
    protected  $cObjRenderer;


    /**
     * @var string
     */
    protected $entityNotFoundMessage = 'The requested entity could not be found.';

    /**
     * @var string
     */
    protected $unknownErrorMessage = 'System ererr';

    /**
     * jobOfferRepository
     * 
     * @var \Tp3\Tp3Jobs\Domain\Repository\JobOfferRepository
     * @inject
     */
    protected $jobOfferRepository = null;

    /**
     * @param \TYPO3\CMS\Extbase\Mvc\RequestInterface $request
     * @param \TYPO3\CMS\Extbase\Mvc\ResponseInterface $response
     *  @return void
     * @throws \Exception
     * @override \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
     */
    public function processRequest(\TYPO3\CMS\Extbase\Mvc\RequestInterface $request, \TYPO3\CMS\Extbase\Mvc\ResponseInterface $response) {
        if (count($request->getArguments())> 0 &&  $request->hasArgument("jobid") && $request->getArgument("jobid") > 0   ) {
           $jobid = $request->getArgument("jobid");
        }
        try {
            parent::processRequest($request, $response);
        }
        catch(\TYPO3\CMS\Extbase\Property\Exception $e) {
            if ($e->getPrevious() instanceof \TYPO3\CMS\Extbase\Property\Exception\InvalidPropertyException) {
                $GLOBALS['TSFE']->pageNotFoundAndExit('404');
            } else {
                throw $e;
            }
        }
    }
    /**
     * @return void
     * @override \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
     */
    protected function callActionMethod() {
        try {
            parent::callActionMethod();
        }
        catch(\Exception $exception) {
            if ($exception instanceof \TYPO3\CMS\Core\Error\Http\PageNotFoundException) {
                $GLOBALS['TSFE']->pageNotFoundAndExit($this->entityNotFoundMessage);
            }
            if (isset($this->settings['usePageUnavailableHandler']) && $this->settings['usePageUnavailableHandler']) {
                $GLOBALS['TSFE']->pageUnavailableAndExit($this->unknownErrorMessage, 'HTTP/1.1 500 Internal Server Error');
            }
           if ($this->response instanceof \TYPO3\CMS\Extbase\Mvc\Web\Response) {
                $this->response->setStatus(500);
            }
            $this->response->appendContent($this->unknownErrorMessage);
        }
    }
    /**
     * action list
     * 
     * @return void
     */
    public function listAction()
    {
        $storagePid = $this->configurationManager->getConfiguration(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_FRAMEWORK)['persistence']['storagePid'];
        
        $jobOffers = $this->jobOfferRepository->findOffers($storagePid > 0  ? $storagePid :  $GLOBALS["TSFE"]->page["uid"] );
        
        $jobCategoty = $this->jobOfferRepository->findCategoty();
        
        
        $this->view->assign('jobCategoty', $jobCategoty);
        $this->view->assign('jobOffers', $jobOffers);
    }

    /**
     * action show
     * 
     * @param  \Tp3\Tp3Jobs\Domain\Model\JobOffer $jobOffer
     * @return void
     */
    public function showAction( )
    {
        $uid = $_GET['tx_tp3jobs_offers']['id'];
        
        
        $jobOffer = $this->jobOfferRepository->findShow($uid);
        
        
        $this->view->assign('jobOffers', current($jobOffer));
        
    }

    
    /**
     * action new
     * 
     * @return void
     */
    public function ajaxAction()
    {
        $storagePid = $this->configurationManager->getConfiguration(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_FRAMEWORK)['persistence']['storagePid'];
        header('Content-Type: application/json');
        
        $data = substr($_POST['data'],0,-1);
        
        if($data){
            $jobOffer = $this->jobOfferRepository->findInJob($data);
        }else{
            $jobOffer = $this->jobOfferRepository->findOffers($storagePid > 0  ? $storagePid :  $GLOBALS["TSFE"]->page["uid"] );
        }
        
        $jobCategoty = $this->jobOfferRepository->findCategoty();
        
        $this->view->assign('jobCategoty', $jobCategoty);
        $this->view->assign('jobOffers', $jobOffer);
        
        
        
    }
    
    /**
     * action new
     * 
     * @return void
     */
    public function newAction()
    {

    }

    
    
    
    
    
}
