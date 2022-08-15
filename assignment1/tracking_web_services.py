
from flask import Flask,request,send_file, Response
from flask_cors import cross_origin,CORS
from flask_api import status
import json
import logging
import os

app = Flask(__name__)
CORS(app)
logging.basicConfig(filename='record.log', level=logging.DEBUG, format=f'%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')


@app.route('/ping', methods=["POST"])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def get_ping():
    try:    
        logging.info('/ping API called')
        json_request = request.get_json()
        logging.info('Json Received : ' + json)
        if json_request is None:
            file_name = None
            logging.info('Response 503')
            return Response("{'text':'Failed'}", status=status.HTTP_503_SERVICE_UNAVAILABLE, mimetype='application/json')
        else:
            file_name = json_request['file_name']
        if os.path.exists(file_name):
            logging.info('Response 200')
            return Response("{'text':'ok'}", status=status.HTTP_200_OK, mimetype='application/json')
        
        logging.info('Response 503')
        return Response("{'text':'Failed'}", status=status.HTTP_503_SERVICE_UNAVAILABLE, mimetype='application/json')
    except Exception as e:
        logging.error(e)
        logging.info('Response 503')
        return Response("{'text':'Failed'}", status=status.HTTP_503_SERVICE_UNAVAILABLE, mimetype='application/json')


@app.route('/img', methods=["GET"])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def get_img():
    try:
        logging.info('/img API called')
        return send_file('images.jpeg', mimetype='image/gif')
    except Exception as e:
        
        logging.error(e)
        logging.info('Response 503')
        return status.HTTP_503_SERVICE_UNAVAILABLE

if __name__ == "__main__":
    app.run()

