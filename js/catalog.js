/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
const selectElement = document.getElementById('items');
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  

  // for (let i in Product.allProducts) {

  for (let index = 0; index < Product.allProducts.length; index++) {
    const productInstance = Product.allProducts[index];
    const optionElem = document.createElement('option');
    optionElem.value = productInstance.name;
    optionElem.textContent = productInstance.name;
    selectElement.appendChild(optionElem);

    

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading

  // Do all the things ...
  event.preventDefault();
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {



const productName = selectElement.value;

const quantity = parseInt(document.getElementById('quantity').value);

cart.addItem(productName, quantity);

}
function updateCounter() {
  const itemCountElem = document.getElementById('itemCount');
  const numnberOfItemsInCart = cart.items.length;
  itemCountElem.textContent = " " + '(' + numnberOfItemsInCart + ')';

}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information

  const previewElem = document.getElementById('cartContents');

  const lastCartItem = cart.items[cart.items.length-1];

  const cartItemElem = document.createElement('p')
  cartItemElem.textContent = lastCartItem.product + ' x ' + lastCartItem.quantity;
  previewElem.appendChild(cartItemElem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
