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
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const one = {
    id: 12,
    resourceType: ResourceType.BOOK,
    data: 'test',
};
const two = {
    id: 12,
    resourceType: ResourceType.AUTHOR,
    data: { name: 'ehsan' },
};
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
