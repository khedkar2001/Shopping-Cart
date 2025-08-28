let currUser = localStorage.getItem("currentUser");

if (currUser) {
  //user found, show profile page
  function renderCartPage() {
    let idArray = JSON.parse(localStorage.getItem("cart"));
    console.log(idArray);

    let products = JSON.parse(localStorage.getItem("products"));
    let cartItems = products.filter((elem) => {
      return idArray.includes(elem.id);
    });
    console.log("cart items", cartItems);

    let cartHtml = "";
    let listHtml = "";
    let total = 0;
    cartItems.forEach((element) => {
      total += element.price;
      cartHtml += renderCartCard(element);
      listHtml += `<li class='checkList'> <div>  ${element.title}</div> <div> ${element.price} </div> </li>`;
    });
    let cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";
    cartContainer.innerHTML = cartHtml;

    let cartCheckoutList = document.getElementById("chekout-list");
    cartCheckoutList.innerHTML = "";
    cartCheckoutList.innerHTML = listHtml;
    cartCheckoutList.innerHTML += `<li class='checkList'><div>Total</div><div>${Math.floor(total).toFixed(2)}</div></li>`;

    console.log("total priceL ", total);
  }

  function renderCartCard(item) {
    return `<div class="item">
              <img src="${item.image}" alt="Item" />
              <div class="info">              
              <div class="row">
              <div class="title">${item.title}</div>
              <div class="price">${item.price}</div>
                </div>
              </div>
              <button onclick='removeFromCart(${item.id})'>Remove From Cart</button>
            </div>`;
  }

  function removeFromCart(id) {
    let itemIds = JSON.parse(localStorage.getItem("cart"));
    let newIds = itemIds.filter((i) => i !== id);
    console.log("new cart items ids: ", newIds);
    localStorage.setItem("cart", JSON.stringify(newIds));

    renderCartPage();
  }

  renderCartPage();
} else {
  //take user back to login
  window.location.href = "/login.html";
}