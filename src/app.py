from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()

db = mysql.connector.connect(
    host=os.getenv("MYSQL_HOST"),
    user=os.getenv("MYSQL_USER"),
    password=os.getenv("MYSQL_PASSWORD"),
    database=os.getenv("MYSQL_DB")
)


@app.route('/submit_form', methods=['POST'])
def submit_form():
    try:
        data = request.json
        name = data['name']
        email = data['email']
        message = data['message']

        cursor = db.cursor()
        insert_query = "INSERT INTO messages (name, email, message) VALUES (%s, %s, %s)"
        values = (name, email, message)
        cursor.execute(insert_query, values)
        db.commit()

        return jsonify(message='Form submitted successfully!')
    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify(error='An error occurred while processing the form.')


@app.route('/get_messages', methods=['GET'])
def get_messages():
    try:
        cursor = db.cursor()
        select_query = "SELECT * FROM messages"
        cursor.execute(select_query)
        result = cursor.fetchall()

        messages = []
        for row in result:
            message = {
                'id': row[0],
                'name': row[1],
                'email': row[2],
                'message': row[3]
            }
            messages.append(message)

        return jsonify(messages)
    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify(error='An error occurred while retrieving the messages.')


if __name__ == '__main__':
    app.run()
