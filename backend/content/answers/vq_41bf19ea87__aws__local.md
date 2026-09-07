---
qid: vq_41bf19ea87__aws__local
question: How do I get a top ten?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 411
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:16-05:00'
sources: []
---

**Situation & Task**

When I joined the new data‑science team at **Amazon**, we were asked to deliver a *Top‑10* product recommendation list for each customer within 5 minutes of purchase. The goal was to increase click‑through rate (CTR) by at least 15% while keeping per‑request latency under 200 ms.

**Action**

1. **Ownership & Dive Deep** – I scoped the problem: we had 3 TB of user logs, a 10 k product catalog, and a real‑time clickstream pipeline in Kinesis.  
2. **Design** – Built an *incremental LTR* model on SageMaker using LightGBM (feature set = last 5 interactions + product metadata). Deployed as a Lambda@Edge function behind CloudFront for sub‑200 ms latency.  
3. **Scalability & Cost** – Leveraged DynamoDB Global Tables for real‑time feature store, auto‑scaling on read/write capacity; used Spot Instances for training (≈ $0.02/hr vs $0.08/hr).  
4. **Bias for Action** – Rolled out A/B test in 10% traffic immediately after a week of data ingestion.

**Result**

- CTR rose from 3.2 % to **4.7 %** (+46%) within the first month.  
- Latency averaged **150 ms**, meeting SLA.  
- Cost per request dropped by **30 %** due to Spot usage and Lambda concurrency throttling.

**Learning**

The biggest failure was an initial over‑engineered feature pipeline that increased latency. After profiling with CloudWatch, I simplified the feature set, which saved 60 ms per request and reduced debugging time. This reinforced my belief in *Invent & Simplify* and *Customer Obsession*: delivering a fast, accurate recommendation directly improves customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
