---
qid: ing_f9fae80d7f__aws__local
question: 'Explain: 1.11.1.1.4. Categorical Features Support'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 449
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:28-05:00'
sources: []
---

**Situation – Task**  
In a recent forecasting project for a retail client we needed to predict weekly sales from a dataset with dozens of categorical columns (store type, promotion flag, holiday indicator). The model pipeline was built in SageMaker but the training job stalled because the built‑in estimator couldn’t handle high cardinality categories.

**Action – Deep Dive & Ownership**  
I took ownership and performed a **feature engineering audit**:  
1. Used `sklearn.preprocessing.OrdinalEncoder` with `handle_unknown='use_encoded_value'` to map unseen values to a sentinel.  
2. Created an embedding layer in TensorFlow/Keras so each category was represented as a dense vector (embedding size = min(50, cardinality/4)).  
3. Deployed the model on SageMaker **Endpoint** with *Inference Scheduler* for low‑latency predictions.  

I also wrote a **unit test harness** that validates encoding consistency across training and inference data streams, ensuring reproducibility.

**Result – Quantified Impact**  
- Reduced preprocessing time from 12 min to 2 min (80% faster).  
- Improved RMSE on validation set by **18%** versus the baseline one‑hot encoder.  
- Cut SageMaker GPU spot cost by 35% through efficient batch inference.

**Reflection – Learning & Bar‑Raiser Signals**  
I documented trade‑offs: embeddings reduce dimensionality but require careful regularization; one‑hot encoding is simpler but scales poorly with cardinality. The bar‑raiser looked for ownership, depth (I dug into AWS SageMaker internals), quantified impact (exact RMSE and cost savings), and a learning loop (we plan to experiment with hashing tricks next).  

**Leadership Principles Anchored**  
- **Customer Obsession**: Delivering faster, cheaper predictions directly benefits the client’s operational efficiency.  
- **Ownership & Dive Deep**: I owned the end‑to‑end pipeline and dove into encoding strategies until we hit measurable gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
