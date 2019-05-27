
function connectHorizontal(div1, div2, color, thickness) {
    var off_1 = getOffset(div1);
    var off_2 = getOffset(div2);
    console.log(off_1);
    console.log(off_2);
    var x1 =  off_1.left+off_1.width;
    var y1 = off_1.left;
    var x2 = off_2.left;
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

  function readXml(xmlFile){

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
    tag += "<tr><td><img id='drag1' class = 'opo' src ='"+tagObj[i].attributes[0].nodeValue+"' is_main = "+tagObj[i].attributes[3].nodeValue+" width='50' height='50' ></td><td>"+first+"</td></tr>";
    // console.log(tagObj[i])

  }
  document.getElementById('ban').innerHTML = tag;

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
console.log(x1, y1, h1, w1);
  $place2.offset().left = x1;
  $place2.offset().top = y1;
  //$place2.outerHeight() = h1;
  //$place2.outerWidth() = w1;

return $place2;
}

function createDiv(){
  var counter = 0;

  var tx = "<svg class='dragie' width='500' height='500'><line x1='50' y1='50' x2='350' y2='350' stroke='black'/></svg>"

  return tx;
}
function loadTarget($file){
  
}
