---
qid: ing_35cf6fa7f2__faang__local
question: 'Explain: Q10: Explain vector database indexing algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 536
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:09-05:00'
sources: []
---

**Q10: Explain vector‑database indexing algorithms**

| Step | What to cover |
|------|---------------|
| **Clarify** | *Goal:* fast nearest‑neighbor queries on high‑dimensional embeddings (e.g., 512‑D). *Assumptions:* data is static or updates are infrequent, similarity metric is Euclidean or cosine. |
| **Approach** | 1️⃣ Review baseline linear scan.<br>2️⃣ Discuss tree‑based, hashing, and graph methods.<br>3️⃣ Contrast trade‑offs (latency vs recall). |
| **Depth** | • **KD‑Tree / Ball‑Tree** – works for ≤~10–15 D; splits by median axis → O(log n) query but degrades in high‑dimensional space. <br>• **Product Quantization (PQ)** – compress vectors into subcodebooks, enabling efficient distance estimation with lookup tables; used in Faiss. <br>• **Approximate Nearest Neighbor (ANN) via Locality‑Sensitive Hashing (LSH)** – hashes similar points to same bucket; query time ≈ O(1) for small buckets but recall drops as dimensionality rises. <br>• **Hierarchical Navigable Small World (HNSW)** – layered graph with bi‑directional edges; offers sub‑linear search, high recall, and easy dynamic updates. Complexity: build O(n log n), query O(log n) expected. |
| **Edge Cases** | • Very high dimensionality (>500 D): tree methods fail.<br>• Skewed data (clustered vs uniform): LSH bucket size imbalance.<br>• Real‑time updates: PQ requires re‑encoding, HNSW can insert in O(log n). |
| **Optimize & Communicate** | • For 1‑million vectors with < 99 % recall at 10‑NN: start with HNSW (fast query, low memory).<br>• If compression is critical, use PQ + IVF index. Explain that we’ll benchmark latency vs recall and iterate on parameters (M, efSearch). Communicate results clearly, showing trade‑offs to stakeholders. |

*Key takeaway:* In practice, **HNSW** or **PQ‑IVF** are the go‑to choices for large, high‑dimensional vector search; tree methods only shine in low dimensions, while LSH offers a quick but less accurate alternative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
