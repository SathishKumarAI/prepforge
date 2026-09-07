---
qid: ing_c3ba7fe19c__aws__local
question: 'Explain: In-Memory Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 469
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:41-05:00'
sources: []
---

**Situation – Task**  
While leading a migration of our recommendation engine at **AWS Marketplace**, I had to decide how to store real‑time user signals (clicks, dwell time, purchase intent) for the next‑generation ML pipeline. The challenge: pick an in‑memory database that delivers sub‑millisecond reads, high write throughput, and easy integration with SageMaker.

**Action – Design & Decision**  
I scoped **15 popular in‑memory stores** (Redis, Memcached, Amazon ElastiCache, Apache Ignite, Hazelcast, SAP HANA, Oracle TimesTen, Aerospike, etc.) and evaluated them on:  
* **Latency** – measured with a 1 M ops/sec synthetic load. Redis & Aerospike hit <0.5 ms read/write; others lagged >2 ms.  
* **Scalability** – assessed horizontal sharding and cluster size limits (Redis Cluster → 100 GB per node, Aerospike → linear scaling).  
* **Durability** – persistence options (RDB/AOF vs. write‑ahead logging).  
* **Integration** – native SDKs for Python/Java, compatibility with SageMaker endpoints, and support for Amazon ElastiCache (managed service).  

I selected **Amazon ElastiCache for Redis** because it meets all criteria: sub‑0.5 ms latency, 10× write throughput over our baseline, built‑in persistence, and seamless IAM integration. I also provisioned a second Redis cluster for read replicas to isolate ML inference traffic.

**Result – Impact**  
The new architecture reduced recommendation lag from **250 ms → 35 ms**, boosted hit‑rate by **12%**, and cut operational cost by **18%** (managed service vs. self‑hosted).  

**Learnings & Ownership**  
I documented trade‑offs in a post‑mortem, highlighted the risk of lock‑in with Redis, and built an automated health‑check pipeline that alerts on replica lag. This showcases **Ownership**, **Dive Deep**, and **Bias for Action**—the qualities a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
