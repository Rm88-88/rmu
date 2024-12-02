```javascript
document.getElementById('login').addEventListener('click', function() {
    document.getElementById('user-area').style.display = 'block';
    document.getElementById('guest-area').style.display = 'none';
    displayUserHistory();
});

document.getElementById('guest-login').addEventListener('click', function() {
    document.getElementById('guest-area').style.display = 'block';
    document.getElementById('user-area').style.display = 'none';
});

// Cookie notice
document.getElementById('accept-cookies').addEventListener('click', function() {
    document.getElementById('cookie-notice').style.display = 'none';
});

// Navigation
document.getElementById('home').addEventListener('click', function() {
    // Logic to go to home
    alert("חזרה לדף הבית");
});

document.getElementById('back').addEventListener('click', function() {
    // Logic to go back one page
    alert("חזרה לדף אחד אחורה");
});

// Display user history
function displayUserHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = ''; // Clear previous history
    const historyItems = ['ספר תורה', 'תפילין', 'מזוזות', 'נביאים', 'מגילות', 'קטורות']; // Example history items
    historyItems.forEach(item => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.innerText = item;
        historyDiv.appendChild(balloon);
    });
    historyDiv.style.display = 'block';
}

// Example function for uploading images
function uploadImage() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            // Handle the uploaded image (e.g., displaying it on the site)
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '100%'; // Adjust as needed
            document.body.appendChild(img); // Display uploaded image
        }
    };
    fileInput.click();
}

// Example functions for scanning and capturing images
function scanImage() {
    alert("סריקה - יש לחבר את הסורק ולבצע סריקה.");
    // Implement scanning functionality if applicable
}

function captureImage() {
    alert("צילום - יש להתחבר למצלמה ולבצע צילום.");
    // Implement capturing functionality if applicable
}

// Example function to handle new item creation
function createNewItem() {
    const itemName = prompt("בחר שם חדש:");
    if (itemName) {
        alert(`הפריט החדש בשם ${itemName} נוצר!`);
        // Add logic to save the new item
    }
}

// Add event listeners for buttons to handle image upload, scanning, and capturing
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const action = prompt("בחר פעולה: העלאת תמונה (1), סריקה (2), צילום (3)");
        if (action === '1') {
            uploadImage();
        } else if (action === '2') {
            scanImage();
        } else if (action === '3') {
            captureImage();
        }
    });
});
