
  function getOffset( el ) {
      var _x = 0;
      var _y = 0;
      var _w = el.offsetWidth|0;
      var _h = el.offsetHeight|0;
      while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
      }
      return { top: _y, left: _x, width: _w, height: _h };
  }
//set cordinates for a image
function set_cordinates(x_cordinates, y_cordinates){
	var x = x_cordinates;
    var y = y_cordinates;

    return {x, y};
}

  function readXml(xmlFile, placement,itemClass){

  var xmlDoc;
  var arr = new Array();
  var tag = "";

  if(typeof window.DOMParser != "undefined") {
      xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET",xmlFile,false);
      if (xmlhttp.overrideMimeType){
          xmlhttp.overrideMimeType('text/xml');
      }
      xmlhttp.send();
      xmlDoc=xmlhttp.responseXML;
  }
  else{
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async="false";
      xmlDoc.load(xmlFile);
  }
  var tagObj=xmlDoc.getElementsByTagName("image");
  var x = tagObj[0].attributes[0];
  for(var i = 0; i<tagObj.length; i++){
    arr.push(tagObj[i].attributes[0].nodeValue);
    var first = tagObj[i].attributes[2].nodeValue.replace(/['"]+/g, '');
<<<<<<< HEAD
	var cl = "<h6>"+first+"</h6>";

    tag += "<tr><td><img  class = '"+itemClass+"' src ='"+tagObj[i].attributes[0].nodeValue+"' is_main = "+tagObj[i].attributes[3].nodeValue+" width='50' height='50' ></td><td>"+cl+"</td></tr>";
=======
    tag += "<tr><td><img  class = '"+itemClass+"' src ='"+tagObj[i].attributes[0].nodeValue+"' is_main = "+tagObj[i].attributes[3].nodeValue+" width='50' height='50' ></td><td>"+first+"</td></tr>";
>>>>>>> d25342700cc57d72038201efa1ed02ca564b0a76
}
  document.getElementById(placement).innerHTML = tag;

  }
  function collision($div1, $div2) {
        var x1 = $div1.offset().left; //left ooffset for div1
        var y1 = $div1.offset().top;// top offset for div 1
        var h1 = $div1.outerHeight(true); // return outerHeight for div1
        var w1 = $div1.outerWidth(true); // return outerWidth for div1
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;//bottom
        var r2 = x2 + w2;
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2 ) return false;
        return true;
}
function setDimensions($place1, $place2){
  var x1 = $place1.offset().left;
  var y1 = $place1.offset().top;
  var h1 = $place1.outerHeight(true);
  var w1 = $place1.outerWidth(true);
  $place2.offset().left = 0;
  $place2.offset().top = 0;

return $place2;
}

function createDiv(){
  var counter = 1;
  var tx = "<div id = 'wire"+counter+"' height='1' class = 'wire'>hahhahhaha</div>";
  counter++;
  return tx;
}
function start_pos(){
    document.getElementById("img").style.top = '40px';
    document.getElementById("img").style.left = '20px';
    document.getElementById("img1").style.top = '100px';
    document.getElementById("img1").style.left = '20px';
    document.getElementById("img2").style.top = '160px';
    document.getElementById("img2").style.left = '20px';
}

function right(){       //moves image to the right
    document.getElementById("img").style.top = '440px';
    document.getElementById("img").style.left = '550px';

    setTimeout(function(){
        document.getElementById("img1").style.top = '220px';
    document.getElementById("img1").style.left = '550px';
    }, 4000);

    setTimeout(function(){
        document.getElementById("img2").style.top = '20px';
    document.getElementById("img2").style.left = '660px';
    }, 8000);
    //animate = setTimeout(right, 1000);
    adjustLine('img', 'img1', 'line');
}
<<<<<<< HEAD

function insertAfter(el, referenceNode){
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
function connect_images(obj1, obj2, div){
  var counter = 8;


  var x1 = obj1.x;
  var y1 = obj1.y;

  var x2 = obj2.x;
  var y2 = obj2.y;
   var distance = Math.sqrt( ((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)));
    var xmid = (x1+x2)/2;
   var ymid = (y1+y2)/2;
   var line_id = "line"+x1;
   var slopeinRad = Math.atan2(y1-y2,  x1-x2);
   var slopeinDeg = (slopeinRad * 180)/Math.PI;
   var line = document.createElement('div');
   line.setAttribute("id", line_id);
=======

function insertAfter(el, referenceNode){
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
function connect_images(obj1, obj2, div){
  var counter = 8;
>>>>>>> d25342700cc57d72038201efa1ed02ca564b0a76

   line.setAttribute('class','drawer');
   line.style.position = "absolute"
   line.style.width = distance+'px';
   line.style.top = (ymid-58)+'px';
   line.style.border = "1px solid black";
   line.style.left = (xmid-(distance/2))-227+'px';
   line.style.transform = "rotate("+slopeinDeg+"deg)";

<<<<<<< HEAD
   var ref = document.getElementById(div);
   insertAfter(line, ref);
   //ref.append(line);
 }
 function return_divs($container, $attr){
   var poc_arr = [];
   $container.each(function(evt){
     var tok = $(this.children);
     for(var i =0; i<tok.length; i++ ){
      if(tok[i].hasAttribute($attr)){ //checks for all divs with is2meter attrbute
        poc_arr.push(tok[i]); //ushes them into an array which it returns
        //console.log(poc_arr);
      }
     }
   })
   return poc_arr; //returned array
 }
 function collision_revision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    if ((y1 + $div1.outerHeight(true)) < y2 ||
        y1 > (y2 + $div2.outerHeight(true)) ||
        (x1 + $div1.outerWidth(true)) < x2  ||
        x1 > (x2 + $div2.outerWidth(true)))
        return false;
    return true;
}
function hitTest($a, $b){
    var aPos = $a.offset();
    var bPos = $b.offset();

    var aLeft = aPos.left;
    var aRight = aPos.left + $a.width();
    var aTop = aPos.top;
    var aBottom = aPos.top + $a.height();

    var bLeft = bPos.left;
    var bRight = bPos.left + $b.width();
    var bTop = bPos.top;
    var bBottom = bPos.top + $b.height();

    // http://tekpool.wordpress.com/2006/10/11/rectangle-intersection-determine-if-two-given-rectangles-intersect-each-other-or-not/
    return !( bLeft > aRight
        || bRight < aLeft
        || bTop > aBottom
        || bBottom < aTop
        );
}
function colDetect( $div1, $div2 ) {
	// Div 1 data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};
function isOverlap(idOne,idTwo){
        var objOne=$(idOne),
            objTwo=$(idTwo),
            offsetOne = objOne.offset(),
            offsetTwo = objTwo.offset(),
            topOne=offsetOne.top,
            topTwo=offsetTwo.top,
            leftOne=offsetOne.left,
            leftTwo=offsetTwo.left,
            widthOne = objOne.width(),
            widthTwo = objTwo.width(),
            heightOne = objOne.height(),
            heightTwo = objTwo.height();
        var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,             rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne&& topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
        return leftTop || rightTop || leftBottom || rightBottom;
}

function connect_images1(obj1, obj2, div){
=======
>>>>>>> d25342700cc57d72038201efa1ed02ca564b0a76
  var x1 = obj1.x;
  var y1 = obj1.y;
  var counter =0;
  var x2 = obj2.x;
  var y2 = obj2.y;
   var distance = Math.sqrt( ((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)));
    var xmid = (x1+x2)/2;
   var ymid = (y1+y2)/2;
<<<<<<< HEAD

   var slopeinRad = Math.atan2(y1-y2,  x1-x2);
   var slopeinDeg = (slopeinRad * 180)/Math.PI;
   var line = document.createElement('div');
   line.setAttribute("id", "line_id"+counter);
=======
   var line_id = "line"+x1;
   var slopeinRad = Math.atan2(y1-y2,  x1-x2);
   var slopeinDeg = (slopeinRad * 180)/Math.PI;
   var line = document.createElement('div');
   line.setAttribute("id", line_id);

>>>>>>> d25342700cc57d72038201efa1ed02ca564b0a76
   line.setAttribute('class','drawer');
   line.style.position = "absolute"
   line.style.width = distance+'px';
   line.style.top = (ymid-58)+'px';
   line.style.border = "1px solid black";
   line.style.left = (xmid-(distance/2))-245+'px';
   line.style.transform = "rotate("+slopeinDeg+"deg)";
<<<<<<< HEAD
   counter++;
   //console.log(distance);
   var ref = document.getElementById(div);
   insertAfter(line, ref);
   //document.body.innerHTML += line;

=======
>>>>>>> d25342700cc57d72038201efa1ed02ca564b0a76

   var ref = document.getElementById(div);
   insertAfter(line, ref);
 }
 function return_divs($container, $attr){
   var poc_arr = [];
   $container.each(function(evt){
     var tok = $(this.children);
     for(var i =0; i<tok.length; i++ ){
      if(tok[i].hasAttribute($attr)){ //checks for all divs with is2meter attrbute
        poc_arr.push(tok[i]); //ushes them into an array which it returns
        //console.log(poc_arr);
      }
     }
   })
   return poc_arr; //returned array
 }
