document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'customer.JSON', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = `
        <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
        </ul>
        `;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();

}

function loadCustomers(e) {
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'customers.JSON', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = '';

            customers.forEach(function (customer) {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();

}