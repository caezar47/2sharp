'use strict';
$(function() { 
	var top = $('[data-slick-top]');
	var works = $('[data-slick-works]');
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';
	top.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		variableWidth: true,
     	autoplay: true,
    	autoplaySpeed: 0,
	  	speed: 10000,
	  	cssEase: 'linear',
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
    	//pauseOnHover: true,
    	//slickPlay: false,
		responsive: [
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1, 
				}
		    }
		]
	});
	works.slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		  
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1, 
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1, 
				}
		    }
		]
	});
}); 