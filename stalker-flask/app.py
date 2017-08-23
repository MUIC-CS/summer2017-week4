from flask import Flask, jsonify
import random

app = Flask('stalker')


@app.route("/lucky-lotto")
def lucky_lotto():
    number = random.randint(0, 99)
    return jsonify({"number": number})


if __name__ == '__main__':
    app.run(debug=True)
