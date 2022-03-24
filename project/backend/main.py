from flask import Flask, request
import logging

app = Flask(__name__)
logger = logging.getLogger()


@app.route('/sendImage', methods=['POST'])
def hello_world():
    req = request.form.get()
    logger.debug(f'{req}___________________________________')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
