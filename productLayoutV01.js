export function createProductLayout(product) {
    return `
        <div class="product">
            <img src="${product.imageURL}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <a href="${product.link}" target="_blank">Buy Now</a>
        </div>
    `;
}

export function generateProductLayout(product) {
    return `<div class="product">
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <a href="${product.buyLink}" class="product-buy-link">Buy Now</a>
    </div>`;
}
