import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
           resolve('value1');
        });
     }),
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
