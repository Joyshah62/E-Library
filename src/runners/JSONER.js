// import books from '../books.db'
const fs = require('fs');
// You can have an array of data like we have in books.db and convert it to json file using this js

// Convert the books array to JSON
const jsonData = JSON.stringify(books, null, 2);

// Write the JSON data to the books.json file

fs.writeFile('../backend/api/books.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing JSON file:', err);
  } else {
    console.log('JSON file saved successfully.');
  }
});
