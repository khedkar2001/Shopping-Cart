let currUser = localStorage.getItem("currentUser");

if (currUser) {
  let colors = ["red", "black", "blue", "green", "yellow"];
  let sizes = ["xs", "sm", "md", "lg", "xl"];

  //if products are in local storage
  if (localStorage.getItem("products")) {
    let products = JSON.parse(localStorage.getItem("products"));
    console.log("local storage products: ", products);
    renderElements(products);
  } else {
    //fetch products from api and save to localstorage
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let newData = data.map((item) => {
          item.colors = colors.slice(Math.floor(Math.random() * 4));
          item.sizes = sizes.slice(Math.floor(Math.random() * 4));
          return item;
        });
        console.log("New data:", newData);
        localStorage.setItem("products", JSON.stringify(newData));
      });
  }
} else {
  //take user back to login
  window.location.href = "/login.html";
}

function renderCard(item) {
  return `<div class="item">
              <img src="${item.image}" alt="Item" />
              <div class="info">              
                <div class="row">
                  <div class="price">${item.price}</div>
                  <div class="sized">${item.sizes}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: ${
                      item.colors[0]
                    }"></div>
                    <div class="circle" style="background-color:${
                      item.colors[1]
                    }"></div>
                    <div class="circle" style="background-color: ${
                      item.colors[2]
                    }"></div>
                  </div>
                </div>
                <div class="row">${item.rating}</div>
              </div>
              <button onclick='addToCart(${item.id})'>Add to Cart</button>
            </div>`;
}

function renderElements(products) {
  console.log("render le products:", products);
  let mensProducts = products.filter((item) => {
    return item.category === "men's clothing";
  });
  console.log("mens products:", mensProducts);

  let womensProducts = products.filter((item) => {
    return item.category === "women's clothing";
  });
  console.log("womens products: ", womensProducts);

  //render mens products
  let menDiv = document.getElementById("mens-items");
  // menDiv.innerHTML = "";
  let menHtml = "";
  mensProducts.forEach((element) => {
    // renderCard(element);
    menHtml += renderCard(element);
  });
  menDiv.innerHTML = menHtml;

  //render women products

  let womenDiv = document.getElementById("womens-items");
  let womenHtml = "";
  womensProducts.forEach((element) => {
    //render womes elements
    womenHtml += renderCard(element);
  });
  womenDiv.innerHTML = womenHtml;

  //render jewelery
  let jewelleryProducts = products.filter((item) => {
    return item.category === "jewelery";
  });
  console.log("jewelery producst: ", jewelleryProducts);
  let jewelleryDiv = document.getElementById("jewellery");
  jewelleryDiv.innerHTML = "";

  let jewelHtml = "";

  jewelleryProducts.forEach((element) => {
    jewelHtml += renderCard(element);
  });
  jewelleryDiv.innerHTML = jewelHtml;

  //render electronics
  let electronisProducts = products.filter((item) => {
    return item.category === "electronics";
  });
  console.log("electronicsProducts", electronisProducts);

  let electronicDiv = document.getElementById("electronics");
  electronicDiv.innerHTML = "";
  let elecHtml = "";
  electronisProducts.forEach((element) => {
    elecHtml += renderCard(element);
  });
  electronicDiv.innerHTML = elecHtml;
}

function tabClick(option) {
  const containers = {
    all: [
      "mensContainer",
      "womensContainer",
      "jewelleryContainer",
      "electronicsContainer",
    ],
    men: ["mensContainer"],
    women: ["womensContainer"],
    jewellery: ["jewelleryContainer"],
    electronics: ["electronicsContainer"],
  };

  const tabs = {
    all: "allTab",
    men: "menTab",
    women: "womenTab",
    jewellery: "jewelleryTab",
    electronics: "elecTab",
  };

  // Hide all containers
  Object.values(containers)
    .flat()
    .forEach((id) => {
      document.getElementById(id).style.display = "none";
    });

  // Show selected containers
  const selected = containers[option];
  selected.forEach((id) => {
    document.getElementById(id).style.display = "block";
  });

  // Remove active from all tabs
  Object.values(tabs).forEach((id) => {
    document.getElementById(id).classList.remove("active");
  });

  // Add active to the selected tab
  document.getElementById(tabs[option]).classList.add("active");
}

function addToCart(item) {
  console.log("add to cart clicked,", item);
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Existing cart:", cartItems);

  cartItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  console.log("Updated cart:", cartItems);
  alert("Item added to cart!");
}

function renderCart() {
  let idArray = localStorage.getItem("cart");
  console.log(idArray);  
}