_vrg_vragen = [];
_vrg_laatste_vragen = [];
_vrg_vragen_volgnummers = [];
_vrg_ngn_dependencies = [];
_vrg_processed = [];

_debug = '';
_debugging = false;

var NS = (navigator.appName == "Netscape");
if(NS) var display = 'table-row';
else   var display = 'block';

function debug(str)	{
	if(_debugging)_debug += "<br>"+str;
}
function showDebug() {
	if(_debugging){	
		document.getElementById("counter").innerHTML = _debug;
		_debug = '';
	}
}

// 
// this function always gets called when the page has fully loaded
function _vrg_ngn_onload() {
	if(_vrg_ngn_dependencies.length > 0)	{
		_vrg_ngn_dependencies = _vrg_ngn_compress_array();
		_vrg_ngn_handle_dependencies();
	}
}

function _vrg_ngn_match_array(a1, a2)	{
	for(var i in a1)	{
		for(var j in a2)	{
			if(a1[i] == a2[j])	{
				return true;
			}
		}
	}
	return false;
}

function _vrg_ngn_compress_array()	{
	
	var arr = [];
	var v = _vrg_ngn_dependencies;
	var c = _vrg_ngn_dependencies.length;
	
	for(var i = 0; i < c; i++)	{
		var idx = v[i][0];	
	
		if(arr[idx] == undefined)	{
			arr[idx] = [];
		}
		var tmp = v[i].shift();
		arr[idx].push(v[i]);		
	}
	return arr;	
}


function _vrg_ngn_handle_dependencies() { 
	// loop through all the questions and hide/show based on their answers

	var v = _vrg_ngn_dependencies;
	
	for(var vrg in v)	{
	// for (var i = 0; i < _vrg_ngn_dependencies.length, i++) {
		// var vrg = _vrg_ngn_dependencies[i];
		var antwoord = [];
		var req_antwoord = [];
 
		for(var i in v[vrg])	{

			if(v[vrg][i].length == 2)	{	// length 2 means this is a question based on certain answer(s)
		
				// add to the required antwoorden array
				req_antwoord.push(v[vrg][i][1]);
		
				var el_vrg = document.getElementById("nvrg_antwoord_"+v[vrg][i][0]);
				
				//if(el_vrg==undefined) continue;
				
				// Based on the type of input field, different methods to determine the selected value are used
				if(el_vrg.type == "radio")  {
					for(j = 0; j < document.forms[0]["nvrg_antwoord_"+v[vrg][i][0]].length; j++) {
						
						if(document.forms[0]["nvrg_antwoord_"+v[vrg][i][0]][j].checked && !document.forms[0]["nvrg_antwoord_"+v[vrg][i][0]][j].disabled) {
							antwoord.push(document.forms[0]["nvrg_antwoord_"+v[vrg][i][0]][j].value);
						}
					}
				}
				else if(el_vrg.type == 'select-multiple' && !el_vrg.disabled)	{
					for(var j = 0; j < el_vrg.options.length; j++)	{
						if(el_vrg.options[j].selected)	{
							antwoord.push(el_vrg.options[j].value);
						}
					}
				}
				else {
					if(!el_vrg.disabled)	{
						antwoord.push(el_vrg.value);
					}
				}
			}
		}
		
		if(_vrg_ngn_match_array(req_antwoord, antwoord))	{

			_vrg_ngn_show(vrg);
			_vrg_processed.push(vrg);

			// get all dependencies based on this question and show them
			var vrg_arr = _vrg_get_vrg_ngn_dependencies(vrg);
			for(var j = 0; j < vrg_arr.length; j++)	{ 
				_vrg_ngn_show(vrg_arr[j]);
				_vrg_processed.push(vrg_arr[j]);
			}
			
		}
		else	{
			if(!_vrg_ngn_match_array([vrg], _vrg_processed))	{
				_vrg_ngn_hide(vrg);
			}

			// get all dependencies based on this question and hide them 
			/*
			var vrg_arr = _vrg_get_vrg_ngn_dependencies(_vrg_ngn_dependencies[i][0]);
			for(var j = 0; j < vrg_arr.length; j++)	{
				_vrg_ngn_hide (vrg_arr[j]);
			}
			*/
		}
	}
	
	if(arguments.callee.caller != _vrg_ngn_hide)	{
		_vrg_ngn_handle_laatste_vragen();
	}
}

