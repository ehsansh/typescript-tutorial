const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, amount.valueAsNumber);
});

class Invoice {
    readonly client: string;
    private details: string;
    public amount: number;
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const inv1 = new Invoice('ehsan', 'work on website', 300);
const inv2 = new Invoice('james', 'work on website', 200);

let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
