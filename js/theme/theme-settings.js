/* 	
	Index of this JS File

	(01) On Load Scripts
	(02) Tab Script
	(03) Toggles
	(04) Hide Information Boxes (Close Button)
	(05) Filterable Pack / Sortable Portfolio	
	(06) Testimonial Rotator
	(07) Image Hover Fade Effect	
	(08) Custom Popup
	(09) Contact Form
	(10) Form Field Over Labels
	(11) Scroll to Top Control
	(12) Search Form
	(13) Hover Intent - Compressed File 
	(14) Tooltip		
	(15) Ordered List
*/

/* ========================================================== 
	(01) On Load Scripts
============================================================ */

$(document).ready(function(){ 
	$("a[rel^='prettyPhoto']").prettyPhoto(); 	 /* Pretty Photo */
	hide_boxes();					 /* Infoboxes close button */	
});

/* ========================================================== 
	(02) Tab Script
============================================================ */

$(document).ready(function() {

	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});

/* ========================================================== 
	(03) Simple and Accordation Toggles
============================================================ */

$(document).ready(function(){	
	// Simple Toggle script start
	$(".toggle_container").hide();
	$("p.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle(350);
	});
	
	$(".toggle_container2").hide();
	$("p.trigger2").click(function(){
		$(this).toggleClass("active2").next().slideToggle(350);
	});
	
	//--Toggle Accrordation Script
	
	//Set default open/close settings
	$('.acc_container').hide(); //Hide/close all containers
	//$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

	//On Click
	$('.acc_trigger').click(function(){
		if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
			$('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
			//$(this).toggleClass('active').previous().slideUp(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
			$(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container	
		}else{
			$(this).toggleClass('active').next().slideUp();
		}
		return false; //Prevent the browser jump to the link anchor
	});
	
	//Set default open/close settings
	$('.acc_container2').hide(); //Hide/close all containers
	//$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

	//On Click
	$('.acc_trigger2').click(function(){
		if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
			$('.acc_trigger2').removeClass('active2').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
			$(this).toggleClass('active2').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container	
		}else{
			$(this).toggleClass('active2').next().slideUp();
		}
		return false; //Prevent the browser jump to the link anchor
	});
	
});

/* ========================================================== 
	(04) Hide Information Boxes (Close Button)
============================================================ */

$(document).ready(function(){ 	
	hide_boxes();
});

function hide_boxes(){
	$('span.hide-boxes,span.hide-boxes2').click(function() {
		$(this).parent().fadeOut();					   
	});	
}


/* ========================================================== 
	(05) Filterable Pack / Sortable Portfolio
============================================================ */

/* Copyright (C) 2009 Joel Sutherland. * Liscenced under the MIT liscense */
(function($){$.fn.filterable=function(settings){settings=$.extend({useHash:true,animationSpeed:1000,show:{width:'show',opacity:'show'},hide:{width:'hide',opacity:'hide'},useTags:true,tagSelector:'#sortable-gallery a',selectedTagClass:'current',allTag:'all'},settings);
                    return $(this).each(function(){$(this).bind("filter",function(e,tagToShow){if(settings.useTags){$(settings.tagSelector).removeClass(settings.selectedTagClass);
                        $(settings.tagSelector+'[href='+tagToShow+']').addClass(settings.selectedTagClass)}$(this).trigger("filterportfolio",[tagToShow.substr(1)])});
                    $(this).bind("filterportfolio",function(e,classToShow){if(classToShow==settings.allTag){$(this).trigger("show")}else{$(this).trigger("show",['.'+classToShow]);
                    $(this).trigger("hide",[':not(.'+classToShow+')'])}if(settings.useHash){location.hash='#'+classToShow}});
                        $(this).bind("show",function(e,selectorToShow){$(this).children(selectorToShow).animate(settings.show,settings.animationSpeed)});
                        $(this).bind("hide",function(e,selectorToHide){$(this).children(selectorToHide).animate(settings.hide,settings.animationSpeed)});
                        if(settings.useHash){if(location.hash!='')$(this).trigger("filter",[location.hash]);
                        else $(this).trigger("filter",['#'+settings.allTag])}if(settings.useTags){$(settings.tagSelector).click(function(){$('#sortable-portfolio').trigger("filter",[$(this).attr('href')]);
                                $(settings.tagSelector).removeClass('current');
            $(this).addClass('current')})}})}})(jQuery);
            $(document).ready(function(){$('#sortable-portfolio').filterable()});

