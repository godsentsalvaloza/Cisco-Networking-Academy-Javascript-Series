/* Question 1: Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:

starting station (key name from, give the name of the nearest station in your area as a value);
end station (key name to, give any other station within 100km as a value);
the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).

The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console. */

let ticket = {
  to: "Moscow",
  from: "Kyiv",
  price: 10,
};

console.log(`To: ${ticket.to} `);
console.log(`From: ${ticket.from}`);
console.log(`Price: ${ticket.price}`);

// Question 2: Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console.

let car = {};

car.color = "Blue";
car.year = 2024;
car.isWorking = true;

console.log(`Color: ${car.color} `);
console.log(`Year: ${car.year}`);
console.log(`Working: ${car.isWorking}`);

/*

Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:

    Speaking JavaScript, Axel Rauschmayer, 460;
    Programming JavaScript Applications, Eric Elliott, 254;
    Understanding ECMAScript 6, Nicholas C. Zakas, 352.

Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.

*/

let books = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    numberOfPage: 460,
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    numberOfPage: 254,
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    numberOfPage: 352,
  },
];

/*
Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.
*/

let newBook = {
  title: "Learning JavaScript Design Patterns",
  author: "Addy Osmani",
  numberOfPage: 254,
};

books.push(newBook);

console.log(books.length);

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}

// Question 5: Use the slice command to copy the last two books to the new array.

let sliceBooks = books.slice(-2);

/*
Question 6: The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.
*/

books.shift();

console.log(books.length);

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}

// Question 7: Display the sum of the pages of all the books from the collection.

let totalPages = Number();
for (let i = 0; i < books.length; i++) {
  totalPages += books[i].numberOfPage;
}

console.log(totalPages);
