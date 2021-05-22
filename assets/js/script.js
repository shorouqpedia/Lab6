const usersApi = "https://jsonplaceholder.typicode.com/users";

// select Form
const addUserForm = document.getElementById("addUserForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");

// add submit Event listener
addUserForm.addEventListener("submit", (ev) => {
  // prevent default
  ev.preventDefault();
  // Get form data
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
  };

  // Send request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", usersApi);
  xhr.send(JSON.stringify(data));

  // Recieve Response and reset the form
  xhr.onload = function () 
  {
    if (data.firstName=="" || data.lastName=="")
    {
      console.log("text inputs should not be null");
      return;
    }
    console.log(`first name : ${data.firstName}`);
    console.log(`last name : ${data.lastName}`);

    if (xhr.status == 201) 
    {
      addUserForm.reset();
    }
  };
  xhr.onerror = function () 
  {
    console.log("Request Error.");
  };
  console.log('---------------------------');
});
