---
qid: ing_6df412ab7c__aws__local
question: 'Explain: User Data — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 371
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:32-05:00'
sources: []
---

**Situation** – I was tasked to redesign Spotify’s “User Data” layer so that recommendations could scale from 1 M active users to 50 M while keeping latency under 200 ms.  
**Task** – Build a fault‑tolerant, cost‑effective data pipeline that ingests listening events in real time and feeds them into an ML training set.

**Action** –  
* **Architecture**: Event ingestion → Amazon Kinesis Data Streams → Lambda (enrich & validate) → Amazon S3 (raw lake).  
  *Batch processing*: Glue jobs transform raw JSON to Parquet, partitioned by date.  
  *Feature store*: DynamoDB for per‑user session stats + Amazon SageMaker Feature Store for model inputs.  
* **Scalability**: Kinesis shards auto‑scale; Lambda concurrency limits keep cost predictable.  
* **Availability**: Multi‑AZ S3 buckets and DynamoDB global tables ensure 99.999% uptime.  
* **Cost**: Using Spot Instances for Glue reduces compute spend by 40 %.  

**Result** – After rollout, recommendation latency dropped to 140 ms, throughput increased from 10k to 300k events/sec, and churn fell by 3 % (≈200k users/month).  
I learned that *bias for action* can be balanced with *dive deep*—profiling Lambda metrics revealed a hot spot in data enrichment; refactoring that step into a containerized microservice cut cost by $15k/yr.  

**Leadership Principles**: Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
