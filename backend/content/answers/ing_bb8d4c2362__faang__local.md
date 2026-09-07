---
qid: ing_bb8d4c2362__faang__local
question: 'Explain: Common Patterns to Know — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 583
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:59:08-05:00'
sources: []
---

**Clarify**  
The interviewer wants a quick rundown of the *most common white‑board patterns* that surface in AI interviews (e.g., classification, clustering, recommendation). Confirm whether they’re looking for algorithmic templates or system‑design sketches and ask if we should focus on supervised vs. unsupervised.

**Approach**  
1. List core problem families.  
2. For each, describe the canonical algorithmic skeleton: data flow, key equations, loss functions, inference step.  
3. Mention typical evaluation metrics and pitfalls.  
4. Highlight a quick‑start implementation sketch (pseudo‑code).  

**Depth**  

| Pattern | Core Idea | Typical Algorithm | Key Equations | Evaluation |
|---------|-----------|-------------------|---------------|------------|
| **Binary Classification** | Predict label *y* ∈ {0,1} | Logistic Regression / Neural Net | σ(z)=1/(1+e⁻z), loss = −[y logσ + (1−y)log(1−σ)] | Accuracy, AUC‑ROC |
| **Multi‑Class Classification** | One‑of‑K labels | Softmax NN | softmax_i=exp(zᵢ)/∑ₖ exp(zₖ), cross‑entropy loss | Top‑k accuracy, confusion matrix |
| **Clustering** | Partition *X* into *k* groups | K‑Means / DBSCAN | Minimize ∑‖xᵢ−μ_{c(i)}‖² | Silhouette score |
| **Recommendation (Collaborative Filtering)** | Predict user preference | Matrix Factorization | R≈U·Vᵀ, minimize ||R−UVᵀ||₂ + λ(||U||²+||V||²) | RMSE, Precision@k |
| **Sequence Modeling** | Generate or classify sequences | RNN/LSTM/Transformer | h_t = f(x_t, h_{t‑1}), loss = ∑ cross‑entropy | BLEU, perplexity |

**Edge Cases**  
- Imbalanced classes → class weighting, SMOTE.  
- Sparse user data → cold start, side‑information injection.  
- Non‑stationary clusters → incremental clustering or streaming K‑Means.

**Optimize & Communicate**  
- Emphasize that the “pattern” is really a *template*: preprocess → feature extraction → model fit → post‑process.  
- Show how to pivot from one pattern to another (e.g., add attention to sequence models).  
- Conclude by noting trade‑offs: simpler models scale better but may underfit; complex deep nets offer expressiveness but need more data and compute.

*(≈210 words)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
