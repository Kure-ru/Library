let myLibrary = [];

const addBtn = document.getElementById("btn__add");
const form = document.getElementById("form");
const library = document.getElementById("lib");

class Book {
  constructor(title, author, pages, genre, category) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.genre = form.genre.value;
    this.category = form.category.value;
  }
}

//display form
addBtn.addEventListener("click", (e) => {
  form.style.display = "flex";
});

//submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  //hide form
  form.style.display = "none";
  let newBook = new Book(
    "newTitle",
    "newAuthor",
    "newPages",
    "newGenre",
    "newCategory"
  );
  myLibrary.push(newBook);
  //reset form
  form.reset();
  displayBooks();
}

//function editBook

function resetBooks() {
  library.textContent = " ";
}

function displayBooks() {
  resetBooks();
  myLibrary.forEach((book, index) => {
    const bookContainer = document.createElement("article");
    bookContainer.innerHTML = `
    <div class="icons">
    <ion-icon name="create-sharp"></ion-icon>
    <ion-icon onclick="deleteBookCard(event)" name="close-circle-sharp"></ion-icon>
    </div>
    <h2>${book.title}</h2> 
    <p>by ${book.author} </p> 
    <p>${book.pages} pages </p>  
    <p>${book.genre} </p> 
    <p>${book.category} </p>`;
    library.appendChild(bookContainer);
    bookContainer.setAttribute("id", index);
})
}

function deleteBookCard(event)
{
  const bookId = event.target.parentNode.parentNode.getAttribute('id');
  console.log(bookId);
  myLibrary.splice(bookId, 1);
  displayBooks();
};

