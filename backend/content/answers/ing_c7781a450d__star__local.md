---
qid: ing_c7781a450d__star__local
question: 'Explain: Compare several designs — Designing Data-Intensive Applications
  (DDIA) \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 372
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:24-05:00'
sources: []
---

**Situation:**  
During a product launch at my previous company we needed to migrate our recommendation engine from a monolithic Java service to a scalable micro‑service architecture that could handle 10 M events/day without data loss.

**Task:**  
I was tasked with evaluating three architectural options described in *Designing Data‑Intensive Applications*: (1) a single Kafka cluster with batch processing, (2) an event‑driven micro‑service using Pulsar and Flink, and (3) a hybrid approach combining PostgreSQL for transactional data and Redis Streams for real‑time updates.

**Action:**  
I built proof‑of‑concept pipelines for each design. For the Kafka option I benchmarked throughput with `kafka-producer-perf-test`, noting 1 M msgs/sec but high latency spikes under load. The Pulsar/Flink stack offered lower latency (≤50 ms) and graceful backpressure, yet required a complex schema registry. The hybrid model provided strong consistency for user profiles while delivering sub‑20 ms updates via Redis Streams; I validated this with JMeter and observed 95th percentile latencies below 15 ms under 10 M events/day.

**Result:**  
I recommended the hybrid architecture, which reduced data duplication by 30 % and cut query latency from 120 ms to 18 ms. The migration completed two weeks ahead of schedule, and we saw a 12 % lift in recommendation click‑through rate. I learned that practical trade‑offs—consistency vs. latency versus operational complexity—must be quantified before committing to an architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
