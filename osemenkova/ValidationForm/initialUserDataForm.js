/**
 * Created by osemenkova on 2/4/2015.
 */

jQuery(document).ready(function(){
    'use strict';

    //event.preventDefault();

    $('#agreeCheck').click(function() {
        'use strict';
        $("#submitData").attr("disabled", !this.checked);
    });

    $( "#initDataform" ).validate({
        rules: {
            userName: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            userEmail: {
                required: true,
                email: true
            },
            uesrPsw : {
                minlength : 9
            },
            uesrPswCheck : {
                minlength : 9,
                equalTo : "#idUserPsw"
            }
        },
        messages: {
            userName: {
                required: "Please enter your name!",
                minlength: $.format("At least {0} characters required!"),
                maxlength: $.format("Maximum {0} characters allowed!")
            },
            userEmail: {
                required: "Please enter your email!",
                email: "Please enter email in correct format"
            }
        }
    });

    $("#initDataform").submit(function() {
        var userName = $('#idUserName').val();
        var userEmail = $('#idUserEmail').val();
        var userAge = $('#idUserAge').val();

        alert("Your name: " +  userName + "\n" + "Your email: " + userEmail + "\n" + "Your age: " + userAge);

    });
});