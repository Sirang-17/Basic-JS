const products = [
  { id: 101, name: "Laptop", price: 1200, category: "Electronics", stock: 10 },
  { id: 102, name: "Smartphone", price: 800, category: "Electronics", stock: 25 },
  { id: 103, name: "Desk Chair", price: 150, category: "Furniture", stock: 15 },
  { id: 104, name: "Notebook", price: 5, category: "Stationery", stock: 100 },
  { id: 105, name: "Pen Set", price: 12, category: "Stationery", stock: 200 }
];


// Check if { name: "Laptop" } exists using indexOf()
const index = products.indexOf(laptop[Product]);
console.log(index); 

/*
const newProducts = [ 

{ id: 106, name: "Table", price: 200, category: "Furniture", stock: 5 }, 
 { id: 107, name: "Headphones", price: 100, category: "Electronics", stock: 30 } 
]; 

Combine products and newProducts into a new array using concat() and print it. 
*/
const newProducts = [
  { id: 106, name: "Table", price: 200, category: "Furniture", stock: 5 },
  { id: 107, name: "Headphones", price: 100, category: "Electronics", stock: 30 }
];

const combinedProducts = products.concat(newProducts);
console.log(combinedProducts);

/*
Add a new product { id: 108, name: "Marker", price: 3, category: "Stationery", stock: 150 }
 to the end of the products array using push() and print the array. 
*/
products.push({
  id: 108,
  name: "Marker",
  price: 3,
  category: "Stationery",
  stock: 150
});

console.log(products);

/* 4 Pop last product */
const removedLast = products.pop();
console.log("Removed (pop):", removedLast);
console.log("After pop:", products);

/* 5 Shift first product */
const removedFirst = products.shift();
console.log("Removed (shift):", removedFirst);
console.log("After shift:", products);

/* 6 Unshift new product */
products.unshift({ id: 109, name: "Monitor", price: 250, category: "Electronics", stock: 12 });
console.log("After unshift:", products);

/* 7 Slice 2nd, 3rd, 4th products */
const slicedProducts = products.slice(1, 4);
console.log("Sliced Products:", slicedProducts);

/* 8 Splice at index 2 */
products.splice(2, 0, { id: 110, name: "Keyboard", price: 45, category: "Electronics", stock: 20 });
console.log("After splice:", products);

/* 9 Find first Stationery product */
const stationeryProduct = products.find(p => p.category === "Stationery");
console.log(
  `Stationery Product Found: ${stationeryProduct.name}, Price: ${stationeryProduct.price}`
);

/* 10 Filter products costing more than $100 */
const expensiveProducts = products.filter(p => p.price > 100);
expensiveProducts.forEach(p => {
  console.log(`${p.name}: $${p.price}`);
});

/* 11 Map product names */
const productNames = products.map(p => p.name);
console.log("Product Names:", productNames);

/* 12 Reduce: total value (price * stock) */
const totalValue = products.reduce((total, p) => {
  return total + p.price * p.stock;
}, 0);
console.log("Total Inventory Value:", totalValue);

/* 13 Filter stock > 20 */
const highStockProducts = products.filter(p => p.stock > 20);

/* 13.1 Map to strings */
const productStrings = highStockProducts.map(p =>
  `Product: ${p.name}, Price: $${p.price}`
);

/* 13.2 forEach print */
productStrings.forEach(str => console.log(str));

/* 14 For loop: total stock */
let totalStock = 0;
for (let i = 0; i < products.length; i++) {
  totalStock += products[i].stock;
}
console.log("Total Stock:", totalStock);

/* 15 for…of loop: stock > 20 */
for (const product of products) {
  if (product.stock > 20) {
    console.log(
      `Product: ${product.name}, Stock: ${product.stock}`
    );
  }
}