var result=$("[data-count]"),carousel=$("[data-carousel-count]"),count=$(".item",carousel).length,slideCarousel=function(){var s=$(".item.active",carousel).index()+1;result.html("<span>"+s+"</span><span>/</span><span>"+count+"</span>")};carousel.on("slid.bs.carousel",slideCarousel).trigger("slid.bs.carousel");var btn=$("[data-dropdown-btn]");btn.on("click",function(s){s.preventDefault(),$(this).closest(".card__item").find("[data-dropdown]").toggleClass("is--active")}),$("#articles").on("hide.bs.collapse",function(s){s.target&&$(s.target).closest(".card__item").removeClass("is--open")}),$("#articles").on("show.bs.collapse",function(s){$(this).find(".card__item").removeClass("is--open"),$(s.target).closest(".card__item").addClass("is--open")});
var dropdown=$(".dropdown__card"),dropdown_link=$(".dropdown__nav-link");dropdown_link.click(function(d){d.preventDefault(),$(this).closest(".dropdown__nav").find(".dropdown__nav-link").removeClass("is--active"),$(this).closest(dropdown).find(".dropdown__toggle").text($(this).text()),$(this).addClass("is--active")});
var form_submit=$("[data-form-submit]"),form_visible=$("[data-form-visible]");form_visible.on("click",function(e){e.preventDefault(),$(this).next(".form__panel.is--md-open").addClass("is--visible")}),form_submit.on("click",function(e){e.preventDefault();var s=$(this).closest(".form__wrap").find("input,select"),l=!0;$(".form__item").removeClass("is--error");for(var i=0;i<s.length;i++)s[i].validity.valid||(l=!1,$(s[i]).closest(".form__item").addClass("is--error"));return l&&($(this).closest(".form__panel").find(".form__result").addClass("is--visible"),$(this).closest(".form__panel").find(".form__wrap").addClass("is--hidden"),$(this).closest(".form__panel").find(".form__bg").addClass("is--result"),$(this).closest(".form__panel").find(".form__bg").addClass("is--result")),!1});var filter_view=$("[data-filter-view]");filter_view.on("click",function(e){e.preventDefault(),$(this).closest(".aside__filter").find(".form__checkbox.is--hidden").toggleClass("is--visible")});var select_default=$("[data-select-default]");select_default.select2({minimumResultsForSearch:-1});var select_primary=$("[data-select-primary]");select_primary.select2({minimumResultsForSearch:-1,containerCssClass:"is--primary",dropdownCssClass:"is--primary"});var select_primary_l=$("[data-select-primary-l]");select_primary_l.select2({minimumResultsForSearch:-1,containerCssClass:"is--primary-light",dropdownCssClass:"is--primary-light"});var select_inline=$("[data-select-inline]");select_inline.select2({minimumResultsForSearch:-1,containerCssClass:"is--inline",dropdownCssClass:"is--inline"});var phone=$(".form__control[type='tel']");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});var file=$(".form__file-input");file.on("change",function(e){$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,"")+"<br> Заменить файл")});var navListItems=$(".form__step-link"),allWells=$(".form__step-pane"),allNextBtn=$("[data-step-next]"),allResetBtn=$("[data-step-reset]"),allResultBtn=$("[data-step-finish]");allWells.hide(),navListItems.click(function(e){e.preventDefault();var s=$($(this).attr("href")),l=$(this);l.attr("disabled")||(l.closest(".form__wrap").find(navListItems).removeClass("is--active"),l.addClass("is--active"),l.closest(".form__wrap").find(allWells).hide(),s.show(),s.find("input:eq(0)").focus())}),allNextBtn.click(function(){var e=$(this).closest(".form__step-pane"),s=e.attr("id"),l=$('.form__step-link[href="#'+s+'"]').parent().next().children("a"),i=e.find("input,select"),t=!0;$(".form__item").removeClass("is--error");for(var r=0;r<i.length;r++)i[r].validity.valid||(t=!1,$(i[r]).closest(".form__item").addClass("is--error"));t&&l.removeAttr("disabled").trigger("click")}),allResultBtn.click(function(){var e=$(this).closest(".form__step-pane"),s=e.attr("id"),l=($('.form__step-link[href="#'+s+'"]').parent().next().children("a"),e.find("input,select")),i=!0;$(".form__item").removeClass("is--error");for(var t=0;t<l.length;t++)l[t].validity.valid||(i=!1,$(l[t]).closest(".form__item").addClass("is--error"));i&&($(this).closest(".form__panel").find(".form__result").addClass("is--visible"),$(this).closest(".form__panel").find(".form__wrap").addClass("is--hidden"),$(this).closest(".form__panel").find(".form__bg").addClass("is--result"))}),allResetBtn.click(function(e){e.preventDefault();var s=$(this);s.closest(".form__panel").find(".form__control").val("").removeAttr("selected"),s.closest(".form__panel").find(allWells).hide(),s.closest(".form__panel").find(allWells).eq(0).show(),s.closest(".form__panel").find(".form__result").removeClass("is--visible"),s.closest(".form__panel").find(".form__wrap").removeClass("is--hidden"),s.closest(".form__panel").find(".form__bg").removeClass("is--result"),s.closest(".form__panel").find(".form__step-link").removeClass("is--active").attr({disabled:""}),s.closest(".form__panel").find(".form__step-item").eq(0).children("a").addClass("is--active").removeAttr("disabled")}),$(".form__step-link:not([disabled])").trigger("click");
$("img").addClass("img-responsive");
function initMap(){var e="map-google",t=$("#"+e);if(t.length){var l=JSON.parse(t.attr("data-map")||"{}"),a=l.center,s={zoom:l.zoom,center:new google.maps.LatLng(a[0],a[1]),styles:[{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{stylers:[{saturation:-100},{lightness:-2}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:24}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:57}]}]},i=document.getElementById(e),r=new google.maps.Map(i,s),o={anchor:new google.maps.Point(0,0),strokeWeight:0,url:"img/svg/map-marker.svg"};if(l.placemarks.length)for(var n=0;n<l.placemarks.length;n++){var p={lat:l.placemarks[n].coord[0],lng:l.placemarks[n].coord[1]};new google.maps.Marker({position:p,map:r,icon:o,title:l.placemarks[n].title})}}}initMap();

