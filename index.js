
function generateProducts(products_details) {
  const products_container = document.getElementById("products");
 
  products_details.forEach((product) => {
  
    const myproducts = document.createElement("div");
    myproducts.classList.add("product-card");
  
    myproducts.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}" />
            <h2>${product.title}</h2>
            <div class='productPrice'>
            <p>${product.price}</p>
            <button>ADD TO CART</button>
            </div>
        `;
  
    products_container.appendChild(myproducts);
  });
}
function fetchallProducts() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((products_details) => {
      const allproducts = products_details.products.slice(0, 8);
      
      generateProducts(allproducts);
    });
}
fetchallProducts()










