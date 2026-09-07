---
qid: ing_b7c933e5b3__faang__local
question: 'Explain: Then we also did some normalization to — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 644
total_tokens: 888
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:37-05:00'
sources: []
---

**Clarify**  
You’re asking for a quick rundown of why we normalize data before anomaly‑detection algorithms, plus an overview of common methods and where they’re used. I’ll assume the focus is on numeric tabular data, supervised vs unsupervised detection, and typical industry use cases.

**Approach**  
1. Explain normalization purpose (scale invariance).  
2. List key algorithms that rely on distance/variance.  
3. Give brief algorithmic intuition & complexity.  
4. Highlight typical applications (fraud, intrusion, predictive maintenance).  
5. Note edge‑cases and trade‑offs.

**Depth**

| Algorithm | Normalization role | Core idea | Complexity |
|-----------|--------------------|-----------|------------|
| **Z‑score / StandardScaler** | Centers data → zero mean, unit variance; essential for algorithms assuming Gaussianity (e.g., PCA, Isolation Forest). | Subtract mean, divide by std. | O(n·d) preprocessing |
| **Min–Max Scaling** | Maps to [0,1] – useful when distances are metric‑based (k‑NN, DBSCAN). | (x−min)/(max−min). | O(n·d) |
| **Robust Scaler** | Uses median & IQR; protects against outliers that could skew Z‑score. | Subtract median, divide by IQR. | O(n·d) |
| **Kernel PCA / Spectral methods** | Need consistent scale to preserve eigenstructure. | Nonlinear mapping → linearization in feature space. | O(n³) (or approximated with Nyström). |
| **Isolation Forest** | Works on raw counts but benefits from scaling because depth of trees depends on split thresholds. | Randomly partition space; anomaly has short path. | O(t·n·log n) |
| **One‑Class SVM / LOF** | Distance‑based; sensitive to feature scale. | Optimize hyperplane or local density differences. | O(n²)–O(n³) |

**Edge cases**

- Extremely skewed features → Min–Max can produce many zeros; use log transform first.  
- Categorical variables → one‑hot encoding + scaling may inflate dimensionality; consider target‑encoding.  
- Streaming data → incremental scalers (online mean/variance) required.

**Optimize & Communicate**  

- **Pre‑check**: Verify feature distributions; plot histograms to decide scaler type.  
- **Pipeline**: Use `ColumnTransformer` + `StandardScaler` in scikit‑learn for reproducibility.  
- **Evaluation**: Compare anomaly scores before/after scaling using ROC‑AUC or precision@k on a labeled holdout.  

In practice, I’d start with Robust Scaler for tabular finance data, feed it into Isolation Forest, and iterate. For image‑based sensor logs, PCA + One‑Class SVM after z‑scoring usually suffices. This structured workflow keeps the model interpretable and the pipeline production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
