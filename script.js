/* PRIMITIVE VALiDATION */
formValidate = () => {
let user = document.getElementById("username");
let pass = document.getElementById("password");
let bool = false;
let state = false;

if(user.value.length > 0){
  user.parentElement.classList.remove("error");
  bool = true;
  state = true;
  }
  else{
    user.parentElement.classList.add("error");
  }

  if(pass.value.length > 0 && state){
    pass.parentElement.classList.remove("error");
    bool = true;
  }
  else{
    pass.parentElement.classList.add("error");
    if(pass.value.length > 0){
      pass.parentElement.classList.remove("error");
    }
    bool = false;
  }
  return bool;

}

/* Registration form */
showRegisterForm = () =>{
  let loginWrapper = document.querySelector(".login");
  loginWrapper.style.display="none";
  let registerWrapper = document.querySelector(".registration");
  registerWrapper.style.display="block";
}

showLoginForm = () =>{
    let loginWrapper = document.querySelector(".login");
  loginWrapper.style.display="block";
  let registerWrapper = document.querySelector(".registration");
  registerWrapper.style.display="none";
}










