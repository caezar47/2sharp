var result = $("[data-count]"),
	carousel = $('[data-carousel-count]'),
    count = $('.item', carousel).length,
    slideCarousel = function () {
        var index = $('.item.active', carousel).index()+1;
        result.html("<span>"+index+"</span><span>/</span><span>"+count+"</span>");
	};
carousel.on('slid.bs.carousel', slideCarousel).trigger('slid.bs.carousel');

var btn = $("[data-dropdown-btn]");
btn.on('click', function(e) {
	e.preventDefault();
	$(this).closest('.card__item').find('[data-dropdown]').toggleClass('is--active');
});

$('#articles').on('hide.bs.collapse', function (e) {
    if(e.target){
        $(e.target).closest('.card__item').removeClass('is--open');
    }
});
$('#articles').on('show.bs.collapse', function (e) {
    $(this).find('.card__item').removeClass('is--open');
    $(e.target).closest('.card__item').addClass('is--open');
})
/*
$('#articles').on('hidden.bs.collapse',function(e){
	if($(e.target).hasClass('panel-collapse')){
        $(e.target).collapse('show');
        //e.preventDefault();
		//e.stopPropagation();
  	}
});
*/