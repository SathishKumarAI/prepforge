---
qid: ing_903d743f13__aws__local
question: 'Explain: Example: URL Deduplication — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 384
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:06-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had a catalog of 3 billion product URLs and the recommendation engine was ingesting duplicates every day, inflating storage by 12 GB/month and slowing query latency by 35 %. I owned the “URL Deduplication” service to eliminate duplicates before they reached downstream systems.  

**Action (Design)**  
I chose a **Bloom filter** as the probabilistic pre‑filter:  
- **AWS Lambda** (10 ms cold start) streams new URLs from Kinesis into an in‑memory filter;  
- The filter is stored in **Amazon ElastiCache Redis** with sharding for 100 % read/write throughput and a TTL of 30 days to keep memory bounded.  
- When a URL passes the filter, it’s forwarded to **S3 (Object Lifecycle)** for permanent storage and an event triggers **Step Functions** that writes a record into DynamoDB for analytics.  

I performed a cost‑benefit analysis: Bloom filter false positives <0.5 % → 1.6 M false positives per day vs. 3 billion records, saving ~$2K/month on S3 storage and reducing Lambda invocations by 80 %.  

**Result**  
The system reduced duplicate ingestion by **97 %**, cut downstream query latency from 250 ms to 60 ms, and saved **$24K annually**. I documented the trade‑offs (false positives vs. memory) and iterated with a post‑mortem that highlighted the importance of *Ownership* and *Dive Deep*.  

> **Leadership Principles:** Ownership, Dive Deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
