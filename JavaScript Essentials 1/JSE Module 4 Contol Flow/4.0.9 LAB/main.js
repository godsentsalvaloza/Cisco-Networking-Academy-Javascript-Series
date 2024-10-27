// Scenario
// During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

//     showing the first contact (first)
//     showing the last contact (last)
//     adding a new contact (new)

// When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.

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

// Placeholder for inserting new object to the contacts array
let newContact = {};

let userChoice = Number(
  prompt(
    "Enter Choice:\n1: Show first contact\n2: Show last contact\n3: Add new contact",
    1
  )
);

// Prompt user about actions
if (userChoice == 1) {
  alert(
    `First Contact:\nName: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`
  );
} else if (userChoice == 2) {
  alert(
    `Last Contact:\nName: ${contacts[contacts.length - 1].name}\nPhone: ${
      contacts[contacts.length - 1].phone
    }\nEmail: ${contacts[contacts.length - 1].email}`
  );
} else if (userChoice == 3) {
  // Prompt for information
  let newName = prompt("Enter name: ", "");
  let newPhone = prompt("Enter phone: ", "");
  let newEmail = prompt("Enter E-Mail: ", "");

  // Checking for values
  if (newName != "" && newPhone != "" && newEmail != "") {
    newContact.name = newName;
    newContact.phone = newPhone;
    newContact.email = newEmail;
    contacts.push(newContact);

    alert(
      `New Entry:\nName: ${contacts[contacts.length - 1].name}\nPhone: ${
        contacts[contacts.length - 1].phone
      }\nEmail: ${contacts[contacts.length - 1].email}`
    );
  } else {
    alert("Error: Invalid Output");
  }
} else {
  alert("Error: Invalid Output");
}
