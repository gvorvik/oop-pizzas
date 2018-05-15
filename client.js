

class Pizza{
    constructor(size, ingredients) {
        this.size = size;
        this.ingredients = ingredients || 'cheese';
    };

    calculateCost() {
        let cost = 0;
        if(this.size === 'small') {
            cost += 8.99;
        } else if( this.size === 'medium') {
            cost += 10.99;
        } else if(this.size === 'large') {
            cost += 12.99;
        }

        if(this.ingredients !== 'cheese') {
            let numberOfIngredients = this.ingredients.length;
            cost += (numberOfIngredients*.99);
        }
        return cost;
    };
};


const one = new Pizza('medium');
const two = new Pizza('small', ['sausage', 'pepperoni']);
const three = new Pizza('large', ['olives', 'sausage', 'anchovies']);

console.log(one.calculateCost());
console.log(two.calculateCost());
console.log(three.calculateCost());





class Order{
    constructor(pizzas) {
        this.pizzas = pizzas;
    }

    calculateTotalCost() {
        let totalCost = 0;
        this.pizzas.forEach((pizza) => {
            let newCost = pizza.calculateCost(); 
            totalCost += newCost;
        });
        return totalCost;
    }
}


const newOrder = new Order([one, two, three]);

console.log(newOrder.calculateTotalCost());



