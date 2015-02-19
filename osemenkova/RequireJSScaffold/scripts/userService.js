/**
 * Created by acolodnitchii on 2/13/2015.
 */
define(["jquery"], function($){

   return{
        add : addUser,
        getAll : getAll,
        delete : deleteUser,
        edit : editUser
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

    function deleteUser(user){
        return $.ajax({
            type:"POST",
            dataType: "json",
            contentType:"application/json",
            url: "https://lohika-js-course.herokuapp.com/User",
            data: JSON.stringify(user)
        });
    }

    function editUser(user){
        return $.ajax({
            type:"POST",
            dataType: "json",
            contentType:"application/json",
            url: "https://lohika-js-course.herokuapp.com/User",
            data: JSON.stringify(user)
        });
    }
});