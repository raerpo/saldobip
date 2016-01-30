$('.js-btn-query').click(function(){
  var numeroTarjeta = $('#numero-bip').val();
  $(this).addClass('btn--loading');
  $.ajax({
    url: '/consultar-saldo/' + numeroTarjeta,
    type: 'POST',
    success: function(data){
      $textButton.css('display','inline');
      $spinner.css('display','none');
      console.log(data);
    },
    error: function(){
      $('.js-btn-query').removeClass('btn--loading').blur();
    }
  });
});
