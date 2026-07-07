import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split

FEATURES = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']


def load_data(filepath):
    """Load the raw crop recommendation dataset."""
    return pd.read_csv(filepath)


def encode_labels(df, label_col='label'):
    """Encode crop labels into integers. Returns encoded series and fitted encoder."""
    encoder = LabelEncoder()
    encoded = encoder.fit_transform(df[label_col])
    return encoded, encoder


def split_data(X, y, test_size=0.2, random_state=42):
    """Split features and target into train/test sets, stratified by label."""
    return train_test_split(X, y, test_size=test_size, random_state=random_state, stratify=y)


def scale_features(X_train, X_test):
    """Fit a StandardScaler on training data and transform both sets."""
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    return (
        pd.DataFrame(X_train_scaled, columns=X_train.columns),
        pd.DataFrame(X_test_scaled, columns=X_test.columns),
        scaler
    )


def preprocess_input(raw_input, scaler):
    """Scale a single raw input (dict or DataFrame) using an already-fitted scaler.
    Used by predict.py for live Flask requests."""
    input_df = pd.DataFrame([raw_input], columns=FEATURES)
    return scaler.transform(input_df)