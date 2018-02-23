'use strict';

//global scope variables
var orderForm = document.getElementById('address');
var objArray = [];

//This is the functionality of the form
function ItemInCart(option, number, customer, street, city, state, zip, phone) {
  this.option = option;
  this.number = number;
  this.customer = customer;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  objArray.push(this);
}

//new instance on click
function newSubmission(event) {
  event.preventDefault(); // prevent reload on submit
  //New constructed item based on submission
  new ItemInCart(event.target.product.value, event.target.number.value, event.target.customer.value, event.target.street.value, event.target.state.value, parseInt(event.target.zip.value), parseInt(event.target.phone.value));

  event.target.reset();
  localStorage.setItem('objects', JSON.stringify(objArray));
  window.location.href = 'cart.html';
}


//If statement to test for localStorage

//event listener for form submission.
orderForm.addEventListener('submit', newSubmission);
