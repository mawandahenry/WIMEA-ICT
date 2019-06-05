$(function(){
  deleteItem =($item)=>$item.remove(); // this function deletes an item on the drawing camvas
  $( "#draggable" ).draggable(); // sets the delete div draggable
   $("#wire1").draggable();
  /* the clear canvas resets everything  within the div so that reassembling can occur again */
   clearCanvas =($clear) => {

     $clear.each(function(e){
       var composedDivs = $(this).find('div');
       for (var i = 0; i < composedDivs.length; i++) {//loop through all the divs inside ms2 div
         composedDivs[i].innerHTML = "";

         $('[class = drawer]').remove();
       }
       $('.owk').css({"display": "none"});
       removeClass($('.ms2'));

     })
   }
/* basically this is made with love to remove all instances of border colors when clear button is clicked */
   removeClass = ($clas) => {
     $clas.each(function(e){
       var composedD = $(this).find('div');
       for (var i = 0; i < composedD.length; i++) {
         $('.'+composedD[i].classList[0]).hasClass('dull') ||  $('.'+composedD[i].classList[0]).hasClass('wrongie') ||  $('.'+composedD[i].classList[0]).hasClass('awosome')? $('.'+composedD[i].classList[0]).removeClass('dull'): null;
         $('.'+composedD[i].classList[0]).hasClass('dull') ||  $('.'+composedD[i].classList[0]).hasClass('wrongie') ||  $('.'+composedD[i].classList[0]).hasClass('awosome')? $('.'+composedD[i].classList[0]).removeClass('awosome'): null;
         $('.'+composedD[i].classList[0]).hasClass('dull') ||  $('.'+composedD[i].classList[0]).hasClass('wrongie') ||  $('.'+composedD[i].classList[0]).hasClass('awosome')? $('.'+composedD[i].classList[0]).removeClass('wrongie'): null;
       }


     })
   }
   
});
