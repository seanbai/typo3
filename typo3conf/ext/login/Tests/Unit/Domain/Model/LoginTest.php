<?php
namespace Login\Login\Tests\Unit\Domain\Model;

/**
 * Test case.
 *
 * @author sean <sean.bai@silksoftware.com>
 */
class LoginTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Login\Login\Domain\Model\Login
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \Login\Login\Domain\Model\Login();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function dummyTestToNotLeaveThisFileEmpty()
    {
        self::markTestIncomplete();
    }
}
