
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
        }
    });

    $("#agree").click(function(){
         $(".submit").attr("disabled", !this.checked);
    });

    $.mockjax({
        url: "login.action",
        response: function(settings) {
            var user = settings.data.match(/user=(.+?)($|&)/)[1],
                password = settings.data.match(/password=(.+?)($|&)/)[1];
            if (password !== "foobar") {
                this.responseText = "Your password is wrong (must be foobar).";
                return;
            }
            this.responseText = "Hi " + user + ", welcome back.";
        },
        responseStatus: 200,
        responseTime: 500
    });

    // show a simple loading indicator
    var loader = jQuery('<div id="loader"><img src="../img/loading.gif" alt="loading..."></div>')
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

    var v = jQuery("#validatableForm").validate({
        submitHandler: function(form) {
            jQuery(form).ajaxSubmit({
                target: "#result"
            });
        }
    });

    jQuery("#reset").click(function() {
        v.resetForm();
    });
});
