---
qid: ing_04cc11cc0d__faang__local
question: 'Explain: Has been quite a lot of work — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 504
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:49-05:00'
sources: []
---

**Clarify**

The interviewer wants an overview of anomaly detection in ML—what it is, why we need it, and how we build models that can both spot outliers and explain them in real‑world systems (fraud, health monitoring, etc.).  
Key assumptions: data are tabular/time‑series, anomalies are rare, and we care about interpretability for ops teams.

**Approach**

1. **Define the problem** – label‐free detection of points/behaviour that deviate from normality.  
2. **Survey algorithms** – distance‑based (k‑NN), density‑based (LOF, DBSCAN), clustering‑based (Isolation Forest, One‑Class SVM), probabilistic (Gaussian Mixture, Bayesian Networks), and deep models (Autoencoders, Variational Autoencoders).  
3. **Explainability** – feature attribution (SHAP, LIME) on the anomaly score; rule extraction from tree ensembles; reconstruction error patterns for neural nets.  
4. **Applications** – fraud detection (credit cards), predictive maintenance (IoT sensor streams), intrusion detection (network logs), medical diagnosis (ECG anomalies).  

**Depth**

- *Isolation Forest* builds random trees that isolate points; depth ≈ anomaly score.  
- *Autoencoders* learn compressed representation; high reconstruction error signals novelty.  
- Explainability: SHAP values on the isolation path or reconstruction error per feature give actionable insights.

**Edge Cases**

- **Concept drift** – retrain periodically or use online learners.  
- **High‑dimensional sparse data** – dimensionality reduction (PCA, t‑SNE) before distance methods.  
- **Class imbalance** – calibrate thresholds via ROC/PR curves; use cost‑sensitive learning.

**Optimize & Communicate**

- Benchmark with AUC‑ROC and F1 on synthetic/real datasets.  
- Deploy as a streaming microservice (Kafka → Spark Structured Streaming → model inference).  
- Narrate trade‑offs: Isolation Forest is fast but less explainable than tree‑based SHAP; deep models capture non‑linearities but need GPU and more data.  

This structured view aligns with FAANG expectations: clear problem framing, systematic solution design, depth in algorithmic choices, edge‑case awareness, and a concise communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
