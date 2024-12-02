```javascript
document.getElementById('login').addEventListener('click', function() {
    document.getElementById('user-area').style.display = 'block';
    document.getElementById('guest-area').style.display = 'none';
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
});

document.getElementById('back').addEventListener('click', function() {
    // Logic to go back one page
});
