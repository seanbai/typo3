<?php

class partial_Header_Date_76bc5ce52f073584ed1fc824619a3d4de95011d9 extends \TYPO3Fluid\Fluid\Core\Compiler\AbstractCompiledTemplate {

public function getLayoutName(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this; 
return (string) '';
}
public function hasLayout() {
return FALSE;
}
public function addCompiledNamespaces(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$renderingContext->getViewHelperResolver()->addNamespaces(array (
  'core' => 
  array (
    0 => 'TYPO3\\CMS\\Core\\ViewHelpers',
  ),
  'f' => 
  array (
    0 => 'TYPO3Fluid\\Fluid\\ViewHelpers',
    1 => 'TYPO3\\CMS\\Fluid\\ViewHelpers',
  ),
  'formvh' => 
  array (
    0 => 'TYPO3\\CMS\\Form\\ViewHelpers',
  ),
  'v' => 
  array (
    0 => 'FluidTYPO3\\Vhs\\ViewHelpers',
  ),
));
}

/**
 * Main Render function
 */
public function render(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this;
$output0 = '';

$output0 .= '
';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\IfViewHelper
$renderChildrenClosure2 = function() use ($renderingContext, $self) {
$output6 = '';

$output6 .= '
    <p class="';
$array7 = array (
);
$output6 .= htmlspecialchars($renderingContext->getVariableProvider()->getByPath('positionClass', $array7), ENT_QUOTES);

$output6 .= '">
        <time datetime="';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\Format\DateViewHelper
$renderChildrenClosure9 = function() use ($renderingContext, $self) {
$array10 = array (
);return $renderingContext->getVariableProvider()->getByPath('date', $array10);
};
$arguments8 = array();
$arguments8['date'] = NULL;
$arguments8['format'] = '';
$arguments8['base'] = NULL;
$arguments8['format'] = '%Y-%m-%d';
$renderChildrenClosure9 = $arguments8['date'] ? function() use ($arguments8) { return $arguments8['date']; } : $renderChildrenClosure9;
$output6 .= htmlspecialchars(TYPO3\CMS\Fluid\ViewHelpers\Format\DateViewHelper::renderStatic($arguments8, $renderChildrenClosure9, $renderingContext), ENT_QUOTES);

$output6 .= '">
            ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\Format\DateViewHelper
$renderChildrenClosure12 = function() use ($renderingContext, $self) {
$array13 = array (
);return $renderingContext->getVariableProvider()->getByPath('date', $array13);
};
$arguments11 = array();
$arguments11['date'] = NULL;
$arguments11['format'] = '';
$arguments11['base'] = NULL;
$arguments11['format'] = '%B %e, %Y';
$renderChildrenClosure12 = $arguments11['date'] ? function() use ($arguments11) { return $arguments11['date']; } : $renderChildrenClosure12;
$output6 .= htmlspecialchars(TYPO3\CMS\Fluid\ViewHelpers\Format\DateViewHelper::renderStatic($arguments11, $renderChildrenClosure12, $renderingContext), ENT_QUOTES);

$output6 .= '
        </time>
    </p>
';
return $output6;
};
$arguments1 = array();
$arguments1['then'] = NULL;
$arguments1['else'] = NULL;
$arguments1['condition'] = false;
// Rendering Boolean node
// Rendering Array
$array3 = array();
$array4 = array (
);$array3['0'] = $renderingContext->getVariableProvider()->getByPath('date', $array4);

$expression5 = function($context) {return ($context["node0"]);};
$arguments1['condition'] = TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::convertToBoolean(
					$expression5(
						TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::gatherContext($renderingContext, $array3)
					),
					$renderingContext
				);
$arguments1['__thenClosure'] = $renderChildrenClosure2;

$output0 .= TYPO3Fluid\Fluid\ViewHelpers\IfViewHelper::renderStatic($arguments1, $renderChildrenClosure2, $renderingContext);

$output0 .= '

';

return $output0;
}


}
#