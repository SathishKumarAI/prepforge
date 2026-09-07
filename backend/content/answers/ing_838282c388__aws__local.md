---
qid: ing_838282c388__aws__local
question: 'Explain: CAP and Latency — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 404
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:20-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: My team built a real‑time recommendation engine for an e‑commerce platform that served 2 M requests/second. Users complained of latency spikes (>300 ms) during flash sales, hurting conversion by ~7 %.  
*Task*: Redesign the data layer to guarantee low latency while maintaining high availability.

**Action**  
I applied the CAP theorem: we chose **AP (Availability + Partition tolerance)** because user experience depends on instant responses.  
1. **Data partitioning** – Sharded product catalog across 8 DynamoDB tables, each with a dedicated read replica in a different AZ.  
2. **Caching layer** – Introduced an Amazon ElastiCache Redis cluster (cluster mode enabled) to serve the top‑20% of items with <10 ms latency.  
3. **Fallback strategy** – If cache miss or DynamoDB throttling occurs, we route to a secondary read replica and log the event for later batch reconciliation.

*Result*: Latency dropped from 300 ms to an average of 12 ms (95th percentile <25 ms). Availability remained >99.99 %. Post‑deployment conversion increased by **9 %**, translating to ~$3 M incremental revenue per quarter.  

**Bar‑raiser Checklist**  
- Ownership: I led the entire redesign and coordinated cross‑functional testing.  
- Dive Deep: Used CloudWatch metrics, DynamoDB auto‑scaling logs, and Redis latency dashboards to validate every hypothesis.  
- Quantified Impact: 9 % lift in conversion and $3 M revenue gain.  
- Learning from Failure: Initial attempt with a single cache node caused evictions; I iterated to cluster mode after analyzing eviction patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
