<?php
namespace Tp3\Tp3Jobs\Tests\Unit\Domain\Model;

/**
 * Test case.
 *
 * @author Thomas Ruta <email@thomasruta.de>
 */
class CompanyTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Tp3\Tp3Jobs\Domain\Model\Company
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \Tp3\Tp3Jobs\Domain\Model\Company();
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
