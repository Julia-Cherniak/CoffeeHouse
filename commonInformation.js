export default class Information {
    constructor() {
        this.coffeeType = 'ground coffee';
        this.water = 'hot boiled water';
        this.suggar = 'freable suggar';
        this.bun = 'round bun';
        this.cutlet = 'fried cutlet';
        this.vegetables = 'tomatoes, cucumbers, salad';
        this.chicken = 'fried chicken';
    }
    showWelcomeMessage() {
        console.log('Dear guest, Welcome to our Coffee House. \n')
    };
    showCupPriceExpresso(cupSize) {
        let price = 10;
        console.log('You can choose a cup size for Expresso:')
        cupSize = ['big', 'medium', 'small'];
        for (let i in cupSize) {
            if (cupSize[i] == 'big') {
                console.log(cupSize[i] + ' - ' + (price + 10) + '$');
            }
            else if (cupSize[i] == 'medium') {
                console.log(cupSize[i] + ' - ' + (price + 5) + '$');
            }
            else if (cupSize[i] == 'small') {
                console.log(cupSize[i] + ' - ' + (price) + '$');
            }
            if (i == cupSize.length - 1) {
                console.log('\n');
            }
        }
    };
    showCupPriceLatte(cupSize) {
        let price = 10;
        console.log('You can choose a cup size for Latte:')
        cupSize = ['big', 'medium', 'small'];
        for (let i in cupSize) {
            if (cupSize[i] == 'big') {
                console.log(cupSize[i] + ' - ' + (price + 20) + '$');
            }
            else if (cupSize[i] == 'medium') {
                console.log(cupSize[i] + ' - ' + (price + 15) + '$');
            }
            else if (cupSize[i] == 'small') {
                console.log(cupSize[i] + ' - ' + (price + 11) + '$');
            }
            if (i == cupSize.length - 1) {
                console.log('\n');
            }
        }
    };
    showIngredients(menu) {
        let expresso = 'Expresso';
        let latte = 'Latte';

        let ExpressoIngredients = `${expresso}: \n 1 spoon of ${this.coffeeType}; \n 1 spoon of ${this.suggar}; \n ${this.water}. \n`;
        let LatteIngredients = `${latte}: \n 1 spoon of ${this.coffeeType}; \n 1 spoon of ${this.suggar}; \n milk; \n ${this.water}. \n`;

        console.log('We have next coffee types: \n');
        menu = [ExpressoIngredients, LatteIngredients];
        for (let i = 0; i < menu.length; i++) {
            console.log(menu[i]);
        };
    };
    showSizePricesHamburger(sizesOfSandwich) {
        console.log('You can choose a size of Hamburger:');
        let priceS = 8;
        let bigSandwich = 'big';
        let smallSandwich = 'small';
        sizesOfSandwich = [smallSandwich, bigSandwich];
        for (let i in sizesOfSandwich) {
            if (sizesOfSandwich[i] == smallSandwich) {
                console.log(sizesOfSandwich[i] + ' - ' + (priceS) + '$');
            }
            else if (sizesOfSandwich[i] == bigSandwich) {
                console.log(sizesOfSandwich[i] + ' - ' + (priceS + 5) + '$');
            }
            if (i == sizesOfSandwich.length - 1) {
                console.log('\n');
            }
        }
    };
    showSizePricesPanini(sizesOfSandwich) {
        console.log('You can choose a size of Panini:');
        let priceS = 8;
        let bigSandwich = 'big';
        let smallSandwich = 'small';
        sizesOfSandwich = [smallSandwich, bigSandwich];
        for (let i in sizesOfSandwich) {
            if (sizesOfSandwich[i] == smallSandwich) {
                console.log(sizesOfSandwich[i] + ' - ' + (priceS + 2) + '$');
            }
            else if (sizesOfSandwich[i] == bigSandwich) {
                console.log(sizesOfSandwich[i] + ' - ' + (priceS + 6) + '$');
            }
            if (i == sizesOfSandwich.length - 1) {
                console.log('\n');
            }
        }
    };
    showIngridientsOfSandwich() {
        let hamburger = 'Hamburger';
        let panini = 'Panini';
    
        let hamburgerIngredients = `${hamburger}: \n 2 slice of ${this.bun}; \n ${this.cutlet}; \n ${this.vegetables}; \n 2 slice of cheese \n mayonnaise. \n`;
        let paniniIngredients = `${panini}: \n 2 slice of ${this.bun}; \n ${this.chicken}; \n ${this.vegetables}; \n 2 slice of cheese. \n`;
        console.log('We have next sandwiches: \n');
    
        let menuS = [hamburgerIngredients, paniniIngredients];
        for (let i = 0; i < menuS.length; i++) {
            console.log(menuS[i]);
        }
    };
};