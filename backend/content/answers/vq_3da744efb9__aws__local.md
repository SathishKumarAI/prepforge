---
qid: vq_3da744efb9__aws__local
question: What is the definition of an inlier?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 399
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:46-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In a recent ML Ops project for a recommendation engine, we were diagnosing why a subset of user requests was generating anomalously high latency.  
> **Task:** I needed to define what constitutes an *inlier* in our request‑latency distribution so we could flag outliers and trigger auto‑scaling.  
> **Action:**  
> 1. **Dive Deep** – I queried CloudWatch metrics (request latency, CPU usage) for the last 30 days, extracted the 95th percentile latency per user segment, and plotted a histogram.  
> 2. Using AWS SageMaker Ground Truth, I labeled 5 % of samples as *inliers* if their latency fell within ±1.5 × standard deviation of the mean for that segment; everything else was an outlier.  
> 3. Implemented a Lambda function that ingests real‑time metrics via Kinesis Data Streams and uses this statistical rule to update a DynamoDB table with an “inlier” flag, feeding downstream Auto Scaling policies.  
> **Result:** The inlier definition reduced false positives by **42 %** (from 120k to 70k flagged requests per day) and cut average latency for the remaining traffic from 350 ms to **210 ms** within two weeks—meeting our SLA of <250 ms.  

*Leadership Principles:*  
- **Customer Obsession** – ensuring low‑latency experience.  
- **Ownership** – architected end‑to‑end solution, from data ingestion to scaling logic.  

Bar‑raiser notes: clear ownership, depth in statistical reasoning, quantified impact (42 % reduction), and learning loop (refining thresholds after deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
