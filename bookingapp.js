var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
itemList.addEventListener("click", editItem);


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
  li.id = name;

  // Add text node with input value
  li.appendChild(document.createTextNode(name));
  li.appendChild(document.createTextNode(email));
  li.appendChild(document.createTextNode(contact));
  var editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.className = "btn float-right edit";

  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

 
}


// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      
      
      localStorage.removeItem(li.id);
      itemList.removeChild(li);
    }
  }
}

//Edit item
function editItem(e) {
 if (e.target.classList.contains("edit")) {
   if (confirm("Are You sure?")) {
     var li = e.target.parentElement;
     var obj = JSON.parse(localStorage.getItem(li.id));
     var fname = document.getElementById('Name');
     fname.value = obj.name;
     var femail = document.getElementById("Email");
     femail.value = obj.email;
     var fcontact = document.getElementById("Contact");
     fcontact.value = obj.cont;

     localStorage.removeItem(li.id);
     itemList.removeChild(li);

   }
 }
}


