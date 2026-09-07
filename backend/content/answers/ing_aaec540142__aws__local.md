---
qid: ing_aaec540142__aws__local
question: 'Explain: Interviewer — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 535
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:06-05:00'
sources: []
---

**Situation / Task**  
At a fast‑growing e‑commerce startup I was tasked to replace an in‑memory counter that throttled ad impressions. The system had to support **10 M ops/sec**, 99.999% availability, and be cost‑effective for millions of users worldwide.

**Action – Design**  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| **Front‑end API** | Amazon API Gateway + Lambda (edge) | Low latency, automatic scaling; no servers to manage. |
| **Counter store** | DynamoDB with *Partition Key = counterId*, *Sort Key = timestamp* and a *Global Secondary Index* for daily aggregates. Use **DAX** cache for sub‑millisecond reads. | 1‑write/second throughput per partition, auto‑scaling, strong consistency for updates. |
| **Concurrency control** | DynamoDB Conditional Writes + Optimistic Locking (version attribute). | Avoid lost updates without heavy locking. |
| **Batch aggregation** | Kinesis Data Streams → Lambda → Redshift / S3 Parquet. | Periodic roll‑up to reduce hot writes and support analytics. |
| **Monitoring & Auto‑Recovery** | CloudWatch Alarms + SNS + Step Functions for fallback to a secondary region on outage. | 99.999% SLA with cross‑region replication. |

**Result**  
The new system handled **12 M ops/sec**, reduced counter latency from 15 ms to <1 ms, and cut infra cost by **35%** versus the legacy EC2+Redis stack.

---

### Leadership Principles

- **Ownership** – I scoped the project end‑to‑end, negotiated cross‑team buy‑in, and drove it to production in 3 months.  
- **Dive Deep** – I benchmarked DynamoDB’s conditional write throughput, modeled hot‑partition scenarios, and tuned Kinesis shard count.  

### What a Bar‑Raiser Looks For

1. **Quantified impact** (latency drop, cost savings).  
2. **Depth of trade‑off analysis** (consistency vs. latency, single‑region vs. multi‑region).  
3. **Learning from failure** – after an initial spike we discovered hot key contention and refactored the partition key strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
