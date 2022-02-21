// Form
const form = document.querySelector('.new-item-form');
// Input fields
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('.item-list');
// Log contents to console
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = {
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    };
    if (type.value === 'invoice') {
        console.log('Invoice', values);
    }
    else {
        console.log('Payment', values);
    }
    let li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = values.type;
    li.append(h4);
    const p = document.createElement('p');
    p.innerText = `${values.toFrom} to pay Ksh ${values.amount} for ${values.details}`;
    li.append(p);
    return ul.append(li);
});
export {};
