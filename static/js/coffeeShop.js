"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};
//adds itemName to a cart table

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};
//  sets the carts total to zero then empties the items in the cart 

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};
// adding the price of added item to cart total
//returns new cart total as string with 2 decimals. 

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};
// its incrementing new items that were sold to coffeesold 
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};
//sets order progess class id with attribute = progress value
//sets order status message class id with inner html status message

//
// Add your event handlers below.
//

$('.add-to-order').on('click', () => {
  addItemToCart("Coffee")
  incrementCartTotal(1.50)
});

$('#place-order').on('click',() => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();

});
