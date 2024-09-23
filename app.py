from flask import Flask, render_template
from flask_compress import Compress
from flask_talisman import Talisman

app = Flask(__name__)
Compress(app)  # Enable compression for responses

Talisman(app)  # Enable security headers

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=False)