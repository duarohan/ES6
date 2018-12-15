//Create Links for HTML to be used inside <ul> tags
var arr = [
{name :"LinkedIn", link: "http://linkedin1234.com"},
{name :"Blog", link: "http://blog1234.com"},
{name :"GitHub", link: "http://github1234.com"}
]

var links = Object.values(arr).map(k => "<li><a href="+k.link+">"+k.name+"</a></li>");

console.log(links);

//Manipulate values of an array
var Arr = [2,4,6,8,10]
Arr2 = Object.values(Arr).map(k => k *2);
console.log(Arr2);
//output Arr2=[4,8,12,16,20]