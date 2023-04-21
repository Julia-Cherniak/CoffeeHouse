import CoffeeOrder from "./coffeeOrder.js";
import SandwichOrder from "./sandwichOrder.js";
import Information from "./commonInformation.js";

let totalPrice = 0;
let coffeeOrder1 = new CoffeeOrder ('   Expresso', 'big');
let coffeeOrder2 = new CoffeeOrder (' Latte', 'small');
let sandwichOrder1 = new SandwichOrder ('Hamburger', 'small');
let sandwichOrder2 = new SandwichOrder ('Panini', 'small');
let sandwichOrder3 = new SandwichOrder ('Panini', 'big');
let coffeeSandwich = new Information('');

function calculateTotalPrice(allPrices){
    for (let i in allPrices){
        totalPrice += allPrices[i]
    } return totalPrice;
};

function showTotalPrice(){
    console.log(`Total price: $` + calculateTotalPrice())
}

coffeeSandwich.showWelcomeMessage()
coffeeOrder1.showCoffeePrice();
coffeeOrder2.showCoffeePrice();
sandwichOrder1.showSandwichPrice();
sandwichOrder2.showSandwichPrice();
sandwichOrder3.showSandwichPrice();

calculateTotalPrice([coffeeOrder1.price + coffeeOrder2.price + sandwichOrder1.price + sandwichOrder2.price + sandwichOrder3.price]);
showTotalPrice();

