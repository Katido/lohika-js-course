/**
 * Created by acolodnitchii on 2/13/2015.
 */
define(["jquery","underscore","userService"],function($,_, userService){

    var usersArray = {};

    var updateUsersList = function updateUsersList(){
        userService.getAll().done(function(users){
            var templateContent = $("#usersTemplate").html();
            var evaluated = _.template(templateContent)({users: users});

            $("#usersList").html(evaluated);
            usersArray = users;
        });
    };

    var clearUserForm = function clearUserForm(){
        $("#firstName").val("");
        $("#lastName").val("");
        $("#login").val("");
        $("#active").prop("checked", false);
        $("#addUserForm").prop("userId", null);
        $("#submitButton").html("Submit");
    };

    return {
        init: function(){
            $("#addUser").bind("click",function(){
                var addUserForm = $("#addUserForm");
                addUserForm.toggle();
                addUserForm.prop("userId", null);
                $("#submitButton").html("Submit");
            });

            $("#cancelButton").bind("click",function(){
                clearUserForm();
            });

            $("#addUserForm").submit(function(e){
                var user = {
                    firstName: $("#firstName").val(),
                    lastName: $("#lastName").val(),
                    login: $("#login").val(),
                    active: $("#active").prop("checked")
                };
                if ($(this).prop("userId")) {
                    user.id = $(this).prop("userId");
                    userService.update(user)
                        .done(function () {
                            alert("user was updated");
                            clearUserForm();
                            updateUsersList();
                            $("#addUserForm").hide();
                        })
                        .fail(function () {
                            alert("error: user wasn't updated");
                        });
                } else {
                    userService.add(user)
                        .done(function () {
                            alert("user was added");
                            clearUserForm();
                            updateUsersList();
                            $("#addUserForm").hide();
                        })
                        .fail(function () {
                            alert("error: user wasn't added");
                        });
                }
                e.preventDefault();
            });

            $("#usersList").click(function(e){
                //alert(e.target.id);
                if (e.target.tagName === "BUTTON" && e.target.name === "delete") {
                    userService.deleteUser(e.target.id)
                        .done(function(){
                            alert("user was deleted");
                            updateUsersList();
                        })
                        .fail(function(){
                            alert("error: user wasn't deleted");
                        });
                }
                if (e.target.tagName === "BUTTON" && e.target.name === "update") {
                    var addUserForm = $("#addUserForm");
                    addUserForm.show();

                    var editUser = _.findWhere(usersArray, {id: +e.target.id});
                    $("#firstName").val(editUser.firstName);
                    $("#lastName").val(editUser.lastName);
                    $("#login").val(editUser.login);
                    $("#active").prop("checked", editUser.active);
                    addUserForm.prop("userId", +e.target.id);
                    $("#submitButton").html("Save");
                }
            });

            updateUsersList();
        },
        updateUsersList: function(){
            userService.getAll().done(function(users){
                var templateContent = $("#usersTemplate").html();
                var evaluated = _.template(templateContent)({users: users});

                $("#usersList").html(evaluated);
            });
        }
    }

});