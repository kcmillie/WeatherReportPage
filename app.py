import os

# import pandas as pd
# import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, render_template, request
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
    """Return the homepage."""
    return render_template("index.html")


# @app.route("/zip", methods=['POST', 'GET'])
# def zip():
#     if request.method == "GET":
#         return
#     else:

#         newzip = zipcodesdb(ZIPCODE=zipvalue, SIGNUP_DATE=signupdate)

#         db.session.add(newzip)
#         db.session.commit()
#     return("")


if __name__ == "__main__":
    app.run()
