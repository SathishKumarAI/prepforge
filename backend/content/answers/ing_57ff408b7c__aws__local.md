---
qid: ing_57ff408b7c__aws__local
question: 'Explain: Distributed Counter Data Storage — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 551
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:42-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked to build a **distributed counter** for an e‑commerce platform that needed to handle > 5 M events/sec while guaranteeing eventual consistency across a global user base.

**Task (T)**  
Design a fault‑tolerant, low‑latency system that aggregates counters per product, supports roll‑up queries in real time, and scales horizontally without locking the entire dataset.

**Action (A)**  

| Design choice | AWS service | Reasoning |
|---------------|-------------|-----------|
| **Sharded DynamoDB tables** (hash key = `product_id`, sort key = `shard_id`) | *DynamoDB* | Fast, serverless, auto‑scales with provisioned throughput. Sharding prevents hot spots. |
| **Write‑through cache in ElastiCache Redis** | *ElastiCache* | Keeps the most recent increments in memory (≤ 1 ms latency) and batches flushes to DynamoDB every 200 ms. |
| **AWS Lambda + Kinesis Data Streams** | *Lambda, Kinesis* | Ingests events, writes to cache, and triggers batch commits; scales with traffic. |
| **Global replication via DynamoDB Global Tables** | *DynamoDB G.T.* | Provides multi‑region reads/writes, reducing latency for users worldwide. |

- **Scalability:** Sharding + auto‑scaling DynamoDB handles > 10× projected load.
- **Availability:** Lambda retries on transient failures; Kinesis guarantees at-least-once delivery; DynamoDB Global Tables ensures no single point of failure.
- **Cost:** Cache size is capped (e.g., 1 GB per shard), DynamoDB charges only for used throughput, and Lambda is billed per invocation.

**Result (R)**  
After deployment, we achieved < 2 ms average read latency, a 99.9 % success rate under peak load, and reduced operational costs by **30 %** compared to the monolithic design.  

**Leadership Principles Highlighted**  
- **Ownership:** Took end‑to‑end responsibility for reliability and cost.  
- **Dive Deep:** Analyzed DynamoDB hot‑spot patterns and tuned shard count accordingly.  

**Bar‑raiser cues** – I demonstrated ownership, quantified performance gains, showed deep technical trade‑offs, and reflected on an early failure where a single‑node cache caused data loss, leading to the eventual multi‑shard solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
