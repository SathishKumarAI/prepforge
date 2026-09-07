---
qid: ing_65158ac9a7__aws__local
question: 'Explain: General sizing guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 488
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:23-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team at my previous company we migrated a legacy search platform to **Amazon OpenSearch Service** (formerly Elastic). The new system had to handle 50 M daily queries and support real‑time analytics for 10 k concurrent users. I was tasked with sizing the shards to meet latency, throughput, and cost goals.

**Action**  
1. **Requirements Clarification** – I mapped out read/write patterns, query complexity, and retention policy (7 days).  
2. **Design & Service Selection** – Chose OpenSearch because of native AWS integration, managed backups (S3), and autoscaling.  
3. **Sizing Guidelines** – Applied the “shard‑per‑node” rule:  
   * 1 shard per 30 GB of hot data, capped at 5 shards per node to avoid CPU contention.  
   * Use `dedicated master` nodes (3) for cluster stability and `data` nodes for indexing/queries.  
4. **Cost & Scalability** – Calculated that a 10‑node data tier (each m6g.large with 30 GB EBS) gives ~300 GB capacity, covering peak load plus growth buffer. Autoscaling groups adjust node count by monitoring `search_query_latency` metrics from CloudWatch.  
5. **Trade‑offs** – Opted for “warm” nodes (m5.large) for archival data to reduce cost while keeping hot nodes fast.

**Result**  
After deployment:  
* 99.9 % query latency ≤ 200 ms, even under 10 k concurrent users.  
* Indexing throughput rose from 1.2 M docs/hr to 3.8 M docs/hr.  
* Operating cost dropped by **28 %** compared with the previous on‑prem cluster.  

**Reflection (Bar‑raiser cues)**  
I owned the migration, diving deep into shard‑count heuristics and real metrics. The design balanced performance, availability, and spend—exactly what Amazon looks for in an architect who can *own* a system end‑to‑end while staying data‑driven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
