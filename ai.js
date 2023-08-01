// Import the necessary modules
import { recommendProducts } from './productRecommendations.js';

let conversationHistory = [];

async function sendMessage() {
    const userText = document.getElementById('userText').value;
    const chatWindow = document.getElementById('chatWindow');
    
    chatWindow.innerHTML += `<div>User: ${userText}</div>`;
    
    const aiResponse = await chatGptQuery(userText);
    
    // Replace 'AI' with 'Chatty'
    chatWindow.innerHTML += `<div>Chatty: ${aiResponse}</div>`;
    
    if (aiResponse.includes('recommend')) {
        const productName = extractProductName(aiResponse);
        const recommendedProducts = await recommendProducts(productName);
        displayProductRecommendations(recommendedProducts);
    }
    
    chatWindow.scrollTop = chatWindow.scrollHeight;
    document.getElementById('userText').value = '';
}

async function chatGptQuery(query) {
    conversationHistory.push({role: "user", content: query});
    
    // ... Code to send the query to the GPT-3 API and return the response ...
}

function displayProductRecommendations(products) {
    // ... Code to display the recommended products in the chat window ...
}

function extractProductName(aiResponse) {
    // ... Code to extract the product name from the AI response ...
}

export { sendMessage };
