// Fake Store API Tasks
// API Link
// let apiLink = "https://fakestoreapi.com/products";
// Beginner Level
// Task 1: Print All Products
// Fetch all products and print them.
// Output:
// Title : ...
// Price : ...
let apiLink = "https://fakestoreapi.com/products";
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
        });
    })
    .catch(error => console.error("Error fetching products:", error));

// Task 2: Print Only Product Titles
// Output:
// Product 1
// Product 2
// Product 3
// Use:
// forEach()
// or
// map()
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        products.forEach(product => console.log(product.title));
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 3: Print Total Products
// Output:
// Total Products : 20
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        console.log("Total Products:", products.length);
    })
    .catch(error => console.error("Error fetching products:", error));

// Task 4: Print All Categories
// Output:
// electronics
// jewelery
// men's clothing
// women's clothing
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let categories = new Set(products.map(product => product.category));
        categories.forEach(category => console.log(category));
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 5: Print Products Above $50
// Use:
// filter()
// Output:
// Product A - 109
// Product B - 250
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let expensiveProducts = products.filter(product => product.price > 50);
        expensiveProducts.forEach(product => {
            console.log(product.title + " - " + product.price);
        });
    })
    .catch(error => console.error("Error fetching products:", error));


// Intermediate Level
// Task 6: Print Products Below $50
// Use:
// filter()
// Task 7: Find First Product Above $100
// Use:
// find()
// Output:
// {
//  title:"...",
//  price:109
// }
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        // Task 6: Print Products Below $50
        let cheapProducts = products.filter(product => product.price < 50);
        cheapProducts.forEach(product => console.log(product.title + " - " + product.price));

        // Task 7: Find First Product Above $100
        let expensiveProduct = products.find(product => product.price > 100);
        console.log(expensiveProduct);
    })
    .catch(error => console.error("Error fetching products:", error));



// // Task 8: Search Product
// let searchText = "shirt";
// Find matching products.
// Use:
// includes()
// filter()
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let searchText = "shirt";
        let matchingProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        matchingProducts.forEach(product => console.log(product.title + " - " + product.price));
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 9: Count Electronics Products
// Output:
// Electronics Count : 6
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let electronicsCount = products.filter(product => product.category === "electronics").length;
        console.log("Electronics Count:", electronicsCount);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 10: Print Highest Price Product
// Use:
// sort()
// or
// reduce()
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let highestPriceProduct = products.reduce((maxProduct, currentProduct) => {
            return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
        });
        console.log("Highest Price Product:", highestPriceProduct);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 11: Print Lowest Price Product
// Use:
// sort()
// or
// reduce()
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let lowestPriceProduct = products.reduce((minProduct, currentProduct) => {
            return currentProduct.price < minProduct.price ? currentProduct : minProduct;
        });
        console.log("Lowest Price Product:", lowestPriceProduct);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 12: Calculate Total Price of All Products
// Use:
// reduce()
// Output:
// Total Price : XXXX
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let totalPrice = products.reduce((total, product) => total + product.price, 0);
        console.log("Total Price:", totalPrice);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 13: Calculate Average Product Price
// Output:
// Average Price : XXX
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let totalPrice = products.reduce((total, product) => total + product.price, 0);
        let averagePrice = totalPrice / products.length;
        console.log("Average Price:", averagePrice);
    })
    .catch(error => console.error("Error fetching products:", error));

// Task 14: Print Product With Highest Rating
// Output:
// Title : ...
// Rating : 4.9
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let highestRatedProduct = products.reduce((maxProduct, currentProduct) => {
            return currentProduct.rating.rate > maxProduct.rating.rate ? currentProduct : maxProduct;
        });
        console.log("Title:", highestRatedProduct.title);
        console.log("Rating:", highestRatedProduct.rating.rate);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 15: Print Product With Lowest Rating
// Output:
// Title : ...
// Rating : 2.1
// Advanced Level
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let lowestRatedProduct = products.reduce((minProduct, currentProduct) => {
            return currentProduct.rating.rate < minProduct.rating.rate ? currentProduct : minProduct;
        });
        console.log("Title:", lowestRatedProduct.title);
        console.log("Rating:", lowestRatedProduct.rating.rate);
    })
    .catch(error => console.error("Error fetching products:", error));



