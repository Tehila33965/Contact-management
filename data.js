export const contacts = [];

export const addContact = (name, phone ,category) =>{
    const newContact = {
        name: name,
        phone: phone,
        category: category,
        id: Date.now() 
    };
    
    contacts.push(newContact);
    console.log(contacts);
}



export const render = () => {
    return contacts.map(contact => {
        return `<div>${contact.category} שם: ${contact.name}, טלפון: ${contact.phone}</div>`;
    }).join(''); 
}