/* ========================================================== 
	(06) Testimonial Rotator
============================================================ */

$(document).ready(function(){
	$('#testimonials-rotate .testimonial-slide');
	setInterval(function(){
		$('#testimonials-rotate .testimonial-slide').filter(':visible').fadeOut(1000,function(){
			if($(this).next('div.testimonial-slide').size()){
				$(this).next().fadeIn(1000);
			}
			else{
				$('#testimonials-rotate .testimonial-slide').eq(0).fadeIn(1000);
			}
		});
	},6000); // fadein fadeout slider delay time eg. 1000 it less and 10000 is more.	
});

/* ========================================================== 
	(07) Image Hover Fade Effect
============================================================ */

jQuery(window).load(function() { 	
	jQuery(".fade-img").show();
	jQuery(".fade-img img").fadeTo('normal', 1, function() {		
		$get_id = jQuery(this).parent().parent().attr("lang");
		if($get_id != ""){
			jQuery(this).parent().parent().addClass($get_id);			
			$(this).hover(function(){
				$(this).fadeTo('normal', 0.2);
				
			}, function() {
					$(this).fadeTo('normal', 1);
			});
		}
    });
});

jQuery(window).load(function() { 	
	jQuery(".fade-img2").show();
	jQuery(".fade-img2 img").fadeTo('normal', 1, function() {		
		$get_id = jQuery(this).parent().parent().attr("lang");
		if($get_id != ""){
			jQuery(this).parent().parent().addClass($get_id);			
			$(this).hover(function(){
				$(this).fadeTo('normal', 0.5);
				
			}, function() {
					$(this).fadeTo('normal', 1);
			});
		}
    });
});


/* ========================================================== 
	(08) Custom Popup
============================================================ */

$(document).ready(function() {

//When you click on a link with class of poplight and the href starts with a # 
$('a.poplight[href^=#]').click(function() {
    var popID = $(this).attr('rel'); //Get Popup Name
    var popURL = $(this).attr('href'); //Get Popup href to define size

    //Pull Query & Variables from href URL
    var query= popURL.split('?');
    var dim= query[1].split('&');
    var popWidth = dim[0].split('=')[1]; //Gets the first query string value

    //Fade in the Popup and add close button
    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close" title="Close"><span class="btn_close">Close</span></a>');

    //Define margin for center alignment (vertical   horizontal) - we add 80px to the height/width to accomodate for the padding  and border width defined in the css
    var popMargTop = ($('#' + popID).height() + 80) / 2;
    var popMargLeft = ($('#' + popID).width() + 80) / 2;

    //Apply Margin to Popup
    $('#' + popID).css({
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });

    //Fade in Background
    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
    $('#fade').css({'filter' : 'alpha(opacity=30)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=30)'}) is used to fix the IE Bug on fading transparencies 

    return false;
});

//Close Popups and Fade Layer
$('a.close, #fade').live('click', function() { //When clicking on the close or fade layer...
    $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();  //fade them both out
    });
    return false;
});

});

/* ========================================================== 
	(09) Contact Form
============================================================ */

jQuery(document).ready(function(){	
	jQuery("input:text, input:password, textarea").forminput();
	jQuery("#contact_form").contact_form({
			response: "#msg",
			submit: "#submit",
			timer: 4500,
			easing: "",
			speedIn: 700,
			speedOut: 700
	});
});
// Input Field Script
(function($) {
	$.fn.forminput = function() {
		return this.each(function() {
			var $root = $(this);
			var inputValue = $root.val();
			
			function reset() {
				var value = $root.val();
				if(inputValue == value) {
					$root.val("");
				}
			}
			
			function blur() {
				var value = $root.val();
				if(value == "") {
					$root.val(inputValue);
				}
			}
			
			$root.focus(function() {
  				reset();
			});
			$root.blur(function() {
  				blur();
			});
		});
	}
})(jQuery);

