<?php

namespace Tp3\Tp3Jobs\Domain\Repository;

/* * *
 *
 * This file is part of the "tp3 Jobs" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018 Thomas Ruta <email@thomasruta.de>, tp3
 *
 * * */

/**
 * The repository for JobOffers
 */
class JobOfferRepository extends \TYPO3\CMS\Extbase\Persistence\Repository {
    /*     * *
     * Returns all objects of this repository.
     *
     * @return QueryResultInterface|array
     *
     */

    public function findOffers($pid = [2038],$station) {
        
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;
        
        if($station != 0){
            $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                'uid,title,hours,station,category', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND station = '.$station.' AND pid='.$pid. '', 'uid asc'
            );
        }else{
            $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                'uid,title,hours,station,category', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND pid='.$pid. '', 'uid asc'
            );
        }
        
        for ($i = 0; $i < count($data); $i++) {
            $count[$i] = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow (
                'title', 'sys_category', 'uid='.$data[$i]['station']
            );
            $data[$i]['station'] = $count[$i]['title'];
            
            $pages[$i] = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow (
                'title', 'pages', 'uid='.$data[$i]['category']
            );
            $data[$i]['category'] = $pages[$i]['title'];
        }
        
        
        return $data;
        
    }

    /*     * *
     * Returns the job of the repository.
     *
     * @param $uid
     * @return QueryResultInterface|array
     *
     */
    public function findJob($uid) {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        
        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND category='.$uid. '', 'uid asc'
        );
        
//            return $GLOBALS['TYPO3_DB']->debug_lastBuiltQuery;
        return $data;
    }
    
    
    /*     * *
     * Returns the job of the repository.
     *
     * @param $uid
     * @return QueryResultInterface|array
     *
     */
    public function findShow($uid) {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow(
            'uid,title,descr,tasks,qualification,category,username,useremail,hours,station', 'tx_tp3jobs_domain_model_joboffer', 'uid='.$uid.''
        );
        $station = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow (
            'title', 'sys_category', 'uid='.$data['station']
        );
        $data['station'] = $station['title'];
        $pages = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow (
            'title', 'pages', 'uid='.$data['category']
        );
        $data['category'] = $pages['title'];

        
        return $data;
    }
    
    /*     * *
     * Returns all objects of this categoty.
     *
     * @return QueryResultInterface|array
     *
     */

    public function findCategoty() {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;


        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title', 'pages', 'deleted=0 AND hidden=0 AND pid=52', '', 'uid asc'
        );

        for ($i = 0; $i < count($data); $i++) {
            $count[$i] = $GLOBALS['TYPO3_DB']->exec_SELECTcountRows(
                '*', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND category='.$data[$i]['uid']
            );
            $data[$i]['count'] = $count[$i];
        }
        
        return $data;
    }
    
    /*     * *
     * Returns the job of the repository.
     *
     * @param $uid
     * @return QueryResultInterface|array
     *
     */
    public function findInJob($uid,$station) {
        
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        if($station){
            $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                'uid,title,hours,station,category', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND station='.$station.'  AND category in ('.$uid.')', 'uid asc'
            );
        }else{
            $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                'uid,title,hours,station,category', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0  AND category in ('.$uid.')', 'uid asc'
            );
        }
        
        for ($i = 0; $i < count($data); $i++) {
            $count[$i] = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow (
                'title', 'sys_category', 'uid='.$data[$i]['station']
            );
            $data[$i]['station'] = $count[$i]['title'];
            
            $pages[$i] = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow (
                'title', 'pages', 'uid='.$data[$i]['category']
            );
            $data[$i]['category'] = $pages[$i]['title'];
        }

        return $data;
    }
    
    
    /*     * *
     * Returns all objects of this categoty.
     *
     * @return QueryResultInterface|array
     *
     */

    public function findPages($uid) {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title', 'pages', 'deleted=0 AND hidden=0 AND uid='.$uid
        );

        return $data;
    }
    
    public function findStation() {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title', 'sys_category', 'deleted=0 AND hidden=0 AND parent=3', '', 'uid asc'
        );
        
        for ($i = 0; $i < count($data); $i++) {
            $count[$i] = $GLOBALS['TYPO3_DB']->exec_SELECTcountRows(
                '*', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND station='.$data[$i]['uid']
            );
            $data[$i]['count'] = $count[$i];
        }
        
        
//            return $GLOBALS['TYPO3_DB']->debug_lastBuiltQuery;
        return $data;
    }
    
    public function thisStation($uid){
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow(
            'uid,title', 'sys_category', 'deleted=0 AND hidden=0 AND uid='.$uid
        );
       return $data;
    }
    
    /*     * *
     * Returns all objects of this categoty.
     *
     * @return QueryResultInterface|array
     *
     */

    public function findformtitle($uid) {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetSingleRow(
            'uid,title', 'tx_tp3jobs_domain_model_joboffer', 'uid='.$uid
        );

        return $data;
    }
    
}
