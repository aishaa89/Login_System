

var nameInput=document.getElementById("name");
var emailInput=document.getElementById("email");
var passwordInput=document.getElementById("pass");
var registerBtn=document.getElementById("registerBtn");
var warningMsg=document.getElementById("warning");
var signinBtn=document.querySelector(".signin");

var users=[];
if(localStorage.getItem("saveuser")!=null){
  users=JSON.parse(localStorage.getItem("saveuser"));
}
// Check Email
function checkEmail(){
var check=true;
  for(var i=0;i<users.length;i++){
    if(users[i].userEmail==emailInput.value){
      warningMsg.innerHTML="This Email already exists";
      warningMsg.classList.add('text-danger');
      warningMsg.classList.remove('text-success');
      console.log(emailInput.value)
     check=false;
     break;
      }
      
       }
       
       return check;    
}

  
////////////Add User to local Storage////////////
function addUser(){
    if(validateName()==true && validateEmail()==true &&validatePasssword()==true){   
      if(checkEmail()==true){
        var user={
          userName:nameInput.value,
          userEmail:emailInput.value,
          userPass:passwordInput.value
        }
      users.push(user);
      localStorage.setItem("saveuser",JSON.stringify(users));
      warningMsg.innerHTML="Success";
      warningMsg.classList.add('text-success');
      warningMsg.classList.remove('text-danger');
       clearForm();
       window.location = './index.html'; 
      }   
    }else if(validateName()==false){
        warningMsg.innerHTML="Enter valid name at least 3chararcter";
        warningMsg.classList.add('text-danger');
        warningMsg.classList.remove('text-success');

    }else if( validateEmail()==false){
        warningMsg.innerHTML="Enter valid Email";
        warningMsg.classList.add('text-danger');
        warningMsg.classList.remove('text-success');

    }else if(validatePasssword()==false){
        warningMsg.innerHTML="Enter valid password contain special charcter&letter&numbers";
        warningMsg.classList.add('text-danger');
        warningMsg.classList.remove('text-success');

    }
   
}

function clearForm(){
    nameInput.value='';
    emailInput.value='';
    passwordInput.value='';
}

////////////////// Register Button/////////////////
registerBtn.addEventListener('click',function(eventInfo){
    if(nameInput.value=='' || emailInput.value=='' || passwordInput.value==''){
          warningMsg.innerHTML="All inputs is required";
           warningMsg.classList.add('text-danger');
        warningMsg.classList.remove('text-success');

    }else{
       addUser();

    }
})
////////////////////SigninBtn///////////
signinBtn.addEventListener('click',function(eventInfo){
  window.location.href = 'index.html'; 
     
})
/////////////////// Validation Code////////////////////
function validateName(){
  var name=  nameInput.value;
  var regexName=/^([A-Z]|[0-9]){3,10}$/i;
  if(regexName.test(name)){
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    return true;
  }else{
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    return false;
  }

}

function validateEmail(){
    var email=emailInput.value;
    var regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   if(regexEmail.test(email)){
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    return true;
   }else{
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    return false;
  }

}

function validatePasssword(){
    var password=  passwordInput.value;
    var regexName=/^[A-Z]([a-z]|[0-9]|\W{1,}){3,10}$/i;
    if(regexName.test(password)){
      passwordInput.classList.add("is-valid");
      passwordInput.classList.remove("is-invalid");
      return true;
    }else{
      passwordInput.classList.add("is-invalid");
      passwordInput.classList.remove("is-valid");
      return false;
    }
  
  }