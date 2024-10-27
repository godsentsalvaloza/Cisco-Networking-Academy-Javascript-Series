// Scenario

// We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

// Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

//     display the first contact (first)
//     display the last contact (last)
//     display all contacts (all)
//     add a new contact (new)
//     exit the program (quit)

// After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example quit.

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

do {
  let userChoice = Number(
    prompt(
      "Enter Choice:\n1: Show first contact\n2: Show last contact\n3: Display all contact (console.log)\n4: Add new contact\n5: Exit",
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
    for (const element of contacts) {
      console.log(element.name);
      console.log(element.phone);
      console.log(element.email);
      console.log();
    }
  } else if (userChoice == 4) {
    // Prompt for information
    let newName = prompt("Enter name: ", "");
    let newPhone = prompt("Enter phone: ", "");
    let newEmail = prompt("Enter E-Mail: ", "");

    // Checking for values
    if (newName != "" && newPhone != "" && newEmail != "") {
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
  } else if (userChoice == 5) {
    break;
  } else {
    alert("Error: Invalid Output");
  }
} while (true);
