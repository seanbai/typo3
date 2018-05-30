<?php
namespace HDNET\Importr\Controller;

use HDNET\Importr\Domain\Model\Strategy;
use HDNET\Importr\Service\ImportServiceInterface;
use TYPO3\CMS\Core\Messaging\FlashMessage;
use TYPO3\CMS\Core\Messaging\FlashMessageService;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;


/**
 * Description of ImportrController
 *
 * @author timlochmueller
 */
class ImportrController extends ActionController
{
    
    /**
     * @var \TYPO3\CMS\Core\Resource\ResourceFactory
     * @inject
     */
    protected $resourceFactory;

    /**
     * @var \HDNET\Importr\Domain\Repository\StrategyRepository
     * @inject
     */
    protected $strategyRepository;

    /**
     * @var \HDNET\Importr\Domain\Repository\ImportRepository
     * @inject
     */
    protected $importRepository;
    

    /**
     * @var \HDNET\Importr\Service\Manager
     * @inject
     */
    protected $importManager;

    /**
     * @var \HDNET\Importr\Service\ImportServiceInterface
     * @inject
     */
    protected $importService;
    
    

    
    /**
     * @return void
     */
    public function indexAction()
    {
        $combinedIdentifier = GeneralUtility::_GP('id');
        if (isset($combinedIdentifier) && is_string($combinedIdentifier)) {
            $folder = $this->resourceFactory->getFolderObjectFromCombinedIdentifier($combinedIdentifier);
            $files = [];
            foreach ($folder->getFiles() as $file) {
                $files[$file->getStorage()
                    ->getUid() . ':' . $file->getIdentifier()] = $file->getName();
            }
            $this->view->assign('folder', $files);
        }
        $this->view->assign('imports', $this->importRepository->findUserQueue());
    }

    /**
     * @param string $identifier
     */
    public function importAction($identifier)
    {
        $file = $this->resourceFactory->getObjectFromCombinedIdentifier($identifier);
        
        $this->view->assign('file', $file);
        $this->view->assign('strategies', $this->strategyRepository->findAllUser());
    }

    /**
     *
     * @param string                               $identifier
     * @param \HDNET\Importr\Domain\Model\Strategy $strategy
     *
     * @return void
     */
    public function previewAction($identifier, Strategy $strategy)
    {
        $file = $this->resourceFactory->getObjectFromCombinedIdentifier($identifier);
        $this->view->assign('filepath', $file->getPublicUrl());
        $this->view->assign('strategy', $strategy);

        $previewData = $this->importManager->getPreview($strategy, $file->getPublicUrl());
        $this->view->assign('preview', $previewData);
    }

    /**
     *
     * @param string                               $filepath
     * @param \HDNET\Importr\Domain\Model\Strategy $strategy
     *
     * @return void
     */
    public function createAction($filepath, Strategy $strategy)
    {
        
        $this->importService->addToQueue($filepath, $strategy);
        $text = 'The Import file %s width the strategy %s was successfully added to the queue';
        $message = GeneralUtility::makeInstance(
            FlashMessage::class,
            sprintf($text, $filepath, $strategy->getTitle()),
            'Import is in Queue',
            FlashMessage::INFO,
            true
        );
        
        $flashMessageService = $this->objectManager->get(
            FlashMessageService::class
        );
        $messageQueue = $flashMessageService->getMessageQueueByIdentifier();
        $messageQueue->addMessage($message);

        $this->redirect('index');
    }
    
    
    
    
}
