
// Define an array of fields that will be displayed to the user
const fields = [
    {

        //define two objects (name & email) each with a name and a label. 
        name: 'full-name',
        label: 'Full Name'
    },
    {
        name:'email',
        label:'Email Address'
    }
];

// create a form with these fields
// use form as the tag we want to create
// and then append form to the body

const form = document.createElement('form');
document.body.appendChild(form);

// create a field for each element in the fields array, do so by using a for loop
// append the field to form

for (let i = 0; i<fields.length; i += 1){
    const field = fields[i];

    const label = document.createElement('label');

    // textContent represents a label in the field

    label.textContent = field.label;
    
    /* assign a for property, which match the input element's ID,
     so the browser knows which element this label is for */

    label.setAttribute('for', field.name);

    // create input field, and give ID
    const input = document.createElement('input');
    input.setAttribute('id', field.name);

    // append label and input
    form.appendChild(label);
    form.appendChild(input);

}

// create a submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

// append button to form
form.appendChild(submitButton);

// To override default behavior specify an event handler
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted');
})
