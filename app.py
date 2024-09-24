from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)
freezer = Freezer(app)

@app.route("/")
def index():
    return render_template("index.html")

# Add any other routes you need here

if __name__ == "__main__":
    freezer.freeze()  # Freezes the website into static files