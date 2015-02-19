/**
 * Created by acolodnitchii on 2/13/2015.
 */
define(["jquery","underscore","userService"],function($,_, userService){
    return {
        init: function(){
            userService.getAll().done(function(users){
                var templateContent = $("#usersTemplate").html();
                var evaluated = _.template(templateContent)({users: users});

                $("#usersList").html(evaluated);
            });

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
                userService.add(user).then(function(data){
                    alert("data was sent");
                });

                e.preventDefault();
            });

            $("#changeUserForm").submit(function(e){
                var user = {
                    login: $("#login").val(),
                    delete: $("#delete").prop("checked"),
                    edit: $("#edit").prop("checked")
                };
                if($("#delete").prop("checked") === true){
                    userService.delete(user).then(function(data){
                        alert("data was deleted");
                    });
                }else if($("#edit").prop("checked") === true){
                    userService.edit(user).then(function(data){
                        alert("data was edited");
                    });
                }else{
                    alert("no changes was selected");
                }

                e.preventDefault();
            });


        }
    }

});