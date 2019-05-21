$(function(){

  $('#ban').on('click','.opo', function(evt){
    $('#cava').append("<img src = '"+evt.target.attributes[2].nodeValue+"' draggable = 'true' width='100' height='100'class = 'running'/>");
    $('#cava').each(function(){
      var imgs = $(this).find('.running');
      console.log(imgs);
    })
  });
  $('#cava').on('mousedown', '.running', function(){
    $($(this)).addClass('activeNow');
  });



});
