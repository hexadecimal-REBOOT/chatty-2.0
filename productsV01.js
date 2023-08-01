const products = [
    {
        name: "Product 1",
        description: "This is product 1.",
        price: 19.99,
        imageUrl: "https://example.com/product1.jpg",
        link: "https://amazon.com/product1"
    },
    {
        name: "Product 2",
        description: "This is product 2.",
        price: 29.99,
        imageUrl: "https://example.com/product2.jpg",
        link: "https://amazon.com/product2"
    },
    // ... more products ...
];

function findProducts(keyword) {
    // Filter the products array to find products that match the keyword
    return products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
}

export { findProducts };
