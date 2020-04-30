$('[data-tablist]').on('hide.bs.collapse', function (e) {
    if(e.target){
        $(e.target).closest('.panel').removeClass('is--open');
    }
});
$('[data-tablist]').on('show.bs.collapse', function (e) {
    $(this).find('.panel').removeClass('is--open');
    $(e.target).closest('.panel').addClass('is--open');
})