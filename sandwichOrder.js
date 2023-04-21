import Sandwich from "./sandwich.js";

export default class SandwichOrder extends Sandwich {
    constructor (sandwichName, sandwichSize){
        super(sandwichName);
        this.sandwichSize = sandwichSize;
        this.price = 8;
    };
    setSandwichPrice(){
        if (this.sandwichName.trim() == 'Hamburger') {
            if (this.sandwichSize == 'big') {
                this.price += 5;
            }
            else if (this.sandwichSizee == 'small') {
                this.price;
            }
        }
        else if (this.sandwichName.trim() == 'Panini') {
            if (this.sandwichSize == 'big') {
                this.price += 6;
            }
            else if (this.sandwichSize == 'small') {
                this.price += 2;
            }
        } return this.price;
    };
    showSandwichPrice(){
        let price = this.setSandwichPrice()
        console.log(`${this.sandwichName.trim()}, size ${this.sandwichSize}, price is: $${price}`)
    };
};