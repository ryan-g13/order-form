'use-strict';
//Cart functionality since didn't like my event listener
var ulEl = document.getElementById('cartList');
var remover = document.getElementById('remove');
var srcArray = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweep.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg'
];

var retrieved = localStorage.getItem('objects');
var cartObjects = JSON.parse(retrieved); //parse and store objects array as cartObjects

//function to create Li in UL for cart that has image with caption and button.
function drawCart() {

  //create li and img and button tags
  var liEl = document.createElement('li');
  var imgEl = document.createElement('img');
  var buttonEl  = document.createElement('button');
  for (var i = 0; i < srcArray.length; i++) {
    //if(cartObjects[0].customer.slice(0,2) == srcArray[i].slice(4,6)){
      imgEl.src = srcArray[0]; //test case
      buttonEl.textContent = 'Remove From Cart';
      //buttonEl.id = i;
      //buttonEl.addEventListener('i', removeFromCart);
      liEl.appendChild(imgEl);
      ulEl.appendChild(liEl);
    //}
  }
}

//Cancel from cart
function removeFromCart() {
  //splice from array
  //push to local storage
  //clear liEl
}

remover.addEventListener('submit', removeFromCart);