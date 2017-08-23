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


if __name__ == '__main__':
    app.run(debug=True)
