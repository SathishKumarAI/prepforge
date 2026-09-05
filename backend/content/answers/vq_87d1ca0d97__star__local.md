---
qid: vq_87d1ca0d97__star__local
question: How does Linear Algebra relate to broadcasting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 321
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:58-05:00'
sources: []
---

**Situation** – While leading the data‑pipeline refactor for our recommendation engine, we hit a bottleneck: each user’s feature vector had to be multiplied by a 1000‑dimensional weight matrix, and the code was looping over users, which slowed training from 3 min to 30 min.

**Task** – I needed to eliminate that explicit loop, reduce memory traffic, and keep the operation mathematically exact so model convergence wouldn’t degrade.

**Action** – I applied linear‑algebraic broadcasting in NumPy: reshaped the weight matrix to (1, 1000) and broadcasted it across the batch of user vectors (batch_size, 1000). This turned a naïve element‑wise multiplication into a single `np.dot` call, leveraging SIMD under the hood. I also introduced memory‑mapped arrays for the large user matrix so only the needed slice was loaded at once, and used JIT compilation with Numba to further speed up the dot product.

**Result** – Training time dropped from 30 min to just 2 min on a single GPU, and we achieved a 12% higher AUC after retraining. I learned that understanding broadcasting as a high‑dimensional linear‑algebra operation unlocks vectorized performance gains that would otherwise be hidden behind loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
