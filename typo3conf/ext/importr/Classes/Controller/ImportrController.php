<?php

namespace HDNET\Importr\Controller;

use HDNET\Importr\Domain\Model\Strategy;
use HDNET\Importr\Service\ImportServiceInterface;
use TYPO3\CMS\Core\Messaging\FlashMessage;
use TYPO3\CMS\Core\Messaging\FlashMessageService;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use TYPO3\CMS\Extbase\Persistence\Generic\Query;
use TYPO3\CMS\Extbase\Persistence\Repository;

require_once(__DIR__ . '/../../Resources/Private/Classes/PHPExcel/IOFactory.php');

/**
 * Description of ImportrController
 *
 * @author timlochmueller
 */
class ImportrController extends ActionController {

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

    public function listAction() {
        
    }

    public function spareAction() {
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
     * @return void
     */
    public function indexAction() {
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
    public function importAction($identifier) {
        $file = $this->resourceFactory->getObjectFromCombinedIdentifier($identifier);

        $this->view->assign('file', $file);
        $this->view->assign('filepath', $file->getPublicUrl());
    }

    /**
     * @param string $identifier
     */
    public function importsAction($identifier) {
        $file = $this->resourceFactory->getObjectFromCombinedIdentifier($identifier);

        $this->view->assign('file', $file);
        $this->view->assign('filepath', $file->getPublicUrl());
    }

    /**
     *
     * @param string                               $identifier
     * @param \HDNET\Importr\Domain\Model\Strategy $strategy
     *
     * @return void
     */
    public function previewAction($identifier, Strategy $strategy) {
        $file = $this->resourceFactory->getObjectFromCombinedIdentifier($identifier);
        $this->view->assign('filepath', $file->getPublicUrl());
        $this->view->assign('strategy', $strategy);

        $previewData = $this->importManager->getPreview($strategy, $file->getPublicUrl());
        $this->view->assign('preview', $previewData);
    }

    public function getalphnum($char) {
        $array = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        $cha = strtolower($char);
        $len = strlen($cha);
        for ($i = 0; $i < $len; $i++) {
            $index = array_search($cha[$i], $array);
            $sum += ($index + 1) * pow(26, $len - $i - 1);
        }

        return $sum;
    }

    function trimall($str) {
        $qian = array(" ", "　","　 ","　  ", "\t", "\n", "\r");
        return str_replace($qian, '', $str);
    }

    /**
     *
     * @param string                               $filepath
     * @param \HDNET\Importr\Domain\Model\Strategy $strategy
     *
     * @return void
     */
    public function createAction($filepath) {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $reader = \PHPExcel_IOFactory::createReader('Excel2007'); // 读取 excel 文档
        $PHPExcel = \PHPExcel_IOFactory::load(PATH_site . $filepath); // 文档名称
        $sheet = $PHPExcel->getSheet(0); // 读取第一个工作表(编号从 0 开始)
        $highestRow = $sheet->getHighestRow(); // 取得总行数
        $highestColumn = $sheet->getHighestColumn(); // 取得总列数
        $Columcount = $this->getalphnum($highestColumn);

        $html = '';
        for ($row = 2; $row <= $highestRow; $row++) {
            $data['pid'] = '57';
            $data['sys_language_uid'] = '0';
            $data['cruser_id'] = '1';
            $data['tstamp'] = time();
            $data['crdate'] = time();
            $data['title'] = addslashes($sheet->getCellByColumnAndRow(1, $row)->getValue());    //title
            $data['descr'] = addslashes($sheet->getCellByColumnAndRow(2, $row)->getValue());    //descr
            $data['tasks'] = $sheet->getCellByColumnAndRow(3, $row)->getValue();    //tasks
            $data['qualification'] = $sheet->getCellByColumnAndRow(4, $row)->getValue();    //qualification
            $data['username'] = addslashes($sheet->getCellByColumnAndRow(5, $row)->getValue());    //username
            $data['useremail'] = addslashes($sheet->getCellByColumnAndRow(6, $row)->getValue());    //useremail
            $data['hours'] = addslashes($sheet->getCellByColumnAndRow(7, $row)->getValue());    //hours工作时间
            $data['station'] = addslashes($sheet->getCellByColumnAndRow(8, $row)->getValue());    //station地区
            $data['category'] = addslashes($sheet->getCellByColumnAndRow(9, $row)->getValue());    //category类别
            
            $insert = $GLOBALS['TYPO3_DB']->exec_INSERTquery('tx_tp3jobs_domain_model_joboffer', $data);
          
            // Log message
            if (!$insert) {
                $html .= '<span class="label label-danger"> "' . $data['title'] . '" ,Import error</span><br/>';
            } 
        }
        
        if(!$html){
            $html .=  '<span class="label label-success">Import Success</span><br/>';
        }
        
        $this->view->assign('html', $html);
    }

    function multAction($array) {
        $return = array();
        foreach ($array as $key => $v) {
            if (!in_array($v, $return)) {
                $return[$key] = $v;
            }
        }
        return $return;
    }

    /**
     *
     * @param string                               $filepath
     * @param \HDNET\Importr\Domain\Model\Strategy $strategy
     *
     * @return void
     */
    public function cspareAction($filepath) {
        
    }

}
