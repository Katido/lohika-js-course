/**
 * Created by acolodnitchii on 2/13/2015.
 */
define(["jquery"], function($){

    return {
        add : addUser,
        update : updateUser,
        getAll : getAll,
        deleteUser : deleteUser
    };

    function getAll(){
        return $.ajax({
            type:"GET",
            dataType: "json",
            contentType:"application/json",
            url: "https://lohika-js-course.herokuapp.com/User"
        });
    }

    function addUser(user){
        return $.ajax({
            type:"POST",
            dataType: "json",
            contentType:"application/json",
            url: "https://lohika-js-course.herokuapp.com/User",
            data: JSON.stringify(user)
        });
    }

    function updateUser(user){
        return $.ajax({
            type:"PUT",
            dataType: "json",
            contentType:"application/json",
            url: "https://lohika-js-course.herokuapp.com/User/" + user.id,
            data: JSON.stringify(user)
        });
    }

    function deleteUser(userId){
        return $.ajax({
            type:"DELETE",
            url: "https://lohika-js-course.herokuapp.com/User/" + userId
        });
    }
});