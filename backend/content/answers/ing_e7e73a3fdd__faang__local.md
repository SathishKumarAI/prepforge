---
qid: ing_e7e73a3fdd__faang__local
question: 'Explain: ByteDance System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 535
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:39:15-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level system‑design sketch for a ByteDance‑style recommendation engine (e.g., TikTok). Key assumptions: real‑time ingestion of user interactions, low latency ranking (~10 ms), billions of users and millions of videos, strict privacy constraints, and need to support A/B tests. Confirm whether the focus is on cold‑start, scalability, or algorithmic detail.

**Approach**  
1. **Data pipeline** – ingest click/like/watch events → stream processor (Kafka/Flink) → feature store.  
2. **Feature storage** – distributed key‑value store (Redis/ScyllaDB) for per‑user embeddings; columnar DB (Cassandra/HBase) for raw logs.  
3. **Model training** – offline batch jobs on Spark/Hadoop to update user and item vectors every few hours; online learning via incremental updates in the stream layer.  
4. **Serving layer** – microservice exposing a REST/GRPC endpoint that fetches candidate items from an ANN index (Faiss, HNSW) and scores them with a lightweight neural net (e.g., MLP).  
5. **A/B testing & monitoring** – feature flagging, real‑time metrics dashboards, automated rollback.

**Depth**  
- **Latency budget**: 5 ms for key lookup + 3 ms for ANN search + 2 ms model inference.  
- **Scalability**: partition users by hash; use consistent hashing for the ANN index to allow hot‑spotting.  
- **Consistency**: eventual consistency is acceptable; read‑through cache with TTL of 30 s ensures freshness.  
- **Privacy**: data minimization, on‑device preprocessing when possible, differential privacy in batch training.

**Edge Cases**  
- New users (cold start) → use demographic or device fingerprints + global popularity baseline.  
- Outlier events (spam) → filter via anomaly detection before feature update.  
- Network partitions → fallback to last known good model and queue updates for later replay.

**Optimize & Communicate**  
Explain trade‑offs: tighter cache coherence vs. higher read latency; larger ANN index improves recall but increases memory footprint. Suggest monitoring key metrics (hit ratio, latency percentiles) and iteratively tuning shard size and embedding dimensionality. End with a concise summary of how each component satisfies ByteDance’s scale, personalization, and real‑time requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
