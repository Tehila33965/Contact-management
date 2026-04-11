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
        return `
        <div class="contact-card">
            <a href="contact-details.html?id=${contact.id}">
                ${contact.category} שם: ${contact.name}, טלפון: ${contact.phone}
            </a>
        </div>`;
    }).join(''); 

}


export const updateCategoryById = (id, newCategory) =>{

    const index = contacts.findIndex(contact => contact.id === id);

    if (index !== -1)
    {
        contacts[index].category = newCategory;

        localStorage.setItem('myContacts', JSON.stringify(contacts));

        console.log("המערך המעודכן:", contacts);
        return true;
    }
    return false;
}

window.updateCategoryById = updateCategoryById;