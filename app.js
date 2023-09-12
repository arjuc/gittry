var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
var item = document.getElementsByClassName("title");
item[0].style.fontWeight = "bold";
item[0].style.backgroundColor = "yellow";
var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "green";

for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
