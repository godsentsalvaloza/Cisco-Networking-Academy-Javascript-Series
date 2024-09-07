// Scenario

// We will use the functions to add one more item of functionality. Arrays have a sort method that allows us to sort their elements. To this method, we pass a function which should compare two elements of the array and decide which one is smaller and which one is bigger. If the first element is smaller, the function returns a value less than zero, if they are equal it returns zero, and if the first is larger, it returns a value greater than zero. For example, the array:

// Give the user the option to select a sort action from the list. When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.
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
      "Enter Choice:\n1: Show first contact\n2: Show last contact\n3: Display all contact (console.log)\n4: Add new contact\n5: Display specific index\n6: Sort the entries\n7: Exit",
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
    let sortChoice = Number(
      prompt(
        "Enter choice\n1: Sort by name\n2: Sort by phone\n3: Sort by email"
      )
    );
    if (sortChoice == 1) {
      contacts.sort((a, b) => a.name.localeCompare(b.name));
      showAllContacts(contacts);
      alert("Success!");
    } else if (sortChoice == 2) {
      contacts.sort((a, b) => a.phone.localeCompare(b.phone));
      showAllContacts(contacts);
      alert("Success!");
    } else if (sortChoice == 3) {
      contacts.sort((a, b) => a.email.localeCompare(b.name));
      showAllContacts(contacts);
      alert("Success!");
    } else {
      alert("Error: Invalid Output");
    }
  } else if (userChoice == 7) {
    // Terminates loop - Exit
    break;
  } else {
    alert("Error: Invalid Output");
  }
} while (true);
