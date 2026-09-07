---
qid: ing_1035b1e75d__faang__local
question: 'Explain: Quick Glossary — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 441
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:56-05:00'
sources: []
---

**Quick Glossary – AI Coding Workflow (Neo Kim & Louis‑François Bouchard)**  

| Term | What it Means | Typical Tool/Stage |
|------|---------------|--------------------|
| **Data Ingestion** | Pulling raw data from sources (APIs, logs, sensors). | `pandas.read_csv`, Kafka streams |
| **Preprocessing** | Cleaning & transforming data: missing‑value imputation, scaling, tokenization. | Scikit‑learn `SimpleImputer`, `StandardScaler` |
| **Feature Engineering** | Creating domain‑specific attributes (e.g., TF‑IDF vectors, embeddings). | `sklearn.feature_extraction.text.TfidfVectorizer`, BERT encoder |
| **Model Selection** | Choosing an algorithm that fits the task: linear models, tree ensembles, neural nets. | XGBoost, LightGBM, PyTorch |
| **Training** | Optimizing model parameters on a training set using loss functions and back‑propagation. | `model.fit(X_train, y_train)` or custom loops in TensorFlow |
| **Evaluation** | Measuring performance with metrics (accuracy, F1, ROC‑AUC) on validation data. | Scikit‑learn `metrics`, cross‑validation |
| **Hyper‑parameter Tuning** | Systematic search over hyper‑parameters to improve generalization. | GridSearchCV, Optuna |
| **Deployment** | Packaging the model into a service (REST API, edge device). | FastAPI + ONNX, TensorFlow Lite |
| **Monitoring & Retraining** | Tracking drift and retraining when performance degrades. | Evidently, MLflow tracking |

### How It Fits Together
1. **Data → Preprocess → Features → Model**  
2. Train → Evaluate → Tune → Deploy → Monitor → Re‑train  

This pipeline ensures reproducibility, scalability, and continuous improvement—core principles highlighted by Neo Kim & Louis‑François Bouchard for robust AI engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