// Form Script
(function($) {
	$.fn.contact_form = function(options) {
		var defaults = {
			response: "#msg",
			submit: "#submit",
			timer: 4500,
			easing: "",
			speedIn: 700,
			speedOut: 700
		};
		var options = $.extend({}, defaults, options);
		
		return this.each(function () {
			var $root = $(this);
			var $response = $(options.response);
			var $submit = $(options.submit);
			
			function showMsg($timer) {
				$response.css("opacity", 0);
				$response.show().stop().animate({
					opacity: 1
				}, options.speedIn, options.easing, function(){
					interval = setInterval(hideMsg, $timer);
				});
			}
			
			function hideMsg() {
				clearInterval(interval);
				$response.stop().animate({
					opacity:0
				}, options.speedIn, options.easing, function() {
					$response.hide();
					$submit.fadeIn(700);
				});
			}
			
			$root.submit(function(){
				$.ajax({
					type: "POST",
					url: "sendmail.php",
					data: $(this).serialize(),
					success: function(output) {
						$response.ajaxComplete(function() {
							if(output == 'ok') {
								$('#contactdiv').html("<div id='smessage'></div>");
								$('#smessage').html("<h3>Contact Form Submitted!</h3>").append("<p>We will be in touch soon.</p>").hide().fadeIn(1500, function() {
								  $('#smessage').append("");
								});
							} else {
								$(this).html(output);
								showMsg(options.timer);
							}
						});
					}
				});
				return false;
			});
		});
	}
})(jQuery);

/* ========================================================== 
	(10) Form Field Over Labels
============================================================ */

//compressed code
$(document).ready(function(){$("label.overlabel,label.overlabel2").overlabel();});(function($){$.fn.overlabel=function(options){var opts=$.extend({},$.fn.overlabel.defaults,options);var selection=this.filter('label[for]').map(function(){var label=$(this);var id=label.attr('for');var field=document.getElementById(id);if(!field)return;var o=$.meta?$.extend({},opts,label.data()):opts;label.addClass(o.label_class);var hide_label=function(){label.css(o.hide_css)};var show_label=function(){this.value||label.css(o.show_css)};$(field).parent().addClass(o.wrapper_class).end().focus(hide_label).blur(show_label).each(hide_label).each(show_label);return this;});return opts.filter?selection:selection.end();};$.fn.overlabel.defaults={label_class:'overlabel-apply',wrapper_class:'overlabel-wrapper',hide_css:{'text-indent':'-10000px'},show_css:{'text-indent':'0px','cursor':'text'},filter:false};})(jQuery);

/* ========================================================== 
	(11) Scroll to Top Control
============================================================ */

//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.

var scrolltotop={
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
	controlHTML: '<img src="images/backgrounds/up.png" class="gotopimg" style="height:24px; width:24px;" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: {offsetx:5, offsety:5}, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	//compressed code
	state:{isvisible:false,shouldvisible:false},scrollup:function(){if(!this.cssfixedsupport)
	this.$control.css({opacity:0})
	var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto)
	if(typeof dest=="string"&&jQuery('#'+dest).length==1)
	dest=jQuery('#'+dest).offset().top
	else
	dest=0
	this.$body.animate({scrollTop:dest},this.setting.scrollduration);},keepfixed:function(){var $window=jQuery(window)
	var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx
	var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety
	this.$control.css({left:controlx+'px',top:controly+'px'})},togglecontrol:function(){var scrolltop=jQuery(window).scrollTop()
	if(!this.cssfixedsupport)
	this.keepfixed()
	this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false
	if(this.state.shouldvisible&&!this.state.isvisible){this.$control.stop().animate({opacity:1},this.setting.fadeduration[0])
	this.state.isvisible=true}
	else if(this.state.shouldvisible==false&&this.state.isvisible){this.$control.stop().animate({opacity:0},this.setting.fadeduration[1])
	this.state.isvisible=false}},init:function(){jQuery(document).ready(function($){var mainobj=scrolltotop
	var iebrws=document.all
	mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest
	mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body')
	mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>').css({position:mainobj.cssfixedsupport?'fixed':'absolute',bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:'pointer'}).attr({title:'Scroll Back to Top'}).click(function(){mainobj.scrollup();return false}).appendTo('body')
	if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!='')
	mainobj.$control.css({width:mainobj.$control.width()})
	mainobj.togglecontrol()
	$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup()
	return false})
	$(window).bind('scroll resize',function(e){mainobj.togglecontrol()})})}}	
	$(function() { scrolltotop.init() });

	
