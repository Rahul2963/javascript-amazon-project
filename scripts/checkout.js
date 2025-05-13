import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
   try{
    await loadProductsFetch();

    await new Promise((resolve) => {
        loadCart(() => {
           resolve();
        });
    });
    
} catch(error) {
    console.log('Unexpected error.please try again later.');
}
    

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

Promise.all([
     loadProductsFetch(),
     new Promise((resolve) => {
        loadCart(() => {
           resolve();
        });
    })

]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
})
*/

/*
loadProducts(() => {
   loadCart(() => {
      renderOrderSummary();
      renderPaymentSummary();
    });
});
*/
    
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
