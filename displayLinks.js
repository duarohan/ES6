var arr = [{name :"LinkedIn", link: "http://linkedin1234.com"},
{name :"Blog", link: "http://blog1234.com"},
{name :"GitHub", link: "http://github1234.com"}
]

var links = Object.values(arr).map(k => "<li><a href="+k.link+">"+k.name+"</a></li>");

console.log(links);
