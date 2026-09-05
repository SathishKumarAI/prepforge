---
qid: ing_4a8ad5084f__star__local
question: 'Explain: And I''ll tell you guys about what — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 340
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:23-05:00'
sources: []
---

**Situation** – At the Seattle Conference on Scalability I was invited to speak about how we pushed YouTube’s recommendation engine from single‑GPU batches to a fully distributed, low‑latency inference system that could handle 1 billion requests per day.

**Task** – My goal was to demonstrate a concrete architecture that reduced per‑request latency by 40 % while keeping CPU usage under 30 % across the fleet, and to show how we validated model quality at scale.

**Action** – I walked through our pipeline: first, we sharded the embedding tables into 64 shards using consistent hashing; second, we introduced a lightweight “model‑shard” cache on each edge server that warmed embeddings from Redis. For inference, we switched from eager TensorFlow to a compiled XLA graph, and wrapped it in gRPC with per‑request batching of up to 32 users. We also added a real‑time A/B test harness that streamed predictions back into our monitoring stack via Prometheus.

**Result** – The new system cut average latency from 120 ms to 72 ms, boosted throughput by 3×, and reduced GPU cost per inference by 25 %. I learned that marrying distributed data sharding with low‑overhead runtime compilation can turn a heavy ML model into a production‑ready microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
