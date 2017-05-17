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

if ( $('.slick-slider').length ) {
    $('.slick-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}

//https://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchFunction() {
    //Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    nav = document.getElementById("nav");
    li = nav.getElementsByTagName('li');

    //Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        
            //If the parent ul of the current list item has a class of sub-menu
            if (li[i].parentNode.classList.contains('sub-menu')) {
                //Then go up to the parent category and display it
                li[i].parentNode.parentNode.style.display="";
            }
              
        } else {
            li[i].style.display = "none";
        }
    }
}