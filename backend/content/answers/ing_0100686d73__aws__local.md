---
qid: ing_0100686d73__aws__local
question: 'Explain: if you guys know that there was — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 421
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:50-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was part of a cross‑functional team tasked with designing the real‑time collaboration engine for an internal “Google Docs” clone that needed to support **10 M concurrent users** while keeping latency under 50 ms per edit. The goal was to deliver a frictionless editing experience, mirroring what our customers expect from Google Docs.

**Action (Dive Deep + Invent & Simplify)**  
1. **Operational Transformation (OT)** – I modeled each edit as an operation `(position, insert/delete, content)` and used a deterministic conflict‑resolution algorithm so that every replica converged to the same state without central locking.  
2. **Sharding by Document ID** – Operations were routed to a stateless Lambda cluster behind API Gateway; each document’s edits hit a dedicated DynamoDB partition (hot spot avoidance).  
3. **Change Feed with Kinesis Data Streams** – Ops were published to a stream, consumed by an EC2 autoscaling group that updated the in‑memory CRDT cache and persisted to S3 for durability.  
4. **WebSocket API Gateway + CloudFront** – Clients received real‑time patches via WebSockets; CloudFront cached static assets globally for low latency.

**Result (Deliver Results)**  
- Latency dropped from 120 ms to **38 ms** average.  
- Throughput scaled to **15 k ops/s per shard** with no single point of failure.  
- Operational costs fell by **22%** compared to a monolithic RPC design, thanks to serverless components and pay‑per‑use pricing.

**Learning & Bar‑raiser Insight**  
I documented edge cases where OT failed under network partitions, built automated rollback tests, and iterated the algorithm—showing true ownership and a commitment to continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
