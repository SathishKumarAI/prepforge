---
qid: ing_7bd5c11a89__aws__local
question: 'Explain: 2.1 Consistency — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 417
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:29-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*

**S – Situation**  
I led a migration of our recommendation engine from an on‑prem cluster to Amazon Aurora + S3 for a media platform that serves 4 M daily users. The team needed strong data consistency while keeping latency <200 ms.

**T – Task**  
Design a distributed system that satisfies the CAP theorem: **Consistent, Available, Partition‑tolerant**, with minimal read/write conflict and cost efficiency.

**A – Action**  
1. Adopted **Aurora Global Database** (single‑write, multi‑read) to guarantee *strong consistency* across regions.  
2. Implemented a **Lambda @Edge + CloudFront cache** for read amplification; invalidation on write via SNS triggers.  
3. Used **SQS FIFO queues** for idempotent update pipelines, ensuring *partition tolerance*.  
4. Employed **DynamoDB Accelerator (DAX)** for hot keys, reducing read latency to <10 ms.  
5. Enabled **Aurora Serverless v2** auto‑scaling to handle 30% traffic spikes without overprovisioning.

**R – Result**  
- Consistency violations dropped from 3.7 % to <0.01 %.  
- Read latency improved from 350 ms to 120 ms (average).  
- Cost decreased by 28 % YoY due to serverless scaling and cache hit rate of 92 %.  

**Learnings** – The trade‑off between *Availability* and *Consistency* is context‑dependent; our data showed that users value accurate recommendations over marginally faster reads. Future iterations will explore *Eventual Consistency* for less critical metrics, freeing compute for high‑value features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
