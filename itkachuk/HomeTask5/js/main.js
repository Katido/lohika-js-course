/**
 * Created by itkachuk on 2/12/2015.
 */
document.addEventListener("DOMContentLoaded", function(event) {

    // Part 1

    var arr = [
        {name: "Vasya", age: 15, active: true},
        {name: "Petya", age: 22, active: false},
        {name: "Masha", age: 30, active: true},
        {name: "Igor", age: 15, active: true}
    ];

    var inactiveUsersList = document.getElementById("inactiveUsers");
    var sortedUsersList = document.getElementById("sortedUsers");
    var activeGroup = document.getElementById("activeGroup");
    var inactiveGroup = document.getElementById("inactiveGroup");

    function addListEntry(listElement, entryContent) {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(entryContent));
        listElement.appendChild(entry);
    }

    //check if there is any inactive user in the arr
    _.chain(arr)
        .where({active: false})
        .each(function(element){
             addListEntry(inactiveUsersList, element.name + " is inactive!");
        });

    //sort all active users by name and display them on the page
    _.chain(arr)
        .where({active: true})
        .sortBy(function(element){return element.name})
        .each(function(element){
            addListEntry(sortedUsersList, element.name);
        });

    //group users by active and display them in different groups
    //Active users then list with names, Inactive users then list with names
    var groupedUsers = _.groupBy(arr, 'active');
    if (groupedUsers.true) {
        _.each(groupedUsers.true, function (element) {
            addListEntry(activeGroup, element.name);
        });
    }
    if (groupedUsers.false) {
        _.each(groupedUsers.false, function (element) {
            addListEntry(inactiveGroup, element.name);
        });
    }


    // Part 2

    var selectedParameters = [
        {
            parameterName: "category",
            parameterValues: function(){
                return "Monitors";
            }
        },
        {
            parameterName: "subCategory",
            parameterValues: function(){
                return ["LCD","CRT"];
            }
        },
        {
            parameterName: "priceFrom",
            parameterValues: function(){
                return 100;
            }
        },
        {
            parameterName: "priceTo",
            parameterValues: function(){
                return 1000;
            }
        },
        {
            parameterName: "priceTo",
            parameterValues: function(){
                return 1000;
            }
        },
        {
            parameterName: "onlyNew",
            parameterValues: function(){
                return null;
            }
        }
    ];

//we need to convert array with filter parameters to get URL string with parameters.
//it should look like category=Monitors&subCategory[0]=LCD&subCategory[1]=CRT&priceFrom=100&priceTo=1000
//so rules are the following
//if there is duplicateName then only one goes to the URL
//if parameterValue returns null then parameter is not added in the URL
//if parameterValue returns array then parameterName is changed to array

    var urlString = document.getElementById("urlString");
    var resultString = "";

    // template
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };
    var template = _.template("{{ name }}={{ value }}&");
    var templateArray = _.template("{{ name }}[{{ index }}]={{ value }}&");

    _.chain(selectedParameters)
        .uniq(function(entry){return entry.parameterName;})
        .filter(function(entry){return entry.parameterValues() !== null})
        .each(function(entry){
            if (_.isArray(entry.parameterValues())) {
                var i=0;
                _.each(entry.parameterValues(), (function(parameter){
                    //resultString = resultString + entry.parameterName + "[" + i + "]=" + parameter + "&";
                    resultString = resultString + templateArray({name: entry.parameterName, index: i, value: parameter});
                    i++;
                }));
            } else {
                //resultString = resultString + entry.parameterName + "=" + entry.parameterValues() + "&";
                resultString = resultString + template({name: entry.parameterName, value: entry.parameterValues()});
            }
        });

    // Cut last char '&'
    if (resultString.length > 0) resultString = resultString.substring(0, resultString.length - 1);

    urlString.appendChild(document.createTextNode(resultString));
});