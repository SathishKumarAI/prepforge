---
qid: ing_997cb7b370__aws__local
question: 'Explain: Enroll nodes in an existing cluster — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 587
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:33-05:00'
sources: []
---

**Situation – Task:**  
At my previous role I managed a production Elasticsearch (ES) index that grew from 4 TB to 12 TB in six months while keeping query latency under 200 ms. The cluster was running on EC2 Spot instances behind an Auto‑Scaling group (ASG). When the data volume hit 10 TB, we needed to add nodes without downtime and later remove them when traffic subsided.

**Action – Design & Execution:**  
1. **Capacity Planning** – Calculated required shards (≈ 100 shards per node) and used *Elasticsearch’s* `cluster.routing.allocation.cluster_concurrent_rebalance` for controlled rebalancing.  
2. **Infrastructure** – Created a new ASG with larger `m5.xlarge` instances, attached 500 GB EBS gp3 volumes, and enabled *EBS Multi‑AZ* for durability.  
3. **Zero‑Downtime Rollout** – Used the ES API `cluster/reroute` to add nodes gradually (max 2 per hour). Monitored GC pause times (< 30 ms) via CloudWatch; if any spike > 100 ms, rolled back one node.  
4. **Removal Path** – When traffic dropped, we decommissioned nodes by draining shards (`cluster/reroute` with `dry_run=true`) and then terminated the ASG instances after a 5‑minute safety window.  
5. **Automation & Cost Control** – Wrote Lambda (Python) to trigger snapshot backups on S3 every night, automatically deleting snapshots older than 30 days, keeping storage cost < $1k/month.

**Result – Impact:**  
- Added 6 nodes in 12 hours with < 5 % increase in latency.  
- Reduced monthly EC2 spend by 35 % after scaling down during off‑peak periods.  
- Maintained 99.99 % uptime throughout the transition, meeting SLA and earning a “Customer Obsession” commendation.

**Reflection – Learnings:**  
The key was *dive deep* into cluster metrics to pre‑emptively tune rebalance limits; we avoided a costly 2‑hour outage that could have hit our SLAs. I also instituted a post‑mortem process for scaling events, ensuring continuous improvement and ownership of the data pipeline.

> **Leadership Principles Anchored:** *Customer Obsession* (keeping latency low), *Ownership* (end‑to‑end lifecycle management), *Dive Deep* (metric‑driven tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
