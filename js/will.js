$( document ).ready(function() {
    init();
    $('.foodlink').click(function(event){
        event.preventDefault();
        initFoodGallery();
    })
    $('.peoplelink').click(function(event){
        event.preventDefault();
        initPeopleGallery();
    })
    $('.navbar-brand').click(function(event){
        event.preventDefault();
        init();
    })

});

function init(){
    $(window).scrollTop(0);
    $('.home').show();
    $('.food-gallery').hide();
    $('.people-gallery').hide();
}
function initFoodGallery(){
    $(window).scrollTop(0);
    $('.home').hide();
    $('.food-gallery').show();
    $('.people-gallery').hide();
}
function initPeopleGallery(){
    $(window).scrollTop(0);
    $('.home').hide();
    $('.food-gallery').hide();
    $('.people-gallery').show();
}