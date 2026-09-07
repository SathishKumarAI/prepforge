---
qid: ing_aa995b8c3b__faang__local
question: 'Explain: Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 519
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:09-05:00'
sources: []
---

**Model Selection Guide – AI**  
*(FAANG‑style interview answer)*  

---

### 1️⃣ Clarify  
*Problem:* We need a systematic way to pick the best ML model for a given task (e.g., classification, regression).  
*Assumptions to confirm:* data size & quality, feature types, target distribution, latency/throughput constraints, deployment environment, and evaluation metrics.  

### 2️⃣ Approach  
1. **Define objectives** – accuracy vs. interpretability vs. inference speed.  
2. **Pre‑process & explore** – handle missingness, scale features, detect class imbalance.  
3. **Baseline model** – simple logistic regression / linear regression.  
4. **Model family sweep** – tree‑based (RandomForest, XGBoost), kernel methods, neural nets.  
5. **Hyper‑parameter tuning** – grid/ random search + cross‑validation.  
6. **Evaluation & comparison** – use chosen metric; check calibration, fairness, and robustness.  
7. **Model selection criteria** – performance + cost (memory, latency).  

### 3️⃣ Depth  
- **Cross‑validation** (k‑fold or stratified) guards against overfitting.  
- **Regularization** (L1/L2 for linear models; dropout/weight decay for NN) balances bias–variance.  
- **Ensembling** (bagging, boosting, stacking) often yields marginal gains but adds inference cost.  
- Complexity: training time ∝ O(n·d·m) where *n* = samples, *d* = features, *m* = model size; inference ∝ O(d·k).  

### 4️⃣ Edge Cases  
- Extremely small data → prefer Bayesian or transfer‑learning.  
- Highly imbalanced classes → use focal loss or SMOTE.  
- Real‑time constraints → lean to linear models or distilled NNs.  

### 5️⃣ Optimize & Communicate  
Iterate: after each round, report validation curves and confusion matrices. Use SHAP/ LIME for interpretability if needed. Conclude with a trade‑off table (accuracy vs. latency vs. resource) so stakeholders can make an informed decision.  

*Result:* A reproducible pipeline that balances statistical performance with operational constraints—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
