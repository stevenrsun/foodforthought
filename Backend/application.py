from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
 

header_text = """
    <html>\n<head> <title>EB Flask Test</title> </head>\n<body>"""
instructions = """
    <p>Endpoints:</p>\n
    <p>/diseases</p>\n
    <p>/food</p>\n
    <p>/restaurants</p>\n\n
    <p>for more information go to:  </p>\n
    <a href="https://documenter.getpostman.com/view/7931049/S1a5zQtg?version=latest">Postman</a>"""
home_link = '<p><a href="/">Back</a></p>\n'
footer_text = "</body>\n</html>"

application = Flask(__name__)
application.add_url_rule(
    "/", "index", (lambda: header_text + instructions + footer_text)
)
basedir = os.path.abspath(os.path.dirname(__file__))

application.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(
    basedir, "db.sqlite"
)
application.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(application)

ma = Marshmallow(application)


class Food(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    calories = db.Column(db.Integer)
    fat = db.Column(db.Integer)
    sodium = db.Column(db.Integer)
    protein = db.Column(db.Integer)

    def __init__(self, name, calories, fat, sodium, protein):
        self.name = name
        self.calories = calories
        self.fat = fat
        self.sodium = sodium
        self.protein = protein


class Foodformat(ma.Schema):
    class Meta:
        fields = ("id", "name", "calories", "fat", "sodium", "protein")


class Disease(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    frequency = db.Column(db.Integer)
    deaths = db.Column(db.Integer)
    cause = db.Column(db.String(100))
    symptom = db.Column(db.String(100))

    def __init__(self, name, frequency, deaths, cause, symptom):
        self.name = name
        self.frequency = frequency
        self.deaths = deaths
        self.cause = cause
        self.symptom = symptom


class Diseaseformat(ma.Schema):
    class Meta:
        fields = ("id", "name", "frequency", "deaths", "cause", "symptom")


class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    rating = db.Column(db.Integer)
    cuisine = db.Column(db.String(100))
    cost = db.Column(db.Integer)
    location = db.Column(db.String(100))

    def __init__(self, name, rating, cuisine, cost, location):
        self.name = name
        self.rating = rating
        self.cuisine = cuisine
        self.cost = cost
        self.location = location


class Restaurantformat(ma.Schema):
    class Meta:
        fields = ("id", "name", "rating", "cuisine", "cost", "location")


food_schema = Foodformat(strict=True)
disease_schema = Diseaseformat(strict=True)
restaurant_schema = Restaurantformat(strict=True)
foods_schema = Foodformat(many=True, strict=True)
diseases_schema = Diseaseformat(many=True, strict=True)
restaurants_schema = Restaurantformat(many=True, strict=True)


@application.route("/food", methods=["POST"])
def add_food():
    temp = request.get_json(force=True)
    name = temp.get("name")
    calories = temp.get("calories")
    fat = temp.get("fat")
    sodium = temp.get("sodium")
    protein = temp.get("protein")
    food = Food(name, calories, fat, sodium, protein)
    db.session.add(food)
    db.session.commit()
    return food_schema.jsonify(food)


@application.route("/disease", methods=["POST"])
def add_Disease():
    temp = request.get_json(force=True)
    name = temp.get("name")
    frequency = temp.get("frequency")
    cause = temp.get("cause")
    death = temp.get("deaths")
    symptom = temp.get("symptom")
    disease = Disease(name, frequency, death, cause, symptom)
    db.session.add(disease)
    db.session.commit()
    return disease_schema.jsonify(disease)


@application.route("/restaurant", methods=["POST"])
def add_restaurant():
    temp = request.get_json(force=True)
    name = temp.get("name")
    rating = temp.get("rating")
    cuisine = temp.get("cuisine")
    cost = temp.get("cost")
    location = temp.get("location")
    r = Restaurant(name, rating, cuisine, cost, location)
    db.session.add(r)
    db.session.commit()
    return restaurant_schema.jsonify(r)


@application.route("/food", methods=["GET"])
def get_products():
    result = foods_schema.dump(Food.query.all())
    return jsonify(result.data)


@application.route("/disease", methods=["GET"])
def get_diseases():
    result = diseases_schema.dump(Disease.query.all())
    return jsonify(result.data)


@application.route("/restaurant", methods=["GET"])
def get_restaurant():
    result = restaurants_schema.dump(Restaurant.query.all())
    return jsonify(result.data)


# Run Server
if __name__ == "__main__":
    application.run(debug=True)
