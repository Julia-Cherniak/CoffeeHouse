export default class Sandwich {
    constructor (sandwichName){
    this.sandwichName = sandwichName;
    this.bun = 'round bun';
    this.vegetables = 'tomatoes, cucumbers, salad';
    this.chicken = 'fried chicken';
    this.cutlet = 'fried cutlet';
    };
    getSandwichName(){
        console.log(this.sandwichName)
    };
    setSandwichRecipe(){
        let sandwichRecipe;
        if (this.sandwichName === 'Hamburger'){
            sandwichRecipe = `You choosed ${this.sandwichName}:\n. Take two slice of ${this.bun}.\n. Take a ${this.cutlet}.\n. Take ${this.vegetables}.\n. Take a two slice of cheese.\n. Put all the ingredients inside the ${this.bun}.\n. Put the mayonnaise between the ${this.bun} and the ingredients.\n`
        }
        else if (this.sandwichName === 'Panini'){
            sandwichRecipe = `You choosed ${this.sandwichName}:\n. Take two slice of ${this.bun}.\n. Take a ${this.chicken}.\n. Take ${this.vegetables}.\n. Take a two slice of cheese.\n. Put all the ingredients inside the ${this.bun}.\n. Make a sandwich on the grill.\n`
        }
        return sandwichRecipe;
    };
    showSandwichRecipe(){
        console.log(this.setSandwichRecipe())
    };
};