import joblib
import pandas as pd
import os

# Resolve paths relative to this file's location, so it works regardless of where it's called from
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, '..', 'models')

FEATURES = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']

# Load model, scaler, and label encoder once when this module is imported
model = joblib.load(os.path.join(MODELS_DIR, 'crop_recommendation_model.pkl'))
scaler = joblib.load(os.path.join(MODELS_DIR, 'scaler.pkl'))
label_encoder = joblib.load(os.path.join(MODELS_DIR, 'label_encoder.pkl'))


def predict_crop(n, p, k, temperature, humidity, ph, rainfall):
    """
    Takes raw soil/environment readings and returns the recommended crop name
    along with the model's confidence score.
    """
    input_df = pd.DataFrame(
        [[n, p, k, temperature, humidity, ph, rainfall]],
        columns=FEATURES
    )

    input_scaled = scaler.transform(input_df)

    prediction_encoded = model.predict(input_scaled)[0]
    prediction_proba = model.predict_proba(input_scaled)[0]

    crop_name = label_encoder.inverse_transform([prediction_encoded])[0]
    confidence = prediction_proba[prediction_encoded]

    return crop_name, round(confidence * 100, 2)


def predict_all_crops(n, p, k, temperature, humidity, ph, rainfall):
    """
    Returns all 22 crops ranked by confidence, instead of just the top pick.
    Useful for showing farmers alternative options.
    """
    input_df = pd.DataFrame(
        [[n, p, k, temperature, humidity, ph, rainfall]],
        columns=FEATURES
    )

    input_scaled = scaler.transform(input_df)
    probabilities = model.predict_proba(input_scaled)[0]

    crop_names = label_encoder.inverse_transform(range(len(probabilities)))

    results = [
        {"crop": crop, "confidence": round(prob * 100, 2)}
        for crop, prob in zip(crop_names, probabilities)
    ]

    # Sort by confidence, highest first
    results.sort(key=lambda x: x["confidence"], reverse=True)

    return results


if __name__ == '__main__':
    # Quick manual test — using the first row of your dataset (N=90, P=42, K=43...) which should predict "rice"
    crop, confidence = predict_crop(90, 42, 43, 20.879744, 82.002744, 6.502985, 202.935536)
    print(f"Recommended crop: {crop} (confidence: {confidence}%)")