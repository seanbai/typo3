// First, Next, Previous, Last button handling
// ID: 1=first, 2=next, 3=previous, 4=last
function browse_button(p_id)
{ 
  if (document.forms[0].p_browsebutton_id[0]!=undefined)   document.forms[0].p_browsebutton_id[0].value = p_id;
  else  document.forms[0].p_browsebutton_id.value = p_id;
  document.forms[0].submit();
}

// Shuttle functions
function sortList(List)
{
  arrTexts = new Array();
  arrValues = new Array();
  arrOldTexts = new Array();

  for(i=0; i<List.length; i++)
  {
    arrTexts[i] = List.options[i].text;
    arrValues[i] = List.options[i].value;
    arrOldTexts[i] = List.options[i].text;
  }

  arrTexts.sort();

  for(i=0; i<List.length; i++)
  {
    List.options[i].text = arrTexts[i];
    for(j=0; j<List.length; j++)
    {
      if (arrTexts[i] == arrOldTexts[j])
      {
        List.options[i].value = arrValues[j];
        j = List.length;
      }
    }
  }
}

function appendToList(theText, theValue, toList)
{
  if (theValue == "") return;
  for (i=0;i<toList.length;i++)
  {
    if (toList.options[i].value == theValue)
      return;
  }
  toList.options[toList.length] = new Option(theText, theValue);
  sortList(toList);
}

function selectAll(fromList)
{
  for ( i = 0; i <= fromList.length-1; i++ )
    fromList.options[i].selected = true;
  return true;
}

function unSelectAll(fromList)
{
  for ( i = 0; i <= fromList.length-1; i++ )
    fromList.options[i].selected = false;
  return true;
}

function deleteListElement(fromList)
{
  idx = fromList.selectedIndex;
  if ( idx == -1 )
    return;
  fromList.options[idx].selected=false;
  for ( i = idx; i < fromList.length-1; i++ )
  {
    fromList.options[i].text = fromList.options[i+1].text;
    fromList.options[i].value = fromList.options[i+1].value;
    if (fromList.options[idx].selected)
    {
        fromList.options[i].selected=true;
        fromList.options[i+1].selected=false;
    }
  }
  fromList.length = fromList.length - 1;
  deleteListElement(fromList);
}

function clearList(fromList)
{
  fromList.length = 0;
}

function move_multiple_items(fromObj,toList)
{
   for(var i = 0; i < fromObj.options.length; i++)
      if ( fromObj.options[i].selected )
      {
         appendToList(fromObj.options[i].text,fromObj.options[i].value,toList);
      }
   delete_multiple_items(fromObj);
}

function add_multiple_items(fromObj,toList)
{
   for(var i = 0; i < fromObj.options.length; i++)
      if ( fromObj.options[i].selected )
      {
         appendToList(fromObj.options[i].text,fromObj.options[i].value,toList);
         fromObj.options[i].selected=false;
      }
}

function delete_multiple_items(fromObj)
    {
       list_of_selected_indexes = new Array();
       list_of_selected_indexes[fromObj.options.length]=-1;
       for(var i = 0,j=0; i < fromObj.options.length; i++)
          if ( fromObj.options[i].selected )
             list_of_selected_indexes[j++]=i;
          else
             list_of_selected_indexes[j++]=-1;
       unSelectAll(fromObj);
       for(i=list_of_selected_indexes.length-1; i>=0; i--)
       {
          idx = list_of_selected_indexes[i];
          if (idx==-1)
            continue;
          for (var j = idx; j < fromObj.length-1; j++ )
          {
            fromObj.options[j].text = fromObj.options[j+1].text;
            fromObj.options[j].value = fromObj.options[j+1].value;
          }
          fromObj.length = fromObj.length - 1;
       }
    }

// AJAX requests
function doAjaxRequest(targetID, curObj) {
        var url = 'content.xml';

        var sfw_id   = document.forms[0].p_sfw_id;
        var p_sfw_id = (typeof(sfw_id)=='Array') ? sfw_id[0].value : sfw_id.value;

	if (curObj.name == 'KAN_HUISNUMMER')
	{	url = url + '?p_target=' + targetID;
		url = url + '&p_sfw_id=' + p_sfw_id;
		url = url + '&KAN_HUISNUMMER=';
		url = url + curObj.value;
		url = url + '&KAN_POSTCODE=';
		url = url + document.forms[0].KAN_POSTCODE.value;
		url = url + '&CHECK=KANDIDAAT_POSTCODE';
		url.replace(/ /g, "");
	}
	else
 	{       url = url + '?p_target=' + targetID;
        	url = url + '&p_sfw_id=' + p_sfw_id;
        	url = url + '&' + curObj.name + '=';
        	url = url + curObj.options[curObj.selectedIndex].value;
	}
        makeRequest(url);
}

