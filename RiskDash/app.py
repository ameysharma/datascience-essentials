from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy risk data
risk_data = [
    {"id": 1, "metric": "VaR", "value": 12000, "category": "Market Risk"},
    {"id": 2, "metric": "ES", "value": 14000, "category": "Credit Risk"},
    {"id": 3, "metric": "Stress Test", "value": 10000, "category": "Operational Risk"}
]

@app.route('/api/risk-metrics', methods=['GET'])
def get_risk_metrics():
    return jsonify(risk_data)

@app.route('/', methods=['GET'])
def index():
    return "Api Working"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
