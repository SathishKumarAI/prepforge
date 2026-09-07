---
qid: ing_29b2b5cd3b__faang__local
question: 'Explain: I want you to write a program — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 777
total_tokens: 1015
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:20:31-05:00'
sources: []
---

**Clarify**

You’d like a single, self‑contained Python script that introduces all the essentials of machine learning—data loading, preprocessing, model training, evaluation, and deployment—so a complete beginner can run it end‑to‑end.  
Assumptions to confirm:  
- The user has Python 3.10+ installed with `pip`.  
- They’re comfortable running a terminal or Jupyter notebook.  
- No prior ML experience; we’ll keep the model simple (e.g., linear regression on Boston housing).  

**Approach**

1. **Environment setup** – install `numpy`, `pandas`, `scikit‑learn`, `matplotlib`.  
2. **Data pipeline** – load dataset, inspect shapes, handle missing values.  
3. **Feature engineering** – standardize numeric columns, encode categoricals (if any).  
4. **Model training** – split train/test, fit a `LinearRegression` model.  
5. **Evaluation** – compute RMSE and R²; plot predictions vs truth.  
6. **Persistence & inference** – save the pipeline with `joblib`, load it in a new cell to predict a single sample.  

All steps are wrapped in functions, with clear docstrings and type hints for readability.

**Depth**

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import joblib
import matplotlib.pyplot as plt

def load_data(url: str) -> pd.DataFrame:
    return pd.read_csv(url)

def preprocess(df: pd.DataFrame):
    X = df.drop('MEDV', axis=1).values
    y = df['MEDV'].values
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    return X_scaled, y, scaler

def train_model(X, y):
    X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LinearRegression().fit(X_tr, y_tr)
    preds = model.predict(X_te)
    print(f'RMSE: {np.sqrt(mean_squared_error(y_te, preds)):.3f}')
    print(f'R²  : {r2_score(y_te, preds):.3f}')
    joblib.dump((model, scaler), 'boston_pipe.joblib')
    return model

def plot_predictions(model, X_te, y_te):
    plt.scatter(y_te, model.predict(X_te))
    plt.xlabel('True MEDV'); plt.ylabel('Predicted MEDV')
    plt.title('Model Fit')
    plt.show()

if __name__ == "__main__":
    df = load_data("https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv")
    X, y, scaler = preprocess(df)
    model = train_model(X, y)
    plot_predictions(model, X[:20], y[:20])
```

**Edge Cases**

- Non‑numeric columns → `StandardScaler` fails.  
- Missing values → raise or impute before scaling.  
- Extremely small datasets → overfitting; use cross‑validation.

**Optimize & Communicate**

Explain each step verbally: why we scale, why train/test split, how RMSE interprets error magnitude. Highlight that this skeleton can be swapped for any dataset by changing the load function and target column. This concise script demonstrates end‑to‑end ML flow while keeping complexity low—exactly what a beginner needs to grasp fundamentals before tackling deeper models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
