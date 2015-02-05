function success(data){
	$("#successcontainer").empty();
	data = jQuery.parseJSON(data);
	$("#successcontainer").append(
		"<div class='alert alert-success' role='alert'>" +
			"<text> Name:" + data.name + "</text> </br>" +
			"<text> Email:" + data.mail + "</text> </br>" +
			"<text> Password:" + data.pass + "</text> </br>" +
			"<text> Password confirmation:" + data.passconfirm + "</text> </br>" +
			"<text> Date of birth:" + data.dob + "</text>" +
		"</div>"
	);
	
}
function bindAll(){
	$("#dob").datepicker({
      changeMonth: true,
      changeYear: true
    });
	$('#agreed').click(function () {
		if($("#agreed").is(':checked')){
			$("#formsubmit").attr("class", "btn btn-default")
		} else{
			$("#formsubmit").attr("class", "btn btn-default disabled")
		}
	});
	$.validator.addMethod("dob", function (value, element) {
			var year = value.split('/');
			if ( value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/) && parseInt(year[2]) <= 1999 )
				return true;
			else
				return false;
		});
	$("#register").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            mail: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 5
            },
            passconfirm: {
                required: true,
                equalTo: "#pass"
            },
            dob: "dob"
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 characters long"
            },
            mail: "Please enter a valid email address",
            pass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            passconfirm: {
                required: "Please provide a password confirmation",
                minlength: "Your password confirm must be same as password"
            },
            dob: {
                dob: "You should be at least 16 years old"
            }
        }
	});
	$.mockjax({
		url: "register.php",
		responseTime: 1,
		dataType: 'json',
		response: function(settings) {
			this.responseText = JSON.stringify(settings.data);
		}
	});
	$("#formsubmit").click(function(event){
		event.preventDefault();
		if ($('#register').valid()){
			data = {};
			data["name"] = $("#name").val();
			data["mail"] = $("#mail").val();
			data["pass"] = $("#pass").val();
			data["passconfirm"] = $("#passconfirm").val();
			data["dob"] = $("#dob").val();
			$.ajax({
				url: "register.php",
				data: data,
				success: success
			});
		}
	});
}