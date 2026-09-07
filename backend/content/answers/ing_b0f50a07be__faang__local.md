---
qid: ing_b0f50a07be__faang__local
question: 'Explain: Uber — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 1024
total_tokens: 1256
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:34:45-05:00'
sources: []
---

**Clarify**  
You’re asking me to walk through a *machine‑learning* problem that could appear on an Uber FAANG interview, showing how I’d solve it from scratch. I’ll assume the interviewer wants a full stack answer: understand the data, build a model, evaluate it, and discuss deployment concerns.

---

### 1️⃣ Approach  
| Step | What to do | Why |
|------|------------|-----|
| **Problem restatement** | “Predict whether a driver will cancel a ride within 5 min of assignment.” | Clarifies target & constraints. |
| **Data audit** | Inspect columns (driver ID, pickup time, traffic, weather, fare, etc.), missingness, and class imbalance. | Ensures we’re not chasing garbage. |
| **Feature engineering** | Encode categorical vars, create lag features (last 3 rides), interaction terms (weather × time‑of‑day). | Boosts predictive power. |
| **Model choice** | Start with a baseline logistic regression → tree‑based ensembles (XGBoost/LightGBM) for non‑linearities. | Balances interpretability & performance. |
| **Evaluation** | Use stratified 5‑fold CV, metrics: AUC‑ROC, precision@k, and calibration curves. | Captures both ranking & probability quality. |
| **Hyper‑parameter tuning** | Bayesian optimisation (Optuna) over tree depth, learning rate, L2 regularisation. | Efficient search on a high‑dimensional space. |
| **Deployment concerns** | Feature drift monitoring, latency < 50 ms, batch inference for daily re‑scoring, A/B test with control group. | Aligns ML life‑cycle with Uber’s production pipeline. |

---

### 2️⃣ Depth (Core Code Skeleton)

```python
import pandas as pd
from sklearn.model_selection import StratifiedKFold, train_test_split
from sklearn.preprocessing import OneHotEncoder
from xgboost import XGBClassifier
from sklearn.metrics import roc_auc_score

# Load & clean
df = pd.read_parquet('rides.parquet')
df.dropna(subset=['cancelled'], inplace=True)

# Feature engineering
df['hour'] = df['pickup_time'].dt.hour
cat_feats = ['driver_id', 'vehicle_type']
num_feats = [c for c in df.columns if c not in cat_feats + ['cancelled']]
enc = OneHotEncoder(sparse=False, handle_unknown='ignore')
X_cat = enc.fit_transform(df[cat_feats])
X_num = df[num_feats].values
X = np.hstack([X_num, X_cat])
y = df['cancelled'].values

# CV & training
kf = StratifiedKFold(n_splits=5)
auc_scores = []
for train_idx, val_idx in kf.split(X, y):
    clf = XGBClassifier(
        n_estimators=300,
        max_depth=6,
        learning_rate=0.1,
        subsample=0.8,
        colsample_bytree=0.8,
        objective='binary:logistic',
        eval_metric='auc'
    )
    clf.fit(X[train_idx], y[train_idx])
    preds = clf.predict_proba(X[val_idx])[:, 1]
    auc_scores.append(roc_auc_score(y[val_idx], preds))

print(f'Avg AUC: {np.mean(auc_scores):.4f}')
```

*Complexity*: Training is **O(n log n)** per tree; inference is **O(#trees × #features)**, acceptable for 50 ms latency on edge devices.

---

### 3️⃣ Edge Cases  
| Scenario | What breaks? | Test |
|----------|--------------|------|
| All drivers have identical features | Model collapses to random noise | Simulate a homogeneous driver cohort. |
| Sudden surge in cancellations (concept drift) | Prediction accuracy drops | Inject time‑shifted data, monitor AUC degradation. |
| Missing categorical values | OneHotEncoder throws | Use `handle_unknown='ignore'`. |
| Imbalanced classes (>95 % no cancel) | Precision suffers | Use class weights or focal loss. |

---

### 4️⃣ Optimize & Communicate  
- **Feature selection**: Recursive Feature Elimination to cut dimensionality, reducing inference time by ~30 %.  
- **Model distillation**: Train a lightweight logistic model on the XGBoost predictions for edge deployment.  
- **Explainability**: SHAP plots reveal key drivers (e.g., heavy traffic + night shift).  

When presenting, I’d start with the business goal, show the data pipeline diagram, then walk through code snippets, and finish by discussing monitoring dashboards—exactly the narrative FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
