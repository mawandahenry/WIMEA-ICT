  var __dimensions = {};
  function connect(div1, div2) {
      var off1 = getOffset(div1);
      var off2 = getOffset(div2);
      // bottom right
      var x1 = off1.left + off1.width;
      var y1 = off1.top + off1.height/2;
      // top right
      var x2 = off2.left;
      var y2 = off2.top+off2.height/2;
      // distance
      var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));

      console.log(length);
      //console.log(x2);
      //document.body.innerHTML += htmlLine;
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

  window.testIt = function() {
      var div1 = document.getElementById('div1');
      var div2 = document.getElementById('div2')
      connect(div1, div2, "#0F0", 2);

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
    console.log(tagObj[i])

  }
  document.getElementById('ban').innerHTML = tag;

  }



var mnet = document.getElementById('#bus');
// = getOffset(mnet);
console.log(getOffset(mnet));

function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var z1 = $div1.offset().bottom;
        var a1 = $div1.offset().right;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var r2 = a1+w1;

        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var z2 = $div1.offset().bottom;
        var a2 = $div1.offset().right;
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2|| h1<h2) return false;
        return true;
}
function setDimensions($place1, $place2){
  var x1 = $place1.offset().left;
  var y1 = $place1.offset().top;
  var h1 = $place1.outerHeight(true);
  var w1 = $place1.outerWidth(true);

  var x2 = $place2.offset().left;
  var y2 = $place2.offset().top;
  var h2 = $place2.outerHeight(true);
  var w2 = $place2.outerWidth(true);

  x1 = x2;
  y1 = y2;
  h1 = h2;
  w1 = w2;
}

function createDiv($number){
  var counter = 0;

  var tx = "<div id = 'num"+counter+"' class = 'beat'></div>";
  counter++;
  return tx;
}
