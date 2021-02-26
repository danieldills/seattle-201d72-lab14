/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbodyElem = document.querySelector('tbody');
  tbodyElem.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tBodyElem = document.querySelector('tbody');
  
  // TODO: Iterate over the items in the cart
for (let i = 0; i < cart.items.length; i++) {
  let trElement = document.createElement('tr');
  tBodyElem.appendChild(trElement);

  let tdRemove = document.createElement('td');
  tdRemove.textContent = 'X';
  tdRemove.setAttribute(cart.items);

}
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  for(let i = 0; i < cart.items.length; i++)  {
    if(event.target)
  }

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();

 