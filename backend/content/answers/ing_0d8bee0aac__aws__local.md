---
qid: ing_0d8bee0aac__aws__local
question: 'Explain: Distributed Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 446
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:16-05:00'
sources: []
---

**What I did (S)**  
When a startup’s recommendation engine was hitting the database at 5 k QPS and latency spiked from 120 ms to 1.2 s during peak traffic, I owned the performance problem. I scoped the requirement: cache user‑profile embeddings for 30 days with eventual consistency, support 10× write amplification during promotions, and keep cost below $500/month.

**How I did it (T)**  
I designed a *distributed cache* layer using **Amazon ElastiCache for Redis** in a two‑AZ cluster. Keys were sharded by user ID hash; each node held ~1 TB of RAM to hit 99.9% cache hit rate. TTLs were set per data type, and I enabled **Redis persistence (RDB)** for crash recovery. To avoid hot spots, I introduced a *cache‑aside* pattern: the application first checks Redis, falls back to DynamoDB if miss, then populates the cache asynchronously.

**Result (A & R)**  
After deployment, read latency dropped from 1.2 s to **30 ms**, and CPU usage on the DB tier fell by **73%**, freeing capacity for new features. Monthly cost stayed under $420, while throughput scaled linearly with traffic due to Redis’s auto‑sharding. I documented failure scenarios (e.g., node loss) and added automated failover scripts; the system survived a 3 h outage with no data loss.

**Key learnings (B)**  
*Ownership*: I drove the end‑to‑end solution, from requirement gathering to monitoring.  
*Dive Deep*: Investigated cache hit ratios per shard, tuned eviction policies, and benchmarked against Memcached.  
*Bias for Action*: Prototyped in 2 days, rolled out A/B test within a week, and iterated quickly based on metrics.

> **Leadership Principles:** *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
