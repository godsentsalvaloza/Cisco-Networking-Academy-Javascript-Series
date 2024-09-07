// Scenario

// Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

//     showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
//     showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
//     addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.

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

function showContact(contacts, index) {
  if (
    contacts instanceof Array &&
    index < contacts.length &&
    Number.isInteger(index)
  ) {
    for (i = 0; i < contacts.length; i++) {
      if (index == i) {
        alert(
          `Index ${i}:\nName: ${contacts[i].name}\nPhone: ${contacts[i].phone}\nEmail: ${contacts[i].email}`
        );
      }
    }
  } else {
    alert("Error: Invalid input");
  }
}

// Takes the contact array and iterates throughout the data
function showAllContacts(contact) {
  if (contact instanceof Array) {
    for (const element of contacts) {
      console.log(element.name);
      console.log(element.phone);
      console.log(element.email);
      console.log();
    }
  } else {
    alert("Error: Invalid Input");
  }
}

function addNewContact(contacts, newName, newPhone, newEmail) {
  // Checking for values
  if (
    newName != "" &&
    newPhone != "" &&
    newEmail != "" &&
    contacts instanceof Array
  ) {
    contacts.push({
      name: newName,
      phone: newPhone,
      email: newEmail,
    });

    alert(
      `New Entry:\nName: ${contacts[contacts.length - 1].name}\nPhone: ${
        contacts[contacts.length - 1].phone
      }\nEmail: ${contacts[contacts.length - 1].email}`
    );
  } else {
    alert("Error: Invalid Output");
  }
}

do {
  let userChoice = Number(
    prompt(
      "Enter Choice:\n1: Show first contact\n2: Show last contact\n3: Display all contact (console.log)\n4: Add new contact\n5: Display specific index\n6: Exit",
      1
    )
  );

  // Prompt user about actions
  if (userChoice == 1) {
    // Display first entry in the array of object
    alert(
      `First Contact:\nName: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`
    );
  } else if (userChoice == 2) {
    // Display last entry in the array of object
    alert(
      `Last Contact:\nName: ${contacts[contacts.length - 1].name}\nPhone: ${
        contacts[contacts.length - 1].phone
      }\nEmail: ${contacts[contacts.length - 1].email}`
    );
  } else if (userChoice == 3) {
    // Display all contacts
    showAllContacts(contacts);
  } else if (userChoice == 4) {
    // Prompt for information
    let newName = prompt("Enter name: ", "");
    let newPhone = prompt("Enter phone: ", "");
    let newEmail = prompt("Enter E-Mail: ", "");
    addNewContact(contacts, newName, newPhone, newEmail);
  } else if (userChoice == 5) {
    // Display Specific Index
    let index = Number(prompt("Enter index number: ", 0));
    showContact(contacts, index);
  } else if (userChoice == 6) {
    // Terminates loop - Exit
    break;
  } else {
    alert("Error: Invalid Output");
  }
} while (true);
