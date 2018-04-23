function LinkedIn()	{

	var query = '';
	var total_results = 0;

	var NONE = 'NORESULT';
	var SINGLE = 'SINGLERESULT';
	var MULTIPLE = 'MULTIPLERESULT';
	
	var ANIMATESPEED = 500;
	var MAXROWS = 6;
	var ROWHEIGHT = 40;
	var PADDINGHEIGHT = 6;

	var obj = this;
	
	this.alignment = "left";
	
	// create container where LinkedIn page will be loaded into
	jQuery('body').append('<div id="sgt_li_load"></div>');
	jQuery('#sgt_li_load').hide();
	
	// Make some room for the searchbutton by making the input smaller
	jQuery('#KAN_LINKEDIN_URL').width(parseInt(jQuery('#KAN_LINKEDIN_URL').css("width"),10)-20);

	// create the searchbutton
	jQuery('#KAN_LINKEDIN_URL').parent().append('<img src="/style/sgt/images/linkedin_search_16.png" id="sgt_li_btnSearch"></img>');
	// progress indicator
	jQuery('#KAN_LINKEDIN_URL').parent().append('<img src="/style/sgt/images/linkedin_search_ind_16.gif" id="sgt_li_btnSearchInd"></img>');	
	jQuery('#sgt_li_btnSearchInd').hide();
	
	// search button event
	jQuery('#sgt_li_btnSearch').click(function(){
		doSearch(jQuery('#KAN_LINKEDIN_URL').val());
	});
	
	// pressing enter while in the linkedin field should initiate search as well
	jQuery('#KAN_LINKEDIN_URL').bind("keydown","return",function(evt){
		if(evt.keyCode == 13)	{
			doSearch(jQuery('#KAN_LINKEDIN_URL').val());
			return false;
		}
	})
	// turn off the autocomplete feature for the input
	.attr('autocomplete', 'off');

	// add onpaste = false
	//jQuery('#KAN_LINKEDIN_URL').attr('onpaste', 'return false;'); //onpaste="return false;"

	// Add https:// when pasted text isn't a URL 
	
$("#KAN_LINKEDIN_URL").bind('paste', function(){

  var element = this;
  setTimeout(function () {

    var text = $(element).val();
    var prefix = 'https://';
    var prefix1 = 'http://';

    // do something with text

   if ((text.substr(0, prefix.length) !== prefix) && (text.substr(0, prefix1.length) !== prefix1))
   
      {
          text = prefix + text;
      }

   document.getElementById('KAN_LINKEDIN_URL').value = text;

  }, 100);

});
	
	// create container where search results will be shown
	jQuery('#KAN_LINKEDIN_URL').parent().append('<div id="sgt_li_searchresults"></div>');
	jQuery('#sgt_li_searchresults').hide();

	// Hide the results when the user clicks outside it
	jQuery(document).click(function(){
		jQuery('#sgt_li_searchresults').fadeOut(ANIMATESPEED);
	});

	function isUrl(str) {
		var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		return regexp.test(str);
	}

	function doSearch(qry)	{
		var url = '/'+ g_user +'public/run/sgt_linkedin.search?';

		// clean up the query string
		qry = qry.replace(/^\s*/, "").replace(/\s*jQuery/, "").replace(/\%/g,"");

		if(isUrl(qry))	{
			url += 'p_url='+qry; 
		}
		else	{
			qry = qry.replace(/\s/g, "+");
			url += 'p_query='+qry;
		}
		
		// only initiate search if a query is entered
		if(qry.split(' ').join('') != '')	{
			jQuery('#sgt_li_load').load (
				url + '&p_retry=1', function ()	{
					showSearchResults(qry);
				}
			);
			
			// hide the search button and show the loading indicator
			jQuery('#sgt_li_btnSearch').hide();
			jQuery('#sgt_li_btnSearchInd').show();
			
			jQuery('#sgt_li_searchresults').fadeOut(ANIMATESPEED);
		}
	}

	function showSearchResults(qry)	{
		var title;
		var height = 0;

		// empty the results
		clearResults();

		// get result type
		var result_type = jQuery('#SGT_LI_SEARCHRESULT').val();
		
		// no results
		if(result_type == NONE)	{
			jQuery('#sgt_li_searchresults').html('<div id="sgt_li_row" class="message">Geen resultaten / No results / Ingen resultater / Engar niðurstöður</div>');
			total_results = 1;
		}
		
		// multiple results
		if(result_type == MULTIPLE)	{
			total_results = 0;
		
			jQuery('#sgt_li_load').find('.vcard').each(function(i){
				title = jQuery(this).find('dd.title').html();
				
				// grab location info if title is empty
				if(title == null)	{
					title = jQuery(this).find('span.location').html();
				}

				createResultRow( 
					jQuery(this).find('h2').find('a').attr('title'),
					title,
					jQuery(this).find('img.photo').attr('src'),
					jQuery(this).find('h2').find('a').attr('href')
				);
			});
		}
		
		// single result
		if(result_type == SINGLE)	{

			title = jQuery('#sgt_li_load').find('ul.current li').html();
			
			// grab location info if title is empty
			if(title == null)	{
				title = jQuery('#sgt_li_load').find('p.country-name').html();
			}
		
			createResultRow(
				jQuery('#sgt_li_load').find('.given-name').html() + ' ' + jQuery('#sgt_li_load').find('.family-name').html(),
				title,
				jQuery('#sgt_li_load').find('div.image img').attr('src'),
				jQuery('#sgt_li_load').find('link').attr('href')
			);
			total_results = 1;
		}
		
		// calculate height
		if(total_results > MAXROWS)	{
			height = MAXROWS * (ROWHEIGHT + 2) + (MAXROWS * 2 * PADDINGHEIGHT);
		}
		else	{
			height = total_results * (ROWHEIGHT +2 ) + (total_results * 2 * PADDINGHEIGHT);
		}
		
		// set rollovers
		jQuery('.sgt_li_row').bind('mouseover mouseout', function(){
			jQuery(this).toggleClass('sgt_li_row_hover');
		})
		// click action
		.click(function(){
			if(!isUrl(jQuery('#KAN_LINKEDIN_URL').val()))	{
				jQuery('#KAN_LINKEDIN_URL').val((jQuery(this).find('input#url').val()));
			}
			jQuery('#sgt_li_searchresults').fadeOut(ANIMATESPEED);
		});
		
		// set height
		jQuery('#sgt_li_row').height(ROWHEIGHT);
		jQuery('#sgt_li_searchresults').height(height);
		
		// set position
		var pos = jQuery('#KAN_LINKEDIN_URL').offset();
		pos.top += jQuery('#KAN_LINKEDIN_URL').innerHeight() + 5;
			
		if (obj.getAlignment() == "right")	{
			var left = pos.left + jQuery('#KAN_LINKEDIN_URL').width() - jQuery('#sgt_li_searchresults').width() + parseInt(jQuery('#KAN_LINKEDIN_URL').css("padding-left"), 10) + "px"; 
		}
		else	{
			var left = pos.left + "px";
		}
				
		jQuery('#sgt_li_searchresults').css(
			"left",
			left
		)
		.css(
			"top",
			pos.top + "px"
		);
		
		jQuery('#sgt_li_searchresults').fadeIn(ANIMATESPEED);
		
		// show the search button and hide the progress indicator
		jQuery('#sgt_li_btnSearch').show();
		jQuery('#sgt_li_btnSearchInd').hide();
		
	}

	function createResultRow(name, title, img, url)	{
		
		if(name != null)	{
			var content = '<div class="sgt_li_row" style="height:'+ROWHEIGHT+'px"><div id="textcontainer"><span id="name">'+name+'</span>';
			
			if(title != null)	{
				// remove tags, and trim spaces
				title = title.replace(/(<([^>]+)>)/ig,"").replace(/^\s*/, "").replace(/\s*jQuery/, "");
				
				if(title.length > 70) {
					title = title.substr(0,70)+'...';
				}
				content += '<br><span id="title">'+title+'</span>';
			}
			content += '</div>';
			
			if(img != null)	{
				content += '<div id="imgcontainer"><img src="'+img+'" width="40" height="40"></img></div>';
			}
			content += '<input type="hidden" id="url" value="'+url+'"></div>';

			jQuery('#sgt_li_searchresults').append(content);
			
			total_results++;
		}
	}

	function clearResults()	{
		jQuery('#sgt_li_searchresults').html('');
	}
	
	this.setAlignment = function(alignment)	{
		this.alignment = alignment;
	}
	this.getAlignment = function()	{
		return this.alignment;
	}
	
}

jQuery(document).ready(function(){
	_sgt_li = new LinkedIn();
});