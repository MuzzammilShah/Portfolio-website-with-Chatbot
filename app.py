from flask import Flask, render_template
from flask_compress import Compress

app = Flask(__name__)
Compress(app)  # Enable compression for responses


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=False)