---
qid: ing_d86a7e613b__aws__local
question: 'Explain: The Interview Question — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 440
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:47-05:00'
sources: []
---

**Situation – Task**  
While leading a product‑engineering team at a fintech startup, we had to expose millions of transaction logs to analysts in near‑real time for fraud detection. The existing batch‑based search (Elasticsearch nightly index) caused 30 min latency, which meant we missed the 5‑minute window Amazon’s own Fraud‑Detection Service uses.

**Action – Design & Implementation**  
I proposed a hybrid architecture:

1. **Kinesis Data Streams** → ingest raw logs in < 200 ms.  
2. **Lambda + DynamoDB Streams** → transform and write to a *DynamoDB Global Secondary Index* (GSI) keyed by `merchant_id#timestamp`.  
3. **OpenSearch Service** (managed Elasticsearch) with *Realtime Indexing* enabled, using Lambda to push updates as they arrive.  

We used **AWS AppConfig** for feature flags so analysts could toggle between the legacy batch index and the new stream‑based index without downtime.

- **Scalability:** Kinesis shards auto‑scaling handled 10 M records/second.  
- **Availability:** OpenSearch cluster deployed across three AZs, backed by EBS gp3 with Multi-AZ snapshots.  
- **Cost:** Reduced S3 batch jobs by 80 %, Lambda invocations saved $0.12 per million requests.

**Result – Impact**  
Query latency dropped from 30 min to < 5 sec for 95 % of requests, increasing fraud‑detection success rate by **27 %** (from 65 % to 92 %). We also cut operational cost by $18k/month.  

**Reflection – Learnings & Ownership**  
I owned the migration from design through rollout, performed a post‑mortem that highlighted the need for better monitoring of stream lag (implemented CloudWatch metrics). This reinforced *Ownership* and *Dive Deep*, ensuring we delivered measurable results while maintaining high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
