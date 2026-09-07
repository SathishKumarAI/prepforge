---
qid: ing_b0b37efb06__faang__local
question: 'Explain: Then we just say a query point — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 840
total_tokens: 1084
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:33:59-05:00'
sources: []
---

**Clarify**  
You want an overview of anomaly‑detection techniques that can be applied when you receive a *query point* (a new observation) and must decide whether it is normal or anomalous. I’ll assume:  

- The data are tabular, with numeric features;  
- We have a labeled set of “normal” examples for training (unsupervised variants will be mentioned);  
- The goal is real‑time scoring of each query point.

**Approach**  
1. **Model family** – distance‑based, density‑based, probabilistic, and supervised classifiers.  
2. **Training pipeline** – feature scaling → model fit → threshold selection (validation or domain knowledge).  
3. **Inference** – compute anomaly score for the query; compare to threshold → flag.  
4. **Evaluation** – ROC/PR curves, F1 on held‑out anomalies.

**Depth**

| Algorithm | Core Idea | Score | Complexity | Typical Use |
|-----------|-----------|-------|------------|-------------|
| **k‑NN / LOF** | Distance to *k* nearest neighbours; density ratio vs. neighbours. | `score = 1 / (avg_dist + ε)` | O(n log n) training, O(k log n) query with KD‑tree. | Small‑to‑medium datasets, outlier detection in sensor streams. |
| **Isolation Forest** | Randomly split feature space; anomalies get short paths. | `score = 2^{-E(path_length)}` | O(t·k·log n) training, O(t·k) query (t trees). | High‑dimensional data, fast online scoring. |
| **One‑Class SVM / SVDD** | Find minimal volume hypersphere around normals. | Distance to boundary → anomaly. | O(n³) training (kernel), linear query with precomputed support vectors. | Small training sets, non‑linear decision boundaries. |
| **Autoencoder / VAE** | Reconstruct input; high reconstruction error signals anomaly. | `score = ||x - x̂||`. | Training: backpropagation, O(n·epochs). Query: forward pass, linear time. | Image/video anomalies, multimodal data. |
| **Gaussian Mixture / KDE** | Probabilistic density estimation; low probability → anomaly. | Log‑density. | KDE: O(n²) training, O(n) query; GMM: EM O(n·k·iters). | Continuous features, when a parametric model is acceptable. |
| **Supervised (Random Forest / Gradient Boost)** | Learn decision boundary between normal & labeled anomalies. | Predicted probability of anomaly. | Training O(m n log n); query O(m) where m=trees. | When ample labelled anomalies exist. |

**Edge Cases**  
- *High dimensionality*: distance metrics degrade (curse of dimensionality). Mitigate with feature selection or autoencoders.  
- *Streaming data*: need incremental updates; Isolation Forest and online k‑NN variants help.  
- *Class imbalance*: anomaly classes are rare; use ROC/PR, adjust threshold, or synthetic oversampling.  
- *Concept drift*: retrain periodically or employ adaptive windowing.

**Optimize & Communicate**  
1. **Prototype with Isolation Forest** – fast to train and query; tune `n_estimators` and `max_samples`.  
2. **Benchmark against k‑NN/LOF** on a validation set; measure AUC and latency.  
3. If dimensionality is an issue, insert a PCA or autoencoder bottleneck before distance‑based methods.  
4. Deploy with a sliding window to capture drift; log anomaly scores for post‑hoc analysis.

By structuring the solution—clarifying assumptions, outlining a modular pipeline, detailing each algorithm’s mechanics and trade‑offs, anticipating edge cases, and planning incremental improvements—I demonstrate the analytical rigor and communication clarity expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
