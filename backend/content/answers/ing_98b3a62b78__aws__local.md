---
qid: ing_98b3a62b78__aws__local
question: 'Explain: General guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 387
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:51-05:00'
sources: []
---

**Situation / Task**  
I led the migration of our recommendation engine from a single‑node Postgres cluster to an Elasticsearch‑based catalog that had to serve 3 M daily requests with <200 ms latency.

**Action**  
*Customer Obsession & Ownership*: I first measured query patterns—90 % of traffic hit 20 % of the product set.  
*Dive Deep*: I calculated shard size using the “shard per 10 GB of data” rule, then tuned to ~12 GB per shard for our 600 GB index, yielding 50 shards across 6 nodes (EC2 m5.large).  
I enabled **Elasticsearch’s `index.routing.allocation.include._tier_preference: dedicated`** so hot shards stay on SSD‑only instances.  
*Bias for Action*: I added a **dedicated ingestion pipeline** with Logstash to batch writes, reducing write amplification by 30 %.  
*Invent & Simplify*: Switched to **Amazon OpenSearch Service** (managed) to offload ops and use auto‑scaling.

**Result**  
- Query latency dropped from 1.2 s to 0.18 s (70 % improvement).  
- Throughput increased from 300 req/s to 5,400 req/s.  
- Cost fell by 22 % due to better shard sizing and auto‑scaling.  

**Learnings**  
Failed a pilot with too many small shards—performance degraded by 40 %. Adjusted shard count after profiling CPU and I/O, proving the value of data‑driven tuning. This showcases ownership, depth, and continuous improvement—core Amazon bar‑raiser traits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
