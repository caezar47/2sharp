/*;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

var slogan = document.getElementById("slogan");
    
// to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.
if(slogan){
    window.addEventListener("optimizedScroll", function() {
        slogan.style.transform = "rotate("+window.pageYOffset+"deg)";
        //rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
    });
}*/
$(window).scroll(function() {
    var theta = $(window).scrollTop() / 250 % Math.PI;
    $('#slogan').css({ transform: 'rotate(' + theta + 'rad)' });
});

var elem = $(".content-block__wrap.is--page-index-header");
var slider = $("[data-slick-works]");
var slider_img = $(".card__preview.is--works-card img");
var img_height = slider_img.height();
console.log(img_height);
//
//var ratio = 1.77;
var ratio = 1.79;
var resizeHeader = function (e) {
    var width = $(window).width();
    var height = $(window).height();
    var ratioWindow = width/height;
    var ratioWindowFix = ratioWindow.toFixed(2);
    //console.log(ratioWindowFix);
    if($(window).width() > 991){
        if(ratioWindowFix < ratio ){    
            elem.css({"height":"auto","padding-top":"calc(100%/(16/9) - 80px)"});
        } else {
            elem.css({"height":"calc(100vh - 80px)","padding-top":"0"});
        }
    } else {
        elem.removeAttr('style');
    }
};
resizeHeader();
$(window).on('resize',function(event){
    resizeHeader();
}).trigger('resize');