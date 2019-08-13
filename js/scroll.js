$(document).ready(function() {
    $("a.top-menu-content-links-1").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500
        });
        return false;
    });
});