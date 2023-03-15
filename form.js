
let myLibrary = [];

const addBtn = document.getElementById("btn__add");
const shelfBtn = document.getElementById("shelf.btn");
const form = document.getElementById("form");
const inputs = document.querySelectorAll("input")
const library = document.getElementById("lib");
const closeFormBtn = document.querySelector(".top__icon")

class Book {
  constructor(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
  }

  addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
  }
}

//display form
addBtn.addEventListener("click", (e) => {
  form.style.display = "flex";
});

//submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let book = new Book();
  book.title = form.title.value;
  book.author = form.author.value;
  book.pages = form.pages.value;
  book.genre = form.genre.value;
  book.addBookToLibrary(book);
  form.style.display = "none";
  form.reset();
  displayBooks();
});

//cancel button to close the form 
closeFormBtn.addEventListener("click", function() {
  form.style.display = "none"
  inputs.forEach(input => {
    input.value = ""
  })
})


const resetBooks = () => (library.textContent = " ");

function displayBooks() {
  resetBooks();
  myLibrary.forEach((book, index) => {
    const bookContainer = document.createElement("article");
    bookContainer.innerHTML = `
    <div class="icons">

    <ion-icon onclick="deleteBookCard(event)" name="close-circle-sharp"></ion-icon>
    </div>
    <h2>${book.title}</h2> 
    <p>by ${book.author} </p> 
    <p>${book.pages} pages </p>  
    <p>${book.genre} </p> 
   <button onclick="changeShelf(event)" class="want_to_read" id="shelf.btn">want to read</button>
    `;
    book.shelfCategory = "want to read";
    library.appendChild(bookContainer);
    bookContainer.setAttribute("id", index);
  });
}

function deleteBookCard(event) {
  const bookId = event.target.parentNode.parentNode.getAttribute("id");
  myLibrary.splice(bookId, 1);
  displayBooks();
}

function changeShelf(event) {
  //change button style
  event.target.classList.toggle("read");
  event.target.classList.toggle("want_to_read");
  //change button content
  if (event.target.classList.contains("read")) {
    event.target.textContent = "read";
  } else {
    event.target.textContent = "want to read";
  }
}

    // <ion-icon name="create-sharp"></ion-icon>

