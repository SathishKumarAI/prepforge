---
qid: ing_8955659ab2__aws__local
question: What Is a Distributed Counter? — Distributed Counter System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 436
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:36:31-05:00'
sources: []
---

**Answer – “Distributed Counter” (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* (we must give customers a reliable, low‑latency counter) & *Ownership* (I take full responsibility for the whole pipeline).  

### Situation  
At my last role we had to expose a page view counter for 10 M+ users. The single Redis instance crashed under peak load; latency spiked and counts drifted.

### Task  
Design a fault‑tolerant, highly available distributed counter that guarantees at‑least‑once accuracy with <5 ms read latency.

### Action  
1. **Write Path** – Each request writes to an append‑only Kafka topic (`page_view_events`).  
2. **Aggregation Layer** – A fleet of stateless worker microservices (Spring Boot) consume the stream, maintain a local in‑memory `LongAdder`, and batch flush every 200 ms to DynamoDB Global Tables (multi‑AZ).  
3. **Read Path** – Expose an API that queries the latest value from an ElasticCache Redis cluster (primary/replica). Workers push incremental deltas to Redis via `INCRBY` ensuring eventual consistency.  
4. **Consistency Guarantees** – Using Kafka’s exactly‑once semantics + DynamoDB transactions, we achieve 99.999% accuracy; read latency <5 ms by caching.  

### Result  
- Reduced counter latency from 30 ms to 3 ms (10×).  
- Eliminated single point of failure; uptime improved from 95% to >99.995%.  
- Cost fell by 18 % due to efficient batching and use of spot instances for workers.

**Bar‑raiser takeaways:** I owned the end‑to‑end solution, dove deep into Kafka & DynamoDB trade‑offs, quantified impact (latency, availability), and learned that “write‑once, read‑many” patterns scale better than synchronous counters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
