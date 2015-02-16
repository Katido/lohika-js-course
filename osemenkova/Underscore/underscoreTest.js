/**
 * Created by osemenkova on 2/9/2015.
 */


var arr = [
    {name: "Vasya", age: 15, active:true},
    {name: "Petya", age: 22, active: false},
    {name: "Masha", age: 30 , active: true},
    {name: "Igor", age: 15 , active: true}
];

//check if there is any inactive user in the arr

var result = _.findWhere(arr, {active:false});
if(result !=null){
    alert("We have at least one inactive user: " + result.name);
}

//sort all active users by name and display them on the page

var filteredActive = _.where(arr, {active: true});
var sortedAsc = _.sortBy(filteredActive, 'name');
_.each(sortedAsc, function(person){ alert(person.name); });
var sortedDesc = _.sortBy(filteredActive, 'name').reverse();
_.each(sortedDesc, function(person){ alert(person.name); });

//group users by active and display them in different groups
//Active users then list with names, Inactive users then list with names

var grouped = _.groupBy(arr,'active');
var trueG = grouped[true];
_.each(trueG, function(person){
    alert("Active user:" + person.name);
});
var trueF = grouped[false];
_.each(trueF, function(person){
    alert("Inactive user:" + person.name);
});

//*****************************************************************************************************************
//we need to convert array with filter parameters to get URL string with parameters.
//it should look like category=Monitors&subCategory[0]=LCD&subCategory[1]=CRT&priceFrom=100&priceTo=1000
//so rules are the following
//if there is duplicateName then only one goes to the URL
//if parameterValue returns null then parameter is not added in the URL
//if parameterValue returns array then parameterName is changed to array
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




