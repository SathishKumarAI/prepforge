---
qid: ing_a3d4774361__aws__local
question: How does shard size affect performance? — How many shards should I have
  in my Elasticsearch cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 405
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:47-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a migration of our log‑analytics platform from an on‑prem Elasticsearch cluster to Amazon OpenSearch Service for the finance team. The old cluster had 40 GB indices split into 20 shards; queries started taking 5–10 s during peak hours, causing SLA breaches.

**Task (T)**  
I was tasked with tuning shard count and size so that query latency dropped below 1 s while keeping cost < $3k/month.

**Action (A)**  
* **Dive Deep** – I collected per‑shard metrics: CPU, heap usage, GC pause, and search latency.  
* **Design** – OpenSearch recommends 2–4 GB per shard for typical workloads. Using the AWS “Shards & Index Size” guide, I re‑partitioned each index into ~3 GB shards, reducing total from 20 to 12 shards.  
* **Implementation** – Leveraged *Index Lifecycle Management* (ILM) and *OpenSearch Snapshots* on S3 for durability. Added an *Amazon CloudWatch* alarm on search latency > 2 s.  
* **Bias for Action** – Re‑indexed overnight with minimal downtime, using the “reindex” API to preserve data integrity.

**Result (R)**  
Query latency fell from 7.8 s to 0.9 s (92% improvement). Monthly cost dropped by $1.2k due to fewer data nodes. The team reported a 35% increase in user satisfaction scores on the analytics portal.  

*Bar‑raiser note:* I demonstrated ownership, quantified impact, and learned that shard size must balance CPU/heap overhead against node count—an insight I shared with my peers during a post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
