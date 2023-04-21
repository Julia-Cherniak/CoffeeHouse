import Coffee from "./coffee8.js"

export default class CoffeeOrder extends Coffee{
    constructor (coffeeName, cupSize){
        super(coffeeName);
        this.cupSize = cupSize;
        this.price = 10;
    };
    setCoffeePrice(){
        if (this.coffeeName.trim() == 'Expresso') {
            if (this.cupSize == 'big') {
                this.price = this.price + 10;
            }
            else if (this.cupSize == 'medium') {
                this.price = this.price + 5;
            }
            else if (this.cupSize == 'small') {
                this.price;
            }
        }
        else if (this.coffeeName.trim() == 'Latte') {
            if (this.cupSize == 'big') {
                this.price = this.price + 20;
            }
            else if (this.cupSize == 'medium') {
                this.price = this.price + 15;
            }
            else if (this.cupSize == 'small') {
                this.price = this.price + 11;
            }
        } return this.price;
    };
    showCoffeePrice(){
        let price = this.setCoffeePrice();
        console.log(`${this.coffeeName.trim()}, size ${this.cupSize}, price is: $${price}`);
    };
};