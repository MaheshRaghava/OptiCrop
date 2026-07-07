import os

FEATURES = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']


def get_models_dir():
    """Returns the absolute path to the models/ directory, regardless of caller's working directory."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(base_dir, '..', 'models')


def get_data_dir(subfolder='raw'):
    """Returns the absolute path to a data subfolder (raw, processed, external)."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(base_dir, '..', 'data', subfolder)