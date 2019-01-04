import os

# import pandas as pd
# import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# import json

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL', '')\
    or "sqlite:///signups.db"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)
zipcodesdb = Base.classes.ZIPCODES


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/click")
def click():
    print("Someone Signed Up!")
    return jsonify({"success": True})


if __name__ == "__main__":
    app.run()
