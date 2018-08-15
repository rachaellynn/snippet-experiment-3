
window.onload = function(){
//parse the query string
var queryString = window.location.search;
queryString = queryString.substring(1);
var params=queryString.split("=");
console.log(params[1]);
var name = params[1];

//add some text to the "mytext" div
var mytext = document.getElementById("mytext");
var newtext = document.createTextNode("new text" + " " + name)
mytext.appendChild(newtext);
}
