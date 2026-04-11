import { addContact, render, updateCategoryById } from "./data.js";

const el={
    form : document.querySelector('form'),
    phoneInput: document.querySelector('#phone'), 
    nameInput: document.querySelector('#name'),
    contactsContainer: document.querySelector('#contacts'),
    categoryInput: document.querySelector('#category')
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
    const { name, phone, category } = currentForm.elements;

    if (name.value.trim() && phone.value.trim() && category.value) {
        addContact(name.value, phone.value, category.value);
    
        const htmlList = render(); 
        el.contactsContainer.innerHTML = htmlList;
        
        // const newContact = {
        //     name: name.value,
        //     phone: phone.value
        // };
        // console.log(newContact);
        
        // contacts.push(newContact);
        // el.contactsContainer.innerText = `אנשי קשר במערך: ${contacts.length}`;
    }
    
    currentForm.reset();
})

el.contactsContainer.innerHTML = render();

const btnDeleteAll = document.querySelector('#delete');

btnDeleteAll.addEventListener('click', () => {
    if (confirm("האם את בטוחה שברצונך למחוק את כל אנשי הקשר?"))
    {
        localStorage.removeItem('myContacts');
        location.reload();
    }
})