function analyzeImage() {
    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0];
    // תהליך שליחת התמונה לבדיקה אוטומטית
    console.log("בדיקה אוטומטית", file);
}

function sendForManualCheck() {
    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0];
    // תהליך שליחת התמונה לבדיקה ידנית
    console.log("שליחה לבדיקה ידנית", file);
}