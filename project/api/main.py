import os
from flask import Flask, flash, request, json, redirect, url_for
import cv2
import numpy as np
import logging


UPLOAD_FOLDER = '/app/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
logger = logging.getLogger()


def allowed_file(filename):
    file_extend = filename.rsplit('.', 1)[1].lower()
    return '.' in filename and \
           file_extend in ALLOWED_EXTENSIONS


@app.route('/image', methods=['GET', 'POST'])
def negative_image():

    if request.method == 'POST':
        # check if the post request has the file part

        if 'file' not in request.files:
            logger.error(request.files)
            logger.error('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            logger.error('No selected file')
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            logger.error(app.config)
            logger.error(filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('negative_image', name=filename))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''
    # req = request.files
    # logger.debug(f'{req}___________________________________')
    # return redirect(url_for('negative_image', name='user'))


if __name__ == '__main__':
    app.secret_key = 'super secret key'
    # app.config['SESSION_TYPE'] = 'redis'
    # app = create_app()
    app.run(host='0.0.0.0')
