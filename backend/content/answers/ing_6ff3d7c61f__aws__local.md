---
qid: ing_6ff3d7c61f__aws__local
question: 'Explain: They have a list of addresses.They map — How NETFLIX onboards
  new content: Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 476
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:10-05:00'
sources: []
---

**Situation & Task**  
At my previous role we received a nightly batch of 3 M new movie/TV‑show metadata records (title, synopsis, and up to 50 address‑based distribution rights). The business required us to ingest these, validate the addresses against our global CDN edge locations, and flag any conflicts before Netflix could stream the content. The goal was <12 h turnaround with <1 % error rate.

**Action**  
I architected a **serverless pipeline** on AWS:

| Step | Service | Reasoning |
|------|---------|-----------|
| Ingest & parse CSV | **Amazon S3 + Glue** | Scales to petabytes, cost‑effective for batch data. |
| Address validation | **AWS Lambda + Amazon DynamoDB (global table)** | Each lambda call checks address against a replicated lookup table; DynamoDB’s 99.9 % availability and low latency (<10 ms) keeps the pipeline in line with our SLA. |
| Conflict detection & enrichment | **Amazon Kinesis Data Streams** → **AWS Glue Streaming ETL** | Real‑time deduplication across shards, allowing us to surface conflicts within 30 s of ingestion. |
| Notification & rollback | **SNS + Step Functions** | Orchestrates retries and sends alerts to the operations team. |

I added a **CloudWatch dashboard** that auto‑scales Lambda concurrency based on queue depth, ensuring we never hit throttling during peak uploads.

**Result**  
- Turnaround dropped from 48 h to **10 h** (86% reduction).  
- Validation error rate fell from 3.2 % to **0.6 %**.  
- Cost per record decreased by **$0.002** through efficient use of serverless compute and DynamoDB Global Tables.

**Learning & Ownership**  
I proactively ran a failure‑mode analysis: when the address lookup table suffered a 20 % latency spike, I introduced an in‑memory cache (ElastiCache) to keep SLA intact. This “fail‑fast, recover‑quickly” mindset is what Amazon expects from its bar‑raisers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
