var NS = (navigator.appName == "Netscape");
if(NS) var display = 'table-row';
else   var display = 'block';

globalcount = 0;	
_vrg_dependencies = [];

function _vrg_handle_dependencies() { 
	// loop through all the questions and hide/show based on their answers
	for(var i = 0; i< _vrg_dependencies.length; i++)  {
		var el_vrg = document.getElementById("vrg_antwoord_"+_vrg_dependencies[i][1]);
		
		if(el_vrg==undefined) return;
		
		// Based on the type of input field, different methods to determine the selected value are used
		if(el_vrg.type == "radio")  {
			for(j = 0; j < document.forms[0]["vrg_antwoord_"+_vrg_dependencies[i][1]].length; j++) {
				if(document.forms[0]["vrg_antwoord_"+_vrg_dependencies[i][1]][j].checked) {
					var antwoord = document.forms[0]["vrg_antwoord_"+_vrg_dependencies[i][1]][j].value;
				}
			}
		}
		else if (el_vrg.type == "select-one") {
			var antwoord = el_vrg.value;
		}
		else {
			var antwoord = el_vrg.value;
		}
		// Does the answer given correspond with the one defined in _vrg_dependencies[ ] ?
		if(antwoord == _vrg_dependencies[i][2])  {
			_vrg_show(_vrg_dependencies[i][0]);
		}
		else {
			_vrg_hide(_vrg_dependencies[i][0]);
		}                   
	}
}
// 
// this function always gets called when the page has fully loaded
function _vrg_onload() {
	_vrg_handle_dependencies();
}
//
// By default, the entire table-row gets shown/hidden. Define these next 2 functions in the page itself to override these when different method are needed
function _vrg_show(id)	{
	document.getElementById("vrg_antwoord_"+id).parentNode.parentNode.style.display = display;
}
function _vrg_hide(id)	{
	var el = document.getElementById("vrg_antwoord_"+id);
	if(el.parentNode.parentNode.style.display == 'none') return;
	// hide the row
	el.parentNode.parentNode.style.display = "none";
	// clear selected value
	_vrg_clear(id);
	// keep calling until all childs are hidden
	_vrg_handle_dependencies();
}
//
// Clears a question's selected values
function _vrg_clear(id)	{
	var el = document.getElementById("vrg_antwoord_"+id);
	if(el.type == 'radio')	{
		el = document.forms[0]['vrg_antwoord_'+id];
		for(var i = 0; i < el.length; i++)	{
			el[i].checked = false;
		}
	}
	else if(el.type == 'select-one' || el.type == 'select-multiple')	{
		for(var i = 0; i < el.options.length; i++)	{
			el.options[i].selected = false;
		}
	}
}