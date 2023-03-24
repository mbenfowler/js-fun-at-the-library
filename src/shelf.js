function shelfBook(book, shelf) {
  if(shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook(bookName, shelf) {
  for(i = 0; i < shelf.length; i++){
    if(shelf[i].title === bookName) {
      shelf.splice(i, 1);
    }
  }
  
  return shelf;
}

function listTitles(books) {
  titles = [];
  for(i = 0; i < books.length; i++) {
    titles.push(books[i].title);
  }

  return titles.join(", ");
}

function searchShelf(shelf, title) {
  for(i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      return true;
    }
  }

  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};