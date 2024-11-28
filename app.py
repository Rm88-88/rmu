from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "ברוכים הבאים לאתר בדיקת סת""ם!"

@app.route('/analyze', methods=['POST'])
def analyze():
    return jsonify({"message": "תמונה נבדקה"})

@app.route('/manual-check', methods=['POST'])
def manual_check():
    return jsonify({"message": "תמונה נשלחה למומחה"})

if __name__ == '__main__':
    app.run(debug=True)
