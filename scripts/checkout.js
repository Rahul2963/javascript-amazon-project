import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
    
    await loadProductsFetch();

    const value = await new Promise((resolve) => {
        loadCart(() => {
           resolve();
        });
    });

    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

/*
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
