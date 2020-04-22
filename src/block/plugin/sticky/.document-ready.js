var lang_panel = $(".lang__panel.is--base");
function stick() {
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
	stick();
}
else {
	unstick();
}

var footer = $(".footer__block");
var footer_position = footer.offset().top;
var footer_height = footer.height();
var footer_pos = footer_position - footer_height;
console.log(footer_position);
//console.log(footer_height);
//console.log('начало футора '+footer_pos);

var postion = lang_panel.offset().top,
    height = lang_panel.height();
    console.log(height);
$(document).on('scroll', function (){
	var scroll = $(window).scrollTop() + $(window).height();
   	console.log('Скролл '+scroll);
	if(scroll > footer_position){
		lang_panel.addClass('is--footer-pos');
	} else {
		lang_panel.removeClass('is--footer-pos');
	}
})