---
qid: ing_cba28299a6__fp__local
question: Design an example store for dynamic few-shot selection. What do you get,
  and what does it cost you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 461
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:12-05:00'
sources: []
---

### Dynamic Few‑Shot Store: An Information‑Theoretic View

**What the store gives you**

A *dynamic few‑shot store* is a lightweight cache that holds a handful of high‑utility examples for every query class.  
1. **Instant retrieval** – Given an input \(x\), we retrieve \(\{(z_i, y_i)\}_{i=1}^k\) whose embeddings are nearest to \(x\)’s embedding in a shared latent space.  
2. **Adaptive relevance** – The store continually updates its contents by replacing the least informative example for each class with a new one that maximises mutual information \(I(x;z|y)\).  
3. **Zero‑cost inference** – During inference, the model conditions on the retrieved examples as prompts, eliminating the need to re‑compute gradients or run expensive fine‑tuning.

**What it costs you**

1. **Storage overhead** – Each example stores an embedding (≈ 512 d) and a small metadata header; for \(k=5\) per class over 100 classes this is ~2 MB—negligible compared to full model size but non‑trivial in memory‑constrained devices.  
2. **Maintenance latency** – Updating the store requires an online clustering step (≈ \(O(n \log n)\)), which adds a few milliseconds per batch; however, this can be amortised by batching updates during idle periods.  
3. **Selection bias** – The greedy maximisation of mutual information can over‑represent rare but high‑variance examples, potentially skewing the model’s calibration unless countered with entropy regularisation.

**Non‑obvious insight**

The key to efficiency lies in *information geometry*: by viewing the store as a manifold of representative points that locally approximate the posterior \(p(y|x)\), we reduce the problem from global fine‑tuning to local neighbourhood optimisation. This perspective explains why few‑shot performance scales almost linearly with \(k\) while keeping both storage and update costs sublinear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
