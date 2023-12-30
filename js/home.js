
var welcomeMsg=document.querySelector(".home h1");
var logout=document.querySelector(".nav-link");


var userNames=[];

if(localStorage.getItem("SessionUserName")!=null){
    userNames=JSON.parse(localStorage.getItem("SessionUserName"));
}

welcomeMsg.innerHTML='Hello '+' ' + userNames;

logout.addEventListener('click',function(eventInfo){
    localStorage.removeItem("SessionUserName");
    window.location='./index.html';
})

