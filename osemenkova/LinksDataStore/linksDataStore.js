/**
 * Created by Оксана on 07.01.2015.
 */

var linkModule = (function()
{
    'use strict';
  function Link(address, description, department){
      this.address = address || "google.com";
      this.description = description || "The best search system";
      this.department = department || "General";

      this.setAddress = function(newAddress){
          this.address = newAddress;
      };
      this.getAddress =  function(){
          return this.address;
      };
      this.setDescription =  function(newDescription){
          this.description = newDescription;
      };
      this.getDescription = function(){
          return this.description;
      };
      this.setDepartment = function(newDepartment){
          this.department = newDepartment;
      };
      this.getDepartment = function(){
          return this.department;
      };

      return this;
  }

    return{
        createLink: function(address,description, department){
            var newLink = new Link(address, description, department);
            return newLink;
        },
        showLinkData: function(link){
          if(link instanceof Link){
                alert("Link address: " + link.getAddress()
                + "\n" + "Link description: " + link.getDescription()
                + "\n" + "Link department: " + link.getDepartment());
            }
            else{
              throw TypeError;
          }
        }
    }
})();

var linksManagementModule = (function(){
    'use strict';
    var linksStorage = new Array();
    return{
        addLink: function(link){
                linksStorage[linksStorage.length] = link;
        },
        getLinks: function(){
            for( var i = 0; i < linksStorage.length; i++){
                alert(linksStorage[i].getAddress());
            }
        }
    }
})();

var defaultLink = linkModule.createLink();
linkModule.showLinkData(defaultLink);
var predefinedLink = linkModule.createLink("habrahabr.ru","IT resource","IT" );
linkModule.showLinkData(predefinedLink);
linksManagementModule.addLink(defaultLink);
linksManagementModule.addLink(predefinedLink);
linksManagementModule.getLinks();


