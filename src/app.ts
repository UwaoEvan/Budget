import { Invoice } from "./classes/Invoice.js";
// Form
const form  = document.querySelector('.new-item-form') as HTMLFormElement;

// Input fields

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('.item-list') as HTMLUListElement;
// Log contents to console

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values = {
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    }

    let li = document.createElement('li');
    
    const h4 = document.createElement('h4');
    h4.innerText = values.type;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = `${values.toFrom} to pay Ksh ${values.amount} for ${values.details}`;
    li.append(p)

    return ul.append(li)
})