// Task 16: Category Wise Product Count
// Output:
// electronics : 6
// jewelery : 4
// men's clothing : 4
// women's clothing : 6
// Use:
// reduce()
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let categoryCount = products.reduce((count, product) => {
            count[product.category] = (count[product.category] || 0) + 1;
            return count;
        }, {});
        for (let category in categoryCount) {
            console.log(category + ":", categoryCount[category]);
        }
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 17: Create Discounted Products
// Apply 10% discount.
// Output:
// [
//  {
//   title:"...",
//   oldPrice:100,
//   newPrice:90
//  }
// ]
// Use:
// map()
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let discountedProducts = products.map(product => {
            return {
                title: product.title,
                oldPrice: product.price,
                newPrice: (product.price * 0.9).toFixed(2)
            };
        });
        console.log(discountedProducts);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 18: Sort Products Low To High
// Use:
// sort((a,b)=>a.price-b.price)
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let sortedProducts = products.sort((a, b) => a.price - b.price);
        sortedProducts.forEach(product => console.log(product.title + " - " + product.price));
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 19: Sort Products High To Low
// Use:
// sort((a,b)=>b.price-a.price)
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let sortedProducts = products.sort((a, b) => b.price - a.price);
        sortedProducts.forEach(product => console.log(product.title + " - " + product.price));
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 20: Check Any Product Above $500
// Use:
// some()
// Output:
// true
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let hasExpensiveProduct = products.some(product => product.price > 500);
        console.log("Any product above $500:", hasExpensiveProduct);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 21: Check All Products Above Rating 3
// Use:
// every()
// Output:
// true / false
fetch(apiLink)
    .then(response => response.json())
    .then(products => {        let allAboveRating3 = products.every(product => product.rating.rate > 3);
        console.log("All products above rating 3:", allAboveRating3);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 22: Print Top 5 Costliest Products
// Output:
// Product A
// Product B
// Product C
// Product D
// Product E
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let topCostliestProducts = products.sort((a, b) => b.price - a.price).slice(0, 5);
        topCostliestProducts.forEach(product => console.log(product.title + " - " + product.price));
    })
    .catch(error => console.error("Error fetching products:", error));  
    


// Task 23: Print Top 5 Rated Products
// Sort by rating and print first 5.
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let topRatedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5);
        topRatedProducts.forEach(product => console.log(product.title + " - " + product.rating.rate));
    })
    .catch(error => console.error("Error fetching products:", error));
// Task 24: Group Products By Category
// Output:
// {
//  electronics:[...],
//  jewelery:[...],
//  men's clothing:[...]
// }
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let groupedProducts = products.reduce((group, product) => {
            if (!group[product.category]) {
                group[product.category] = [];
            }
            group[product.category].push(product);
            return group;
        }, {});
        console.log(groupedProducts);
    })
    .catch(error => console.error("Error fetching products:", error));  

    
// Task 25: Convert Product Prices To INR
// Assume:
// 1 USD = 85 INR
// Output:
// Title : ...
// Price : ₹8500
// Real-Time Company Tasks
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            let priceInINR = (product.price * 85).toFixed(2);
            console.log("Title:", product.title);
            console.log("Price: ₹" + priceInINR);
        });
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 26: Amazon Product Filter
// Conditions:
// Price < 500
// Rating > 4
// Category = electronics
// Output matching products.
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let filteredProducts = products.filter(product => product.price < 500 && product.rating.rate > 4 && product.category === "electronics");
        filteredProducts.forEach(product => console.log(product.title + " - " + product.price + " - " + product.rating.rate));
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 27: Best Seller Product
// Find:
// Highest Rating
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let bestSellerProduct = products.reduce((bestProduct, currentProduct) => {
            return currentProduct.rating.rate > bestProduct.rating.rate ? currentProduct : bestProduct;
        });
        console.log("Best Seller Product:", bestSellerProduct);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 28: Product Analytics Dashboard
