---
qid: ing_177b1717c0__aws__local
question: 'Explain: When to choose sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 428
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:48-05:00'
sources: []
---

**Situation / Task**

I led a data‑platform team that had to ingest ~10 GB of telemetry per day from thousands of IoT devices. The dataset grew 30% quarterly, and latency for real‑time analytics dropped below 200 ms. Our existing single‑node MongoDB cluster was hitting the 64 GB limit and read/write stalls.

**Action**

I performed a *Dive Deep* analysis:

1. **Workload Profiling** – 70 % of reads were range queries on `device_id` + timestamp, writes were bulk inserts.
2. **Shard Key Selection** – Chose `{ device_id: 1 }` because it evenly distributed writes and allowed hot‑spotting mitigation.
3. **Cluster Design** – Deployed a *sharded* cluster with:
   - **Config servers** (RAID Z, 3 nodes) for metadata.
   - **Mongos routers** (2 nodes) behind an Application Load Balancer for horizontal scaling.
   - **Shard replica sets** (each 3 nodes: primary + 2 secondaries) spread across two AZs for *Availability*.
4. **Scalability & Cost** – Auto‑scaling of sharding nodes via EC2 Spot Instances reduced cost by ~35 % while maintaining SLA.

I also scripted automated rebalancing and monitored using CloudWatch, alerting on chunk size anomalies.

**Result**

- Throughput increased from 200 ops/s to **1.4k ops/s** (7×).
- Read latency dropped from 180 ms to **45 ms**.
- Monthly cost fell by **$3,500** versus a single‑node upgrade path.
- Incident response time improved: we resolved a previous write‑throughput incident in <15 min.

**Reflection**

I owned the migration, learned that careful shard key selection is critical, and built a reusable blueprint for future projects. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
