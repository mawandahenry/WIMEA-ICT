$(function(){
  var dimensions;
  $('#ban').on('click','.opo', function(evt){
    $('#cava').append("<img id = \"drag\" src = '"+evt.target.attributes[2].nodeValue+"' width='100' height='100' class = 'draggable running ui-widget-content'/>");
    $( ".draggable" ).draggable();
    $('#cava').each(function(){
      var imgs = $(this).find('.running');
      console.log(imgs);
    })
  });
  $('#cava').on('mousedown', '.running', function(e){
    //$(this).css({"position": "absolute","margin-left" : e.pageX, "margin-top" : e.pageY});
    $(this).addClass('activeNow');
    });
    $('#cava').on('mousemove', '.running', function(e){
      //$(this).css({"position": "absolute","margin-left" : e.pageX, "margin-top" : e.pageY});
      $(this).addClass('activeNow');
      console.log(getOffset($(this)));
      });
  $('#cava').on('mouseup', '.running', function(e){
    $(this).addClass('lastActive');
  });
  $('#cava').on('mouseleave', '.running', function(e){
    $(this).removeClass('activeNow').addClass('previous');
  });


$(window).on('dragenter','.main', function(e){
  alert('hello');
});
});
