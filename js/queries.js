$(function(){
  deleteItem =($item)=>$item.remove(); // this function deletes an item on the drawing camvas
$( "#draggable" ).draggable(); // sets the delete div draggable
 $("#wire1").draggable();
/* the clear canvas resets everything  within the div so that reassembling can occur again */
 clearCanvas =($clear) => {

   $clear.each(function(e){
     var composedDivs = $(this).find('img');
     for (var i = 0; i < composedDivs.length; i++) {//loop through all the divs inside ms2 div
       composedDivs[i].remove();

       $('[class = drawer]').remove();
     }
     $('.owk').css({"display": "none"});


   })
 }
});
