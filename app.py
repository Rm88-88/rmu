from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    # תהליך ניתוח התמונה
    return jsonify({"message": "תמונה נבדקה"})

@app.route('/manual-check', methods=['POST'])
def manual_check():
    # תהליך שליחה לבדיקה ידנית
    return jsonify({"message": "תמונה נשלחה למומחה"})

if __name__ == '__main__':
    app.run(debug=True) 