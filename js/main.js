
/* connectHorizontal was meant to connect 2 divs in horizontal way*/
function connectHorizontal(div1, div2, color, thickness) {
    var off_1 = getOffset(div1); //get top, left, width and height
    var off_2 = getOffset(div2); //get top, left, width and height

    var x1 =  off_1.left+off_1.width; //x1 = width + left offset
    var y1 = off_1.left;             //y1 = left offset
    var x2 = off_2.left;            // x2 = left offset again
    var y2 = off_2.left+off_2.height/2;
    var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));

    var cx = ((x1 + x2) / 2) - (length / 2);
    var cy = ((y1 + y2) / 2) - (thickness / 2);
    var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
    var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
    document.body.innerHTML += htmlLine;
}

  function connect(div1, div2, color, thickness) {
      var off1 = getOffset(div1);
      var off2 = getOffset(div2);
      var x1 = off1.left + off1.width;
      var y1 = off1.top + off1.height/2;
      var x2 = off2.left;
      var y2 = off2.top+off2.height/2;
      var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
      var cx = ((x1 + x2) / 2) - (length / 2);
      var cy = ((y1 + y2) / 2) - (thickness / 2);
      var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
      var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
      document.body.innerHTML += htmlLine;
  }

  function connectVertical(div1, div2, color, thickness) {
      var off1 = getOffset(div1);
      var off2 = getOffset(div2);

      var x1 =  off1.left+off1.width/2;
      var y1 = off1.top+off1.height;
      var x2 = off2.left+ off2.width/2;
      var y2 = off2.top;
      var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
      var cx = ((x1 + x2) / 2) - (length / 2);
      var cy = ((y1 + y2) / 2) - (thickness / 2);
      var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
      var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
      document.body.innerHTML += htmlLine;
  }

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
    // console.log(tagObj[i])

  }
  document.getElementById(placement).innerHTML = tag;

  }




//var mnet2 = document.getElementById('i2c');


function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;


        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
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
  //$place2.outerHeight() = h1;
  //$place2.outerWidth() = w1;

return $place2;
}

function createDiv(){
  var counter = 0;

  var tx = "<svg class='dragon' width='100' height='100'><line x1='50' y1='50' x2='350' y2='350' stroke='black'/></svg>"

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
