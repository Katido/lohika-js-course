var App = App || {};
App.Pizza = (function () {
    console.log("Ready to make Pizza");
    var ingridients = [];

    var addIngridient = function (ingridient) {
        ingridients.push(ingridient);
    };

    var removeIngridient = function (ingridient) {
        ingridients.pop(ingridient);
    };
    var getContent = function () {
        console.log(ingridients.toString());
    };

    return {
        addIngridient: addIngridient,
        removeIngridient: removeIngridient,
        getContent: getContent
    };


}());

function Order() {
    console.log("I'm inside Order");
    var orderContent = [];

    var addItem = function (item) {
        orderContent.push(item);
    };

    var removeItem = function (item) {
        orderContent.pop(item);
    };

    var submitOrder = function (orderContent) {
        console.log("Order submitted");
    }

    var repeatOrder = function () {
        console.log(orderContent.toString());
    }

    this.currentOrder = {
        addItem: addItem,
        removeItem: removeItem,
        submitOrder: submitOrder,
        repeatOrder: repeatOrder
    }

}

console.log("Adding ingridients");
App.Pizza.addIngridient("souce");
App.Pizza.addIngridient("cheese");
App.Pizza.addIngridient("basilic");
console.log("Check our pizza topping");
App.Pizza.getContent();
console.log("Changing some topping");
App.Pizza.removeIngridient("basilic");
App.Pizza.addIngridient("bacon");
console.log("Check our pizza topping again");
App.Pizza.getContent();

console.log("Let's make an order");
var order = new Order();
console.log("Adding ingridients");
order.currentOrder.addItem("juice");
order.currentOrder.addItem("pizza");
order.currentOrder.addItem("beer");

console.log("Repeat our order");
order.currentOrder.repeatOrder();
console.log("Remove beer");
order.currentOrder.removeItem("beer");

console.log("Repeat our order");
order.currentOrder.repeatOrder();

order.currentOrder.submitOrder();
