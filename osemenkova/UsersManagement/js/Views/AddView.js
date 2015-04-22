/**
 * Created by osemenkova on 2/16/2015.
 */

define(["underscore"],function(_){

    function render(parameters){
        //var appDiv = document.getElementById('app');
        //appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
        var templateContent = $("#addUserTemplate").html();
        var evaluated = _.template(templateContent)();
        $("#addUser").html(evaluated);
    }

    return {
        render:render
    };
});
