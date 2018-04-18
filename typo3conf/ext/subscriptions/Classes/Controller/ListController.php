<?php

namespace Subscriptions\Subscriptions\Controller;

/* * *************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2017
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 * ************************************************************* */

/**
 * ListController
 */
class ListController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

    /**
     * listRepository
     * 
     * @var \Subscriptions\Subscriptions\Domain\Repository\ListRepository
     * @inject
     */
    protected $listRepository = NULL;

    /**
     * action list
     * 
     * @param Subscriptions\Subscriptions\Domain\Model\List
     * @return void
     */
    public function listAction() {

        $products = '';
        $this->view->assign('products', $products);
    }

    public function addAction() {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $EMail['pid'] = 76;
        $EMail['email'] = $_POST['email'];
        $EMail['job_language'] = $_POST['language'];
        $EMail['time'] = time();
        $EMail['ip'] = $_SERVER["REMOTE_ADDR"];
        $EMail['md5'] = md5(md5($_POST['email']));
        
        $md5 = md5(md5($_POST['email']));

        
        $time = date("M d, Y");
        if ($GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow('uid', 'tx_subscriptions_domain_model_list', 'deleted=0 AND email="'. $_POST['email'] . '"')) {
            $uriBuilder = $this->uriBuilder;
            $uri = $uriBuilder
              ->setTargetPageUid(1)
              ->build();
            $this->redirectToUri($uri, 0, 404);
        } else {
            $mail = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Mail\\MailMessage');
            $mail->setFrom(array('18380475407@163.com' => 'Sean'));
            $mail->setTo(array('370064123@qq.com' => 'Bai'));
            $mail->setSubject('CEVA Logistics Jobmail subscription');

            $mail->setBody(
                    '<html><head></head><body>' .
                    '<style> .qmbox #outlook a{padding:0;}.qmbox body{ width:100% !important;}.qmbox .ReadMsgBody{ width:100%;}.qmbox .ExternalClass{ width:100%;}.qmbox body{ -webkit-text-size-adjust:none;}.qmbox body{ margin:0; padding:0;background: #e6e6e6;}.qmbox img{ border:0; height:auto; line-height:100%; outline:none; text-decoration:none; margin:0; display:block;}.qmbox table td{ border-collapse:collapse;}.qmbox table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }.qmbox #backgroundTable{ height:100% !important; margin:0; padding:0; width:100% !important;}.qmbox .qmbox #outlook a{padding:0;}.qmbox .qmbox body{ width:100% !important;}.qmbox .qmbox .ReadMsgBody{ width:100%;}.qmbox .qmbox .ExternalClass{ width:100%;}.qmbox .qmbox body{ -webkit-text-size-adjust:none;}.qmbox .qmbox body{ margin:0; padding:0;background: #e6e6e6;}.qmbox .qmbox img{ border:0; height:auto; line-height:100%; outline:none; text-decoration:none; margin:0; display:block;}.qmbox .qmbox table td{ border-collapse:collapse;}.qmbox .qmbox table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }.qmbox .qmbox #backgroundTable{ height:100% !important; margin:0; padding:0; width:100% !important;}</style>' .
                    '<table cellspacing="0" cellpadding="0" border="0" width="100%" class="bg-grey" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#e6e6e6;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;">' .
                    '<tbody>' .
                    '<tr>' .
                    '<td align="center" height="1" valign="middle" style="border-collapse:collapse;">&nbsp;</td>' .
                    '</tr>' .
                    '<tr>' .
                    '<td align="center" style="vertical-align:top;border-collapse:collapse;">' .
                    '<table border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">' .
                    '<tbody>' .
                    '<tr>' .
                    '<td align="left" style="border-collapse:collapse;">' .
                    '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">' .
                    '<tbody>' .
                    '<tr>' .
                    '<td style="border-collapse:collapse;">' .
                    '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">' .
                    '<tbody>' .
                    '<tr>' .
                    '<td width="180" height="60" class="bg-white" style="border-collapse:collapse;background-color:#fff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;"><a href="http://czp.xiaomaiweixin.cn" target="_blank"><img src="https://email.maximumcdn.net/ceva/ceva-logo-top.png" width="180" height="60" style="border-width:0;height:auto;line-height:100%;outline-style:none;text-decoration:none;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;display:block;"></a></td>' .
                    '<td width="420" align="right" class="bg-white" style="border-collapse:collapse;background-color:#fff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;"><p class="body-medium date" style="font-size:14px;line-height:24px;font-family:Helvetica, Arial;color:#666666;margin-right:35px;">' . $time . '</p></td>' .
                    '</tr>' .
                    '</tbody>' .
                    ' </table>' .
                    '</td>' .
                    '</tr>' .
                    '<tr>' .
                    '<td style="border-collapse:collapse;">' .
                    '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tbody><tr><td colspan="2" style="border-collapse:collapse;"><a href="http://czp.xiaomaiweixin.cn" target="_blank"><img src="https://email.maximumcdn.net/ceva/ceva-logo-btm.png" width="180" height="20" style="border-width:0;height:auto;line-height:100%;outline-style:none;text-decoration:none;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;display:block;"></a></td></tr></tbody></table>' .
                    ' </td>' .
                    '</tr>' .
                    '</tbody>' .
                    '</table>' .
                    '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">' .
                    '<tbody>' .
                    '<tr><td colspan="2" style="border-collapse:collapse;"><a><img src="https://email.maximumcdn.net/ceva/subscribe-600x325.jpg" width="600" height="325" style="border-width:0;height:auto;line-height:100%;outline-style:none;text-decoration:none;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;display:block;"></a></td></tr>' .
                    '<tr>' .
                    '<td class="main-content" style="border-collapse:collapse;padding-top:10px;padding-right:35px;padding-bottom:15px;padding-left:35px;background-color:#fff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;">' .
                    '<p class="body-small" style="font-size:13px;line-height:24px;padding-right:35px;font-family:Helvetica, Arial;color:#666666;">' . $time . '</p>' .
                    '<h1 class="h1" style="margin-bottom:20px;font-size:24px;font-family:Arial, Verdana, Sans-serif;font-weight:normal;color:#000000;"> Only one more step to take!</h1>' .
                    '<p class="body" style="font-size:15px;line-height:24px;padding-right:35px;font-family:Helvetica, Arial;color:#666666;">Thank you for signing up for our jobmail, a monthly e-mail with our latest careers. <br><br>Please click  <a href="http://typo3-demo.mez100.cn/index.php?id=75&tx_subscriptions_subscriptions%5Baction%5D=update&tx_subscriptions_subscriptions%5Bcontroller%5D=List&tx_subscriptions_subscriptions%5Bencryption%5D='.$md5.'" style="text-decoration:none;font-weight:bold;color:#990033;" target="_blank">here</a> to confirm your subscription.<br><br>Thanks in advance,<br>CEVA Logistics</p>' .
                    '</td>' .
                    '</tr>' .
                    '<tr>' .
                    '<td colspan="2" class="footer" style="border-collapse:collapse;padding-top:50px;">' .
                    '<table cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">' .
                    '<tbody>' .
                    '<tr>' .
                    '<td width="600" align="center" class="footer-icon" style="border-collapse:collapse;">' .
                    '<table cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">' .
                    '<tbody>' .
                    '<tr>' .
                    '<td width="55" style="border-collapse:collapse;"><a href="https://www.facebook.com/CEVALogistics" class="footer-icon-item" style="display:inline-block;width:55px;" target="_blank"><img src="https://email.maximumcdn.net/ceva/facebook.png" width="50" height="50" style="border-width:0;height:auto;line-height:100%;outline-style:none;text-decoration:none;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;display:block;"></a></td>' .
                    '<td width="55" style="border-collapse:collapse;"><a href="https://twitter.com/cevalogistics" class="footer-icon-item" style="display:inline-block;width:55px;" target="_blank"><img src="https://email.maximumcdn.net/ceva/twitter.png" width="50" height="50" style="border-width:0;height:auto;line-height:100%;outline-style:none;text-decoration:none;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;display:block;"></a></td>' .
                    '<td width="55" style="border-collapse:collapse;"><a href="https://www.linkedin.com/company/ceva-logistics" class="footer-icon-item" style="display:inline-block;width:55px;" target="_blank"><img src="https://email.maximumcdn.net/ceva/linkedin.png" width="50" height="50" style="border-width:0;height:auto;line-height:100%;outline-style:none;text-decoration:none;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;display:block;"></a></td>' .
                    '<td width="55" style="border-collapse:collapse;"><a href="https://www.youtube.com/user/CEVALogistics" class="footer-icon-item" style="display:inline-block;width:55px;" target="_blank"><img src="https://email.maximumcdn.net/ceva/youtube.png" width="50" height="50" style="border-width:0;height:auto;line-height:100%;outline-style:none;text-decoration:none;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;display:block;"></a></td>' .
                    '</tr>' .
                    '</tbody>' .
                    '</table>' .
                    '</td>' .
                    '</tr>' .
                    '</tbody>' .
                    '</table>' .
                    '<table cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">' .
                    '<tbody>' .
                    '<tr>' .
                    '<td width="600" align="center" class="footer-meta" style="border-collapse:collapse;padding-top:10px;">' .
                    '<p class="body-small" style="font-size:13px;line-height:24px;padding-right:35px;font-family:Helvetica, Arial;color:#666666;"> © Copyright 2016 CEVA Logistics</p>' .
                    '</td>' .
                    '</tr>' .
                    '</tbody>' .
                    '</table>' .
                    '</td>' .
                    '</tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>' .
                    '<style type="text/css">.qmbox style, .qmbox script, .qmbox head, .qmbox link, .qmbox meta {display: none !important;}</style>', 'text/html; charset=utf-8'
            );
            if ($mail->send()) {
                if ($Emailsql = $GLOBALS['TYPO3_DB']->exec_INSERTquery('tx_subscriptions_domain_model_list', $EMail)) {
                    $uriBuilder = $this->uriBuilder;
                    $uri = $uriBuilder
                      ->setTargetPageUid(77)
                      ->build();
                    $this->redirectToUri($uri, 0, 404);
                } else {
                    $uriBuilder = $this->uriBuilder;
                    $uri = $uriBuilder
                      ->setTargetPageUid(1)
                      ->build();
                    $this->redirectToUri($uri, 0, 404);
                }
            } else {
                $uriBuilder = $this->uriBuilder;
                $uri = $uriBuilder
                  ->setTargetPageUid(1)
                  ->build();
                $this->redirectToUri($uri, 0, 404);
            }
        }
    }
    public function updateAction() {
        
        $md5 = $_GET['tx_subscriptions_subscriptions']['encryption'];
        
        $status = $GLOBALS['TYPO3_DB']->exec_UPDATEquery('tx_subscriptions_domain_model_list', 'md5='.intval($md5), array('status' => 1));
        
        if($status){
            $uriBuilder = $this->uriBuilder;
                $uri = $uriBuilder
                  ->setTargetPageUid(78)
                  ->build();
                $this->redirectToUri($uri, 0, 404);
        }else{
            $uriBuilder = $this->uriBuilder;
                $uri = $uriBuilder
                  ->setTargetPageUid(1)
                  ->build();
                $this->redirectToUri($uri, 0, 404);
        }
    }
}
