---
qid: ing_65158ac9a7__star__local
question: 'Explain: General sizing guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:42-05:00'
sources: []
---

**Situation** – In my last role I was leading the migration of a legacy log ingestion pipeline to an Elasticsearch cluster that needed to support 2 TB of daily data while keeping query latency under 100 ms for real‑time dashboards.

**Task** – My goal was to design shard allocation and index sizing so we avoided “hot shards” and kept node memory usage below 70 % over a year’s growth.

**Action** – I started by estimating the average document size (≈ 2.5 KB) and daily write volume, then calculated an optimal shard count:  
- *Number of primary shards* = ceil((daily data × 365) / (shard‑size‑target)).  
I set a target shard size of 50 GB, which gave me 80 primaries. I also added 1 replica for high availability.  
Next, I used the “rollover” API with an index lifecycle policy: each index capped at 500 GB or 30 days before auto‑rolled over. This kept shards fresh and allowed us to delete old indices after 90 days without impacting search performance. Finally, I monitored JVM heap usage via X-Pack Monitoring; when memory hit 75 %, the policy triggered a reindex with larger shards.

**Result** – The cluster handled peak writes of 4 M docs/sec with < 95 ms average query latency and stayed within budgeted node counts (12 data nodes). We reduced disk costs by 15 % through efficient shard sizing, and my team adopted the same guidelines for all future Elasticsearch projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
