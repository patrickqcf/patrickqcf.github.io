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
    $('.home').show();
    $('.food-gallery').hide();
    $('.people-gallery').hide();
}
function initFoodGallery(){
    $('.home').hide();
    $('.food-gallery').show();
    $('.people-gallery').hide();
}
function initPeopleGallery(){
    $('.home').hide();
    $('.food-gallery').hide();
    $('.people-gallery').show();
}