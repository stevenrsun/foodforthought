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
    <a href="https://documenter.getpostman.com/view/7969599/SVSEuWh2?version=latest">Postman</a>"""
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
    name = db.Column(db.String(100))
    calories = db.Column(db.Integer)
    fat = db.Column(db.Integer)
    sodium = db.Column(db.Integer)
    carbs = db.Column(db.Integer)
    protein = db.Column(db.Integer)
    restaurants = db.Column(db.String(300))
    diseases = db.Column(db.String(300))
    images = db.Column(db.String(300))
    categories = db.Column(db.String(300))

    def __init__(
        self,
        name,
        calories,
        fat,
        sodium,
        carbs,
        protein,
        restaurants,
        diseases,
        images,
        categories,
    ):
        self.name = name
        self.calories = calories
        self.fat = fat
        self.sodium = sodium
        self.protein = protein
        self.carbs = carbs
        self.restaurants = restaurants
        self.diseases = diseases
        self.images = images
        self.categories = categories


class Foodformat(ma.Schema):
    class Meta:
        fields = (
            "id",
            "name",
            "calories",
            "fat",
            "sodium",
            "carbs",
            "protein",
            "restaurants",
            "diseases",
            "images",
            "categories",
        )


class Disease(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    age = db.Column(db.String(100))
    frequency = db.Column(db.Integer)
    deaths = db.Column(db.Integer)
    cause = db.Column(db.String(100))
    symptom = db.Column(db.String(100))
    restaurants = db.Column(db.String(300))
    foods = db.Column(db.String(300))
    images = db.Column(db.String(300))
    categories = db.Column(db.String(300))

    def __init__(
        self,
        name,
        age,
        frequency,
        deaths,
        cause,
        symptom,
        restaurants,
        foods,
        images,
        categories,
    ):
        self.name = name
        self.age = age
        self.frequency = frequency
        self.deaths = deaths
        self.cause = cause
        self.symptom = symptom
        self.restaurants = restaurants
        self.foods = foods
        self.images = images
        self.categories = categories


class Diseaseformat(ma.Schema):
    class Meta:
        fields = (
            "id",
            "name",
            "age",
            "frequency",
            "deaths",
            "cause",
            "symptom",
            "restaurants",
            "foods",
            "images",
            "categories",
        )


class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    business_name = db.Column(db.String(100))
    review_count = db.Column(db.Integer)
    rating = db.Column(db.Float)
    category = db.Column(db.String(100))
    price_range = db.Column(db.String(100))
    address = db.Column(db.String(100))
    foods = db.Column(db.String(300))
    diseases = db.Column(db.String(300))
    images = db.Column(db.String(300))
    url = db.Column(db.String(300))

    def __init__(
        self,
        business_name,
        review_count,
        rating,
        category,
        price_range,
        address,
        foods,
        diseases,
        images,
        url,
    ):
        self.business_name = business_name
        self.review_count = review_count
        self.rating = rating
        self.category = category
        self.price_range = price_range
        self.address = address
        self.foods = foods
        self.diseases = diseases
        self.images = images
        self.url = url


class Restaurantformat(ma.Schema):
    class Meta:
        fields = (
            "id",
            "business_name",
            "review_count",
            "rating",
            "category",
            "price_range",
            "address",
            "foods",
            "diseases",
            "images",
            "url",
        )


food_schema = Foodformat(strict=True)
disease_schema = Diseaseformat(strict=True)
restaurant_schema = Restaurantformat(strict=True)
foods_schema = Foodformat(many=True, strict=True)
diseases_schema = Diseaseformat(many=True, strict=True)
restaurants_schema = Restaurantformat(many=True, strict=True)


@application.route("/search", methods=["POST"])
def search():

    d = diseases_schema.dump(Disease.query.all())
    f = foods_schema.dump(Food.query.all())
    r = restaurants_schema.dump(Restaurant.query.all())
    temp = request.get_json(force=True)
    outputf = []
    outputd = []
    outputr = []
    for x in temp:
        for y in d:
            for z in y:
                for k, v in z.items():
                    if x == k or x == v:
                        outputd.append(z)
                    elif isinstance(v, str) and x in v:
                        outputd.append(z)
        for y in f:
            for z in y:
                for k, v in z.items():
                    if x == k or x == v:
                        outputf.append(z)
                    elif isinstance(v, str) and x in v:
                        outputf.append(z)
        for y in r:
            for z in y:
                for k, v in z.items():
                    if x == k or x == v:
                        outputr.append(z)
                    elif isinstance(v, str) and x in v:
                        outputr.append(z)
    output = [outputf, outputd, outputr]
    return jsonify(output)


@application.route("/food", methods=["POST"])
def add_food():
    temp = request.get_json(force=True)
    name = temp.get("name")
    calories = temp.get("calories")
    fat = temp.get("fat")
    carbs = temp.get("carbs")
    sodium = temp.get("sodium")
    protein = temp.get("protein")
    restaurants = temp.get("restaurants")
    diseases = temp.get("diseases")
    images = temp.get("images")
    category = temp.get("categories")
    food = Food(
        name,
        calories,
        fat,
        sodium,
        carbs,
        protein,
        restaurants,
        diseases,
        images,
        category,
    )
    db.session.add(food)
    db.session.commit()
    return food_schema.jsonify(food)


@application.route("/disease", methods=["POST"])
def add_Disease():
    temp = request.get_json(force=True)
    name = temp.get("name")
    frequency = temp.get("frequency")
    cause = temp.get("cause")
    deaths = temp.get("deaths")
    category = temp.get("categories")
    symptom = temp.get("symptom")
    restaurants = temp.get("restaurants")
    foods = temp.get("foods")
    age = temp.get("age")
    images = temp.get("images")
    disease = Disease(
        name,
        age,
        frequency,
        deaths,
        cause,
        symptom,
        restaurants,
        foods,
        images,
        category,
    )
    db.session.add(disease)
    db.session.commit()
    return disease_schema.jsonify(disease)


@application.route("/restaurant", methods=["POST"])
def add_restaurant():
    temp = request.get_json(force=True)
    business_name = temp.get("business_name")
    review_count = temp.get("review_count")
    rating = temp.get("rating")
    category = temp.get("category")
    price_range = temp.get("price_range")
    address = temp.get("address")
    foods = temp.get("foods")
    diseases = temp.get("diseases")
    images = temp.get("images")
    url = temp.get("url")
    r = Restaurant(
        business_name,
        review_count,
        rating,
        category,
        price_range,
        address,
        foods,
        diseases,
        images,
        url,
    )
    db.session.add(r)
    db.session.commit()
    return restaurant_schema.jsonify(r)


@application.route("/food", methods=["GET"])
def get_foods():
    order = request.args.get("order_by")
    if order == None:
        result = foods_schema.dump(Food.query.all())
    else:
        result = foods_schema.dump(Food.query.order_by(order))
    return jsonify(result.data)


@application.route("/disease", methods=["GET"])
def get_diseases():
    order = request.args.get("order_by")
    if order == None:
        result = diseases_schema.dump(Disease.query.all())
    else:
        result = diseases_schema.dump(Disease.query.order_by(order))
    return jsonify(result.data)


@application.route("/restaurant", methods=["GET"])
def get_restaurant():
    order = request.args.get("order_by")
    if order == None:
        result = restaurants_schema.dump(Restaurant.query.all())
    else:
        result = restaurants_schema.dump(Restaurant.query.order_by(order))
    return jsonify(result.data)


@application.route("/food/<id>", methods=["DELETE"])
def food_delete(id):
    temp = Food.query.get(id)
    db.session.delete(temp)
    db.session.commit()
    return food_schema.jsonify(temp)


@application.route("/disease/<id>", methods=["DELETE"])
def disease_delete(id):
    temp = Disease.query.get(id)
    db.session.delete(temp)
    db.session.commit()
    return disease_schema.jsonify(temp)


@application.route("/restaurant/<id>", methods=["DELETE"])
def restaurant_delete(id):
    temp = Restaurant.query.get(id)
    db.session.delete(temp)
    db.session.commit()
    return restaurant_schema.jsonify(temp)


# Run Server
if __name__ == "__main__":
    application.run(debug=True)
