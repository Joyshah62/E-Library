from flask import Flask, request, jsonify, make_response
from flask_cors import CORS  
import json
from datetime import datetime
import hashlib

app = Flask(__name__)
CORS(app)

# Load user data from JSON file
def load_users():
    try:
        with open('users.json', 'r') as file:
            users = json.load(file)
    except FileNotFoundError:
        users = {}
    return users


# Save user data to JSON file
def save_users(users):
    with open('users.json', 'w') as file:
        json.dump(users, file)


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    image_sequence = data.get('image_sequence')

    if not username or not image_sequence:
        return make_response(jsonify({'error': 'Username and image sequence are required'}), 400)

    users = load_users()

    if username in users:
        return make_response(jsonify({'error': 'Username already exists'}), 409)

    print(image_sequence)

    # Hash the image sequence for security
    hashed_sequence = hashlib.sha256(image_sequence.encode()).hexdigest()

    # Get the current timestamp
    created_at = datetime.now().isoformat()

    users = load_users()
    users[username] = {
        "image_sequence": hashed_sequence,
        "created_at": created_at
    }
    save_users(users)

    return jsonify({'message': 'User registered successfully'})



@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    image_sequence = data.get('image_sequence')

    if not username or not image_sequence:
        return make_response(jsonify({'error': 'Username and image sequence are required'}), 400)

    users = load_users()
    stored_data = users.get(username)

    if not stored_data:
        return make_response(jsonify({'error': 'User not found'}), 404)

    stored_sequence = stored_data.get('image_sequence')

    # Hash the user-provided image sequence and compare it with the stored hash
    hashed_input_sequence = hashlib.sha256(image_sequence.encode()).hexdigest()

    if hashed_input_sequence == stored_sequence:
        return jsonify({'message': 'Login successful'})
    else:
        return make_response(jsonify({'error': 'Invalid credentials'}), 401)



if __name__ == '__main__':
    app.run(debug=True, port=5001)
