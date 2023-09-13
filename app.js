/*var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
var item = document.getElementsByClassName("title");
item[0].style.fontWeight = "bold";
item[0].style.backgroundColor = "yellow";
var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "green";

for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
*/

/*var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
var li = document.getElementsByTagName("li");
li[0].style.fontWeight = "bold";
li[0].style.backgroundColor = "yellow";
li[2].style.backgroundColor = "green";

for (var i = 0; i < li.length; i++) {
  li[i].style.fontWeight = "bold";
  li[i].style.backgroundColor = "yellow";
}
*/

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = "hidden";

var item1 = document.querySelectorAll('li');
item1[1].style.color ="green";


var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i =0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}