function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  // first .then returns json data 
    .then(resp => resp.json())
  // second .then uses the returned data and can be represented as anything (such as books_array) you'd like. 
  // You can use that in our code.
    .then(books_array => renderBooks(books_array))
    
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