function doKandidaatCheck(targetID, curObj, hiddenTables) {
 
        var kanBestaat         = document.getElementById(targetID);
        if (!kanBestaat) 
        kanBestaat    =  document.createElement("input");
        kanBestaat.type        = 'hidden';
        kanBestaat.id          = targetID;
        kanBestaat.value       = null;
        kanBestaat.onchange    = 
                     function(evt) {  
                        
                        if (this.value == 'false') {
                           document.getElementById('checkTable').className = 'hidden';
                             
                           // kijk of een array met hidden tables is meegegeven
                           if(hiddenTables)  {
                              for(var i = 0; i < hiddenTables.length; i++) {
                                 document.getElementById(hiddenTables[i]).className = 'visible';
                              }
                           }
                           else  {
                              document.getElementById('tableEen').className = 'visible';
                              document.getElementById('tableTwee').className = 'visible';
                              document.getElementById('tableDrie').className = 'visible';
                              document.getElementById('tableVier').className = 'visible';
                           }
                        }
                        else alert('Deze kandidaat is reeds bekend in het systeem. Om deze reden kunt u geen aanspraak maken op een aanbrengfee voor deze kandidaat.');
                     }
        document.forms[0].appendChild(kanBestaat);

        var url = 'content.xml';
        url = url + '?p_target=' + targetID;
        url = url + '&KAN_ACHTERNAAM'  + '=' + document.getElementById('KAN_ACHTERNAAM').value;
        url = url + '&KAN_VOORLETTERS' + '=' + document.getElementById('KAN_VOORLETTERS').value;
        url = url + '&KAN_POSTCODE'    + '=' + document.getElementById('KAN_POSTCODE').value;
        url = url + '&KAN_HUISNUMMER'  + '=' + document.getElementById('KAN_HUISNUMMER').value;
        url = url + '&CHECK'  + '=KANDIDAAT';
        makeRequest(url);
}

function makeRequest(url) {
    var httpRequest;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
            // See note below about this line
        }
    }
    else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
               try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                   }
               catch (e) { }
        }
    }

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = function() { alertContents(httpRequest); };
    httpRequest.open('GET', url, true);
    httpRequest.send(null);
}

function alertContents(httpRequest) {
	var debug = "";
	debug = "readyState: "+httpRequest.readyState;
	if (httpRequest.readyState == 4) {
		debug = debug+"\nstatus: "+httpRequest.status;
		if (httpRequest.status == 200) {
			// Parse return XML
			var xmldoc       = httpRequest.responseXML;
			var select_node  = xmldoc.getElementsByTagName("select")[0];
			var options_node = select_node.getElementsByTagName("options")[0];
			var option_list  = options_node.getElementsByTagName("option");
			debug = (options_node) ? debug+"\noptions_node bestaat" : debug+"\noptions_node bestaat niet"; 
			debug = (option_list) ? debug+"\noptionlist bestaat" : debug+"\noptionlistbestaat niet";
			// get target:
			var target = document.getElementById(select_node.getAttribute("id"));

			debug = debug+"\ntarget: "+target.id;
			// if it's a selectbox:               
			debug = debug+"\ntargetType: "+target.type;
			if (target.type == 'select-one' || target.type == 'select-multiple') { 
				// Get <select> element
				target = document.getElementsByName(select_node.getAttribute("id"))[0];
				// Clear <select> option list
				debug=debug+"\ntarget.length1: "+target.length;
				target.length = 0;
				debug=debug+"\ntarget.length2: "+target.length;
				// Add options
				var len = option_list.length;
				debug=debug+"\noption_list.length: "+option_list.length;

				for (i = 0; i < len; i++) {
					var ch = option_list[i];
					target.options[target.length] = new Option((ch.firstChild) ? ch.firstChild.nodeValue.replace('&nbsp;',' ') : ' ', ch.getAttribute("id"));
				}
			}
			// if it's an input:
			else {
				var len = option_list.length;
				if (len > 0) {
				
					if (target.name == "KAN_STRAAT") {
						if (option_list[0].firstChild) {
							var l_vals = option_list[0].firstChild.nodeValue.split("#");

							// alleen vullen als er resultaat is
							if (l_vals[0] != '0') {
								target.value = l_vals[0];
								document.forms[0].KAN_PLAATS.value = l_vals[1];
							}
						}
					}
					else
					target.value = option_list[0].firstChild.nodeValue;
				}
				else target.value = "";
				if (target.onchange !=null) target.onchange();
			}
		} else {
			alert(debug);
			alert('There was a problem with the request.');
		}
	}
}

