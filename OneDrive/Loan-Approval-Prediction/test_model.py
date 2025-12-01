import pickle
import pandas as pd

model = pickle.load(open("loan_model.pkl", "rb"))

sample = {
    "no_of_dependents": 1,
    "education": "Graduate",
    "self_employed": "No",
    "income_annum": 400000,
    "loan_amount": 200000,
    "loan_term": 12,
    "cibil_score": 750,
    "residential_assets_value": 500000,
    "commercial_assets_value": 0,
    "luxury_assets_value": 0,
    "bank_asset_value": 100000
}

df = pd.DataFrame([sample])
df = pd.get_dummies(df, drop_first=True)

print(model.predict(df))
