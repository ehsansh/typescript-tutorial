import { Invoice } from './classes/Invoice.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, amount.valueAsNumber);
});

const inv1 = new Invoice('ehsan', 'work on website', 300);
const inv2 = new Invoice('james', 'work on website', 200);

let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);
console.log('here');
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
