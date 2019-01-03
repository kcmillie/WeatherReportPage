# import os

from flask import Flask, render_template

# from requests_html import HTMLSession

# import json

app = Flask(__name__)


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
