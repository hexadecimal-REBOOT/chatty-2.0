let previouslyRecommended = [];

window.onload = function() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'chatty-d2053.apps.googleusercontent.com',
        });
    });
};

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

function recommendProduct(userMessage) {
    let lowerCaseMessage = userMessage.toLowerCase();

    let maxKeywordMatches = 0;
    let bestMatchProduct = null;

    for (let product of productCatalog) {
        if (previouslyRecommended.includes(product)) {
            continue;
        }

        let keywordMatches = 0;

        let categories = product.category.split(" ");
        let categoryMatch = categories.some(category => lowerCaseMessage.includes(category.trim().toLowerCase()));
        if (categoryMatch) keywordMatches++;

        for (let keyword of product.keywords) {
            if (lowerCaseMessage.includes(keyword.toLowerCase())) keywordMatches++;
        }

        if (keywordMatches > maxKeywordMatches) {
            maxKeywordMatches = keywordMatches;
            bestMatchProduct = product;
        }
    }

    if (bestMatchProduct) {
        previouslyRecommended.push(bestMatchProduct);
        if (previouslyRecommended.length > 5) previouslyRecommended.shift();
        return bestMatchProduct;
    } 

    let randomIndex = Math.floor(Math.random() * productCatalog.length);
    return productCatalog[randomIndex];
}

async function chatGptQuery(query) {
    conversationHistory.push({role: "user", content: query});
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo', // Specify the model
            messages: conversationHistory
        })
    });
    const data = await response.json();
    return data.choices && data.choices.length > 0 ? data.choices[0].message.content : '';
}

async function sendMessage() {
    const userText = document.getElementById('messageInput').value;
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML += `<div class="chat-bubble user"><p>${userText}</p></div>`;
    chatWindow.innerHTML += '<div class="jumping-dots-loader"><span></span> <span></span> <span></span></div>';
    
    const aiResponse = await chatGptQuery(userText);
    chatWindow.removeChild(document.querySelector('.jumping-dots-loader'));
    chatWindow.innerHTML += `<div class="chat-bubble ai"><p>${aiResponse}</p></div>`;

    let recommendedProduct = recommendProduct(userText);
    if(recommendedProduct) {
        chatWindow.innerHTML += `<div class="chat-bubble ai"><p>I recommend checking out this product: 
        <a href="${recommendedProduct.link}" target="_blank"><img src="${recommendedProduct.imgSrc}">${recommendedProduct.name}</a></p></div>`;
    }

    chatWindow.scrollTop = chatWindow.scrollHeight;
    document.getElementById('messageInput').value = '';
}

// Adding event listener for Send Button
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Adding event listener for Enter key
document.getElementById('messageInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevents the default action of the enter key (creating a new line)
        sendMessage();
    }
});
