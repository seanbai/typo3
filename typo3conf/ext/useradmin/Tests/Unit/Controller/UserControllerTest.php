<?php
namespace Useradmin\Useradmin\Tests\Unit\Controller;

/**
 * Test case.
 */
class UserControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Useradmin\Useradmin\Controller\UserController
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder(\Useradmin\Useradmin\Controller\UserController::class)
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
    public function listActionFetchesAllUsersFromRepositoryAndAssignsThemToView()
    {

        $allUsers = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $userRepository = $this->getMockBuilder(\::class)
            ->setMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $userRepository->expects(self::once())->method('findAll')->will(self::returnValue($allUsers));
        $this->inject($this->subject, 'userRepository', $userRepository);

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('users', $allUsers);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }
}
