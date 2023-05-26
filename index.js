/* 
  The owners of Joey's Pizza want your team to develop some software
  that allows employees to build customer pizzas with 2 toppings, at the
  right size, get it paid for, bake it, and then output a message that
  it is being delivered.
  The delivery message should only happen if the pizza has been paid for.
  Goals of the pizza project:
  ---------------------------
    1. Function for adding the toppings to the pizza
    2. Function that bakes a pizza
    3. Function that adds `size` property to pizza
    4. Function to mark the pizza as being paid.
    5. Function that logs a "Your {pizza details} is being delivered".
          If pizza is not paid for yet, display "Please pay us first"
    6. Each function copies the input object and returns
          modified copy
*/

// create our pizza as an empty object
const pizza = {};

//create a function to add size to pizza
// add a size property

const addSize = (sizeOfPizza) => {
  pizza.size = sizeOfPizza;
};

// create a function to add toppings to our pizza
// add 2 parameters for each topping
// add topping property to pizza object

const addToppings = (topping1, topping2) => {
  pizza.toppings = [topping1, topping2];
};
addSize("large");
addToppings("cheese", "pepperoni");

// create a function to bake pizza
// add a baked property with a boolean value

const bakePizza = () => {
  pizza.baked = true;
};
bakePizza();

// create a function to mark as paid
// add a paid property with a boolean value

const isPaid = () => {
  pizza.paid = true;
};
isPaid();

// create a function to check if paid for and return HTML
// create an if statement to check if pizza is paid for
// if pizza is paid for console log "Your {pizza details} is being delivered"
// if pizza is not paid console log "Please pay us first"

const deliverPizza = () => {
  if (pizza.paid === true) {
    console.log(
      `Your ${pizza.size} ${pizza.toppings[0]} and ${pizza.toppings[1]} pizza is being delivered`
    );
  } else {
    console.log("Please pay us first.");
  }
};

deliverPizza();
