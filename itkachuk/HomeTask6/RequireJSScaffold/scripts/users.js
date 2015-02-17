/**
 * Created by acolodnitchii on 2/13/2015.
 */
define(["jquery","underscore","userService"],function($,_, userService){

    var updateUsersList = function updateUsersList(){
        userService.getAll().done(function(users){
            var templateContent = $("#usersTemplate").html();
            var evaluated = _.template(templateContent)({users: users});

            $("#usersList").html(evaluated);
        });
    };

    return {
        init: function(){
            $("#addUser").bind("click",function(){
                $("#addUserForm").toggle();
            });

            $("#addUserForm").submit(function(e){
                var user = {
                    firstName: $("#firstName").val(),
                    lastName: $("#lastName").val(),
                    login: $("#login").val(),
                    active: $("#active").prop("checked")
                };
                userService.add(user)
                    .done(function(){
                        alert("user was added");
                        updateUsersList();
                    })
                    .fail(function(){
                        alert("error: user wasn't added");
                    });

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