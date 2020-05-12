//Все формы 
var form_input = $(".form__control");
var form_submit = $("[data-form-submit]");

form_input.on('focus', function(e) {
	$(this).addClass('is--focus');
});
form_submit.on('click', function(e) {
	e.preventDefault();
	var wrap = $(this).closest(".form__wrap"),
		controls = wrap.find("input,select"),
		isValid = true;

	$(".form__item").removeClass("is--error");
	for(var i=0; i<controls.length; i++){
		if (!controls[i].validity.valid){
			isValid = false;
			$(controls[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if (isValid){
		$(this).closest('.form__panel').find('.form__result').addClass('is--visible');
		$(this).closest('.form__panel').find('.form__wrap').addClass('is--hidden');
	}
	return false;
});
// маска для поля ввода телефона
var phone = $(".form__control[type='tel']");
phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});