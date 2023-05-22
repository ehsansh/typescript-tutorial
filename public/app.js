import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('ehsan', 'web work', 250);
// docTwo = new Invoice('james', 'teaching work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const inv1 = new Invoice('ehsan', 'work on website', 300);
// const inv2 = new Invoice('james', 'work on website', 200);
// let invoices: Invoice[] = [];
// invoices.push(inv1);
// invoices.push(inv2);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'John',
//     age: 23,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     },
// };
// console.log(me);
// const greeting = (person: IsPerson) => {
//     console.log(person.name);
// };
// greeting(me);
