function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
  return library;
}

function checkoutBook(library, bookTitle, genre) {
  var genreShelf = library.shelves[genre];
  var checkoutSuccess = false;
  var checkoutMsg = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`

  for(i = 0; i < genreShelf.length; i++) {
    if(library.shelves[genre][i].title === bookTitle) {
      library.shelves[genre].splice(library.shelves[genre][i], 1);
      checkoutSuccess = true;
      checkoutMsg = `You have now checked out ${bookTitle} from the ${library.name}.`;
    }
  }
  
  return checkoutMsg;
}

function takeStock(library, genre) {
  if(genre) {
    var numberOfBooksByGenre = library.shelves[genre].length;
    var shelfStockMsg = `There are a total of ${numberOfBooksByGenre} ${genre} books at the ${library.name}.`
    
    return shelfStockMsg;
  } else {
    var shelfNames = Object.keys(library.shelves);
    var bookCounter = 0;
    
    for(i = 0; i < shelfNames.length; i++) {
      bookCounter += library.shelves[shelfNames[i]].length;
    }

    var libraryStockMsg = `There are a total of ${bookCounter} books at the ${library.name}.`
    return libraryStockMsg;
  }

  
  
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};