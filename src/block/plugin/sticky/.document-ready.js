var lang_panel = $(".lang__panel.is--base");
var soc_panel = $(".social__panel.is--fixed.is--block-footer");
var footer = $(".footer__block");
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
$('[data-slick-top]').on('init', function(){
	var footer_position = footer.offset().top;
	$(document).on('scroll', function (){
		var scroll = $(window).scrollTop() + $(window).height();
		if(scroll > footer_position){
			soc_panel.addClass('is--footer-pos');
		} else {
			soc_panel.removeClass('is--footer-pos');
		}
	})
});