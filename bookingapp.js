var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  
  // Get input value
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var contact = document.getElementById("Contact").value;
  

  let myObj = {
    name: name,
    email: email,
    cont: contact,
  };

  
  let myObj_s = JSON.stringify(myObj);
  localStorage.setItem(myObj.name, myObj_s);
  email = ", " + email;
  contact = ", " + contact;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(name));
  li.appendChild(document.createTextNode(email));
  li.appendChild(document.createTextNode(contact));

  // Append li to list
  itemList.appendChild(li);

 
}
