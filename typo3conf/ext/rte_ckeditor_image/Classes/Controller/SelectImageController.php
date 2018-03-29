<?php
/**
 * See class comment
 *
 * PHP version 7
 *
 * @category   Netresearch
 * @package    RteCKEditor
 * @subpackage Controller
 * @author     Christian Opitz <christian.opitz@netresearch.de>
 * @license    http://www.netresearch.de Netresearch Copyright
 * @link       http://www.netresearch.de
 */


namespace Netresearch\RteCKEditorImage\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Configuration\Richtext;
use TYPO3\CMS\Core\Resource\File;
use TYPO3\CMS\Core\Resource\Service\MagicImageService;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Recordlist\Controller\ElementBrowserController;
use TYPO3\CMS\Core\Resource\ProcessedFile;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use TYPO3\CMS\Core\Utility\HttpUtility;

/**
 * Controller for the image select wizard
 *
 * PHP version 5
 *
 * @category   Netresearch
 * @package    RteCKEditor
 * @subpackage Controller
 * @author     Christian Opitz <christian.opitz@netresearch.de>
 * @license    http://www.gnu.de/documents/gpl-2.0.de.html GPL 2.0+
 * @link       http://www.netresearch.de
 */
class SelectImageController extends ElementBrowserController
{
    protected $isInfoAction;

    public function __construct()
    {
        $this->isInfoAction = GeneralUtility::_GP('action') === 'info';
        if (!$this->isInfoAction) {
            $bparams = explode('|', GeneralUtility::_GET('bparams'));
            if (!$bparams[3]) {
                $bparams[3] = $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext'];
                GeneralUtility::_GETset(implode('|', $bparams), 'bparams');
            }
            parent::__construct();
        }
        $this->mode = 'file';
    }

    /**
     * Forward to infoAction if wanted
     *
     * @param ServerRequestInterface $request
     * @param ResponseInterface $response
     * @return NULL|ResponseInterface
     */
    public function mainAction(ServerRequestInterface $request, ResponseInterface $response)
    {
        return $this->isInfoAction
            ? $this->infoAction($request, $response)
            : parent::mainAction($request, $response);
    }

    /**
     * Retrieve image info
     *
     * @param ServerRequestInterface $request
     * @param ResponseInterface $response
     * @return NULL|ResponseInterface
     */
    public function infoAction(ServerRequestInterface $request, ResponseInterface $response)
    {
        $id = $request->getQueryParams()['id'];
        $params = $request->getQueryParams()['P'] ?: [];
        if (!$id || !is_numeric($id)) {
            HttpUtility::setResponseCodeAndExit(HttpUtility::HTTP_STATUS_412);
        }
        $file = $this->getImage($id);
        $processedFile = $this->processImage($file, $params);

        $lang = $this->getLanguageService();
        $this->getLanguageService()->includeLLFile('EXT:lang/Resources/Private/Language/locallang_core.xlf');
        $this->getLanguageService()->includeLLFile('EXT:frontend/Resources/Private/Language/locallang_ttc.xlf');

        echo json_encode([
            'uid' => $file->getUid(),
            'alt' => $file->getProperty('alternative'),
            'title' => $file->getProperty('title'),
            'width' => $file->getProperty('width'),
            'height' =>$file->getProperty('height'),
            'url' => $file->getPublicUrl(),
            'processed' => [
                'width' => $processedFile->getProperty('width'),
                'height' => $processedFile->getProperty('height'),
                'url' => $processedFile->getPublicUrl()
            ],
            'lang' => [
                'override' => $lang->getLL('labels.placeholder.override'),
                'overrideNoDefault' => $lang->getLL('labels.placeholder.override_not_available'),
                'zoom' => $lang->getLL('image_zoom_formlabel')
            ]
        ]);

        return null;
    }

    /**
     * Get the image
     *
     * @param integer $id
     * @return File
     */
    protected function getImage($id)
    {
        try {
            $file = ResourceFactory::getInstance()->getFileObject($id);
            if ($file->isDeleted() || $file->isMissing()) {
                $file = null;
            }
        } catch (\Exception $e) {
            $file = null;
        }

        if (!$file) {
            HttpUtility::setResponseCodeAndExit(HttpUtility::HTTP_STATUS_404);
        }

        return $file;
    }

    /**
     * Get the processed image
     *
     * @param File $file
     * @param array $params
     *
     * @return ProcessedFile
     */
    protected function processImage($file, $params)
    {
        /** @var Richtext $richtextConfigurationProvider */
        $richtextConfigurationProvider = GeneralUtility::makeInstance(Richtext::class);
        $tsConfig = $richtextConfigurationProvider->getConfiguration(
            $params['table'],
            $params['fieldName'],
            (int)$params['pid'],
            $params['recordType'],
            ['richtext' => true]
        );

        /** @var MagicImageService $magicImageService */
        $magicImageService = GeneralUtility::makeInstance(MagicImageService::class);
        $magicImageService->setMagicImageMaximumDimensions($tsConfig);

        return $magicImageService->createMagicImage($file, [
            'width' => $file->getProperty('width'),
            'height' => $file->getProperty('height'),
        ]);
    }
}
