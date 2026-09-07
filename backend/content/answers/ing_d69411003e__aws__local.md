---
qid: ing_d69411003e__aws__local
question: How Does Distributed Caching Work? — What is Distributed Caching? - by Ashish
  Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 429
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:30-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a feature that had to serve real‑time ad inventory for 10 M users per day. The naïve database lookup hit latency of 200 ms and cost $12K/month in RDS reads.

**Action (Design)**  
I introduced **distributed caching** using *Amazon ElastiCache* with Redis clusters (sharded across three AZs).  
- **Data model:** key = `ad:{campaignId}:{userId}` → JSON payload.  
- **Eviction policy:** `ALLKEYS-LRU` to keep the hottest 1 M keys in‑memory.  
- **Consistency:** Write‑through cache – every DB write first updates Redis, then async writes to DynamoDB via Lambda.  
- **Failover & Scaling:** Auto‑scaling groups for node replacement; cross‑region replication for disaster recovery.

**Result**  
Latency dropped from 200 ms → 15 ms (99th percentile). Cache hit rate reached 93%, cutting RDS reads by 80% and reducing costs to $3.2K/month. The system handled a 4× traffic spike during a campaign launch without degradation.

**Reflection**  
- **Ownership:** I owned the end‑to‑end data flow and rolled out monitoring dashboards (CloudWatch + Grafana).  
- **Dive Deep:** Tracked eviction patterns, tuned shard count, and performed A/B tests to confirm ROI.  
- **Learning:** Initial mis‑config of `maxmemory-policy` caused stale reads; after adding a cache‑miss audit, we eliminated that issue.

**AWS Leadership Principles Highlighted**  
1. *Customer Obsession* – delivering sub‑20 ms experience for millions.  
2. *Ownership & Dive Deep* – owning performance, iterating on metrics, and learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
