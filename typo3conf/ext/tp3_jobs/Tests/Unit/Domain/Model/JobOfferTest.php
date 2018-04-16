<?php
namespace Tp3\Tp3Jobs\Tests\Unit\Domain\Model;

/**
 * Test case.
 *
 * @author Thomas Ruta <email@thomasruta.de>
 */
class JobOfferTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Tp3\Tp3Jobs\Domain\Model\JobOffer
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \Tp3\Tp3Jobs\Domain\Model\JobOffer();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function getTitleReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getTitle()
        );

    }

    /**
     * @test
     */
    public function setTitleForStringSetsTitle()
    {
        $this->subject->setTitle('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'title',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getDescrReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getDescr()
        );

    }

    /**
     * @test
     */
    public function setDescrForStringSetsDescr()
    {
        $this->subject->setDescr('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'descr',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getTasksReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getTasks()
        );

    }

    /**
     * @test
     */
    public function setTasksForStringSetsTasks()
    {
        $this->subject->setTasks('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'tasks',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getQualificationReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getQualification()
        );

    }

    /**
     * @test
     */
    public function setQualificationForStringSetsQualification()
    {
        $this->subject->setQualification('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'qualification',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getRefidReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getRefid()
        );

    }

    /**
     * @test
     */
    public function setRefidForStringSetsRefid()
    {
        $this->subject->setRefid('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'refid',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getContactnameReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getContactname()
        );

    }

    /**
     * @test
     */
    public function setContactnameForStringSetsContactname()
    {
        $this->subject->setContactname('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'contactname',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getContactaddressReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getContactaddress()
        );

    }

    /**
     * @test
     */
    public function setContactaddressForStringSetsContactaddress()
    {
        $this->subject->setContactaddress('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'contactaddress',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getContacttelReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getContacttel()
        );

    }

    /**
     * @test
     */
    public function setContacttelForStringSetsContacttel()
    {
        $this->subject->setContacttel('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'contacttel',
            $this->subject
        );

    }

    /**
     * @test
     */
    public function getContactmailReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getContactmail()
        );

    }

    /**
     * @test
     */
    public function setContactmailForStringSetsContactmail()
    {
        $this->subject->setContactmail('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'contactmail',
            $this->subject
        );

    }
}
