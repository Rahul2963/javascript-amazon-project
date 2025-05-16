export let cart;
loadFromStorage();
export function loadFromStorage(){
   cart = JSON.parse(localStorage.getItem('cart'));

   if (!cart){
    cart =[{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionsId:'1'
    }, {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionsId: '2'
    }];
  } 
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
  
        cart.forEach((item) =>{
          if(productId === item.productId){
            matchingItem = item;
          }
        });
  
      
        if(matchingItem) {
          matchingItem.quantity +=1;
        }else {
          cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionsId: '1'
          });
        }
      saveToStorage();
  }

 export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((item) =>{
      if(item.productId !== productId){
        newCart.push(item);
      }
    });

    cart = newCart;
  
    saveToStorage();

  }
export function updateDeliveryOption(productId,deliveryOptionId) {
  let matchingItem;
  
  cart.forEach((item) =>{
    if(productId === item.productId){
      matchingItem = item;
    }
  }); 
  matchingItem.deliveryOptionsId = deliveryOptionId;

  saveToStorage();
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    console.log('load products');

    fun();
  })
  xhr.open('GET','https://supersimplebackend.dev/cart');
  console.log('sending request to backend')
  xhr.send();
}