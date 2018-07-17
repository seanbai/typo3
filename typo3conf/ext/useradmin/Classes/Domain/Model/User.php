<?php
namespace Useradmin\Useradmin\Domain\Model;

/***
 *
 * This file is part of the "UserAdmin" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018
 *
 ***/

/**
 * User
 */
class User extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{
    /**
     * user
     *
     * @var string
     */
    protected $user = '';

    /**
     * password
     *
     * @var string
     */
    protected $password = '';

    /**
     * locator
     *
     * @var string
     */
    protected $locator = '';

    /**
     * Returns the user
     *
     * @return string $user
     */
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
     * Returns the password
     *
     * @return string $password
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Sets the password
     *
     * @param string $password
     * @return void
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * Returns the locator
     *
     * @return string $locator
     */
    public function getLocator()
    {
        return $this->locator;
    }

    /**
     * Sets the locator
     *
     * @param string $locator
     * @return void
     */
    public function setLocator($locator)
    {
        $this->locator = $locator;
    }
}
