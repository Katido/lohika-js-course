
$(document).ready(function(){
    var treeElementsData = [
        {title: "Title1",
         childItems: ["Child1.1", "Child1.2", "Child1.3"]},
        {title: "Title2",
         childItems: ["Child2.1", "Child2.2"]},
        {title: "Title3",
         childItems: ["Child3.1", "Child3.2", "Child3.3", "Child3.4"]}
    ];

    // Construct the tree
    (function() {
        var rootElement = document.getElementById("rootElement"); // get the root <div>

        for (var i=0; i<treeElementsData.length; i++) {

            // Create the list element:
            var listElement = document.createElement('ul');
            listElement.setAttribute('id', treeElementsData[i].title);
            // create image
            var imageElement = document.createElement('img');
            imageElement.setAttribute('class', 'icon expanded');
            listElement.appendChild(imageElement);
            // create text
            listElement.appendChild(document.createTextNode(treeElementsData[i].title));
            listElement.setAttribute('class', 'expanded');
            // create items
            for (var j=0; j<treeElementsData[i].childItems.length; j++) {
                // Create the list item:
                var listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(treeElementsData[i].childItems[j]));
                // Add it to the list:
                listElement.appendChild(listItem);
            }

            // Add the items to root element
            rootElement.appendChild(listElement);
        }
    })();

    // Handle Events
    $('ul').click(function(){

        if ($(this).hasClass('expanded')) {
            $(this).find('li').hide();
            $(this).removeClass('expanded').addClass('collapsed');
            $(this).find('img').removeClass('expanded').addClass('collapsed');
        } else {
            $(this).find('li').show();
            $(this).removeClass('collapsed').addClass('expanded');
            $(this).find('img').removeClass('collapsed').addClass('expanded');
        }
    })
});
