var userName = document.getElementById("uesrName");
userName.innerHTML = localStorage.getItem('name');

var loginOrOut = document.getElementById("loginOrOut");



if(localStorage.getItem("name") != null){
    loginOrOut.innerHTML = 'LogOut';
    loginOrOut.onclick=clearLocalStorage;
    

}


function clearLocalStorage(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
        location.replace("../pages/login.html");
        
    }