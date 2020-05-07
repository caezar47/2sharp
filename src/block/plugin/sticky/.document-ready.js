var lang_panel = $(".lang__panel.is--base");
var soc_panel = $(".social__panel.is--fixed.is--block-footer");
var footer = $(".footer__block");
var wrapper = $(".content-block__wrapper");
var navbar = $(".navbar__block.is--index");
/*function stick() {
	$(".navbar__block").sticky({
		topSpacing: 50,
		bottomSpacing: 440,
		responsiveWidth: true,
	});
	lang_panel.sticky({
		topSpacing: '93%',
	});
}
function unstick() {
	$(".navbar__block").unstick();
	lang_panel.unstick();
}

var windowWidth = $(window).width();
        
if (windowWidth > 1199) {
	//stick();
}
else {
	//unstick();
}*/
if(navbar.length){
	$('[data-slick-top]').on('init', function(){
		var footer_position = footer.offset().top;
		var wrapper_position = wrapper.offset().top;
		console.log('wp '+wrapper_position);
		$(document).on('scroll', function (){
			var scroll = $(window).scrollTop();
			console.log('sc '+scroll);
			if(scroll > wrapper_position){
				navbar.addClass('is--scroll');
			} else {
				navbar.removeClass('is--scroll');
			}
		})
	});
}