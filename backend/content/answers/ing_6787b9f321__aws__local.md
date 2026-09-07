---
qid: ing_6787b9f321__aws__local
question: Only Four Circles? — Clean Coder Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 415
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:55-05:00'
sources: []
---

**Situation**  
At my previous firm we had a recommendation engine that was delivering stale results because the model pipeline only ran once a week. The data drift caused a 12 % drop in click‑through rate (CTR) and a 9 % increase in user churn within three months.

**Task**  
I owned the end‑to‑end refactor: from ingestion to production inference, with a goal of reducing latency to <200 ms while keeping cost under $0.02 per inference.

**Action**  
*Customer Obsession & Ownership* – I first mapped the customer journey and identified that 85 % of requests came from mobile users in a single region.  
*Dive Deep & Invent & Simplify* – I redesigned the pipeline using **AWS Lambda + Step Functions** for orchestrating data preprocessing, **S3** for raw artefacts, **Amazon SageMaker Endpoint (Inference Scheduler)** for real‑time scoring, and **DynamoDB Streams** to trigger incremental model updates.  
*Bias for Action* – Deployed a blue/green rollout with **AWS CloudWatch A/B testing**, rolling back after 5 % degradation in latency.  
*Deliver Results* – The new pipeline lowered inference latency from 1.2 s to 180 ms, increased CTR by 18 %, and reduced monthly spend from $12k to $6k.

**Result**  
Within one quarter we achieved a **+25 % revenue lift** attributable to the recommendation engine, while keeping SLA compliance at 99.9 %. The solution is fully serverless, scales automatically with traffic spikes, and costs < $0.015 per inference—well below the original budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
