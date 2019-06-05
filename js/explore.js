var xmlDocument;


/**
    function for reading an xml file and return its object representation

    @param path -> the path to the xml file to be loaded
    @return xmlDocument -> the object representation of the xml document can be used to parse the xml file and look for specific elements in the xml file
*/
var readXMLFile = function(path) {

    if(typeof window.DOMParser != "undefined") {

        var request = new XMLHttpRequest();
        request.open("GET", path, false);

        if(request.overrideMimeType) {
            request.overrideMimeType('text/xml');
        }
        request.send();
        xmlDocument = request.responseXML;
    }
    else {
        xmlDocument = new ActiveXObject("Microsoft.XMLDOM");
        xmlDocument.async = "false";
        xmlDocument.load(path);
    }
    return xmlDocument;
}
/**
    function for reading the link tag of the AWS component from the XML file

    @param xmlObject -> The object representaion of the xml file in which the link is to be searched
    @return link -> The link to the AWS Component's details read from the xml file

    Example
    <link>LINK</link>

    The function looks for the link tag, gets the LINK and returns it
*/
var readComponentLink = function(xmlObject) {
    return getXMLTagValue(xmlObject, "link");
}
/**
    function for reading the purpose tag of the AWS component from the XML file

    @param xmlObject -> The object representaion of the xml file in which the purpose is to be searched
    @return purpose -> The link to the AWS Component's purpose read from the xml file

    Example
    <purpose>PURPOSE</purpose>

    The function looks for the purpose tag, gets the PURPOSE and returns it
*/
var readComponentPurpose = function(xmlObject) {
    return getXMLTagValue(xmlObject, "purpose");
}

/**
    function for reading the name tag of the AWS component from the XML file

    @param xmlObject -> The object representaion of the xml file in which the name is to be searched
    @return name -> The name of the AWS Component read from the xml file
    Example
    <name>NAME</name>

    The function looks for the name tag, gets the NAME and returns it
*/
var readComponentName = function(xmlObject) {
    return getXMLTagValue(xmlObject,"name");
}
/**
    function for reading the description tag of the AWS component from the XML file

    @param xmlObject -> The object representaion of the xml file in which the descriptio is to be searched
    @return description -> The description of the AWS Component read from the xml file

    Example
    <description>DESCRIPTION</description>

    The function looks for the desription tag, gets the DESCRIPTION and returns it
*/
var readComponentDescription = function(xmlObject) {
    return getXMLTagValue(xmlObject, "description");
}


/**
    function to return the path to a component's image

    @param xmlObject -> The object representaion of the xml file in which the image is to be searched
    @param interface_type ->      The interface of the image of the component
    @return imagePath -> The path to the component's image needed

    Example
    <image attribute='atributeX'>IMAGE PATH</image>

    The function gets the IMAGE PATH
*/
var readComponetImage = function(xmlObject, interface_type) {

    // get the image tags in the xml
    var imageTag = xmlObject.getElementsByTagName("image");
    var imagePath = null;

    // loop through all the image tags and look for the one that has the required interface
    for(var i = 0; i < imageTag.length; i++ ) {
        var typeOfInterface = imageTag[i].attributes[0].nodeValue;
        if(typeOfInterface == interface_type) {
            // when found, return the path to the interface image
            imagePath = imageTag[i].childNodes[0].nodeValue;
        }
    }

    return imagePath;
}

/**
    function to read the properties of the AWS component

    @param xmlObject -> The object representaion of the xml file in which the properties are to be searched
    @return propertiesArray -> The array having the AWS Component's properties read from the xml file

    Example
    <property>Property1</property>
    <property>Property2</property>
    ................
    <property>Propertyn</property>

    The function gets the properties and puts them in an array and returns the array
*/
var readComponentProperties = function(xmlObject) {

    var propertiesArray = new Array();

    var propertiesTag = xmlObject.getElementsByTagName("property");

    for(var i = 0; i < propertiesTag.length; i++) {
        var property = propertiesTag[i].childNodes[0].nodeValue;
        propertiesArray.push(property);
    }
    return propertiesArray;
}
/**
    function to preparet the component's properties in a list fomart

    @param xmlObject -> The object representaion of the xml file in which the properties are to be searched
    @return propertiesList -> the html list representation of the proprties

    Example
    <li>Property1</li>
    <li>Property2</li>
    ................
    <li>Propertyn</li>

    The function gets the properties and puts them in <li> tags
*/
let getPropertiesList = function(xmlObject) {

    //get the properties into an array
    var properties = readComponentProperties(xmlObject);

    var propertiesList = "";
    for(var i = 0; i < properties.length; i++) {
        // add each property into <li> tag
        propertiesList += "<li class='list-group-item'>"+properties[i]+"</li>";

    }

    return propertiesList;
}


/**
    function to get and return the tag's text

    @param xmlObject -> The object representaion of the xml file in which the tag is to be searched
    @param tagName -> The tag to be searched for in the xml file
    @return tagData -> The data in the tag's opening and closing
    <tag>Text</tag>
    The function returns the 'Text' from the <tag>
*/
var getXMLTagValue = function(xmlObject, tagName) {

    //pick the tag
    var tag = xmlObject.getElementsByTagName(tagName)[0];

    // confirm the tag was found
    if(tag == null) {
        return null;
    }
    var child = tag.childNodes[0];

    var tagData = child.nodeValue;

    //return the tag's data
    return tagData;
}
let loadComponents = function(xmlFile, tag) {

  var xmlObject = readXMLFile(xmlFile);
  var components = "";
  // get the tag from xml
  var tagObject = xmlObject.getElementsByTagName(tag);

  // add the images to the components div
  for(var i = 0; i < tagObject.length; i++) {
    var caption = tagObject[i].attributes[2].nodeValue.replace(/['"]+/g, '');
    components += "<tr>"
                    +"<td>"
                    +"<img src ='"+tagObject[i].attributes[0].nodeValue+"' is_main = "+tagObject[i].attributes[3].nodeValue+" width='50' height='50' >"
                    +"</td>"
                    +"<td><a class='comp' href='#'>"+caption+"</a></td>"
                  +"</tr>";

  }

  // show the components in the components pane
  document.getElementById('ban').innerHTML = components;
}
