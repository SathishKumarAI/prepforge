---
qid: ing_8e34da292e__star__local
question: 'Explain: 1.1.3.1. Coordinate Descent with Gap Safe Screening Rules'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 371
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:14-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a production‑grade recommendation engine using L1‑regularized logistic regression on 12 million user–item interactions. The training dataset was sparse but the model had over 3 million features, and our nightly training job kept taking 36 hours on the cluster, far beyond the SLA.

**Task:**  
I needed to cut training time by at least 70% while keeping predictive performance unchanged, so we could retrain the model daily without impacting latency.

**Action:**  
I switched from batch gradient descent to **coordinate descent (CD)**, which exploits sparsity by updating one feature coefficient at a time. To avoid cycling through all 3 million coordinates each epoch, I integrated **Gap Safe screening rules**: after every few sweeps I computed the duality gap and used it to safely eliminate features whose coefficients would be zero in any optimal solution. This reduced the active set from 3 M to about 200 K features after the first two passes. I implemented the CD updates in C++ with SIMD vectorization, and wrapped them in a Python API for our pipeline. I also added early‑stopping based on the duality gap threshold (1e-4) to avoid unnecessary sweeps.

**Result:**  
Training time dropped from 36 hours to just **5 minutes**, a 98% reduction. The AUC on the hold‑out set stayed at 0.87, identical to the baseline. I learned that smart screening can turn an intractable high‑dimensional problem into a lightweight routine, and that coordinating low‑level optimizations with theory (duality gaps) yields dramatic real‑world gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
