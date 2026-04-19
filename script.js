let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    // Add item to cart
    cart.push({
        name: productName,
        price: price
    });
    
    // Update total
    cartTotal += price;
    
    // Show notification
    showNotification(`✅ ${productName} added to cart!`);
    
    // Log to console
    console.log(`Cart updated:`, cart);
    console.log(`Total: $${cartTotal.toFixed(2)}`);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initial message
console.log('Welcome to TechStore! Click Buy Now to add items to your cart.');
