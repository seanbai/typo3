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

    public function findOffers($pid = [2038]) {
        $querySettings = $this->objectManager->get('TYPO3\\CMS\\Extbase\\Persistence\\Generic\\Typo3QuerySettings');
        $querySettings->setRespectStoragePage(true);
        $querySettings->setStoragePageIds(array($pid));
        $this->setDefaultQuerySettings($querySettings);
        //$queryResult = $this->findAll();
        //return $queryResult;*/
        $query = $this->createQuery();
        $query->matching(
                //$query->equals('ref', $customStoragePid),
                $query->logicalAnd(
                        $query->equals('hidden', 0), $query->equals('deleted', 0)
                )
        );
        //$query->setOrderings($this->orderByField('uid', $uidArray));
        return $query->execute();
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

        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title,descr,tasks,qualification,username,useremail', 'tx_tp3jobs_domain_model_joboffer', 'uid='.$uid.''
        );
        
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
    public function findInJob($uid) {
        $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;

        
        $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid,title', 'tx_tp3jobs_domain_model_joboffer', 'deleted=0 AND hidden=0 AND category in ('.$uid.')', 'uid asc'
        );
        
//        return $GLOBALS['TYPO3_DB']->debug_lastBuiltQuery;
        return $data;
    }

}
