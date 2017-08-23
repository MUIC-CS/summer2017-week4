from flask import Flask, jsonify, request
import random

app = Flask('stalker')


@app.route("/lucky-lotto")
def lucky_lotto():
    number = random.randint(0, 99)
    return jsonify({"number": number})


@app.route("/yes-no")
def yes_no():
    question = request.args.get('question')
    answer = 'yes' if hash(question) % 2 else 'no'
    return jsonify({"answer": answer})


@app.route('/versus', methods=['POST'])
def versus():
    player1 = request.json['player1']
    player2 = request.json['player2']
    score1 = hash(player1)
    score2 = hash(player2)
    winner, loser = (player1, player2) if score1 > score2 else (player2, player1)
    return jsonify({
        "winner": {"name": winner, "score": hash(winner)},
        "loser": {"name": loser, "score": hash(loser)},
    })

prey_db = {
    'Nice': {"lat": 13.7963, "lng": 100.5018},
    'New': {"lat": 13.7663, "lng": 100.5018},
    'Bossy': {"lat": 13.7663, "lng": 100.7018},
    'Bright':  {"lat": 13.5663, "lng": 100.7018}
}


@app.route('/prey-list')
def prey_list():
    return jsonify(prey_db)


@app.route('/add-prey', methods=["POST"])
def add_prey():
    name = request.json['name']
    lat = request.json['lat']
    lng = request.json['lng']
    prey_db[name] = {"lat": lat, "lng": lng}
    return jsonify({"status": "OK"})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
