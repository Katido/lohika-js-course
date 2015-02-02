/**
 * Created by osemenkova on 1/27/2015.
 */

var courseModule = (function()
{
    'use strict';
    function Course(name, subject){
        this.name = name || "none";
        this.subject = subject || "none";

        this.setSubject = function(newSubject){
            this.subject = newSubject;
        };
        this.getSubject =  function(){
            return this.subject;
        };

        this.setName = function(newName){
            this.name = newName;
        };

        this.getName = function(){
            return this.name;
        };

        return this;
    }

    return{
        createCourse: function(name, subject){
            var newCourse = new Course(name, subject);
            return newCourse;
        }
    }
})();

var courseSC = courseModule.createCourse("Computer Science", "Algorithms theory");
var courseLang = courseModule.createCourse("Language", "English");

jQuery(document).ready(function(){

    $('#courseA').html(courseSC.getName());
    $('#courseB').html(courseLang.getName());
    $('#aSubject').html(courseSC.getSubject());
    $('#bSubject').html(courseLang.getSubject());

    $('.reveal').click(function() {
        $(this).children('ul').slideToggle();
    });
});


