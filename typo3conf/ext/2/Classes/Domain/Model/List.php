<?php
namespace Contact\Contact\Domain\Model;

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

class List extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{

    /**
     * firstname
     * 
     * @var string
     */
    protected $firstname = '';
    
    /**
     * lastname
     * 
     * @var string
     */
    protected $lastname = '';
    
    /**
     * email
     * 
     * @var string
     */
    protected $email = '';
    
    
    /**
     * subject
     * 
     * @var string
     */
    protected $subject = '';
    
    /**
     * message
     * 
     * @var string
     */
    protected $message = '';
    
    /**
     * createtime
     * 
     * @var string
     */
    protected $createtime = '';
    
    /**
     * __construct
     */
    public function __construct()
    {
        //Do not remove the next line: It would break the functionality
        $this->initStorageObjects();
    }
    
    /**
     * Initializes all ObjectStorage properties
     * Do not modify this method!
     * It will be rewritten on each save in the extension builder
     * You may modify the constructor of this class instead
     * 
     * @return void
     */
    protected function initStorageObjects()
    {
        
    }
    
    /**
     * Returns the firstname
     * 
     * @return string firstname
     */
    public function getFirstname()
    {
        return $this->firstname;
    }
    
    /**
     * Sets the firstname
     * 
     * @param string $firstname
     * @return void
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }
    
    /**
     * Returns the lastname
     * 
     * @return string lastname
     */
    public function getLastname()
    {
        return $this->lastname;
    }
    
    /**
     * Sets the lastname
     * 
     * @param string $lastname
     * @return void
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }
    
    /**
     * Returns the email
     * 
     * @return string $email
     */
    public function getEmail()
    {
        return $this->email;
    }
    
    /**
     * Sets the email
     * 
     * @param string $email
     * @return void
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }
    
    
    
    /**
     * Returns the subject
     * 
     * @return string $subject
     */
    public function getSubject()
    {
        return $this->subject;
    }
    
    /**
     * Sets the subject
     * 
     * @param string $subject
     * @return void
     */
    public function setSubject($subject)
    {
        $this->subject = $subject;
    }
    
    
    /**
     * Returns the message
     * 
     * @return string $message
     */
    public function getMessage()
    {
        return $this->message;
    }
    
    /**
     * Sets the message
     * 
     * @param string $message
     * @return void
     */
    public function setMessage($message)
    {
        $this->message = $message;
    }
    
    /**
     * Returns the createtime
     * 
     * @return string $createtime
     */
    public function getCreatetime()
    {
        return $this->createtime;
    }
    
    /**
     * Sets the createtime
     * 
     * @param string $createtime
     * @return void
     */
    public function setCreatetime($createtime)
    {
        $this->createtime = $createtime;
    }
}