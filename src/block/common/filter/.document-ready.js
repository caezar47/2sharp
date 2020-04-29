$('#filter').on('hide.bs.collapse', function (e) {
    if(e.target){
        $(e.target).closest('.filter__panel').removeClass('is--open');
    }
});
$('#filter').on('show.bs.collapse', function (e) {
    $(this).find('.filter__panel').removeClass('is--open');
    $(e.target).closest('.filter__panel').addClass('is--open');
})