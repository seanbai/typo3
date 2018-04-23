<?php
namespace Helhum\UploadExample\Controller;

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
use Helhum\UploadExample\Property\TypeConverter\UploadedFileReferenceConverter;

use TYPO3\CMS\Extbase\Property\PropertyMappingConfiguration;

/**
 *
 *
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 */
class ExampleController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{

    /**
     * exampleRepository
     *
     * @var \Helhum\UploadExample\Domain\Repository\ExampleRepository
     * @inject
     */
    protected $exampleRepository;


    /**
     * Action list
     *
     * @return void
     */
    public function listAction()
    {
        $id = $_GET['tx_uploadexample_offers']['appleid'];
        $examples = $this->exampleRepository->findformtitle($id  ? $id : 1 );
        
        $this->view->assign('id', $id);
        $this->view->assign('examples', $examples);
    }

    /**
     * Action show
     *
     * @param \Helhum\UploadExample\Domain\Model\Example $example
     */
    public function showAction(\Helhum\UploadExample\Domain\Model\Example $example)
    {
        $this->view->assign('example', $example);
    }

    /**
     * Action show
     *
     * @param \Helhum\UploadExample\Domain\Model\Example $example
     */
    public function editAction(\Helhum\UploadExample\Domain\Model\Example $example)
    {
        $this->view->assign('example', $example);
    }

    /**
     * action new
     */
    public function newAction()
    {
        $newExample = new \Helhum\UploadExample\Domain\Model\Example();
        $this->view->assign('newExample', $newExample);
    }

    /**
     * Set TypeConverter option for image upload
     */
    public function initializeCreateAction()
    {
        $this->setTypeConverterConfigurationForImageUpload('newExample');
    }

    /**
     * action create
     *
     * @param \Helhum\UploadExample\Domain\Model\Example $newExample
     */
    public function createAction(\Helhum\UploadExample\Domain\Model\Example $newExample)
    {
        $this->exampleRepository->add($newExample);
        
        $uriBuilder = $this->uriBuilder;
        $uri = $uriBuilder
          ->setTargetPageUid(87)
          ->build();
        $this->redirectToUri($uri, 0, 404);
        
    }

    /**
     * Set TypeConverter option for image upload
     */
    public function initializeUpdateAction()
    {
        $this->setTypeConverterConfigurationForImageUpload('example');
    }

    /**
     * action Update
     *
     * @param \Helhum\UploadExample\Domain\Model\Example $example
     */
    public function updateAction(\Helhum\UploadExample\Domain\Model\Example $example)
    {
        $this->exampleRepository->update($example);
        $this->addFlashMessage('Your new Example was updated.');
        $this->redirect('list');
    }

    /**
     * action delete
     *
     * @param \Helhum\UploadExample\Domain\Model\Example $example
     * @ignoreValidation $example
     */
    public function deleteAction(\Helhum\UploadExample\Domain\Model\Example $example)
    {
        $this->exampleRepository->remove($example);
        $this->addFlashMessage('Your new Example was removed.');
        $this->redirect('list');
    }
    
    /**
     *
     */
    protected function setTypeConverterConfigurationForImageUpload($argumentName)
    {
        $uploadConfiguration = [
           UploadedFileReferenceConverter::CONFIGURATION_ALLOWED_FILE_EXTENSIONS => 'doc,docx,txt,rtf,pdf',
            UploadedFileReferenceConverter::CONFIGURATION_UPLOAD_FOLDER => '/fileadmin/job/',
        ];
        /** @var PropertyMappingConfiguration $newExampleConfiguration */
        $newExampleConfiguration = $this->arguments[$argumentName]->getPropertyMappingConfiguration();
        $newExampleConfiguration->forProperty('image')
            ->setTypeConverterOptions(
                'Helhum\\UploadExample\\Property\\TypeConverter\\UploadedFileReferenceConverter',
                $uploadConfiguration
            );
    }
}
