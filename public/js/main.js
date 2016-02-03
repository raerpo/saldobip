function showMsg(msg){
  $('.js-notification--message').html(msg)
}

function formatCredit(cardCredit){
  return '$' + cardCredit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderCardInfo(cardState, cardCredit, $notificationContainer){
  var CARDSTATES = {
    0: {
      'state':true,
      'msg':'Tarjeta valida'
    },
    1: {
      'state':false,
      'msg':'Tarjeta no valida'
    },
  };
  if( CARDSTATES[cardState].state ){
    showMsg( 'El saldo de la tarjeta es: ' + formatCredit( cardCredit ) );
  }
  else{
    showMsg( 'La tarjeta no es válida' )
  }
}

$('.js-btn-query').click(function(){
  var numeroTarjeta = $('#numero-bip').val();
  if( numeroTarjeta === "" || numeroTarjeta.length < 5 || numeroTarjeta.length > 10 || numeroTarjeta < 0){
    return false;
  }
  $(this).addClass('btn--loading');
  $.ajax({
    url: '/consultar-saldo/' + numeroTarjeta,
    type: 'POST',
    success: function(data){
      $('.js-btn-query').removeClass('btn--loading').blur();
      var cardData = JSON.parse(data);
      var cardState = cardData[0].estado;
      var cardNumber = cardData[1].tarjeta;
      var cardCredit = cardData[1].saldo;
      renderCardInfo(cardState, cardCredit, $('.js-notification'));
      $('.js-notification').addClass('notification--visible');
    },
    error: function(){
      $('.js-btn-query').removeClass('btn--loading').blur();
    }
  });
});
