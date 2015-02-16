/**
 * Created by osemenkova on 1/27/2015.
 */

var courseModule = (function()
{
    'use strict';
    function Course(name, subject){
        this.name = name || "Language";
        this.subject = subject|| new Array("English", "French", "German");

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

jQuery(document).ready(function(){

    var courseHistory = courseModule.createCourse("World History", new Array("Ancient times","Middle times"));

    $('div').append('<ul class="root"></ul>');
    $('ul.root').append('<li class="reveal">' + courseHistory.getName() + '</li>');
    $('li.reveal').append('<ul class="subject"></ul>');
    for(var i=0; i<courseHistory.getSubject().length; i++){
        $('ul.subject').append('<li>' + courseHistory.getSubject()[i] + '</li>')
    }

    $('.reveal').click(function() {
        $(this).children('ul').slideToggle();
    });
});


