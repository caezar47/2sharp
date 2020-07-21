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
    $('#slogan').css({ transform: 'rotate(' + theta + 'rad)' });;
});