function _vrg_get_vrg_ngn_dependencies(vrg_id)	{

	var v = _vrg_ngn_dependencies;
	var v_norm = [];
	var vrg_arr = [];
	
	for(var vrg in v)	{
		for(var i in v[vrg])	{
			if(v[vrg][i].length == 1)	{
				v_norm.push([vrg, v[vrg][i]]);
			}
		}
	}

	if(v_norm.length > 0)	{
		var l = true;
		while(l)	{
			for(var i = 0; i < v_norm.length; i++)	{
				if(v_norm[i].length == 2 && v_norm[i][1] == vrg_id)	{
					vrg_id = v_norm[i][0];						
					vrg_arr.push(vrg_id);
					i = 0;
				}
				else	{
					if(i == v_norm.length-1 || v_norm.length == 0) {
						l = false;
					}
				}
			}
		}
	}

	if(vrg_arr.length > 0)	{
		debug("_vrg_get_vrg_ngn_dependencies: "+vrg_arr);
	}

	return vrg_arr;		
}

function _vrg_ngn_show(id)	{
	document.getElementById("nvrg_antwoord_"+id).parentNode.parentNode.style.display = display;
	_vrg_enable(id);
}
function _vrg_ngn_hide(id)	{
	if(!_vrg_is_visible(id)) {
		return;
	}
	
	var el = document.getElementById("nvrg_antwoord_"+id);
	// hide the row
	el.parentNode.parentNode.style.display = "none";
	// clear selected value
	_vrg_clear(id);

	// keep calling until all children are hidden unless we're calling this function from _vrg_ngn_handle_laatste_vragen()
	if(arguments.callee.caller != _vrg_ngn_handle_laatste_vragen)	{
		_vrg_ngn_handle_dependencies();
	}
}

function _vrg_clear(id)	{
	_vrg_disable(id);
}

function _vrg_disable(id)	{
	var el = document.getElementById("nvrg_antwoord_"+id);
	
	if(el.type == 'radio')	{
		el = document.forms[0]['nvrg_antwoord_'+id];
		for(var i = 0; i < el.length; i++)	{
			el[i].disabled = true;
		}
	}
	else	{
		el.disabled = true;
	}
}
function _vrg_enable(id)	{
	var el = document.getElementById("nvrg_antwoord_"+id);
	
	if(el.type == 'radio')	{
		el = document.forms[0]['nvrg_antwoord_'+id];
		for(var i = 0; i < el.length; i++)	{
			el[i].disabled = false;
		}
	}
	else	{
		el.disabled = false;
	}
}

function _vrg_get_volgnummer(id)	{
	for(var i = 0; i < _vrg_vragen.length; i++)	{
		if(_vrg_vragen[i][0] == id)	return _vrg_vragen[i][1];
	}
	return -1;	
}

function _vrg_is_laatste_vraag(id)	{
	for(var i = 0; i < _vrg_laatste_vragen.length; i++)	{
		if(_vrg_laatste_vragen[i] == id)	return true;
	}
	return false;
}

function _vrg_is_visible(id)	{
	var el = document.getElementById("nvrg_antwoord_"+id);
	if(el.parentNode.parentNode.style.display == 'none') 
		return false;
	else
		return true;
}

function _vrg_ngn_handle_laatste_vragen()	{
	
	// toon alle vragen die geen verband hebben met andere vragen/antwoorden
	for(var i = 0; i < _vrg_vragen.length; i++)	{
		if(!_vrg_has_dependency(_vrg_vragen[i][0]))	{
			_vrg_ngn_show(_vrg_vragen[i][0]);
		}
	}

	// loop door de laatste vragen en hide alle vragen met een hoger volgnummer als de laatste vraag zichtbaar is
	for(var i = 0; i < _vrg_laatste_vragen.length; i++)	{
		if(_vrg_is_visible(_vrg_laatste_vragen[i]))	{

		var volgnummer = _vrg_get_volgnummer(_vrg_laatste_vragen[i]);
			
			for(var j = 0; j < _vrg_vragen.length; j++)	{
				if(_vrg_vragen[j][1] > volgnummer)	{
					_vrg_ngn_hide(_vrg_vragen[j][0]);
				}
			}
		}
	}
	_vrg_processed = [];
	showDebug();
}

function _vrg_has_dependency(id)	{ 
	debug("has_dependency( "+id+" ): "+(_vrg_ngn_dependencies[id] != undefined));
	return _vrg_ngn_dependencies[id] != undefined;
}

