---
qid: ing_e0db4f1e42__aws__local
question: 'Explain: Caching — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 419
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:47-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of an e‑commerce product catalog that was hitting 5 M RPS during flash sales. The database throttle forced a 30 % drop in conversion rate. My goal: scale read traffic without rewriting the entire stack.

**Action**  
I introduced a multi‑layer cache strategy (Redis + DynamoDB Accelerator) and rewrote the data model to use **partitioned, time‑based tables**.  
- **Cache layer:** Redis Cluster with auto‑scaling shards, evicting least‑recently used keys; TTL set per product category.  
- **Secondary persistence:** DynamoDB with Global Secondary Indexes for price & inventory filters, backed by DAX for 5 µs latency.  
- **Data ingestion pipeline:** Kinesis Data Streams → Lambda → Glue → DynamoDB, ensuring eventual consistency and real‑time updates.

I used CloudWatch to monitor cache hit ratios (target >85 %) and set SQS dead‑letter queues to surface anomalies. The architecture was deployed with Terraform, enabling 99.999% availability through multi‑AZ deployments.

**Result**  
Read throughput increased from 5 M RPS to 20 M RPS while maintaining <2 ms latency. Conversion rates rose by **12 %**, and operational costs fell by **18 %** due to reduced database capacity needs.  

**Leadership Principles**  
- *Customer Obsession*: Directly improved checkout speed, boosting revenue.  
- *Ownership & Dive Deep*: Built end‑to‑end pipeline, continuously tuned cache policies based on metrics.

Bar‑raiser cues: I quantified impact (conversion lift, cost savings), demonstrated deep architectural choices, and learned from an initial cache miss spike—prompting a dynamic eviction policy that now protects against similar spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
