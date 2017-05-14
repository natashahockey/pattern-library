$('.down-arrow').on('click', function(){
    
    //this remembers what's been clicked
    $(this).toggleClass('open');
    
    if ($(this).hasClass('open') ){
        
        $(this).attr('src','images/Up-arrow.svg');    
        
    } else {
    
        $(this).attr('src','images/Down-arrow.svg');
    
    }
    
    $('.sub-menu').slideToggle();

});