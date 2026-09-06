---
qid: ing_d955354a1a__fp__local
question: 'Explain: “Moving Computation is Cheaper than Moving Data”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 421
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:42:08-05:00'
sources: []
---

### Why “Moving Computation Is Cheaper Than Moving Data”

At the heart of distributed systems lies a simple trade‑off: **data are expensive to move, but operations on them are cheap**.  
1. **Cost model** – Transferring a byte over a network consumes bandwidth, introduces latency, and burns energy (≈ 10⁻³ J/byte in modern data centres). In contrast, executing a floating‑point operation costs ≈ 10⁻¹⁰ J. Thus, moving *k* bytes is orders of magnitude more expensive than performing *k* operations on them locally.  
2. **Information‑theoretic view** – The *mutual information* between raw data and the desired model parameters is high; most of that information can be distilled into a small set of gradients or statistics (e.g., partial sums). Sending those compressed messages reduces bandwidth dramatically while preserving learning quality.  
3. **Geometric intuition** – In parameter space, the gradient direction is *local* to each data shard. By computing gradients where data reside and aggregating them, we avoid transporting entire high‑dimensional tensors across the network.

#### Non‑obvious insight
The real advantage appears when **privacy or regulatory constraints** forbid raw data movement. Moving computation (e.g., federated learning) lets us respect these laws while still achieving near‑centralized performance—data never leave their origin, yet the global model learns from all of them.

In short, because computation is *cheap* and data are *expensive*, shifting the algorithmic load to where the data live yields massive savings in latency, energy, and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
