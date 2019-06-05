
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
    tag += "<tr><td><img  class = '"+itemClass+"' src ='"+tagObj[i].attributes[0].nodeValue+"' is_main = "+tagObj[i].attributes[3].nodeValue+" width='50' height='50' ></td><td>"+first+"</td></tr>";
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

   line.setAttribute('class','drawer');
   line.style.position = "absolute"
   line.style.width = distance+'px';
   line.style.top = (ymid-58)+'px';
   line.style.border = "1px solid black";
   line.style.left = (xmid-(distance/2))-245+'px';
   line.style.transform = "rotate("+slopeinDeg+"deg)";

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
