---
qid: ing_1f83779c90__aws__local
question: 'Explain: Index lifecycle management (ILM) — Elasticsearchstreams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 547
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:24-05:00'
sources: []
---

**Answer – Amazon Way**

**Situation:**  
In my last role I was tasked to reduce storage costs for our log analytics platform while keeping query latency under 50 ms. The data lived in an **Elasticsearch (ES) cluster** and grew at ~10 TB/month, so we needed a policy that moved hot logs to cheaper tiers without breaking SLA.

**Task:**  
Implement **Index Lifecycle Management (ILM)** for the ES indices that are fed by **Amazon Kinesis Data Streams**. The goal was to automate the rollover from *hot* to *warm*, *cold*, and finally *delete* stages, keeping 30 days of hot data in SSD-backed nodes and archiving older shards to S3 via ILM’s `read-only` + `s3` actions.

**Action:**  
1. **Defined ILM policy** with phases:  
   - *Hot*: index size ≤ 50 GB, node type `r5.large.elasticsearch`.  
   - *Warm*: after 7 days → transition to `i3.xlarge.elasticsearch` (NVMe SSD).  
   - *Cold*: after 30 days → move shards to `t3.medium.elasticsearch` and set read‑only.  
   - *Delete*: after 90 days → remove index and archive snapshot to S3.

2. **Integrated with Kinesis**: each stream record triggered an ingest pipeline that stamped the timestamp, ensuring correct rollover.  

3. **Monitored with CloudWatch**: set alarms on shard count and free disk space; adjusted policy thresholds when we hit a 15 % spike in ingestion rate during peak season.

4. **Cost analysis**: after rollout, storage cost dropped from $18k/month to $12k/month (≈33 %) while query latency remained < 45 ms for 95th percentile.

**Result:**  
*Owned* the full end‑to‑end solution, *dived deep* into ES internals and Kinesis integration, and delivered a **data‑driven impact**: 33 % cost savings and maintained performance. I learned that ILM policies must be continuously tuned against real traffic patterns—failure to do so can lock us into expensive hot tiers.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for the data lifecycle, from policy design to monitoring.
- **Dive Deep** – Analyzed shard metrics, Kinesis throughput, and ES node types to fine‑tune ILM phases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
