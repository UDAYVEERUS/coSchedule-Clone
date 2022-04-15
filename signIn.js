var signInDetails=JSON.parse(localStorage.getItem('signInDetails')) || [];

        document.querySelector('form').addEventListener('submit',function(){
            event.preventDefault();
            var enteredEmail=document.querySelector('#email').value;
            var enteredPass=document.querySelector('#password').value;

            var flag=false;
            signInDetails.forEach(element => {
                if(enteredEmail==element.email && enteredPass==element.password){
                    flag=true;
                    alert('Login Successful');
                    // window.location.href='./index.html';
                    document.querySelector('#email').value='';
                    document.querySelector('#password').value='';
                    window.location.href='./inner7.html';
                }
            });
            if(!flag){
                alert('Please Provide Correct Details');
            }

        })