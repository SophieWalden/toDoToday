import time
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
import pymongo

app = Flask(__name__)
CORS(app)

client = pymongo.MongoClient("mongodb+srv://testing_db:ToDoToday@todotoday.gqbomyx.mongodb.net/?retryWrites=true&w=majority")


""" Login Processes """

@app.route("/login/verifyPassword/", methods=["POST"])
@cross_origin()
def verifyPassword():
    """Given a username and password verifies if those are correct logins in the database"""
    username, password = request.json["username"], request.json["password"]
    correctPassword = getPassword(username)
    
    if password == correctPassword:
        return Response(status=200)

    return Response(status=401)

def getPassword(username):
    """Returns username from MongoDB database based on given username"""
    passwordCollection = client['user-data']["password"]
    correctPasswords = list(passwordCollection.find({"username": username}))

    # Password will be the first in the query if it is found else the list will be empty
    correctPassword = correctPasswords[0]["password"] if correctPasswords else None
    
    return correctPassword

@app.route("/login/createLogin/", methods=["POST"])
@cross_origin()
def postPassword():
    """Creates a new login in MongoDB with username and password given"""
    username, password = request.json["username"], request.json["password"]
    passwordCollection = client['user-data']["password"]

    # Username already exists
    if getPassword(username) != None:
        return Response(status=401)
    
    passwordCollection.insert_one({"username": username, "password": password})

    return Response(status=200)

def getUserData(email):
    """Returns user data from MongoDB database based on given email"""
    passwordCollection = client['user-data']["userProfile"]
    correctData = next(passwordCollection.find({"email": email}), None)

    return correctData


@app.route("/login/createUserData/", methods=["POST"])
@cross_origin()
def postUserData():
    """Creates a new entry for all of the users information"""
    name, email, password = request.json["name"], request.json["username"], request.json["password"]
    passwordCollection = client['user-data']["userProfile"]
    
    # email already exists
    if getUserData(email) != None:
        return Response(status=401)
    

    passwordCollection.insert_one({"name": name, "email": email, "password": password})

    return Response(status=200)


""" User Tasks """

@app.route("/tasks/updateTasks/", methods=["POST"])
@cross_origin()
def updateUserTasks():
    """Updates tasks stored in database based on user email"""
    taskCollection = client['user-data']["tasks"]
    tasks, email = request.json["tasks"], request.json["email"]

    
    # New User    
    if next(taskCollection.find({"email": email}), None) == None:
        taskCollection.insert_one({"email": email, "tasks": tasks})
        return Response(status=201)

    # Update Old Data
    taskCollection.update_one({"email": email}, {"$set": {"tasks": tasks}})
    return Response(status=201)

@app.route("/tasks/getTasks/<email>", methods=["GET"])
@cross_origin()
def getUserTasks(email):
    """Gets tasks from database based on user email"""
    taskCollection = client['user-data']["tasks"]
    task = next(taskCollection.find({"email": email}), None)

    return [] if task == None else task["tasks"]