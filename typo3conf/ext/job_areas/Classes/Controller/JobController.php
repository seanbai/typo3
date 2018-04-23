<?php

namespace Job\JobAreas\Controller;

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
 * JobController
 */
class JobController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

    

    /**
     * action list
     * 
     * @return void
     */
    public function listAction() {

        $myStoragePid = $this->configurationManager->getConfiguration(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_FRAMEWORK)['persistence']['storagePid'];
        
        
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND category='.$myStoragePid. '', 'uid asc','','0,6'
        );
        
        
        $page = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow(
            'uid,header_link', 'tt_content', 'deleted=0 AND hidden=0 AND pid='.$GLOBALS['TSFE']->id. ' AND list_type="jobareas_job" AND pages='.$myStoragePid.''
        );
//       
//        return $GLOBALS['TYPO3_DB']->debug_lastBuiltQuery;
        
        
        $this->view->assign('data', $data);
        $this->view->assign('page', $page);
    }

}
