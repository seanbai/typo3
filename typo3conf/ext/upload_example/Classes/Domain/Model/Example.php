<?php
namespace Helhum\UploadExample\Domain\Model;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014 Helmut Hummel
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
 ***************************************************************/
use TYPO3\CMS\Extbase\Persistence\ObjectStorage;

/**
 *
 *
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 */
class Example extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{

    /**
     * Title
     *
     * @var string
     * @validate NotEmpty
     */
    protected $title = '';
    
        /**
     * username
     *
     * @var string
     * @validate NotEmpty
     */
    protected $username = '';
    
    /**
     * user
     *
     * @var string
     * @validate NotEmpty
     */
    protected $user = '';
    
    /**
     * Title
     *
     * @var string
     * @validate NotEmpty
     */
    protected $sex = '';
    
    /**
     * profession
     *
     * @var string
     * @validate NotEmpty
     */
    protected $profession = '';
    
    /**
     * Title
     *
     * @var string
     * @validate NotEmpty
     */
    protected $citizenship = '';
    
    /**
     * phone
     *
     * @var string
     * @validate NotEmpty
     */
    protected $phone = '';
    
    /**
     * age
     *
     * @var string
     * @validate NotEmpty
     */
    protected $age  = '';
    
    /**
     * education
     *
     * @var string
     * @validate NotEmpty
     */
    protected $education  = '';
    
    /**
     * address
     *
     * @var string
     * @validate NotEmpty
     */
    protected $address  = '';
    
    /**
     * email
     *
     * @var string
     * @validate NotEmpty
     */
    protected $email  = '';
    
    /**
     * language
     *
     * @var string
     * @validate NotEmpty
     */
    protected $language  = '';
    /**
     * language_level
     *
     * @var string
     * @validate NotEmpty
     */
    protected $languagelevel  = '';
    /**
     * school
     *
     * @var string
     * @validate NotEmpty
     */
    protected $school  = '';
    /**
     * privacy
     *
     * @var string
     * @validate NotEmpty
     */
    protected $privacy  = '';
    /**
     * content
     *
     * @var string
     * @validate NotEmpty
     */
    protected $content  = '';
    
    /**
     * Image
     *
     * @var \TYPO3\CMS\Extbase\Domain\Model\FileReference
     */
    protected $image;

    /**
     * Image
     *
     * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference>
     */
    protected $imageCollection;

    public function __construct()
    {
        $this->imageCollection = new ObjectStorage();
    }

    /**
     * Returns the title
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
    * Returns the username
     *
     * @return string $username
     * 
     * **/
    public function getUsername()
    {
        return $this->username;
    }
    /**
     * Sets the username
     *
     * @param string $username
     * @return void
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }
    
    /**
     * Returns the user
     *
     * @return string $user
     * 
     * **/
    public function getUser()
    {
        return $this->user;
    }
    /**
     * Sets the user
     *
     * @param string $user
     * @return void
     */
    public function setUser($user)
    {
        $this->user = $user;
    }
    /**
     * Sets the sex
     *
     * @param string $sex
     * @return void
     */
    public function getSex()
    {
        return $this->sex;
    }
    /**
     * Sets the sex
     *
     * @param string $sex
     * @return void
     */
    public function setSex($sex)
    {
        $this->sex = $sex;
    }
    /**
     * Sets the profession
     *
     * @param string $profession
     * @return void
     */
    public function getProfession()
    {
        return $this->profession;
    }
    /**
     * Sets the profession
     *
     * @param string $profession
     * @return void
     */
    public function setProfession($profession)
    {
        $this->profession = $profession;
    }
    /**
     * Sets the citizenship
     *
     * @param string $citizenship
     * @return void
     */
    public function getCitizenship()
    {
        return $this->citizenship;
    }
    /**
     * Sets the citizenship
     *
     * @param string $citizenship
     * @return void
     */
    public function setCitizenship($citizenship)
    {
        $this->citizenship = $citizenship;
    }
    /**
     * Sets the phone
     *
     * @param string $phone
     * @return void
     */
    public function getPhone()
    {
        return $this->phone;
    }
    /**
     * Sets the phone
     *
     * @param string $phone
     * @return void
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }
    /**
     * Sets the age
     *
     * @param string $age
     * @return void
     */
    public function getAge()
    {
        return $this->age;
    }
    /**
     * Sets the age
     *
     * @param string $age
     * @return void
     */
    public function setAge($age)
    {
        $this->age = $age;
    }
    /**
     * Sets the education
     *
     * @param string $education
     * @return void
     */
    public function getEducation()
    {
        return $this->education;
    }
    /**
     * Sets the education
     *
     * @param string $education
     * @return void
     */
    public function setEducation($education)
    {
        $this->education = $education;
    }
    /**
     * Sets the address
     *
     * @param string $address
     * @return void
     */
    public function getAddress()
    {
        return $this->address;
    }
    /**
     * Sets the address
     *
     * @param string $address
     * @return void
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }
    /**
     * Sets the email
     *
     * @param string $email
     * @return void
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
     * Sets the language
     *
     * @param string $language
     * @return void
     */
    public function getLanguage()
    {
        return $this->language;
    }
    /**
     * Sets the language
     *
     * @param string $language
     * @return void
     */
    public function setLanguage($language)
    {
        $this->language = $language;
    }
    /**
     * Sets the languagelevel
     *
     * @param string $languagelevel
     * @return void
     */
    public function getLanguagelevel()
    {
        return $this->languagelevel;
    }
    /**
     * Sets the languagelevel
     *
     * @param string $languagelevel
     * @return void
     */
    public function setLanguagelevel($languagelevel)
    {
        $this->languagelevel = $languagelevel;
    }
    /**
     * Sets the school
     *
     * @param string $school
     * @return void
     */
    public function getSchool()
    {
        return $this->school;
    }
    /**
     * Sets the school
     *
     * @param string $school
     * @return void
     */
    public function setSchool($school)
    {
        $this->school = $school;
    }
    /**
     * Sets the privacy
     *
     * @param string $privacy
     * @return void
     */
    public function getPrivacy()
    {
        return $this->privacy;
    }
    /**
     * Sets the privacy
     *
     * @param string $privacy
     * @return void
     */
    public function setPrivacy($privacy)
    {
        $this->privacy = $privacy;
    }
    /**
     * Sets the content
     *
     * @param string $content
     * @return void
     */
    public function getContent()
    {
        return $this->content;
    }
    /**
     * Sets the content
     *
     * @param string $content
     * @return void
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * Returns the image
     *
     * @return \TYPO3\CMS\Extbase\Domain\Model\FileReference $image
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Sets the image
     *
     * @param \TYPO3\CMS\Extbase\Domain\Model\FileReference $image
     * @return void
     */
    public function setImage($image)
    {
        $this->image = $image;
    }

    /**
     * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage $imageCollection
     */
    public function setImageCollection($imageCollection)
    {
        $this->imageCollection = $imageCollection;
    }

    /**
     * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage
     */
    public function getImageCollection()
    {
        return $this->imageCollection;
    }
}
