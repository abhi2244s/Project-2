localStorage.setItem('username','user')

localStorage.setItem('password','12345')

function loginData(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    var user = localStorage.getItem('username')
    var password = localStorage.getItem('password')

    if(username==user&& password==password){
        window.location.href="dash.html"
    }
   else{
    alert("wrong credential")
   }

  
}







var btn = document.getElementById('button')
btn.addEventListener('click',loginData)