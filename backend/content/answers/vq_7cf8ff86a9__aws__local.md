---
qid: vq_7cf8ff86a9__aws__local
question: How do I order a union ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 538
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:58-05:00'
sources: []
---

**Situation**  
I was hired as a senior backend engineer for an e‑commerce platform that needed to merge two massive user‑segment tables (`active_users` and `new_signups`) into a single sorted stream for real‑time recommendation scoring. The raw data set exceeded 10 GB per day, and the downstream service required *O(n log n)* time and ≤ 200 ms latency.

**Task**  
Design an efficient “order‑by‑union” pipeline that scales horizontally on AWS while keeping cost under $3k/month and ensuring fault tolerance.

**Action**  
1. **Extract**: Use **AWS Glue** to run a nightly ETL job, exporting each table into columnar Parquet files in S3 (reduces I/O by 60 % vs CSV).  
2. **Union & Sort**: Leverage **Amazon EMR on Spark** with the `union` and `sortByKey` transformations. Spark’s built‑in T‑partitioning guarantees *O(n log n)* complexity, while the cluster auto‑scales to 8 m5.xlarge nodes (≈ $0.12/hr).  
3. **Persist**: Write the sorted result back to S3 in a partitioned Parquet format (`/sorted_users/year=…/month=…`).  
4. **Serve**: Query with **Amazon Athena** or **Redshift Spectrum**, both serverless, providing instant results without provisioning clusters.

**Result**  
The pipeline processed 12 TB of daily data, cutting union‑sort latency from 1.2 s to 180 ms (a 99 % reduction). Monthly cost stayed at $2.7k. The system handled peak spikes of 3× traffic with zero downtime.

---

### Leadership Principles  
- **Ownership**: I owned the entire data‑flow, from ingestion to serving, and proactively tuned cluster size based on usage patterns.  
- **Dive Deep**: I profiled Spark jobs, identified shuffle bottlenecks, and optimized partitioning schemes.  

### Bar‑raiser cues  
- Quantified impact (latency, cost).  
- Demonstrated end‑to‑end ownership and deep technical trade‑offs.  
- Reflected on a failure: an initial Glue job produced corrupted Parquet; I added schema validation and automated retries, learning to guard against data corruption early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
