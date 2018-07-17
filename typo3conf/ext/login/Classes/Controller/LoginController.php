<?php
namespace Login\Login\Controller;

/***
 *
 * This file is part of the "Login" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018 sean &lt;sean.bai@silksoftware.com&gt;, sean.bai
 *
 ***/

/**
 * LoginController
 */
class LoginController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * loginRepository
     *
     * @var \Login\Login\Domain\Repository\LoginRepository
     * @inject
     */
    protected $loginRepository = null;

    /**
     * action list
     *
     * @return void
     */
    public function listAction()
    {

        $session = $GLOBALS["TSFE"]->fe_user->getKey("ses","key");

        if($session){
            $this->redirect('show', NULL, NULL, array('blog' => '123'));
        }

        $this->view->assign('list', '123');


    }

    /**
     * action show
     *
     * @param \Login\Login\Domain\Model\Login $login
     * @return void
     */
    public function showAction()
    {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $username = $_POST['username'];
        $password = $_POST['password'];

        $station = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow('uid,locator', 'tx_useradmin_domain_model_user', 'user="'.$username.'" AND password="'.$password.'"');

        if($station){
            $GLOBALS['TSFE']->fe_user->setKey("ses","key", $station['uid']);
        }

        $session = $GLOBALS["TSFE"]->fe_user->getKey("ses","key");

        if(!$session){
            $uriBuilder = $this->uriBuilder;
            $uri = $uriBuilder
                ->setTargetPageUid(91)
                ->build();
            $this->redirectToUri($uri, 0, 404);
        }else{
            $user = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow('uid,locator', 'tx_useradmin_domain_model_user', 'uid='.$session);
        }



        $data['local'] = $_POST['local'];
        $data['category'] = $_POST['category'];
        $data['site'] = $_POST['site'];
        $data['xueni'] = $_POST['xueni'];

        if($session){
            $locale = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                'uid,title', 'sys_category', 'deleted=0 AND hidden=0 AND uid in ('.$user['locator'].')'
            );
        }else{
            $locale = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                'uid,title', 'sys_category', 'deleted=0 AND hidden=0 AND parent=3'
            );
        }



        $category = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title', 'pages', 'deleted=0 AND hidden=0 AND pid=52'
        );

        $html = '';
        if($data['local']!=0){
            $html .= '  AND  station='.$data['local'].'';
        }
        if($data['category']!=0){
            $html .= '  AND  categoryuid='.$data['category'].'';
        }
        if($data['site']==0){

        }elseif ($data['site']==1){
            $html .= '  AND  age<20';
        }elseif ($data['site']==2){
            $html .= '  AND age>19 AND age<30';
        }elseif ($data['site']==3){
            $html .= '  AND age>30 AND age<40';
        }elseif ($data['site']==4){
            $html .= '  AND age>40 AND age<50';
        }elseif ($data['site']==5){
            $html .= '  AND age>50';
        }

        if($data['xueni']!=0){
            $html .= '  AND education='.$data['xueni'].'';
        }


        $list = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            '*', 'tx_uploadexample_domain_model_example', 'deleted=0 AND hidden=0 AND pid=86 '.$html
        );

//        echo $GLOBALS['TYPO3_DB']->debug_lastBuiltQuery;


        for($i=0;$i<count($list);$i++){
            $station = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow('title', 'sys_category', 'uid='.$list[$i]['station']);
            $list[$i]['calost'] = $station['title'];
        }



        $this->view->assign('data', $data);
        $this->view->assign('locator', $station['locator']);
        $this->view->assign('locale', $locale);
        $this->view->assign('category', $category);
        $this->view->assign('list', $list);

    }

    /**
     * action new
     *
     * @return void
     */
    public function newAction()
    {
        $uid = $_GET['tx_login_login']['datauid'];
        $table = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow('*', 'tx_uploadexample_domain_model_example','uid='.$uid);

        $time = date('Ymdhis',time());

        $this->view->assign('time', $time);
        $this->view->assign('table', $table);

    }

    /**
     * action create
     *
     * @param \Login\Login\Domain\Model\Login $newLogin
     * @return void
     */
    public function createAction(\Login\Login\Domain\Model\Login $newLogin)
    {
        $this->addFlashMessage('The object was created. Please be aware that this action is publicly accessible unless you implement an access check. See https://docs.typo3.org/typo3cms/extensions/extension_builder/User/Index.html', '', \TYPO3\CMS\Core\Messaging\AbstractMessage::WARNING);
        $this->loginRepository->add($newLogin);
        $this->redirect('list');
    }

    /**
     * action edit
     *
     * @param \Login\Login\Domain\Model\Login $login
     * @ignorevalidation $login
     * @return void
     */
    public function editAction(\Login\Login\Domain\Model\Login $login)
    {
        $this->view->assign('login', $login);
    }

    /**
     * action update
     *
     * @param \Login\Login\Domain\Model\Login $login
     * @return void
     */
    public function updateAction(\Login\Login\Domain\Model\Login $login)
    {
        $this->addFlashMessage('The object was updated. Please be aware that this action is publicly accessible unless you implement an access check. See https://docs.typo3.org/typo3cms/extensions/extension_builder/User/Index.html', '', \TYPO3\CMS\Core\Messaging\AbstractMessage::WARNING);
        $this->loginRepository->update($login);
        $this->redirect('list');
    }

    /**
     * action delete
     *
     * @param \Login\Login\Domain\Model\Login $login
     * @return void
     */
    public function deleteAction(\Login\Login\Domain\Model\Login $login)
    {
        $this->addFlashMessage('The object was deleted. Please be aware that this action is publicly accessible unless you implement an access check. See https://docs.typo3.org/typo3cms/extensions/extension_builder/User/Index.html', '', \TYPO3\CMS\Core\Messaging\AbstractMessage::WARNING);
        $this->loginRepository->remove($login);
        $this->redirect('list');
    }
}
