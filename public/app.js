import { Invoice } from './classes/Invoice.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, amount.valueAsNumber);
});
const inv1 = new Invoice('ehsan', 'work on website', 300);
const inv2 = new Invoice('james', 'work on website', 200);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
console.log('here');
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
