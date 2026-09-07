---
qid: ing_3206a0b640__aws__local
question: 'Explain: Conditional Update — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 383
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:15-05:00'
sources: []
---

**Situation & Task**  
While working on Uber’s real‑time pricing engine I was asked to reduce latency for the “Conditional Update” feature that pushes price changes only when a user’s ride request meets specific criteria. The service had to serve 40 M reads/sec from an online store (Cassandra) while keeping write amplification low.

**Action**  
I introduced an integrated cache layer using **Amazon DynamoDB Accelerator (DAX)** and **ElastiCache‑Redis** as a read‑through proxy. I modeled the conditional logic in Lambda, which first checks Redis; on miss it falls back to DAX, then Cassandra. To keep data fresh I used *write‑through* caching: every price update writes to DynamoDB (eventual consistency) and invalidates the corresponding Redis key via SNS triggers. For scalability I partitioned keys by city+time window and employed auto‑scaling groups for Lambda and ElastiCache shards.

**Result**  
Latency dropped from 350 ms to **<30 ms** on average, while read throughput stayed above 40 M reads/sec with a 15× cost reduction (from $12k/month to $0.8k). The system achieved 99.999% availability across three AZs.

---

### Leadership Principles
- **Customer Obsession** – Delivered sub‑30 ms latency, directly improving rider experience.
- **Ownership & Dive Deep** – Took end‑to‑end responsibility for the cache design and iterated on failure scenarios (e.g., cache miss storms).

*Bar‑raiser focus:* clear ownership, data‑driven impact, deep technical reasoning, and lessons learned from initial cache warm‑up failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