function appendAfter(obj,node) {
  if (obj.nextSibling)
    obj.parentNode.insertBefore(node,obj.nextSibling);
  else
    obj.parentNode.appendChild(node);
}

function copytable(el, dbut) {
  var the_table = get_table_node(el);
  if (dbut.length && dbut.length>1){
    d_but = dbut[dbut.length-1];
  }
  else {
    d_but = dbut;
  }
  if (d_but != null && d_but != "undefined")
    d_but.style.display = "inline";
  var newTable = the_table.cloneNode(true);
  if (d_but != null && d_but != "undefined")
    d_but.style.display = "none";
  newTable.id = the_table.id;
//  el.style.display="none";
  appendAfter(the_table, newTable);
//
//  var inps = the_table.getElementsByTagName("input");
//  for (i=0; i<inps.length; i++)
//    if (inps[i].type.indexOf("button") >= 0)
//      inps[i].style.display="none";
//
  var inps = newTable.getElementsByTagName("input");
  for (i=0; i<inps.length; i++)
    if (inps[i].type.indexOf("text") >= 0)
      inps[i].value = "";
//
  var inps = newTable.getElementsByTagName("select");
  for (i=0; i<inps.length; i++)
     inps[i].selectedIndex = 0;
//
}

function deletetable(el) {
  var the_table = get_table_node(el);
//alert(the_table.id);
  var rootid;
  rootid = the_table.id;
  ind = rootid.indexOf("X");
  if (ind<0) return;
  rootid = rootid.substr(0, ind);
//
  the_table.parentNode.removeChild(the_table);
//
  var inps = document.getElementsByTagName("input");
  for (i=0; i<inps.length; i++)
  { if (inps[i].type.indexOf("button") >= 0)
    { attr = inps[i].attributes;
      tabnode = get_table_node(inps[i]);
      if (tabnode.id != rootid)
      {for (j=0; j<attr.length; j++)
        { if (attr[j].nodeName=="onclick" && attr[j].nodeValue.indexOf("deletetable")>=0)
          { inps[i].style.display="inline";
          }
        }
      }
    }
  }
}

// Functie verplaatst naar STANDARD_SITE.js, generieke validatie maakt ook gebruik van deze functie
/*
function get_table_node(el) {
  var the_table = el.parentNode;
  while (the_table.nodeName != "TABLE") the_table = the_table.parentNode;
  return the_table;
}
*/


IE = ( navigator.appName == 'Microsoft Internet Explorer' ) ? true : false;
var displayTable = (IE) ? 'block' : 'table';

function g(x)     {       return document.getElementById(x);      }

function toggleTable(hide,show)	{
   var v_hide   = g(hide);
   var v_show   = g(show);



   var inputs_i = v_hide.getElementsByTagName('input');
   var selects  = v_hide.getElementsByTagName('select');


   for (var i=0; i<inputs_i.length; i++){
     if (inputs_i[i].type != 'radio' && inputs_i[i].type != 'button') inputs_i[i].value = '';
     if (inputs_i[i].type == 'radio') inputs_i[i].checked = false;
   }
   for (var i=0; i<selects.length; i++) {
     selects[i].selectedIndex = 0;
   }

   v_show.style.display = displayTable;
   v_hide.style.display = 'none';

}

function resetZoekOvz() {
	if(g("p_firstrow_id")){ g("p_firstrow_id").value=1;}
	if(g("p_browsebutton_id")){ g("p_browsebutton_id").value=1; }
	if(g("p_firstrow_id")){ g("p_firstrow_id").value=1;}
	if(g("p_browsebutton_id")) { g("p_browsebutton_id").value=1;}
}