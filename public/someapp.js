
window.onload = function(){
//parse the query string
var queryString = window.location.search;
queryString = queryString.substring(1);
params=queryString.split("=");
console.log(params[1]);
name = params[1];

//add some text to the "mytext" div
mytext = document.getElementById("mytext");
newtext = document.createTextNode("new text" + " " + name)
mytext.appendChild(newtext);
}
