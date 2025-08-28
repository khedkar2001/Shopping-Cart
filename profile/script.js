// Write your script here

// const { jsx } = require("react/jsx-runtime");

let currUser = localStorage.getItem("currentUser");

if (currUser) {
  //user found, show profile page
} else {
  //take user back to login
  window.location.href = "/login.html";
}

let newFname = document.getElementById("fname");
let newLname = document.getElementById("lname");
let error = document.getElementById("error");

document.getElementById("saveInfoBtn").addEventListener("click", () => {
  console.log("save infor btn clcicked");
  if (newFname.value == "" || newLname.value == "") {
    error.textContent = "please enter all fields!!";
    return;
  } else {
    let currUserObj = JSON.parse(currUser);
    let users = JSON.parse(localStorage.getItem("users")) || [];

    console.log("current user object: ", currUserObj);

    let updatedUsers = users.map((user) => {
      if (user.email === currUserObj.email) {
        user.fname = newFname.value;
        user.lname = newLname.value;
      }
      return user;
    });

    //save updated users array
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    document.getElementById("success").textContent = "updated successfuly!!";
    document.getElementById("success").style.color = "green";
    newFname.value == "";
    newLname.value == "";
  }
});

// --------------------------------change password function ------------------

let oldPass = document.getElementById("oldPassword");
let newPass = document.getElementById("newPassword");
let cnfNewPass = document.getElementById("cnfNewPassword");
let passerror = document.getElementById("passError");
passerror.style.color = "red";

document.getElementById("changePass").addEventListener("click", () => {
  console.log("change pass btn clicked");
  if (oldPass.value === "" || newPass.value === "" || cnfNewPass.value === "") {
    passerror.textContent = "Please enter all fields!!";
  } else if (newPass.value !== cnfNewPass.value) {
    passerror.textContent =
      "New password and confirm password should be same!!!";
  } else if (oldPass.value !== JSON.parse(currUser).password) {
    //check oldpassword is corrcr or not
    passerror.textContent = "old password is incorrect!!!";
  } else {
    passerror.textContent = "";
    //change pass
    //get current user and users from localstoragr
    let currUserObj = JSON.parse(currUser);
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //update password
    let updatedUsers = users.map((user) => {
      if (user.email === currUserObj.email) {
        user.password = newPass.value;
        currUserObj.password = newPass.value;
      }
      return user;
    });
    //save updated users array
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    //save in curretn user
    localStorage.setItem("currentUser", JSON.stringify(currUserObj));

    document.getElementById("passSuccess").textContent =
      "password changed successfully";
    oldPass.value === "";
    newPass.value === "";
    cnfNewPass.value === "";
  }
  // passerror.textContent =""
});

// --------------------logout functionality---------------------------
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login.html"
});