from flask import Flask, render_template, request
import sys
import os

# Allow importing from src/
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src'))

from predict import predict_crop, predict_all_crops

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        n = float(request.form['nitrogen'])
        p = float(request.form['phosphorous'])
        k = float(request.form['potassium'])
        temperature = float(request.form['temperature'])
        humidity = float(request.form['humidity'])
        ph = float(request.form['ph'])
        rainfall = float(request.form['rainfall'])

        crop, confidence = predict_crop(n, p, k, temperature, humidity, ph, rainfall)
        all_crops = predict_all_crops(n, p, k, temperature, humidity, ph, rainfall)

        low_confidence = confidence < 40

        return render_template(
            'result.html',
            crop=crop,
            confidence=confidence,
            all_crops=all_crops,
            low_confidence=low_confidence
        )

    except (ValueError, KeyError) as e:
        return render_template('index.html', error="Please enter valid numeric values for all fields.")


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5000)),
        debug=False
    )