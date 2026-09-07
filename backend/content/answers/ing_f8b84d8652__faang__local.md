---
qid: ing_f8b84d8652__faang__local
question: 'Explain: FAANG / MAANG+ Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 609
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:12-05:00'
sources: []
---

**FAANG/MAANG+ ML‑Coding Interview Prep**

1. **Clarify**  
   *Restate the ask:* “We need to design a small ML pipeline that can be coded in ~30 min, with a focus on algorithmic thinking.”  
   *Assumptions to confirm:* dataset size (≤10⁵ rows), features are numeric, target is binary, we can use standard libraries (NumPy/Pandas/Scikit‑learn) but no heavy GPU work.

2. **Approach**  
   - Load & inspect data → handle missing values.  
   - Feature engineering: scaling + interaction terms.  
   - Split train/test (80/20).  
   - Train a lightweight model (LogisticRegression or GradientBoostingClassifier).  
   - Evaluate with ROC‑AUC, print confusion matrix.  
   - Wrap into a `predict` function for production.

3. **Depth**  
   ```python
   import pandas as pd, numpy as np
   from sklearn.model_selection import train_test_split
   from sklearn.preprocessing import StandardScaler
   from sklearn.metrics import roc_auc_score, confusion_matrix
   from sklearn.linear_model import LogisticRegression

   def build_and_evaluate(df: pd.DataFrame, target: str):
       X = df.drop(columns=[target]).fillna(0)
       y = df[target]
       X_train, X_test, y_train, y_test = train_test_split(
           X, y, test_size=0.2, stratify=y, random_state=42)

       scaler = StandardScaler()
       X_train = scaler.fit_transform(X_train)
       X_test  = scaler.transform(X_test)

       model = LogisticRegression(max_iter=200)
       model.fit(X_train, y_train)

       probs = model.predict_proba(X_test)[:,1]
       print("ROC‑AUC:", roc_auc_score(y_test, probs))
       print("Confusion matrix:\n", confusion_matrix(y_test,
                                                      (probs>0.5).astype(int)))
   ```
   *Complexity:* O(n log k) for training, linear memory.

4. **Edge Cases**  
   - All‑zero features → `StandardScaler` fails; drop columns with zero variance.  
   - Imbalanced classes → use class_weight or SMOTE.  
   - Non‑numeric data → encode with OneHotEncoder.

5. **Optimize & Communicate**  
   *Improvements:* Replace LogisticRegression with XGBoost for higher accuracy if time permits.  
   *Narrative:* “I first ensured data cleanliness, then scaled to avoid feature dominance, chose a linear model for speed, and validated with AUC to capture ranking quality.” This demonstrates end‑to‑end ML thinking while staying within interview constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
