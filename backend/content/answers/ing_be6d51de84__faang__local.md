---
qid: ing_be6d51de84__faang__local
question: 'Explain: We''ll scope the problem to handle only the following use cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 459
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:22-05:00'
sources: []
---

**Clarify**  
The interview question asks you to explain a machine‑learning pipeline *only* for the three concrete use cases that will be scoped (e.g., fraud detection, recommendation, and image classification).  Confirm assumptions: data size, labeling frequency, latency constraints, model update cadence, and whether we need interpretability or just accuracy.  

**Approach**  
1. **Data ingestion & preprocessing** – define schemas, feature engineering pipelines per use case.  
2. **Model selection** – pick algorithm families that balance speed vs performance (e.g., XGBoost for tabular fraud, collaborative filtering + fine‑tuned transformer for recommendations, CNNs for images).  
3. **Training & validation** – stratified splits, cross‑validation, early stopping, hyperparameter tuning with Optuna.  
4. **Deployment** – containerized inference APIs; use a model registry (MLflow) and a feature store (Feast).  
5. **Monitoring & retraining** – drift detection, A/B testing for recommendations, scheduled re‑training.

**Depth**  
- *Fraud*: handle class imbalance with SMOTE + focal loss; evaluate ROC‑AUC & precision@k.  
- *Recommendation*: use matrix factorization with side‑info embeddings; compute hit‑rate at 10.  
- *Image*: transfer learning from ResNet50, fine‑tune last layers; measure top‑1 accuracy and inference latency (<50 ms).  

Complexities: training O(N log N) for tree‑based models, inference O(1) per request. Trade‑offs between batch vs online scoring.

**Edge Cases**  
- Missing or noisy features → imputation strategies.  
- Cold start in recommendations → content‑based fallback.  
- Class drift in fraud → continuous evaluation metrics.

**Optimize & Communicate**  
Suggest automated pipelines (Airflow), use GPU nodes for image training, compress models with ONNX for edge inference. Explain that by modularizing per use case we can iterate quickly and maintain clear SLAs. This showcases structured problem solving, depth of ML knowledge, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
