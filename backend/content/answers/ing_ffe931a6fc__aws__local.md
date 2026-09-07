---
qid: ing_ffe931a6fc__aws__local
question: What Is Amazon S3? — Storing Apache Hadoop Data on the Cloud - HDFS vs.
  S3 | Integrate.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 472
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:24-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑engineering sprint for a fintech client that had to migrate an on‑prem Hadoop cluster (≈ 5 TB of raw logs) to the cloud to support real‑time fraud‑detection ML pipelines. The goal was to reduce operational overhead while keeping query latency under 2 s.

**Action**  
1. **Storage Choice:** I evaluated HDFS vs. S3.  
   *HDFS* is write‑optimized but requires a dedicated cluster, expensive to scale and maintain.  
   *S3* offers virtually unlimited capacity, low cost (≈ $0.023/GB/month), strong durability (12 x 9s), and native integration with EMR, Glue, Athena, and SageMaker.  
2. **Migration** – Used **AWS DataSync** to stream data into S3 in 4 GiB chunks, preserving ACLs.  
3. **Processing Layer** – Deployed an **EMR cluster** (10 m5.xlarge nodes) with Spark jobs that read from S3 using the *S3A* connector, then wrote processed features back to a partitioned Parquet bucket.  
4. **Serving Layer** – Set up **Athena** for ad‑hoc analytics and **SageMaker Endpoint** for inference, both pulling directly from the same S3 location.

**Result**  
- Migration completed 30 % faster than projected (8 days vs. 12).  
- Operational cost dropped 70 % (from $18k to $5.6k/month).  
- Query latency fell to < 1.5 s, enabling near‑real‑time fraud alerts.

**Learnings & Ownership**  
I documented trade‑offs: S3’s eventual consistency vs. HDFS’s strong consistency; EMR’s spot‑instance cost savings vs. reliability. I built a monitoring dashboard (CloudWatch + Grafana) to alert on data latency, ensuring continuous ownership of the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
