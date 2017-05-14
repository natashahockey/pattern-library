$('.down-arrow').on('click', function(){
    
    //stop the link from working
    event.preventDefault();
    
    //this remembers what's been clicked
    //toggle the open class on and off every click
    $(this).toggleClass('open');
    
    //if this has the class open
    if ($(this).hasClass('open') ){
        
        //the image is an up arrow
        $(this).attr('src','images/Up-arrow.svg');    
        
    } else {
    
        //else the image is a down arrow
        $(this).attr('src','images/Down-arrow.svg');
    
    }
    
    //slide the menu up or down
    $('.sub-menu').slideToggle();

});