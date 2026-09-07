---
qid: vq_96872fde13__aws__local
question: What is Deadlock?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 438
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:30-05:00'
sources: []
---

**Question: “What is Deadlock?” – Data Engineering**

*Situation & Task:*  
In a recent migration from on‑prem Hive to Amazon EMR (Spark) we hit intermittent job failures in our nightly ETL pipeline. The jobs would hang after acquiring locks on temporary tables, and the cluster would not recover until an operator restarted the step.

*Action:*  
I owned the investigation: I profiled Spark executors, examined Hive Metastore logs, and discovered a classic **deadlock** – two stages held exclusive locks on partitioned tables while waiting for each other’s lock release. To solve it, I re‑architected the pipeline to use **atomic S3 staging + Redshift COPY**:

1. Write intermediate data to an S3 prefix (`s3://bucket/tmp/…`).
2. Load into Redshift via `COPY` (which is transactional and does not require table locks).
3. Replace the target table with a CTAS that swaps in the new data atomically.

I also enabled **Redshift Spectrum** for on‑the‑fly queries, eliminating cross‑table locking entirely. The change was deployed in two AWS CodePipeline stages, costing <$5/day vs. $120/day spent on manual restarts previously.

*Result:*  
Deadlock incidents dropped from 12/month to 0; pipeline SLA improved from 95% to >99.9%. We saved ~30 hours of ops time per week and reduced cost by 40 %.  

**Leadership Principles:**  
- **Ownership** – I took full responsibility for the failure and its resolution.  
- **Dive Deep & Deliver Results** – I traced logs, profiled executors, and quantified impact before implementing a scalable, cost‑effective fix.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
