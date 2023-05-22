import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});

interface Resource<T> {
    id: number;
    data: T;
}

const one: Resource<string> = {
    id: 12,
    data: 'test',
};
const two: Resource<object> = {
    id: 12,
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
