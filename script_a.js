function analyzeImage() {
    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/analyze', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("תוצאה מהבדיקה האוטומטית:", data);
    })
    .catch(error => console.error("שגיאה:", error));
}

function sendForManualCheck() {
    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/manual-check', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("תוצאה מבדיקת המומחה:", data);
    })
    .catch(error => console.error("שגיאה:", error));
}