var humb=$("[data-hamburger]"),collapse=$(".navbar__collapse"),html=$("html");humb.on("click",function(){$(this).toggleClass("is--active"),$(collapse).toggleClass("is--open"),$(html).toggleClass("is--open-navbar")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__container.is--collapse").length&&0==$(a.target).closest("[data-hamburger]").length&&(humb.removeClass("is--active"),$(html).removeClass("is--open-navbar"),$(collapse).removeClass("is--open"))});var url=window.location.pathname;$('.navbar__nav-link[href="'+url+'"]').addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});

$("#next").on("click",function(){var a=$(".tabs__pane.active"),e=a.next();e.length&&(a.removeClass("active"),e.addClass("active"))}),$("#prev").on("click",function(){var a=$(".tabs__pane.active"),e=a.prev();e.length&&(a.removeClass("active"),e.addClass("active"))});
$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");

"use strict";$(function(){$("[data-slick-top]").slick({slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!1,variableWidth:!0,autoplay:!0,autoplaySpeed:0,speed:1e4,cssEase:"linear",draggable:!1,pauseOnFocus:!1,pauseOnHover:!1,swipe:!1,touchMove:!1,responsive:[{breakpoint:576,settings:{slidesToShow:1}}]});var s=$("[data-slick-header]"),e=$("[data-slick-catalog]"),o=$("[data-slick-partners]"),i=$("[data-slick-finance]"),t=$("[data-slick-leasing]"),a=$("[data-slick-leasing-adv]"),l=$("[data-slick-adv]"),r=$("[data-slick-dots]").data("slick-dots"),n='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',d='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',p=$(".slick-count");s.on("init reInit afterChange",function(s,e,o,i){var t=(o||0)+1;$(this).find(p).html("<span>"+t+"</span><span>/</span><span>"+e.slideCount+"</span>")}),s.slick({slide:".content-block__slider-slide",slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:4e3,prevArrow:n,nextArrow:d,fade:!0}),l.slick({slide:".content-block__slider-slide",slidesToShow:1,slidesToScroll:1,prevArrow:n,nextArrow:d,fade:!0,customPaging:function(s,e){$(s.$slides[e]).find("[data-thumb]").data("thumb");return"<a>"+$(s.$slides[e]).data("thumb")+"</a>"},responsive:[{breakpoint:3e3,settings:{arrows:!1,dots:!0}},{breakpoint:991,settings:{dots:!1,arrows:!0}}]}),e.slick({slidesToShow:2,slidesToScroll:2,arrows:!1,dots:r,infinite:!1,prevArrow:n,nextArrow:d,responsive:[{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),t.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,infinite:!1,responsive:[{breakpoint:3e3,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),a.slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,autoplay:!0,autoplaySpeed:4e3,prevArrow:n,nextArrow:d,fade:!0,responsive:[{breakpoint:992,settings:{arrows:!1}}]}),i.slick({slidesToShow:4,slidesToScroll:1,arrows:!0,dots:r,infinite:!0,variableWidth:!0,prevArrow:n,nextArrow:d,responsive:[{breakpoint:991,settings:{variableWidth:!1,slidesToShow:3}},{breakpoint:767,settings:{variableWidth:!1,slidesToShow:2}},{breakpoint:576,settings:{variableWidth:!1,slidesToShow:1}}]}),o.slick({slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:768,settings:{slidesToShow:3}}]})});
var lang_panel=$(".lang__panel.is--base");function stick(){$(".navbar__block").sticky({topSpacing:50,bottomSpacing:440,responsiveWidth:!0}),lang_panel.sticky({topSpacing:"93%"})}function unstick(){$(".navbar__block").unstick(),lang_panel.unstick()}var windowWidth=$(window).width();1199<windowWidth?stick():unstick();var footer=$(".footer__block"),footer_position=footer.offset().top,footer_height=footer.height(),footer_pos=footer_position-footer_height;console.log(footer_position);var postion=lang_panel.offset().top,height=lang_panel.height();console.log(height),$(document).on("scroll",function(){var o=$(window).scrollTop()+$(window).height();console.log("Скролл "+o),footer_position<o?lang_panel.addClass("is--footer-pos"):lang_panel.removeClass("is--footer-pos")});