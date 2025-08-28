
// let currUser = localStorage.getItem("currentUser");

// if (currUser) {
//   //user found, show profile page
//   // window.location.href = "/shop";
// } else {
//   //take user back to login
//   window.location.href = "/login.html";
// }


let email = document.getElementById("email");
let password = document.getElementById("password");

let error = document.getElementById("error");
error.style.color = "red";

function generateToken() {
  return Math.random(0, 100000).toString();
}

document.getElementById("login").addEventListener("click", () => {
  console.log("login button clicked");
  if (email.value == "" || password.value == "") {
    error.textContent = "Please enter all fields!!";
  } else {
    let users = JSON.parse(localStorage.getItem("users") ?? "[]");
    console.log("users: ", users);
    if (users.length > 0) { 
      let user = users.filter((user) => user.email == email.value);
      if(user.length>0){
        //user exists
        console.log("user Exists, user length:",user.length);
        
        let obj = user[0];
        console.log("object: ", obj);
        if (obj.password == password.value) {
          window.location.href = '/shop/index.html'
          //login
          // console.log("password matched");
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              email: email.value,
              password: password.value,
              token: generateToken(),
            })
          );
        }

      }else{
        //no user
        error.textContent = "No User Found!! Please signup"
      } 
    } else {
      // please signup
      error.textContent = "No User Found!! Please signup"
    }
  }
});