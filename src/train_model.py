import pandas as pd
import joblib
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split

FEATURES = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']


def load_data(filepath):
    return pd.read_csv(filepath)


def train():
    # Load raw data
    df = load_data('../data/raw/Crop_recommendation.csv')

    # Encode labels
    label_encoder = LabelEncoder()
    df['label_encoded'] = label_encoder.fit_transform(df['label'])

    X = df[FEATURES]
    y = df['label_encoded']

    # Split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Scale
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Train final model
    model = RandomForestClassifier(random_state=42)
    model.fit(X_train_scaled, y_train)

    # Evaluate
    accuracy = model.score(X_test_scaled, y_test)
    print(f"Final model test accuracy: {accuracy:.4f}")

    # Save everything needed for prediction
    os.makedirs('../models', exist_ok=True)
    joblib.dump(model, '../models/crop_recommendation_model.pkl')
    joblib.dump(scaler, '../models/scaler.pkl')
    joblib.dump(label_encoder, '../models/label_encoder.pkl')

    print("Model, scaler, and label encoder saved to models/")


if __name__ == '__main__':
    train()