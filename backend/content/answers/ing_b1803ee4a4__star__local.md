---
qid: ing_b1803ee4a4__star__local
question: 'Explain: Approach 1: Hashing + Encoding (Deterministic)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 397
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:34-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we had to predict loan default risk from a raw dataset of 12 million customers. The feature set included dozens of categorical fields (state, occupation, credit product type) that were highly sparse and would explode memory if one‑hot encoded.

**Task:**  
I needed to transform these high‑cardinality categories into compact numeric vectors while preserving the ability to train a gradient‑boosted tree model within our 64 GB RAM budget and keep inference latency under 10 ms per request.

**Action:**  
I implemented a deterministic hashing + encoding pipeline. First, each categorical value was passed through a MurmurHash3 function with a fixed seed, producing a 32‑bit integer. I then modulated the hash by a chosen bucket size (e.g., 2^12 = 4096) to map it into a dense index space. Next, I used one‑hot encoding on these indices, resulting in a sparse matrix of shape (12 M × 4 K). To reduce dimensionality further, I applied feature hashing with an L1 regularization term during XGBoost training, which naturally shrinks duplicate buckets. Finally, I validated that the mapping was deterministic by re‑hashing a sample and confirming identical indices across runs.

**Result:**  
The hashed encoding reduced memory usage from ~200 GB (full one‑hot) to 8 GB, enabling us to train on a single GPU node. Model accuracy (AUC‑ROC) improved from 0.78 to 0.82 because the compact representation allowed deeper trees without overfitting. Inference latency dropped to 7 ms per prediction. I learned that careful choice of bucket size balances collision risk and memory savings, and deterministic hashing guarantees reproducibility across training and production environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
