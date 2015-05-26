/*$(function(){
    $('.navbar-fixed').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.navbar-fixed').data('size') == 'big')
        {
            $('.navbar-fixed').data('size','small');
            $('.navbar-fixed').stop().animate({
                height:'36px'
            },600);
        }
    }
    else
    {
        if($('.navbar-fixed').data('size') == 'small')
        {
            $('.navbar-fixed').data('size','big');
            $('.navbar-fixed').stop().animate({
                height:'56px'
            },600);
        }  
    }
});