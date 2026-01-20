from flask import Flask, render_template, request, jsonify
from chat import get_response

app = Flask(__name__)

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/")
def dashboard():
    return render_template("dashboard.html")

@app.route("/chat")
def chat_page():
    return render_template("chat.html")

@app.route("/scanner")
def scanner_page():
    return render_template("scanner.html")

@app.route("/outputs")
def outputs_page():
    return render_template("outputs.html")

@app.route("/api/chat", methods=["POST"])
def api_chat():
    data = request.get_json()
    msg = data.get("message", "").strip()
    return jsonify(get_response(msg))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
