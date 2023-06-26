const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  let count = 0; // Initialize the count variable

  // Iterate over each book in the library array
  for (let i = 0; i < library.length; i++) {
    // Check if the readingStatus property is true
    if (library[i].readingStatus === true) {
      count++;
    }
  }

  return count;
};

// Do not change the code below

alert(numberOfBooksRead());
