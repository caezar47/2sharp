var humb = $("[data-hamburger]");
var collapse = $(".navbar__collapse");
var html = $("html");
var wrapper = $(".content-block__wrapper");
var navbar = $(".navbar__block.is--index");

humb.on('click',function() {	
	$(this).toggleClass("is--active");			
	$(collapse).toggleClass("is--open");
	$(html).toggleClass("is--open-navbar");
});
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__container.is--collapse').length == 0 && $(event.target).closest('[data-hamburger]').length == 0){	
		humb.removeClass("is--active");
		$(html).removeClass("is--open-navbar");
		$(collapse).removeClass("is--open");
	}		
});
/*
if(navbar.length){
	$('[data-slick-top]').on('init', function(){
		var wrapper_position = wrapper.offset().top;
		$(document).on('scroll', function (){
			var scroll = $(window).scrollTop();
			//console.log('sc '+scroll);
			if(scroll > wrapper_position){
				navbar.addClass('is--scroll');
			} else {
				navbar.removeClass('is--scroll');
			}
		})
	});
}*/

if($(document).width() < 1200) {
	$(".main__wrap").removeClass('app__wrap');
	$("img.js-image").removeClass('js-image');
}