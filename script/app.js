const card = document.querySelector("#card"),
  cartBtn = document.querySelector("#cart-btn"),
  modal = document.querySelector(".modal"),
  closeBtn = document.querySelector(".btn-close"),
  body = document.querySelector("body");

async function updateUi() {
  let res;

  res = await fetch("https://fakestoreapi.com/products");

  let results = await res.json();

  results.map((result) => {
    card.innerHTML += `
    <div class="card " >
          <div>Product number: #${result.id}</div>
          <img src=${result.image} class="card-img-top" alt="...">
          <div class="card-body">
            <div class="card-title">${result.title}</div>
            <p class="card-text">${result.description.slice(0, 80)}...</p>
            <span class="d-block">${result.price * 10934} so'm</span> 
            <a href="#" class="btn btn-primary">Add Cart</a>
          </div>
        </div>
    `;
  });

  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
    body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    body.style.overflow = "auto";
  });
}
updateUi();
