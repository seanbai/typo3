<?php
namespace Useradmin\Useradmin\Tests\Unit\Domain\Model;

/**
 * Test case.
 */
class UserTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Useradmin\Useradmin\Domain\Model\User
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \Useradmin\Useradmin\Domain\Model\User();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function getUserReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getUser()
        );

    }

    /**
     * @test
     */
    public function setUserForStringSetsUser()
    {
        $this->subject->setUser('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'user',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getPasswordReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getPassword()
        );

    }

    /**
     * @test
     */
    public function setPasswordForStringSetsPassword()
    {
        $this->subject->setPassword('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'password',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getLocatorReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getLocator()
        );

    }

    /**
     * @test
     */
    public function setLocatorForStringSetsLocator()
    {
        $this->subject->setLocator('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'locator',
            $this->subject
        );

    }
}
