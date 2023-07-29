$(document).ready (function() {
    $("#signup-form").validate({
        ruels:{
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6
                
            }
        },
        messages:{
            emailAddress:{
                required:"Enter Email ",
                maxlenght:"maximun 20 characters"
            },
            Password:{
                required:"Enter Password",
                minlength:"atleast 4 character"
            }
        }
    })
})
