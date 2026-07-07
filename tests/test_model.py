import sys
import os

sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src'))

from predict import predict_crop


def test_predict_returns_valid_crop():
    """Check that prediction returns a known crop name and a valid confidence score."""
    crop, confidence = predict_crop(90, 42, 43, 20.88, 82.00, 6.50, 202.94)

    valid_crops = [
        'apple', 'banana', 'blackgram', 'chickpea', 'coconut', 'coffee',
        'cotton', 'grapes', 'jute', 'kidneybeans', 'lentil', 'maize',
        'mango', 'mothbeans', 'mungbean', 'muskmelon', 'orange', 'papaya',
        'pigeonpeas', 'pomegranate', 'rice', 'watermelon'
    ]

    assert crop in valid_crops, f"Unexpected crop returned: {crop}"
    assert 0 <= confidence <= 100, f"Confidence out of range: {confidence}"


def test_predict_known_rice_sample():
    """This exact input is row 0 of the training data — should predict rice."""
    crop, confidence = predict_crop(90, 42, 43, 20.879744, 82.002744, 6.502985, 202.935536)
    assert crop == 'rice', f"Expected rice, got {crop}"


if __name__ == '__main__':
    test_predict_returns_valid_crop()
    test_predict_known_rice_sample()
    print("All tests passed.")