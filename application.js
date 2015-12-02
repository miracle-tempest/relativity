$(document).ready(function () {

    /*Highlight on mouseover*/

    $('.text').on('mouseenter', function () {
        $(this).addClass('highlight');
    });
    $('.text').on('mouseleave', function () {
        $(this).removeClass('highlight');
    });

})