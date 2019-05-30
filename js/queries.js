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
   function connect_Vertical($div1, $div2, color, thickness) {
       var off1 = getOffset($div1);
       var off2 = getOffset($div2);

       var x1 =  off1.left+off1.width/2;
       var y1 = off1.top+off1.height;
       var x2 = off2.left+ off2.width/2;
       var y2 = off2.top;
       var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
       var cx = ((x1 + x2) / 2) - (length / 2);
       var cy = ((y1 + y2) / 2) - (thickness / 2);
       var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
       console.log(off2);
       var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
       document.body.innerHTML += htmlLine;
   }
});
