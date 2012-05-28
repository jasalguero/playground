$(document).ready(function(){

    $('#menu li a').hover(function(){
        width = $(this).width() * (-1);
        $(this).stop().animate({
            'backgroundPosition': '(' + width + ' 0)'
        }, {
            duration: 300
        });
    }, function(){
        $(this).stop().animate({
            'backgroundPosition': '(0 0)'
        }, {
            duration: 300
        });
    })
});
