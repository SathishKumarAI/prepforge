---
qid: ing_54f6ee207a__aws__local
question: 'Explain: Job Completion: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 452
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:23-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑science team that had to deliver real‑time recommendations for an e‑commerce platform. The product owner asked whether we should use batch or stream processing for job completion.  

**Action**  
I scoped the requirements: *low latency (≤ 200 ms) for recommendation freshness*, *high throughput (≥ 10k events/s)*, and *cost control*. I mapped each approach:

| | Batch | Stream |
|---|---|---|
| **Processing model** | Periodic ETL jobs (e.g., nightly Spark) | Continuous ingestion with event‑driven micro‑services |
| **Latency** | Hours to days | Milliseconds |
| **Scalability** | Scale on demand via EMR / Redshift | Autoscaling Kinesis Data Streams + Lambda |
| **Cost** | Spot instances, amortized storage | Pay‑per‑use; burstable cost with reserved capacity |

I proposed a hybrid architecture:  
1. **Batch** – nightly Spark jobs on EMR to recompute long‑term user embeddings stored in DynamoDB.  
2. **Stream** – Kinesis Data Streams feeding Lambda functions that update short‑term feature vectors in Redis‑Cluster for instant lookup.

We used CloudWatch metrics to monitor latency and error rates, set alarms at 95th percentile thresholds, and applied Spot Instance pools for batch jobs, reducing compute cost by **35 %** while keeping SLAs.  

**Result**  
The hybrid model achieved <200 ms recommendation latency for 99.5 % of requests and cut infrastructure spend from $120k/month to $78k/month (−35 %). The solution was later adopted company‑wide, earning a **Leadership Award** for “Invent & Simplify” and “Deliver Results.”  

*Bar‑raiser notes:* I demonstrated ownership by owning the trade‑off analysis, dove deep into cost/latency metrics, quantified impact, and learned from an early mis‑estimate of stream throughput (adjusted Kinesis shard count).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
