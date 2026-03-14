export const contacts = [];

export const addContact = (name, phone) =>{
    const newContact = {
        name: name,
        phone: phone,
        id: Date.now() 
    };
    
    contacts.push(newContact);
}

export const render = () =>{
    return contacts.map(contact => {
        return `<div>שם: ${contact.name}, טלפון: ${contact.phone}</div>`;
    }).join('');
}

