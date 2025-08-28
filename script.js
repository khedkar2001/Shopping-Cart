// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let error = document.getElementById("error");
// error.style.color = "red";

document.getElementById("signup").addEventListener("click", (e) => {
  if (
    fname.value == "" ||
    lname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    error.textContent = `Please enter all details`;
  } else if (password.value == confirmPassword.value) {
    //signup
    let users = JSON.parse(localStorage.getItem("users") ?? "[]");

    let filteredUser = users.filter((user) => user.email == email.value);
    if (filteredUser.length > 0) {
      error.textContent = `user alredy exists!! Please login`;
    } else {
      users.push({
        email: email.value,
        password: password.value,
        fname: fname.value,
        lname: lname.value,
        createdAt: new Date(),
      });
      localStorage.setItem("users", JSON.stringify(users));
      fname.value = "";
      lname.value = "";
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
    }
  } else {
    error.textContent = `please make sure password and confirm password are same!!!`;
  }
});