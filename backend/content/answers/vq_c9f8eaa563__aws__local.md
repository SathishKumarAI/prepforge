---
qid: vq_c9f8eaa563__aws__local
question: Difference between Narrow & wide transformations?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 395
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:19-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I was asked to explain *narrow* vs. *wide* transformations while designing a real‑time clickstream pipeline for an e‑commerce platform.  
**Situation:** Our ingest layer received 5 M events per day; we needed to enrich, aggregate, and store them with <10 s latency.  

**Task:** Choose the right transformation type to keep throughput high and costs low.  

**Action (Technical):**  
- **Narrow transforms** (e.g., `map`, `filter`) touch each record once and have no shuffle; I implemented these in AWS Glue Spark jobs to add user metadata.  
- **Wide transforms** (`reduceByKey`, `join`) cause a full data shuffle; I limited them to only the final aggregation step executed on an Amazon EMR cluster with spot instances, using partitioned Parquet tables in S3 for cost‑effective storage.  

I also used AWS Kinesis Data Analytics for low‑latency windowed aggregations and DynamoDB for real‑time lookups, ensuring high availability via multi‑AZ deployments.

**Result:**  
- Reduced pipeline latency from 45 s to **<10 s** (90% improvement).  
- Cut compute costs by **35 M USD per year** by avoiding unnecessary wide operations.  

**Leadership Principles Anchored:** *Customer Obsession* – delivering instant insights for personalized recommendations; *Ownership* – architecting a scalable, cost‑efficient solution from scratch.

**Bar‑raiser Takeaway:** Showed deep dive into data flow, quantified impact, and lessons learned: “If we had kept all joins in the first stage, latency would have ballooned beyond SLA.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
