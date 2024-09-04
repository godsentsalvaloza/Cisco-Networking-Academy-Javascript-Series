// Scenario

// Let's go back to our contact list. After some recent tweaks (i.e. using an array and objects) it is actually starting to look like a list. However, one quite serious problem remained. Changing data in the list, such as adding a new contact, has to be provided for right away in the program code. What if we want to give the user the ability to enter the data of the added contact while the program is running? Modify the program to add, at the end of the list, not the contact, which is given in the code, but the one which the user will give during the program run. Use the prompt method to do this. At the end, display the first and the last contact from the list.

// Contact object Array
let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

// User input

let newName = prompt("Enter name: ", "Anonymous");
let newPhone = prompt("Enter phone: ", "0000 000 0000");
let newEmail = prompt("Enter E-Mail: ", "home@library.com");

// creates an object for new entry
let newContact = {};

newContact.name = newName;
newContact.phone = newPhone;
newContact.email = newEmail;

contacts.push(newContact);

for (let i = 0; i < contacts.length; i++) {
  console.log(contacts[i]);
}
