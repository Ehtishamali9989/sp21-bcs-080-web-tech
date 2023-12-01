 $(document).ready(function () {
        $('#myForm').validate({
            rules: {
                name:"required",
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 6
                }
            },
            messages: {
                name:"Please enter your name",
                email: {
                    required: "Please enter your email",
                    email: "please enter your valid email"
                },
                password: {
                    required: "Please enter your password",
                    minlength: "Your password must be at least 6 characters long"
                },
            }, 
            submitHandler: function(form) {
                window.location.href = "landig.html";
              }
             });
        });