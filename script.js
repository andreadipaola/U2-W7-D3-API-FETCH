fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    return response.json();
  })
  .then((books) => {
    console.log(books);
    generateCards(books);
  })
  .catch((err) => {});

const bookStore = document.getElementById("bookStore");
bookStore.innerHTML = "";

function generateCards(bookList) {
  const bookStore = document.getElementById("bookStore");

  bookList.forEach((book) => {
    const col = document.createElement("div");
    col.innerHTML = "";
    col.className = "col";
    const card = `<div class="card">
                        <img src="${book.img}" class="img-fluid card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">asin: ${book.asin}</p>
                            <p class="card-text">category: ${book.category}</p>
                            <p class="card-text">price: ${book.price}$</p>
                            <button id="add" class="btn btn-primary">Add</button>
                            <button id="delete" class="btn btn-primary">Remove</button>
                        </div>                 
                    </div>`;
    col.innerHTML = card;
    bookStore.appendChild(col);
  });
}

const delBtns = document.querySelectorAll("#delete");
console.log(delBtns);

delBtns.forEach((btn) => {
  btn.addEventListener("click", () => btn.parentNode.parentNode.remove());
});

// delBtn.addEventListener("click", (e) =>
// delBtn.parentNode.parentNode.remove()

// delBtn.onclick = () => delBtn.parentNode.parentNode.remove();
