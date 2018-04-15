jQuery (function($) {
    //zresetuj scrolla
    $.scrollTo(0);
    
    $('#link3').click(function() {
        $.scrollTo($('.pizzamenu'),500);
    });
    $('#link4').click(function() {
        $.scrollTo($('#daniazgrilla'),500);
    });
    $('#link5').click(function() {
        $.scrollTo($('.wieprzowina'),500);
    });
    $('#link6').click(function() {
        $.scrollTo($('.wolowina'),500);
    });
    $('#link7').click(function() {
        $.scrollTo($('.drob'),500);
    });
    $('#link8').click(function() {
        $.scrollTo($('.ryby'),500);
    });
    $('#link9').click(function() {
        $.scrollTo($('.zupy'),500);
    });
    $('#link10').click(function() {
        $.scrollTo($('.desery'),500);
    });
    $('#link11').click(function() {
        $.scrollTo($('.zakaski'),500);
    });
    $('#link12').click(function() {
        $.scrollTo($('.salatki'),500);
    });
    $('#link13').click(function() {
        $.scrollTo($('.daniainne'),500);
    });
    $('#link14').click(function() {
        $.scrollTo($('.dodatki'),500);
    });
    $('#link15').click(function() {
        $.scrollTo($('.napoje'),500);
    });
});