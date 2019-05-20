$(function(){
  $('.auto').on('click', function(evt){
      $('.fix').text(evt.target.childNodes[0].nodeValue);
       evt.preventDefault();
    $('.menux').slideDown('slow');
  })
  $('.dis').on('click', function(evt){
    $('.menux').slideUp('slow');
  })
  $('.conti').click(function(ev){
    location.href = "assemble.html?selection=" + $('.fix').text()+"&component='"+$('#selec').val()+"'";
  })
  $('#dashItems').on('click','.opo', function(evt){
    $('#naco').append("<img src = '"+evt.target.attributes[2].nodeValue+"' width='100' height='100'/>");
  });

});
