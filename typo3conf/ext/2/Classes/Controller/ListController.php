<?php
namespace Contact\Contact\Controller;

/***
 *
 * This file is part of the "Contact" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018
 *
 ***/

/**
 * ListController
 */
class ListController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * action list
     * 
     * @return void
     */
    public function listAction()
    {
        $lists = '';
        $this->view->assign('lists', $lists);
    }
    
    
    public function addAction()
    {
        $data['pid'] = 82;
        $data['firstname'] = $_POST['firstname'];
        $data['lastname'] = $_POST['lastname'];
        $data['email'] = $_POST['email'];
        $data['subject'] = $_POST['subject'];
        $data['message'] = $_POST['message'];
        $data['createtime'] = date("Y-m-d H:i:s");
        
        $datalist = $GLOBALS['TYPO3_DB']->exec_INSERTquery('tx_contact_domain_model_list', $data);
        
        $uriBuilder = $this->uriBuilder;
        $uri = $uriBuilder
          ->setTargetPageUid(80)
          ->build();
        $this->redirectToUri($uri, 0, 404);
    }
}
