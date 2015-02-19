/**
 * Created by osemenkova on 2/16/2015.
 */

define(["underscore"],function(_){
    function render(parameters){
        //var appDiv = document.getElementById('app');
        //var users = parameters.users;
        //var html = '<ul>';
        //
        //for (var i = 0, len = users.length; i < len; i++){
        //    html += '<li>' + users[i].name + '</li>';
        //}
        //html += '</ul>';
        //appDiv.innerHTML = html;
        var users = parameters.users;
        var templateContent = $("#usersTemplate").html();
        alert("templateContent:" + templateContent);
        var evaluated = _.template(templateContent)({users: users});
        alert("evaluated: " + evaluated);
        $("#listUsers").html(evaluated);
    }

    return {
        render:render
    };
});
