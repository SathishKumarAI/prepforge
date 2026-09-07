---
qid: ing_d5fbcc3a47__aws__local
question: 'Explain: Performance Tuning of ElasticSearch — Performancetuning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 451
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:08-05:00'
sources: []
---

**Situation & Task (S)**  
While launching a real‑time analytics platform for an e‑commerce retailer, the search layer on **Amazon OpenSearch Service** was returning 250 ms latency at peak traffic (10k queries/sec). The business required <100 ms to maintain conversion rates.

**Action (A)**  
1. **Ownership & Dive Deep** – I took full ownership of the cluster and began by capturing metrics from CloudWatch, ES stats, and query logs.  
2. **Index Design** – Re‑structured mappings: removed unnecessary fields, used `keyword` for exact matches, and added a `doc_values` field for aggregation.  
3. **Shard & Replica Tuning** – Reduced shard count to 1 per node (from 5) and increased replicas from 1 to 2 to improve read throughput while staying within budget.  
4. **Query Refactor** – Rewrote expensive full‑text queries into `bool` filters + `terms` where possible; added a dedicated *search* index with pre‑computed facets.  
5. **Hardware Choice** – Switched from `t3.medium.elasticsearch` to `r6g.large.elasticsearch` (ARM 64, 16 GiB RAM) and leveraged **Provisioned Concurrency** on Lambda for query orchestration.  
6. **Monitoring & Autoscaling** – Enabled OpenSearch’s *Cluster Autoscaler* with CloudWatch alarms (CPU >70% → add node).  

**Result (R)**  
- Latency dropped from 250 ms to **78 ms** (‑68%).  
- Throughput increased from 10k to 18k queries/sec (+80%) without exceeding the $200/month budget.  
- Search‑to‑conversion rate improved by **12%**, directly boosting revenue.

**Reflection** – The first tuning pass over‑sharded; learning that fewer, larger shards + targeted mappings give better performance. I documented the process in a “Search Tuning Playbook” now used across all data teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
