$(document).ready(function() {
    $(".design").click(function() {
        $(".design-main").toggle(250);
        $(".design-detail").toggle(250);
        // $("body").addClass("green-background");
    });

    $(".dev").click(function() {
        $(".dev-main").toggle(250);
        $(".dev-detail").toggle(250);
        // $("body").addClass("green-background");
    });

    $(".product").click(function() {
        $(".product-main").toggle(250);
        $(".product-detail").toggle(250);
        // $("body").addClass("green-background");
    });

    $('.sitepreview_item').hover(function() {
        $(".hover_content",this).fadeIn();
        $(".portfolio-img", this).fadeTo('fast', 0.33);

    }, function() {
        $(".hover_content").fadeOut();
        $(".portfolio-img").fadeTo('fast', 1);
    });

});