/* ========================================================== 
	(12) Search Form
============================================================ */	
	
jQuery(document).ready(function(){	
	jQuery("#search-input-box").css({"left" : "2px", "display" : "none"});	
	jQuery("#search-icon").click(function(){						 
			if (jQuery("#search-input-box").filter(':hidden').length == 1)	
				jQuery(this).next("#search-input-box").animate({left: "8px", opacity: "toggle"}, "slow")
			else
				jQuery(this).next("#search-input-box").animate({left: "8px", opacity: "toggle"}, "slow")
			return false;
	});		
	
	var $searchinput = jQuery("#search-input-box input");
	var $searchvalue = $searchinput.val();		
	$searchinput.focus(function(){
		if (jQuery(this).val() == $searchvalue) jQuery(this).val("");
	}).blur(function(){
		if (jQuery(this).val() == "") jQuery(this).val($searchvalue);
	});
});	
	
/* ========================================================== 
	(13) Hover Intent - Compressed File
============================================================ */

(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

/* ========================================================== 
	(14) Tooltip
============================================================ */

$(function() {
    
    $('.tipDown').tipsy		({gravity: 'n'});
    $('.tipUp').tipsy		({gravity: 's'});
    $('.tipLeft').tipsy		({gravity: 'e'});
    $('.tipRight').tipsy	({gravity: 'w'});
	$('.tipForm').tipsy		({gravity: 's', trigger:'focus'}); 
    
  });

(function($){$.fn.tipsy=function(options){options=$.extend({},$.fn.tipsy.defaults,options);return this.each(function(){var opts=$.fn.tipsy.elementOptions(this,options);$(this).hover(function(){$.data(this,"cancel.tipsy",true);var tip=$.data(this,"active.tipsy");if(!tip){tip=$('<div class="tipsy"><div class="tipsy-inner"/></div>');tip.css({position:"absolute",zIndex:100000});$.data(this,"active.tipsy",tip);}if($(this).attr("title")||typeof($(this).attr("original-title"))!="string"){$(this).attr("original-title",$(this).attr("title")||"").removeAttr("title");}var title;if(typeof opts.title=="string"){title=$(this).attr(opts.title=="title"?"original-title":opts.title);}else{if(typeof opts.title=="function"){title=opts.title.call(this);}}tip.find(".tipsy-inner")[opts.html?"html":"text"](title||opts.fallback);var pos=$.extend({},$(this).offset(),{width:this.offsetWidth,height:this.offsetHeight});tip.get(0).className="tipsy";tip.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);var actualWidth=tip[0].offsetWidth,actualHeight=tip[0].offsetHeight;var gravity=(typeof opts.gravity=="function")?opts.gravity.call(this):opts.gravity;switch(gravity.charAt(0)){case"n":tip.css({top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}).addClass("tipsy-north");break;case"s":tip.css({top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}).addClass("tipsy-south");break;case"e":tip.css({top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}).addClass("tipsy-east");break;case"w":tip.css({top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}).addClass("tipsy-west");break;}if(opts.fade){tip.css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:0.8});}else{tip.css({visibility:"visible"});}},function(){$.data(this,"cancel.tipsy",false);var self=this;setTimeout(function(){if($.data(this,"cancel.tipsy")){return;}var tip=$.data(self,"active.tipsy");if(opts.fade){tip.stop().fadeOut(function(){$(this).remove();});}else{tip.remove();}},100);});});};$.fn.tipsy.elementOptions=function(ele,options){return $.metadata?$.extend({},options,$(ele).metadata()):options;};$.fn.tipsy.defaults={fade:true,fallback:"",gravity:"n",html:true,title:"title"};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/2)?"s":"n";};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/2)?"e":"w";};})(jQuery);
	
/* ========================================================== 
	(15) Ordered List
============================================================ */
	
 $(document).ready(function(){
	
    $("ol.steps li:first")
    .addClass("first");
	
    $("ol.steps li:last")
    .addClass("last");
		
  });	


/* ========================================================== 
	(16) Detect IE
============================================================ */

if (navigator.appVersion.indexOf("MSIE 10") != -1) {
      document.documentElement.className+=' ie10';
}