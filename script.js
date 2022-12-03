var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var form = document.getElementById("myForm");
var peopleList = document.getElementById("listOfPeople");

function addItems(e) {
    e.preventDefault();
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userName.value + " " + userEmail.value));
    peopleList.appendChild(li);
    var editButton = document.createElement("button");
    editButton.textContent = "EDIT";
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    peopleList.appendChild(editButton);
    peopleList.appendChild(deleteButton);

    // add to localStorage
    let userDetails = JSON.stringify({name : userName.value, emailid : userEmail.value});
    localStorage.setItem(`userDetails${userEmail.value}`, userDetails);
    console.log(localStorage)
}
form.addEventListener('submit', addItems);