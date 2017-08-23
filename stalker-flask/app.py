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


if __name__ == '__main__':
    app.run(debug=True)
