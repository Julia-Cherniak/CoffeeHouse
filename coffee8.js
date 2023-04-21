export default class Coffee {
    constructor(coffeeName) {
        this.coffeeName = coffeeName;
        this.coffeeType = 'ground coffee';
        this.water = 'hot boiled water';
        this.suggar = 'freable suggar';
    };
    getCoffeeName() {
        console.log(this.coffeeName);
    };
    setCoffeeRecipe() {
        let coffeeRecipe;
        if (this.coffeeName === 'Expresso') {
            coffeeRecipe = `You choosed the ${this.coffeeName}:\n. Take a cup.\n. Take a spoon of ${this.coffeeType}.\n. Take a spoon of ${this.suggar}.\n. Put coffee and sugar into the cup.\n. Pour ${this.water} into the cup with ${this.coffeeType} and ${this.suggar}.\n`
        }
        else if (this.coffeeName === 'Latte') {
            coffeeRecipe = `You choosed the ${this.coffeeName}:\n. Take a cup.\n. Take a spoon of ${this.coffeeType}.\n. Take a spoon of ${this.suggar}.\n. Put coffee and sugar into the cup.\n. Pour ${this.water} into the cup with ${this.coffeeType} and ${this.suggar}.\n. Pour milk to coffee and stir it.\n`
        }
        return coffeeRecipe;
    };
    showCoffeeRecipe(){
        console.log(this.setCoffeeRecipe())
    };
};