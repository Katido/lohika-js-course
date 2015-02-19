/**
 * Created by osemenkova on 2/16/2015.
 */

define(function(){

    function render(parameters){
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
    }

    return {
        render:render
    };
});
