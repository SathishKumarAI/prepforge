---
qid: ing_e8e2d2322d__star__local
question: 'Q: Why would you choose a Matryoshka model for a 1-billion-vector index?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 392
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:52-05:00'
sources: []
---

**Situation:**  
While leading the search infrastructure upgrade at a fintech startup, we had to scale our recommendation engine from 10 million to over **1 billion** user embeddings. The existing flat IVF index in Faiss could not fit into memory and query latency shot past our SLA of 50 ms.

**Task:**  
I needed to build an index that kept RAM usage under 64 GB, maintained sub‑30 ms response time, and allowed incremental updates without re‑building the entire structure.

**Action:**  
I chose a **Matryoshka (nested) HNSW + IVF** architecture. First, I partitioned the vectors into **IVF32** coarse buckets using product quantization to reduce dimensionality. Within each bucket, I built a small HNSW graph (~200 nodes). The outer layer was a shallow ANN that routed queries to the correct bucket, while the inner HNSW handled fine‑grained neighbor search. I implemented this in C++ with Faiss wrappers, tuning the `efSearch` parameter per bucket size and leveraging GPU acceleration for training. To support live updates, I added an “online” layer of small HNSWs that merged into the offline graph nightly.

**Result:**  
The new index fit comfortably in 48 GB RAM, cut query latency from **120 ms to 22 ms**, and improved recall@10 by 4%. It also reduced maintenance windows from a full rebuild (≈2 h) to incremental patches (<5 min). I learned that combining coarse quantization with fine‑grained graph search is essential for scaling billion‑vector workloads while keeping latency in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
