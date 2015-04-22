/**
 * Created by osemenkova on 2/16/2015.
 */
define(['Views/ListView'], function(ListView){

    function start(){
        var users = JSON.parse(localStorage.users);
        ListView.render({users:users});
    }

    return {
        start:start
    };
});
