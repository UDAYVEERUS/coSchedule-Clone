var signInDetails=JSON.parse(localStorage.getItem('signInDetails')) || [];

        document.querySelector('form').addEventListener('submit',function(){
            event.preventDefault();
            var obj={
                name: document.querySelector('#name').value,
                email: document.querySelector('#email').value,
                company: document.querySelector('#company').value,
                website: document.querySelector('#website').value,
                password: document.querySelector('#password').value
            }
            
            if(document.querySelector('#name').value==''||document.querySelector('#email').value==''||document.querySelector('#company').value==''||document.querySelector('#website').value==''||document.querySelector('#password').value==''){
                alert('Please Provide Correct Details');
            }
            else{
                signInDetails.push(obj);
                localStorage.setItem('signInDetails',JSON.stringify(signInDetails));
                alert('Account Created Successfully');
                document.querySelector('#name').value='';
                document.querySelector('#email').value='';
                document.querySelector('#company').value='';
                document.querySelector('#website').value='';
                document.querySelector('#password').value='';
                window.location.href='./inner1.html';
            }

        })