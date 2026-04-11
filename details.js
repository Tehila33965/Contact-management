import { contacts } from "./data.js";

const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get('id');

const contact = contacts.find(c => c.id === Number(contactId));

if (contact) {
    document.title = contact.name;
    document.getElementById('contact-name').innerText = contact.name;
    document.getElementById('contact-phone').innerText = `טלפון: ${contact.phone}`;
    document.getElementById('contact-category').innerText = `קטגוריה: ${contact.category}`;
}
 else {
    document.body.innerHTML = "<h1>איש קשר לא נמצא</h1><a href='index.html'>חזרה</a>";
}