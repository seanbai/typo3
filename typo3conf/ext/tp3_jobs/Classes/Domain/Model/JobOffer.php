<?php
namespace Tp3\Tp3Jobs\Domain\Model;

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

/**
 * JobOffer
 */
class JobOffer extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{
    /**
     * title
     * 
     * @var string
     */
    protected $title = '';

    /**
     * descr
     * 
     * @var string
     */
    protected $descr = '';

    /**
     * tasks
     * 
     * @var string
     */
    protected $tasks = '';

    /**
     * qualification
     * 
     * @var string
     */
    protected $qualification = '';

    /**
     * refid
     * 
     * @var string
     */
    protected $refid = '';

    /**
     * contactname
     * 
     * @var string
     */
    protected $contactname = '';

    /**
     * contactaddress
     * 
     * @var string
     */
    protected $contactaddress = '';

    /**
     * contacttel
     * 
     * @var string
     */
    protected $contacttel = '';

    /**
     * contactmail
     * 
     * @var string
     */
    protected $contactmail = '';
    /**
     * date
     *
     * @var string
     */
    protected $date = '';
    
    
    /**
     * date
     *
     * @var string
     */
    protected $category = '';

    /**
     * Returns the date
     *
     * @return string $date
     */
    public function getDate()
    {
        return $this->tstamp;
    }

    /**
     * Sets the date
     *
     * @param string $date
     * @return void
     */
    public function setDate($date)
    {
        $this->tstamp = $date;
    }
    /**
     * Returns the date
     * 
     * @return string $title
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Sets the title
     * 
     * @param string $title
     * @return void
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * Returns the descr
     * 
     * @return string $descr
     */
    public function getDescr()
    {
        return $this->descr;
    }

    /**
     * Sets the descr
     * 
     * @param string $descr
     * @return void
     */
    public function setDescr($descr)
    {
        $this->descr = $descr;
    }

    /**
     * Returns the tasks
     * 
     * @return string $tasks
     */
    public function getTasks()
    {
        return $this->tasks;
    }

    /**
     * Sets the tasks
     * 
     * @param string $tasks
     * @return void
     */
    public function setTasks($tasks)
    {
        $this->tasks = $tasks;
    }

    /**
     * Returns the qualification
     * 
     * @return string $qualification
     */
    public function getQualification()
    {
        return $this->qualification;
    }

    /**
     * Sets the qualification
     * 
     * @param string $qualification
     * @return void
     */
    public function setQualification($qualification)
    {
        $this->qualification = $qualification;
    }

    /**
     * Returns the refid
     * 
     * @return string $refid
     */
    public function getRefid()
    {
        return $this->refid;
    }

    /**
     * Sets the refid
     * 
     * @param string $refid
     * @return void
     */
    public function setRefid($refid)
    {
        $this->refid = $refid;
    }

    /**
     * Returns the contactname
     * 
     * @return string $contactname
     */
    public function getContactname()
    {
        return $this->contactname;
    }

    /**
     * Sets the contactname
     * 
     * @param string $contactname
     * @return void
     */
    public function setContactname($contactname)
    {
        $this->contactname = $contactname;
    }

    /**
     * Returns the contactaddress
     * 
     * @return string $contactaddress
     */
    public function getContactaddress()
    {
        return $this->contactaddress;
    }

    /**
     * Sets the contactaddress
     * 
     * @param string $contactaddress
     * @return void
     */
    public function setContactaddress($contactaddress)
    {
        $this->contactaddress = $contactaddress;
    }

    /**
     * Returns the contacttel
     * 
     * @return string $contacttel
     */
    public function getContacttel()
    {
        return $this->contacttel;
    }

    /**
     * Sets the contacttel
     * 
     * @param string $contacttel
     * @return void
     */
    public function setContacttel($contacttel)
    {
        $this->contacttel = $contacttel;
    }

    /**
     * Returns the contactmail
     * 
     * @return string $contactmail
     */
    public function getContactmail()
    {
        return $this->contactmail;
    }

    /**
     * Sets the contactmail
     * 
     * @param string $contactmail
     * @return void
     */
    public function setContactmail($contactmail)
    {
        $this->contactmail = $contactmail;
    }
    
    /**
     * Returns the category
     * 
     * @return string $category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Sets the category
     * 
     * @param string $category
     * @return void
     */
    public function setCategory($category)
    {
        $this->category = $category;
    }
}
