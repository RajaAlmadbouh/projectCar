var logInForm = document.getElementById('logIn');
var emailForm = document.getElementById('form2Example1');
var passForm = document.getElementById('form2Example2');

logInForm.addEventListener('submit',function(e){
    e.preventDefault();
    let usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
    let isLogin = false;

    for(let i = 0 ; i < usersData.length ; i++){
      if(emailForm.value == usersData[i]['email'] && passForm.value == usersData[i]['password']){
        localStorage.setItem('name',usersData[i]['name']);
        localStorage.setItem('email',usersData[i]['email']);
        localStorage.setItem('password',usersData[i]['password']);
        alert("Your account exisst");
          window.location.href = "../index.html"; 
          isLogin = false;
          return ; 
      }
      else{
       isLogin = true;
    }
    }
    if(isLogin){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your account is woring . ',
        showConfirmButton: false,
        timer: 7000
      }); 
    }
   

});
//Your account is woring .