---
qid: vq_f75622356d__aws__local
question: what is distributed cache?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 404
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:22:57-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*  
> **Situation / Task:** At my previous role I was tasked to reduce API latency for a global e‑commerce platform that served ~3 M requests per second and had a 99.9% SLA on response time.  
> **Action:** I designed a **distributed cache** using Amazon ElastiCache (Redis) as an in‑memory data store, partitioned by user region and sharded with consistent hashing.  
> - **Requirements:** 1 ms read latency, automatic failover, cross‑AZ replication, and eventual consistency for cart updates.  
> - **Design choices:**  
>   * Redis Cluster (3 shards) → horizontal scalability;  
>   * AWS Global Accelerator to route traffic to nearest node;  
>   * Lambda + API Gateway to invalidate cache on write events via DynamoDB Streams.  
> - **Scalability & Availability:** 99.99% uptime with Multi‑AZ, auto‑scaling node count based on CPU/latency metrics (CloudWatch).  
> - **Cost trade‑off:** $0.01 per GB‑hour vs $0.10 per request in DynamoDB; projected annual savings of ~$1.2M.  
> **Result:** API latency dropped from 350 ms to 55 ms (−84%), and the SLA compliance rose from 95% to 99.9%. The cache hit ratio reached 92%, cutting downstream database traffic by 70%.  

**Bar‑raiser focus:** Ownership of end‑to‑end solution, deep dive into performance metrics, quantified impact on latency & cost, and iterative learning from a failed single‑node prototype that taught me the value of sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
