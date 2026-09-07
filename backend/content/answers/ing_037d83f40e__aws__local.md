---
qid: ing_037d83f40e__aws__local
question: 'Explain: ANN index: structure, memory math, ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 458
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:09-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to replace a legacy keyword‑search engine for an e‑commerce catalog that served ~30 M requests/day. The goal: drop latency from 250 ms to <50 ms while keeping accuracy above 90 % recall on user queries.

**Approach & Technical Design**  
I chose **Approximate Nearest Neighbor (ANN)** indexing with the HNSW graph (Hierarchical Navigable Small World). Each vector (768‑dim embedding) occupies ~3 KB; for 5 M items we needed ≈15 GB RAM—well within a single *r6i.8xlarge* (256 GiB).  
- **Memory math**: `vectors × bytes = 5,000,000 × 768 × 4 / 1024² ≈ 14.9 GiB`.  
- **Ops**: Insertion is O(log n), query is ~O(1) for a small fan‑out (k=10).  
- I wrapped the index in **Amazon Elasticache Redis** with *Redisearch* module to expose a REST API; this kept 99.9% availability via Multi-AZ replication and auto‑scale on CPU utilization.

**Result**  
Latency dropped from 250 ms to **42 ms** (84 % reduction). Query throughput increased from 1,200 QPS to 8,400 QPS—an 700 % uplift—while cost per query fell by 30 %. Post‑deployment A/B testing showed a 12 % lift in conversion on product search pages.

**Reflection & Learning**  
I owned the full stack: data ingestion → embedding pipeline (SageMaker) → index maintenance. The key trade‑off was between index size and recall; I iterated until k=10 gave the sweet spot. This experience reinforced my bias for action and deep dive into metrics—principles that align with Amazon’s **Ownership** and **Dive Deep** leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
