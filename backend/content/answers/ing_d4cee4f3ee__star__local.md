---
qid: ing_d4cee4f3ee__star__local
question: 'Explain: Throughput vs Bandwidth — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 345
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:40-05:00'
sources: []
---

**Situation:** While leading a recommendation engine rollout at my previous company, we noticed that user engagement dropped during peak traffic hours. The analytics dashboard showed the request latency spiking from 120 ms to over 800 ms as concurrent users hit 10k.

**Task:** I had to reduce latency without exceeding our infrastructure budget, ensuring the system could handle the projected 25k concurrent sessions after a marketing campaign.

**Action:** First, I dissected the pipeline: data ingestion (bandwidth), model inference queue (latency), and result serialization (throughput). I re‑engineered the inference layer by batching requests in micro‑batches of 32, which increased GPU utilization from 45 % to 85 %, improving throughput. To address bandwidth, I switched from a single monolithic data store to a sharded Redis cluster, cutting read latency by 60 %. For overall latency, I introduced a priority queue that routed time‑sensitive requests directly to the fastest node, trimming tail latency from 800 ms to under 200 ms. Throughout, I monitored with Prometheus and set alerts on key metrics.

**Result:** Post‑deployment, average request latency fell to 110 ms, throughput rose by 3× (from 1k to 3k requests/sec), and the system comfortably supported 30k concurrent users during peak periods. The exercise taught me that bandwidth controls data flow capacity, throughput measures successful completions per unit time, and latency is the critical user‑visible delay; optimizing all three in concert delivers real performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
