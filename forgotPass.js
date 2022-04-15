var signInDetails=JSON.parse(localStorage.getItem('signInDetails')) || [];

        document.querySelector('form').addEventListener('submit',function(){
            event.preventDefault();
            var enteredEmail=document.querySelector('#enteredEmail').value;

            var flag=false;
            signInDetails.forEach(element => {
                if(enteredEmail==element.email){
                    flag=true;
                    alert('Your Password is : '+" "+element.password);
                    window.location.href='./signIn.html';
                    document.querySelector('enteredEmail').value='';
                }
            });
            if(!flag){
                alert('Incorrect Email Address');
            }

        })