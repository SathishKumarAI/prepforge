---
qid: ing_5e34369746__aws__local
question: 'Explain: Cache as Primary Storage — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 477
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:34-05:00'
sources: []
---

**Situation / Task**  
While redesigning a recommendation engine for a global e‑commerce platform, I was asked to replace the monolithic data store with a “cache‑as‑primary” architecture so that latency could drop below 10 ms for 95 % of requests.

**Action**  
I scoped the problem: read‑heavy, write‑through traffic (~1.2 M ops/s), and required durability across AZs. I chose **Amazon ElastiCache (Redis)** as primary store and **DynamoDB** as a durable fallback.  

* Design:  
  * All writes go to Redis via an application layer that also triggers an async Lambda to persist the key/value pair to DynamoDB.  
  * Reads first hit Redis; on miss, fall back to DynamoDB and update Redis (write‑back).  
  * Use **Redis Cluster** with sharding across 3 AZs for high availability.  
  * Enable **Redis persistence (RDB/AOF)** to recover from node failure within seconds.  

* Scalability: autoscale Redis nodes based on CPU/Memory metrics; DynamoDB handles burst traffic automatically.  
* Cost: 30 % lower than a single RDS + S3 tier for the same throughput, while maintaining SLA.  

**Result**  
Latency dropped from 45 ms to **7 ms (95th percentile)**; read‑throughput increased by 4× with zero data loss during a 2‑hour AZ outage. The architecture also cut operational overhead by 25 % (no manual sharding).  

---

### Leadership Principles Highlighted  
* **Customer Obsession** – Delivered instant recommendations, improving conversion by 12%.  
* **Ownership & Dive Deep** – Built end‑to‑end pipeline, identified subtle consistency gaps, and added automated reconciliation.  

> *Bar‑raiser focus:* I owned the entire data flow, performed deep dives into cache eviction policies, quantified latency gains, and documented lessons from a failed persistence sync that taught me to add idempotent writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
