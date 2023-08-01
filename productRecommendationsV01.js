import { findProducts } from './productsV01.js';
import { products } from './productsV01.js';
import { createProductLayout } from './productLayoutV01.js';

export function getRecommendedProducts(userText) {
    // This is a very basic example of how you might determine which products to recommend
    // In a real application, you'd likely want to use a more sophisticated method
    const recommendedProducts = products.filter(product => product.name.includes(userText));

    return recommendedProducts.map(product => createProductLayout(product)).join('');
}


export function fetchAffiliateProducts(productName) {
    // This function would connect to the Amazon Affiliate Products API and fetch data.
    // Since this isn't available yet, we'll use the findProducts function from products.js instead.
    return findProducts(productName);
}

export function displayProductRecommendations(products) {
    const chatWindow = document.getElementById('chatWindow');
    products.forEach(product => {
        chatWindow.innerHTML += `<div>
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <a href="${product.buyLink}">Buy Now</a>
        </div>`;
    });
}

export function extractProductName(aiResponse) {
    // This function would use some logic to extract a product name from the AI's response.
    // For now, it just returns the whole response.
    return aiResponse;
}
