const products = [
  { id: 1, title: "Laptop", price: 15000000, category: "elektronik" },
  { id: 2, title: "Smartphone", price: 5000000, category: "elektronik" },
  { id: 3, title: "Meja Kerja", price: 1200000, category: "perabotan" }
];

const productNames = products.map (products => products.title);
console.log (productNames);

let cheapProducts= products.filter (product => product.price < 10000000);
console.log (cheapProducts);

let priceList = products.map (product => product.price);
console.log ("Rp", priceList.join (", "));


    const container = document.getElementById("product-list");

const htmlContent = products.map(product => {
  return `<div class="card">
            <h3>${product.title}</h3>
            <p>Harga: Rp ${product.price}</p>
            <span>Kategori: ${product.category}</span>
          </div>`;
}).join("");

container.innerHTML = htmlContent;