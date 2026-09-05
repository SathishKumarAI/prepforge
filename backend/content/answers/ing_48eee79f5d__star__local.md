---
qid: ing_48eee79f5d__star__local
question: 'Explain: Example Use Cases — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 304
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:54:28-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a real‑time recommendation engine for an e‑commerce platform that served millions of daily users. The existing batch‑based system updated recommendations every night, causing stale suggestions during peak traffic.

**Task:**  
I needed to redesign the service so it could deliver fresh, personalized recommendations with sub‑second latency while keeping data consistency across a global CDN and handling high write throughput from user interactions.

**Action:**  
We moved from a stateless microservice that fetched user vectors on each request to a stateful architecture using Redis Streams for event ingestion and Apache Flink for incremental model updates. The stream processed click events in real time, updating per‑user embeddings stored in an in‑memory key‑value store. A lightweight inference service then pulled the latest embedding from Redis instead of recomputing it. We also introduced a checkpointing mechanism to recover state after failures without losing recent interactions.

**Result:**  
The new system reduced recommendation latency from 2 s (batch) to under 200 ms, increased click‑through rate by 18%, and cut infrastructure costs by 12% due to more efficient use of compute resources. I learned that choosing stateful streaming for high‑frequency, low‑latency ML workloads can dramatically improve user experience compared to stateless batch pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
