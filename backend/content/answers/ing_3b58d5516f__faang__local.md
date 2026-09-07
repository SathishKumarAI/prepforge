---
qid: ing_3b58d5516f__faang__local
question: 'Explain: Flat Index (Brute Force) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:14-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Describe how a *flat index* (brute‑force search) works in vector databases and why it’s used despite its simplicity.  
*Assumptions to confirm:*  
- Query vectors are high‑dimensional (e.g., 128‑D).  
- Distance metric is Euclidean or cosine.  
- Dataset size fits in memory for a single query pass.

**2️⃣ Approach**  
Explain the brute‑force pipeline: load all vectors → compute distance to each → pick top‑k. Highlight its O(N·d) time, where N is dataset size and d dimensionality. Contrast with indexing structures (IVF, HNSW) that trade accuracy for speed.

**3️⃣ Depth**  
- **Algorithm:** For every stored vector `v_i`, compute `dist(q, v_i)`; maintain a max‑heap of size k.  
- **Complexities:** Time O(N·d), memory O(N·d). No precomputation needed.  
- **Benefits:** 100 % recall (exact nearest neighbors); no index maintenance overhead.  
- **Drawbacks:** Linear scan becomes prohibitive when N grows beyond a few million; GPU acceleration can mitigate but still scales linearly.

**4️⃣ Edge Cases**  
- Extremely sparse vectors → distance computation cost drops, making flat search more viable.  
- Very small datasets (≤ 10k) → brute‑force may outperform indexing due to zero index build time.  
- Non‑Euclidean metrics (e.g., Jaccard) still require full scan unless specialized indices exist.

**5️⃣ Optimize & Communicate**  
- **Optimizations:** SIMD vectorization, GPU kernels, batching queries.  
- **Narrative:** Emphasize that flat indexing is the *baseline*—the gold standard for recall—and a sanity check for approximate methods. In production, it’s often used as a fallback or for small “hot” subsets where latency matters more than scale.  

> *Signal:* Structured reasoning → clear assumptions → concrete algorithm + complexity → edge‑case awareness → practical optimizations and communication.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
