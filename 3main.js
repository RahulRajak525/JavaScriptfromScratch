console.log("hello");
console.log(document.domain);
console.log(document.title);
console.log(document.links);
console.log(document.body);
console.log(document.all);
console.log(document.all[6]);
document.all[6].textContent = "New Item Listner";
var headertitle = document.getElementById('header-title');
console.log(headertitle);
headertitle.style.border ='3px solid black'
var addItem = document.getElementById('additem');
console.log(addItem);
addItem.style.fontWeight = '700'  ;
addItem.style.color='green'