// Output:
// Total Products :
// Total Categories :
// Highest Price Product :
// Lowest Price Product :
// Average Price :
// Best Rated Product :
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let totalProducts = products.length;
        let totalCategories = new Set(products.map(product => product.category)).size;
        let highestPriceProduct = products.reduce((maxProduct, currentProduct) => currentProduct.price > maxProduct.price ? currentProduct : maxProduct);
        let lowestPriceProduct = products.reduce((minProduct, currentProduct) => currentProduct.price < minProduct.price ? currentProduct : minProduct);
        let averagePrice = products.reduce((total, product) => total + product.price, 0) / products.length;
        let bestRatedProduct = products.reduce((bestProduct, currentProduct) => currentProduct.rating.rate > bestProduct.rating.rate ? currentProduct : bestProduct);
        console.log("Total Products:", totalProducts);
        console.log("Total Categories:", totalCategories);
        console.log("Highest Price Product:", highestPriceProduct);
        console.log("Lowest Price Product:", lowestPriceProduct);
        console.log("Average Price:", averagePrice);
        console.log("Best Rated Product:", bestRatedProduct);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 29: Inventory Report
// Output:
// Expensive Products :
// Affordable Products :
// Electronics :
// Jewellery :
// Mens Clothing :
// Womens Clothing :
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let expensiveProducts = products.filter(product => product.price > 100);
        let affordableProducts = products.filter(product => product.price <= 100);
        let electronics = products.filter(product => product.category === "electronics");
        let jewellery = products.filter(product => product.category === "jewelery");
        let mensClothing = products.filter(product => product.category === "men's clothing");
        let womensClothing = products.filter(product => product.category === "women's clothing");
        console.log("Expensive Products:", expensiveProducts);
        console.log("Affordable Products:", affordableProducts);
        console.log("Electronics:", electronics);
        console.log("Jewellery:", jewellery);
        console.log("Mens Clothing:", mensClothing);
        console.log("Womens Clothing:", womensClothing);
    })
    .catch(error => console.error("Error fetching products:", error));


// Task 30: Complete Admin Dashboard (Interview Level)
// Build a report:
// ==============================

// TOTAL PRODUCTS :
// TOTAL CATEGORIES :
// TOTAL PRICE :
// AVERAGE PRICE :

// HIGHEST PRICE PRODUCT :
// LOWEST PRICE PRODUCT :

// BEST RATED PRODUCT :
// LOWEST RATED PRODUCT :

// PRODUCTS ABOVE $100 :
// PRODUCTS BELOW $50 :

// CATEGORY COUNTS :
fetch(apiLink)
    .then(response => response.json())
    .then(products => {
        let totalProducts = products.length;
        let totalCategories = new Set(products.map(product => product.category)).size;
        let totalPrice = products.reduce((total, product) => total + product.price, 0);
        let averagePrice = totalPrice / products.length;
        let highestPriceProduct = products.reduce((maxProduct, currentProduct) => currentProduct.price > maxProduct.price ? currentProduct : maxProduct);
        let lowestPriceProduct = products.reduce((minProduct, currentProduct) => currentProduct.price < minProduct.price ? currentProduct : minProduct);
        let bestRatedProduct = products.reduce((bestProduct, currentProduct) => currentProduct.rating.rate > bestProduct.rating.rate ? currentProduct : bestProduct);
        let lowestRatedProduct = products.reduce((worstProduct, currentProduct) => currentProduct.rating.rate < worstProduct.rating.rate ? currentProduct : worstProduct);
        let productsAbove100 = products.filter(product => product.price > 100);
        let productsBelow50 = products.filter(product => product.price < 50);
        let categoryCounts = products.reduce((count, product) => {
            count[product.category] = (count[product.category] || 0) + 1;
            return count;
        }, {});
        console.log("TOTAL PRODUCTS:", totalProducts);
        console.log("TOTAL CATEGORIES:", totalCategories);
        console.log("TOTAL PRICE:", totalPrice);
        console.log("AVERAGE PRICE:", averagePrice);
        console.log("HIGHEST PRICE PRODUCT:", highestPriceProduct);
        console.log("LOWEST PRICE PRODUCT:", lowestPriceProduct);
        console.log("BEST RATED PRODUCT:", bestRatedProduct);
        console.log("LOWEST RATED PRODUCT:", lowestRatedProduct);
        console.log("PRODUCTS ABOVE $100:", productsAbove100);
        console.log("PRODUCTS BELOW $50:", productsBelow50);
        console.log("CATEGORY COUNTS:", categoryCounts);
    })
    .catch(error => console.error("Error fetching products:", error));