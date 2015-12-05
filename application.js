$(document).ready(function () {
    $('#content').hide().delay(100).fadeIn()
    $('#bg').hide().delay(400).fadeIn(600);

    /*Highlight on mouseover*/
    $('.text').on('mouseenter', function () {
        $(this).addClass('highlight');
    });
    $('.text').on('mouseleave', function () {
        $(this).removeClass('highlight');
    });

})