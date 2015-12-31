/* ========================================================== 
	Image Pre-Loader
============================================================ */

/* Add Class or Id of image group which you want with preloader... Example

	.className img,.className2 img,.className3 img
	#idName img, #idName2 img, IdName3 img
*/

$(function () {
			$('.portfolio img,.image-left,.image-right,.image-center,.post-img img').hide();//hide all the images on the page
		});
		
		var i = 0;//initialize
		var int=0;//Internet Explorer Fix
		$(window).bind("load", function() {//The load event will only fire if the entire page or document is fully loaded
			var int = setInterval("doThis(i)",300);//500 is the fade in speed in milliseconds
		});

		function doThis() {
			var imgs = $('img').length;//count the number of images on the page
			if (i >= imgs) {// Loop the images
				clearInterval(int);//When it reaches the last image the loop ends
			}
			$('img:hidden').eq(0).fadeIn(500);//fades in the hidden images one by one
			i++;//add 1 to the count
		} 