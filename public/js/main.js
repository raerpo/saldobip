$('#consultar-bip').click(function(){
  var numeroTarjeta = $('#numero-bip').val();
  var $textButton = $(this).find('span');
  var $spinner = $(this).find('.spinner');
  $textButton.css('display','none');
  $spinner.css('display','inline');
  $.ajax({
    url: '/consultar-saldo/' + numeroTarjeta,
    type: 'POST',
    success: function(data){
      $textButton.css('display','inline');
      $spinner.css('display','none');
      console.log(data);
    }
  });
});
