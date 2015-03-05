/**
 * Created by osemenkova on 3/4/2015.
 */
define(["jquery","knockout"], function($,ko){
    return {
        init: function () {
            function UserInfo(name, occupation, dateOfBirth) {
                var self = this;
                self.name = name;
                self.occupation = ko.observable(occupation);
                self.dateOfBirth = dateOfBirth;
            }

            function UserInfoViewModel() {
                var self = this;

                self.availableOccupations = [
                    {occupationName: "Carpenter"},
                    {occupationName: "Engineer"},
                    {occupationName: "Designer"},
                    {occupationName: "Writer"},
                    {occupationName: "Not selected"}
                ];

                self.users = ko.observableArray([
                    new UserInfo("Oksana", self.availableOccupations[1])
                ]);

                self.addUser = function () {
                    self.users.push(new UserInfo("", self.availableOccupations[4]));
                };
                self.removeUser = function (user) {
                    self.users.remove(user)
                };

            }
            ko.applyBindings(new UserInfoViewModel());
        }
    }
});
