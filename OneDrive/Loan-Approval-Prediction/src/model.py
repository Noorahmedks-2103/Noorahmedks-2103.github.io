import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pickle

# Load data
df = pd.read_csv("Loan_Approval.csv")

# Clean column names
df.columns = df.columns.str.strip()

# Handle missing values
df = df.replace("?", np.nan)
df = df.fillna(df.mode().iloc[0])

# Encoding
from sklearn.preprocessing import LabelEncoder
label = LabelEncoder()
df["loan_status"] = label.fit_transform(df["loan_status"])
df = pd.get_dummies(df, drop_first=True)

# Train/test split
X = df.drop("loan_status", axis=1)
y = df["loan_status"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train, y_train)
pred = model.predict(X_test)

# Print accuracy
print("Accuracy:", accuracy_score(y_test, pred))

# Save model
pickle.dump(model, open("loan_model.pkl", "wb"))
print("Model saved successfully!")
