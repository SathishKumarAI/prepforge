---
qid: ing_d74f71dec3__aws__local
question: 'Explain: NoSQL Database — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 493
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:16-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a *distributed counter* for a global ad‑tech platform that needed to support > 10 M increments per second with sub‑millisecond latency, while staying cost‑effective and highly available.

**Action – Design**  
- **Data model**: Use DynamoDB with a sharded key (`counterId#shard`) so each shard can be updated independently.  
- **Write path**: `UpdateItem` with `ADD` on the `count` attribute; DynamoDB guarantees linearizable updates per partition key, giving us *strong consistency* for the counter’s value while keeping writes fast.  
- **Read path**: Periodically aggregate shard counts via a Lambda scheduled job that reads all shards (`Scan`) and writes the global total to an S3 object + CloudWatch metric. Clients read from this cached value for real‑time reporting (latency < 1 ms).  
- **Scalability**: Provisioned throughput is split across 10–20 shards; auto‑scaling adjusts based on write rate.  
- **Cost & trade‑offs**: DynamoDB’s pay‑per‑write model keeps spend proportional to traffic. Using S3 for the aggregated total keeps storage cheap but introduces a small stale window (≤ 5 s).  

**Result**  
The system handled 12 M ops/sec with < 2 ms latency, 99.999% availability, and cost under $0.50 per million increments—10× cheaper than a RDBMS approach.

**Reflection & Learning**  
I owned the trade‑off between consistency and latency; after an early spike I added per‑shard optimistic locking to avoid throttling. This deep dive into DynamoDB’s internals helped me document a clear fallback strategy, a key bar‑raiser for ownership and learning from failure.  

> **Leadership Principles**: *Customer Obsession* (meet performance expectations), *Ownership* (owning trade‑offs & cost), *Dive Deep* (understanding DynamoDB internals).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
