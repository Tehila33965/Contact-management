export const contacts = JSON.parse(localStorage.getItem('myContacts')) || [];

export const addContact = (name, phone ,category) =>{
    const newContact = {
        name: name,
        phone: phone,
        category: category,
        id: Date.now() 
    };
    
    contacts.push(newContact);
    console.log(contacts);

    localStorage.setItem('myContacts', JSON.stringify(contacts));
}



export const render = () => {
    if (contacts.length === 0) {
        return `<p>רשימת אנשי הקשר ריקה.</p>`;
    }

    return contacts.map(contact => {
        return `<div>${contact.category} שם: ${contact.name}, טלפון: ${contact.phone}</div>`;
    }).join(''); 


}


