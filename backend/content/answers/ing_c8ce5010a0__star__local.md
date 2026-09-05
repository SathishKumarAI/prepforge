---
qid: ing_c8ce5010a0__star__local
question: 'Explain: Workflow — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 330
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:02-05:00'
sources: []
---

**Situation** – While prepping for a senior ML engineer role, I had to ace a system‑design interview that asked me to build an online recommendation engine for a streaming platform with millions of users and real‑time personalization.

**Task** – My goal was to outline a scalable, low‑latency architecture that could ingest user interactions, update embeddings on the fly, and serve recommendations within 200 ms.

**Action** – I followed my “Workflow Cheat Sheet”:
1. **Define scope & constraints** – set latency <200 ms, throughput ≥10k requests/s, data freshness ≤5 min.
2. **Identify core components** – user profile store (Cassandra), feature pipeline (Kafka + Spark Structured Streaming), model serving (TensorFlow Serving behind Envoy), cache layer (Redis).
3. **Design data flow** – events → Kafka topic → streaming job updates embeddings in Cassandra; inference request hits Redis, miss triggers TensorFlow Serving.
4. **Address failure modes** – add read‑replicas for Cassandra, circuit breakers on Envoy, retry logic with exponential backoff.
5. **Validate with metrics** – simulated load test: 12k req/s, 190 ms avg latency, 99th percentile <250 ms.

**Result** – I secured the interview call and later received a job offer. The exercise taught me to translate business requirements into concrete architectural decisions, quantify trade‑offs, and communicate them clearly under time pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
