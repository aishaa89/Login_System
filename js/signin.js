
var loginemailInput=document.getElementById("loginemail");
var loginpasswordInput=document.getElementById("loginpass");
var loginBtn=document.getElementById("loginBtn");
var loginMsg=document.getElementById("Messsage");

var loginUsers=[];

if(localStorage.getItem("saveuser")!=null){
    loginUsers=JSON.parse(localStorage.getItem("saveuser"));
}

function checkEmailPassword(){
var check_Email_pass=false;
  for(var i=0;i<loginUsers.length;i++){
    if(loginUsers[i].userEmail==loginemailInput.value&&loginUsers[i].userPass==loginpasswordInput.value){
      check_Email_pass=true;
       localStorage.setItem("SessionUserName",JSON.stringify(loginUsers[i].userName));
     break;
      }
      
       }
       return check_Email_pass;
}

/////////////////Login/////////////

function login(){
  if(loginemailInput.value==''||loginpasswordInput.value==''){
    loginMsg.innerHTML="All Inputs is required";
    loginMsg.classList.remove('text-success');
    loginMsg.classList.add('text-danger');
}else{
    if( checkEmailPassword()==true){
      loginMsg.innerHTML="Success";
      loginMsg.classList.add('text-success');
      loginMsg.classList.remove('text-danger');
      window.location='./home.html';
    }else{
      loginMsg.innerHTML="Your Email or password not valid";
      loginMsg.classList.remove('text-success');
      loginMsg.classList.add('text-danger');   
    }
 
}
}

loginBtn.addEventListener('click' ,function(eventInfo){
          login();
})