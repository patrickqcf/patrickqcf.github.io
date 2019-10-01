var countDownDate = new Date("Oct 26, 2019 00:00:00").getTime();

var contador = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(seconds < 10){
      seconds ="0" + seconds;
  }
  if(minutes < 10){
      minutes ="0" + minutes;
  }
  if(hours < 10){
      hours ="0" + hours;
  }
  if(days < 10){
      days ="0" + days;
  }

  var diaDesc;

  if(days.toString() == '01'){
    diaDesc = 'DIA';
    $('.dia1').html(days.toString().substring(0,1));
    $('.dia2').html(days.toString().substring(1,2));
    $('.diasDescricao').html(diaDesc);
  } else if( days.toString().substr(0,2) == "0-" || days.toString() == "NaN"){
    $('.diasDescricao').hide();
  } else {
    diaDesc = 'DIAS'
    $('.dia1').html(days.toString().substring(0,1));
    $('.dia2').html(days.toString().substring(1,2));
    $('.diasDescricao').html(diaDesc);
  }

  $('.hora1').html(hours.toString().substring(0,1));
  $('.hora2').html(hours.toString().substring(1,2));
  $('.minuto1').html(minutes.toString().substring(0,1));
  $('.minuto2').html(minutes.toString().substring(1,2));
  $('.segundo1').html(seconds.toString().substring(0,1));
  $('.segundo2').html(seconds.toString().substring(1,2));

  $('#countdownTimer').html(days + "d " + hours + ":"  + minutes + ":" + seconds);


  if (distance < 0) {
    clearInterval(contador);
    $('#countdownTimer').html("ACREDITE NOS SEUS SONHOS");
  }
}, 1000);

$( document ).ready(function() {
  console.log( "ready!" );
});
