<?php

class Standard_action_Text_09ce68450e5e29cf4e317b785f090a69c1448bc2 extends \TYPO3Fluid\Fluid\Core\Compiler\AbstractCompiledTemplate {

public function getLayoutName(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this; 
return (string) 'Default';
}
public function hasLayout() {
return TRUE;
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
 * section Main
 */
public function section_62bce9422ff2d14f69ab80a154510232fc8a9afd(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this;
$output0 = '';

$output0 .= '

    ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\Format\HtmlViewHelper
$renderChildrenClosure2 = function() use ($renderingContext, $self) {
$array3 = array (
);return $renderingContext->getVariableProvider()->getByPath('data.bodytext', $array3);
};
$arguments1 = array();
$arguments1['parseFuncTSPath'] = 'lib.parseFunc_RTE';

$output0 .= TYPO3\CMS\Fluid\ViewHelpers\Format\HtmlViewHelper::renderStatic($arguments1, $renderChildrenClosure2, $renderingContext);

$output0 .= '

';

return $output0;
}
/**
 * Main Render function
 */
public function render(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this;
$output4 = '';

$output4 .= '
';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\LayoutViewHelper
$renderChildrenClosure6 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments5 = array();
$arguments5['name'] = NULL;
$arguments5['name'] = 'Default';

$output4 .= htmlspecialchars(TYPO3Fluid\Fluid\ViewHelpers\LayoutViewHelper::renderStatic($arguments5, $renderChildrenClosure6, $renderingContext), ENT_QUOTES);

$output4 .= '
';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\SectionViewHelper
$renderChildrenClosure8 = function() use ($renderingContext, $self) {
$output9 = '';

$output9 .= '

    ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\Format\HtmlViewHelper
$renderChildrenClosure11 = function() use ($renderingContext, $self) {
$array12 = array (
);return $renderingContext->getVariableProvider()->getByPath('data.bodytext', $array12);
};
$arguments10 = array();
$arguments10['parseFuncTSPath'] = 'lib.parseFunc_RTE';

$output9 .= TYPO3\CMS\Fluid\ViewHelpers\Format\HtmlViewHelper::renderStatic($arguments10, $renderChildrenClosure11, $renderingContext);

$output9 .= '

';
return $output9;
};
$arguments7 = array();
$arguments7['name'] = NULL;
$arguments7['name'] = 'Main';

$output4 .= '';

$output4 .= '

';

return $output4;
}


}
#