$(function(){

  // $('#ban').on('click','.opo', function(evt){
  //   $('.main_2m').append("<img id = \"drag\" src = '"+evt.target.attributes[2].nodeValue+"' width='100' is_main ='"+evt.target.attributes[3].nodeValue+"' height='100' class = 'draggable running '/>");
  //   $( ".draggable" ).draggable({
  //       start: function(ex) {
  //           if($(this).hasClass('lastActive')){
  //             $(this).removeClass('lastActive').addClass('activeNow');
  //           }
  //           $(this).addClass('activeNow');
  //          },
  //      drag: function(ex) {
  //        var condi = ex.target.attributes[3].nodeValue;
  //
  //         var c_hei = ex.target.attributes[4].nodeValue;
  //
  //         if(collision($('.main'), $(this)) && condi === "true"){
  //           $('.main').addClass('touched');
  //           console.log(__dimensions);
  //             ex.target.attributes[2].nodeValue = 250;
  //             ex.target.attributes[4].nodeValue = 300;
  //           $(this).removeClass('lastActive');
  //
  //
  //            //$('.main').offset().outerWidth(true);
  //          //console.log(c_wid);
  //         }else{
  //           $('.main').removeClass('touched');
  //           ex.target.attributes[2].nodeValue = 100;
  //           ex.target.attributes[4].nodeValue = 100;
  //         }
  //
  //     },
  //     stop: function() {
  //        $(this).addClass('lastActive');
  //
  //     }
  //   })
  // });

  $('.main_2m').on('dblclick', '.running', function(e){
    alert('wahahi');
  });

});
