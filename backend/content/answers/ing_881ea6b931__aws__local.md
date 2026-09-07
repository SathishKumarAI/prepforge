---
qid: ing_881ea6b931__aws__local
question: 'Explain: Design of a Modern Cache - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 609
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:10-05:00'
sources: []
---

**Situation (S)** – While leading a micro‑services team at my previous company, we hit a bottleneck: API latency spiked to 200 ms when reading user profiles from DynamoDB under peak load (~50k RPS). The business demanded sub‑100 ms responses for the “quick view” feature.

**Task (T)** – Build a modern cache that scales horizontally, guarantees high availability, and delivers real‑time consistency without breaking existing data integrity.

**Action (A)** –  
1. **Choose AWS services**:  
   * **ElastiCache‑Redis** for in‑memory key/value storage with automatic sharding (cluster mode) and multi‑AZ replication.  
   * **DynamoDB Accelerator (DAX)** as a read‑through cache for secondary indexes, avoiding cold reads.  
2. **Design** – Implement a *write‑through* pattern: every profile update hits DynamoDB first, then an event is published to SNS → Lambda updates Redis and DAX.  
3. **Eviction & TTL** – Use LFU policy with 24 h TTL; evict stale items via periodic cleanup Lambda.  
4. **Scalability** – Leverage Auto Scaling for Redis shards (max 16 nodes) and enable *Serverless* DAX to elastically handle spikes.  
5. **Availability & Cost** – Multi‑AZ replication + automatic failover keeps 99.999% uptime; cost stays ~30 % lower than a fully replicated DynamoDB read replica set.

**Result (R)** – Latency dropped from 200 ms to **45 ms** (average), throughput increased by **3×**, and the feature now supports **100k RPS** during flash sales. The architecture earned a quarterly “Innovation Award” and was adopted across three product lines.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering instant responses to end‑users.  
- **Ownership** – Own the end‑to‑end data pipeline, from ingestion to cache invalidation.  

### What Bar‑Raisers Listen For
- Depth of *dive deep* into AWS service trade‑offs (e.g., Redis eviction vs. DAX read amplification).  
- Quantified impact (latency & throughput metrics).  
- Learning loop: post‑incident analysis that led to the write‑through pattern and event‑driven cache sync.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
