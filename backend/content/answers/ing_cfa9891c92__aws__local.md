---
qid: ing_cfa9891c92__aws__local
question: What Is HDFS? — Storing Apache Hadoop Data on the Cloud - HDFS vs. S3 |
  Integrate.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 408
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:10-05:00'
sources: []
---

**Answer (Amazon style)**  

*Situation:* In a recent migration project I led the shift of an on‑prem Hadoop analytics pipeline to AWS for a media company that generated ~4 TB/day of log data. The goal was to reduce storage cost by 30% while maintaining query performance.

*Task:* Replace HDFS with S3 as the primary data lake, ensuring compatibility with Spark/Presto and preserving fault tolerance.

*Action:*  
- **Design**: Deployed an EMR cluster using *S3FS‑backed* Hadoop for legacy compatibility, then gradually switched to *Amazon EMR on EKS* with *Amazon FSx for Lustre* for high‑throughput workloads.  
- **Services**: S3 (object storage), Glacier Deep Archive (cold tier), Athena (serverless query) and Lake Formation (catalog & security).  
- **Scalability/Availability**: Leveraged S3’s 99.999999999% durability, cross‑region replication for DR, and autoscaling EMR to match peak ingest bursts (~200 GB/hr).  
- **Cost**: Reduced storage from $0.12/GB (HDFS on EBS) to $0.023/GB in S3 Standard + $0.004/GB in Glacier, cutting annual spend by ~$360k.

*Result:* Achieved a 2× faster query latency for BI reports and cut costs by 32% within six months. Learned that *“Customer Obsession”* drives choosing the right storage tier, while *“Dive Deep”* ensures we understand trade‑offs between consistency models and performance.

**Bar‑raiser notes:** Look for ownership (project lead), depth (design details), quantified impact (cost & latency metrics), and lessons learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
