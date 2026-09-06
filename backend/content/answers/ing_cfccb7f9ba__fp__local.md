---
qid: ing_cfccb7f9ba__fp__local
question: 'Explain: Evaluation Criteria — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 429
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:10-05:00'
sources: []
---

**Why we evaluate a vector database the way we do**

A vector database’s job is to answer *nearest‑neighbour* queries on high‑dimensional embeddings efficiently.  
From this core problem we can derive the only performance metrics that truly matter:

| Criterion | Why it follows from the core task |
|-----------|-----------------------------------|
| **Recall@k** | Measures whether the system returns a set that contains the *true* nearest neighbours; it is the direct fidelity metric for similarity search. |
| **Latency (ms)** | In real‑time AI systems, the time to fetch k vectors determines user experience; latency captures algorithmic and hardware bottlenecks. |
| **Throughput (ops/s)** | Reflects how many queries a system can sustain under load, directly linked to scalability of indexing and compression schemes. |
| **Storage overhead** | Embeddings are large; the ratio *stored bytes / original vector* tells us how well compression or quantisation preserves information. |
| **Index construction time** | Building an index is a one‑off cost that must be amortised over its lifespan; it reflects algorithmic complexity (e.g., O(n log n) vs. O(n)). |

These metrics stem from *information theory* and *geometry*: recall measures the mutual information between query and answer, latency ties to computational geometry bounds (curse of dimensionality), while storage overhead quantifies entropy reduction.

**Non‑obvious insight:**  
A database can achieve high recall with very low latency only if it exploits **locality‑sensitive hashing (LSH) or product quantisation (PQ)** that balances *hash collision probability* and *reconstruction error*. The key is not just to minimize distance errors but to *align the hash bucket distribution with query density*, ensuring hot buckets are smaller. Ignoring this alignment yields fast queries that miss many true neighbours, defeating the purpose of recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
