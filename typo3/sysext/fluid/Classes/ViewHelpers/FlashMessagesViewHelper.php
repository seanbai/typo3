<?php
namespace TYPO3\CMS\Fluid\ViewHelpers;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Core\Messaging\FlashMessageRendererResolver;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3Fluid\Fluid\Core\ViewHelper\Traits\CompileWithRenderStatic;

/**
 * View helper which renders the flash messages (if there are any) as an unsorted list.
 *
 * In case you need custom Flash Message HTML output, please write your own ViewHelper for the moment.
 *
 *
 * = Examples =
 *
 * <code title="Simple">
 * <f:flashMessages />
 * </code>
 * <output>
 * A list of flash messages.
 * </output>
 *
 * <code title="TYPO3 core style">
 * <f:flashMessages />
 * </code>
 * <output>
 * <div class="typo3-messages">
 *  <div class="alert alert-info">
 *      <div class="media">
 *          <div class="media-left">
 *              <span class="fa-stack fa-lg">
 *                  <i class="fa fa-circle fa-stack-2x"></i>
 *                  <i class="fa fa-info fa-stack-1x"></i>
 *              </span>
 *          </div>
 *          <div class="media-body">
 *              <h4 class="alert-title">Info - Title for Info message</h4>
 *              <p class="alert-message">Message text here.</p>
 *          </div>
 *      </div>
 *  </div>
 * </div>
 * </output>
 * <code title="Output flash messages as a description list">
 * <f:flashMessages as="flashMessages">
 * 	<dl class="messages">
 * 	<f:for each="{flashMessages}" as="flashMessage">
 * 		<dt>{flashMessage.code}</dt>
 * 		<dd>{flashMessage.message}</dd>
 * 	</f:for>
 * 	</dl>
 * </f:flashMessages>
 * </code>
 * <output>
 * <dl class="messages">
 * 	<dt>1013</dt>
 * 	<dd>Some Warning Message.</dd>
 * </dl>
 * </output>
 *
 * <code title="Using a specific queue">
 * <f:flashMessages queueIdentifier="myQueue" />
 * </code>
 *
 * @api
 */
class FlashMessagesViewHelper extends AbstractViewHelper
{
    use CompileWithRenderStatic;

    /**
     * ViewHelper outputs HTML therefore output escaping has to be disabled
     *
     * @var bool
     */
    protected $escapeOutput = false;

    /**
     * Initialize arguments
     *
     * @api
     */
    public function initializeArguments()
    {
        parent::initializeArguments();
        $this->registerArgument('queueIdentifier', 'string', 'Flash-message queue to use');
        $this->registerArgument('as', 'string', 'The name of the current flashMessage variable for rendering inside');
    }

    /**
     * Renders FlashMessages and flushes the FlashMessage queue
     * Note: This disables the current page cache in order to prevent FlashMessage output
     * from being cached.
     *
     * @see \TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController::no_cache
     * @param array $arguments
     * @param \Closure $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     * @return mixed
     */
    public static function renderStatic(array $arguments, \Closure $renderChildrenClosure, RenderingContextInterface $renderingContext)
    {
        $as = $arguments['as'];
        $queueIdentifier = isset($arguments['queueIdentifier']) ? $arguments['queueIdentifier'] : null;
        $flashMessages = $renderingContext->getControllerContext()
            ->getFlashMessageQueue($queueIdentifier)->getAllMessagesAndFlush();
        if ($flashMessages === null || count($flashMessages) === 0) {
            return '';
        }

        if ($as === null) {
            return GeneralUtility::makeInstance(FlashMessageRendererResolver::class)
                ->resolve()
                ->render($flashMessages);
        } else {
            $templateVariableContainer = $renderingContext->getVariableProvider();
            $templateVariableContainer->add($as, $flashMessages);
            $content = $renderChildrenClosure();
            $templateVariableContainer->remove($as);
        }

        return $content;
    }
}
