const contacts = [];

const el={
    form : document.querySelector('form'),
    phoneInput: document.querySelector('#phone'), 
    nameInput: document.querySelector('#name'),
    contactsContainer: document.querySelector('#contacts')
}



el.phoneInput.addEventListener('keydown',(ev) => {
     const char = ev.key;
    if ((char > '9' || char < '0') &&  char != '-' && char.length === 1) {
            ev.preventDefault();

    }

    
})

el.form.addEventListener('submit',(ev) => {
    ev.preventDefault();

    const currentForm = ev.target;
    const { name, phone } = currentForm.elements;

    if (name.value.trim() && phone.value.trim()) {
        const newContact = {
            name: name.value,
            phone: phone.value
        };
        console.log(newContact);
        
        contacts.push(newContact);
        el.contactsContainer.innerText = `אנשי קשר במערך: ${contacts.length}`;
    }
    
    currentForm.reset();
})