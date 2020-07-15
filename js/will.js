window.addEventListener("hashchange", function(e) {
    location.reload();
  })
$( document ).ready(function() {
    init();
    $('.strongWhatsapp').click(function(){
        $(window).scrollTop(0);
        $('#modal-whatsapp').modal('show');
    })
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
    $('.contatolink').click(function(event){
        event.preventDefault();
        initContato();
    })
    $('.whatsappEnviar').click(function(event){
        event.preventDefault();
        var nome = $('#nome').val();
        var mensagem = $('#mensagem').val();
        var url = 'https://api.whatsapp.com/send?phone=5518991300284&text=Nome:%20' + nome + '%20Mensagem:%20' + mensagem;
        window.location.href = url;
    })

});

function init(){
    $(window).scrollTop(0);
    $('.contato').hide();
    $('.home').show();
    $('.food-gallery').hide();
    $('.people-gallery').hide();
}
function initFoodGallery(){
    $(window).scrollTop(0);
    $('.contato').hide();
    $('.home').hide();
    $('.food-gallery').show();
    $('.people-gallery').hide();
}
function initPeopleGallery(){
    $(window).scrollTop(0);
    $('.contato').hide();
    $('.home').hide();
    $('.food-gallery').hide();
    $('.people-gallery').show();
}
function initContato(){
    $(window).scrollTop(0);
    $('.contato').show();
    $('.home').hide();
    $('.food-gallery').hide();
    $('.people-gallery').hide();
}