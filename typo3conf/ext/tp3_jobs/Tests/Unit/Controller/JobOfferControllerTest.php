<?php
namespace Tp3\Tp3Jobs\Tests\Unit\Controller;

/**
 * Test case.
 *
 * @author Thomas Ruta <email@thomasruta.de>
 */
class JobOfferControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Tp3\Tp3Jobs\Controller\JobOfferController
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder(\Tp3\Tp3Jobs\Controller\JobOfferController::class)
            ->setMethods(['redirect', 'forward', 'addFlashMessage'])
            ->disableOriginalConstructor()
            ->getMock();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function listActionFetchesAllJobOffersFromRepositoryAndAssignsThemToView()
    {

        $allJobOffers = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $jobOfferRepository = $this->getMockBuilder(\Tp3\Tp3Jobs\Domain\Repository\JobOfferRepository::class)
            ->setMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $jobOfferRepository->expects(self::once())->method('findAll')->will(self::returnValue($allJobOffers));
        $this->inject($this->subject, 'jobOfferRepository', $jobOfferRepository);

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('jobOffers', $allJobOffers);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }

    /**
     * @test
     */
    public function showActionAssignsTheGivenJobOfferToView()
    {
        $jobOffer = new \Tp3\Tp3Jobs\Domain\Model\JobOffer();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('jobOffer', $jobOffer);

        $this->subject->showAction($jobOffer);
    }

    /**
     * @test
     */
    public function createActionAddsTheGivenJobOfferToJobOfferRepository()
    {
        $jobOffer = new \Tp3\Tp3Jobs\Domain\Model\JobOffer();

        $jobOfferRepository = $this->getMockBuilder(\Tp3\Tp3Jobs\Domain\Repository\JobOfferRepository::class)
            ->setMethods(['add'])
            ->disableOriginalConstructor()
            ->getMock();

        $jobOfferRepository->expects(self::once())->method('add')->with($jobOffer);
        $this->inject($this->subject, 'jobOfferRepository', $jobOfferRepository);

        $this->subject->createAction($jobOffer);
    }

    /**
     * @test
     */
    public function editActionAssignsTheGivenJobOfferToView()
    {
        $jobOffer = new \Tp3\Tp3Jobs\Domain\Model\JobOffer();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('jobOffer', $jobOffer);

        $this->subject->editAction($jobOffer);
    }

    /**
     * @test
     */
    public function updateActionUpdatesTheGivenJobOfferInJobOfferRepository()
    {
        $jobOffer = new \Tp3\Tp3Jobs\Domain\Model\JobOffer();

        $jobOfferRepository = $this->getMockBuilder(\Tp3\Tp3Jobs\Domain\Repository\JobOfferRepository::class)
            ->setMethods(['update'])
            ->disableOriginalConstructor()
            ->getMock();

        $jobOfferRepository->expects(self::once())->method('update')->with($jobOffer);
        $this->inject($this->subject, 'jobOfferRepository', $jobOfferRepository);

        $this->subject->updateAction($jobOffer);
    }

    /**
     * @test
     */
    public function deleteActionRemovesTheGivenJobOfferFromJobOfferRepository()
    {
        $jobOffer = new \Tp3\Tp3Jobs\Domain\Model\JobOffer();

        $jobOfferRepository = $this->getMockBuilder(\Tp3\Tp3Jobs\Domain\Repository\JobOfferRepository::class)
            ->setMethods(['remove'])
            ->disableOriginalConstructor()
            ->getMock();

        $jobOfferRepository->expects(self::once())->method('remove')->with($jobOffer);
        $this->inject($this->subject, 'jobOfferRepository', $jobOfferRepository);

        $this->subject->deleteAction($jobOffer);
    }
}
