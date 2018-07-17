<?php
namespace Login\Login\Tests\Unit\Controller;

/**
 * Test case.
 *
 * @author sean <sean.bai@silksoftware.com>
 */
class LoginControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Login\Login\Controller\LoginController
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder(\Login\Login\Controller\LoginController::class)
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
    public function listActionFetchesAllLoginsFromRepositoryAndAssignsThemToView()
    {

        $allLogins = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $loginRepository = $this->getMockBuilder(\Login\Login\Domain\Repository\LoginRepository::class)
            ->setMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $loginRepository->expects(self::once())->method('findAll')->will(self::returnValue($allLogins));
        $this->inject($this->subject, 'loginRepository', $loginRepository);

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('logins', $allLogins);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }

    /**
     * @test
     */
    public function showActionAssignsTheGivenLoginToView()
    {
        $login = new \Login\Login\Domain\Model\Login();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('login', $login);

        $this->subject->showAction($login);
    }

    /**
     * @test
     */
    public function createActionAddsTheGivenLoginToLoginRepository()
    {
        $login = new \Login\Login\Domain\Model\Login();

        $loginRepository = $this->getMockBuilder(\Login\Login\Domain\Repository\LoginRepository::class)
            ->setMethods(['add'])
            ->disableOriginalConstructor()
            ->getMock();

        $loginRepository->expects(self::once())->method('add')->with($login);
        $this->inject($this->subject, 'loginRepository', $loginRepository);

        $this->subject->createAction($login);
    }

    /**
     * @test
     */
    public function editActionAssignsTheGivenLoginToView()
    {
        $login = new \Login\Login\Domain\Model\Login();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('login', $login);

        $this->subject->editAction($login);
    }

    /**
     * @test
     */
    public function updateActionUpdatesTheGivenLoginInLoginRepository()
    {
        $login = new \Login\Login\Domain\Model\Login();

        $loginRepository = $this->getMockBuilder(\Login\Login\Domain\Repository\LoginRepository::class)
            ->setMethods(['update'])
            ->disableOriginalConstructor()
            ->getMock();

        $loginRepository->expects(self::once())->method('update')->with($login);
        $this->inject($this->subject, 'loginRepository', $loginRepository);

        $this->subject->updateAction($login);
    }

    /**
     * @test
     */
    public function deleteActionRemovesTheGivenLoginFromLoginRepository()
    {
        $login = new \Login\Login\Domain\Model\Login();

        $loginRepository = $this->getMockBuilder(\Login\Login\Domain\Repository\LoginRepository::class)
            ->setMethods(['remove'])
            ->disableOriginalConstructor()
            ->getMock();

        $loginRepository->expects(self::once())->method('remove')->with($login);
        $this->inject($this->subject, 'loginRepository', $loginRepository);

        $this->subject->deleteAction($login);
    }
}
