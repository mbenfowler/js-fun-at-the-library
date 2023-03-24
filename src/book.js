function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pons) {
  return {
    name: name,
    age: age,
    pronouns: pons
  }
}

function saveReview(review, reviews) {
  if(reviews.includes(review)) {
    return reviews;
    } else {
      reviews.push(review);
      return reviews;
    }
  
}

function calculatePageCount(bookTitle) {
  var chars = bookTitle.split("");
  return chars.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  
  return book;
}

function editBook(book) {
  book.pageCount *= .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}