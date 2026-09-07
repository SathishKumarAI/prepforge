---
qid: vq_ab0a8d99bc__aws__local
question: what is hbase compaction technique and write operation hbase using spark??
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 571
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:27-05:00'
sources: []
---

**Situation (S)**  
In my last role I was tasked to reduce the latency of a real‑time analytics pipeline that ingested 2 TB of log data daily into an HBase cluster on **Amazon EMR**. The existing compaction strategy caused read spikes during peak hours, hurting downstream BI reports.

**Task (T)**  
I had to design a more efficient compaction schedule and rewrite the ingestion job using Spark so it could run in under 30 minutes while keeping costs < $3k/month.

**Action (A)**  

1. **HBase Compaction** – I switched from *manual* major compactions every 6 hrs to an *auto‑minor* policy with a *threshold of 10%* and enabled *compaction split size* tuning.  
   - **Why?** Minor compactions merge only the newest SSTables, keeping hot data in memory; major compactions are scheduled only when cumulative file size > 50 GB.  
2. **Spark Write to HBase** – I used **`org.apache.hadoop.hbase.spark.HBaseContext`** with a *batch size of 10k* and *parallelism = 40* (equal to the EMR core nodes).  
   - Data was pre‑aggregated in Spark, then written via `Put` objects batched into HTable’s `BufferedMutator`.  
3. **AWS Services & Trade‑offs** –  
   - **EMR + S3** for durable storage and cost control (S3 lifecycle to Glacier after 90 days).  
   - **Amazon CloudWatch** for metrics; triggered Lambda to scale EMR nodes during ingestion peaks.  
   - **Cost:** Reduced node hours by 35 % vs the previous 12‑node cluster.

**Result (R)**  
Post‑implementation, read latency dropped from 8 s to < 1.5 s during peak windows, and daily ingestion completed in 18 minutes— a 40 % faster pipeline with $2.7k/month savings.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Faster reports improved business decision‑making.  
- **Ownership & Dive Deep:** I analyzed HBase internals to craft the compaction policy and tuned Spark batch sizes for optimal throughput.  

This experience taught me that *small, data‑driven tweaks* can yield large operational gains—an insight I’ll bring to any AWS‑based data platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
