---
qid: ing_9ddd143913__star__local
question: 'Explain: Data Characteristics — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 379
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:59-05:00'
sources: []
---

**Situation**  
When I was interviewing for a senior ML engineer role at a fintech startup, the hiring team asked me to design an end‑to‑end fraud detection pipeline. They gave me a dataset of ~2 M transaction records with missing timestamps, noisy merchant IDs, and class imbalance (only 0.3% fraud).  

**Task**  
I had to explain how I would pre‑process the data so that the downstream model could train efficiently, generalize well, and meet a latency target of <5 ms per inference.

**Action**  
First, I performed an exploratory analysis in Jupyter using pandas and matplotlib to quantify missingness, outliers, and feature correlations. For missing timestamps I imputed with a rolling mean based on merchant frequency; for merchant IDs I used a hashing trick to reduce cardinality from 200k to 32k buckets. To address imbalance, I applied SMOTE on the training split and then tuned class weights in XGBoost. I also engineered time‑based features (hour of day, transaction seasonality) and categorical embeddings via an embedding layer in PyTorch. Finally, I wrapped the whole preprocessing pipeline with scikit‑learn’s `Pipeline` to ensure reproducibility and easy deployment.

**Result**  
The prepared dataset allowed the model to converge 30 % faster during hyperparameter sweeps. In a production‑style test, the XGBoost classifier achieved an AUC of 0.97 and maintained inference latency below 4 ms on a single GPU. I learned that early, systematic data profiling and thoughtful feature engineering are critical to meeting both performance and operational constraints in ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
