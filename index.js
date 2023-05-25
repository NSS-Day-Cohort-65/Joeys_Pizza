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
const pizza = {  }

//create a function to add size to pizza
const addSize = (sizeOfPizza) => {
      // add a size property
      pizza.size = sizeOfPizza
}
// create a function to add toppings to our pizza
// add 2 parameters for each topping
const addToppings = (topping1, topping2) => {
      // add topping property to pizza object
      pizza.toppings = [topping1, topping2]
}
addSize("small")
addToppings("cheese", "pepperoni")
console.log(pizza)
// create a function to bake pizza
const bakePizza = () => {
      // add a baked property with a boolean value

}

// create a function to mark as paid
const isPaid = () => {

}
// create a function to check if paid for and return HTML
const deliverPizza = () => {

}

