
$(document).ready(function(){
    // validate the form when it is submitted
    $("#validatableForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            age: {
                required: true,
                number: true,
                min: 18
            },
            agree: "required"
        },
        messages: {
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            age: {
                required: "Please, specify your age",
                number: "Should be a number",
                min: "Your age must be equal or grater than 18"
            },
            agree: "Please accept our policy"
        },
        submitHandler: function(form) {
            jQuery(form).ajaxSubmit({
                target: "#result"
            });
        }
    });

    $("#agree").click(function(){
         $(".submit").attr("disabled", !this.checked);
    });

    $.mockjax({
        url: "action.submit.form",
        response: function(settings) {
            var username = settings.data.match(/username=(.+?)($|&)/)[1],
                email = settings.data.match(/email=(.+?)($|&)/)[1];
                age = settings.data.match(/age=(.+?)($|&)/)[1];
                password = settings.data.match(/password=(.+?)($|&)/)[1];
            this.responseText = "<h4>Hi, you have submitted following data:</h4><br>" +
            "<b>User:</b> " + username + "<br>" +
            "<b>Email:</b> " + email + "<br>" +
            "<b>Age:</b> " + age + "<br>" +
            "<b>Password:</b> " + password;
        },
        responseStatus: 200,
        responseTime: 1000
    });

    // show a simple loading indicator
    var loader = jQuery('<div id="loader"><img src="img/loading.gif" alt="loading..."></div>')
        .css({
            position: "relative",
            top: "1em",
            left: "25em",
            display: "inline"
        })
        .appendTo("body")
        .hide();
    jQuery().ajaxStart(function() {
        loader.show();
    }).ajaxStop(function() {
        loader.hide();
    }).ajaxError(function(a, b, e) {
        throw e;
    });

    // var v = jQuery("#validatableForm").validate({
    //     submitHandler: function(form) {
    //         jQuery(form).ajaxSubmit({
    //             target: "#result"
    //         });
    //     }
    // });

    // jQuery("#reset").click(function() {
    //     v.resetForm();
    // });
});
