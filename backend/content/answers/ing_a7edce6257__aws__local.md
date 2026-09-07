---
qid: ing_a7edce6257__aws__local
question: 'Explain: DoorDash System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:32-05:00'
sources: []
---

**Situation & Task**  
At DoorDash I led a squad tasked with redesigning the “Dynamic ETA” feature that feeds riders and customers real‑time arrival estimates. The existing monolith was 3× slower than our SLA (≤ 5 s) and crashed during peak hours, hurting driver satisfaction by 12% and customer churn by 4%.  

**Action**  
I proposed a **serverless micro‑service** pipeline:  
- **API Gateway + Lambda** for low‑latency request handling.  
- **Amazon Kinesis Data Streams** ingest live GPS events (≈ 200k events/second).  
- **AWS Step Functions** orchestrate an ML inference workflow that calls an **SageMaker endpoint** (XGBoost model) to compute ETA, then pushes results to **DynamoDB** for caching.  
- **CloudWatch + X-Ray** provide observability; I added a fallback rule‑based estimator in Lambda to guarantee 99.5% availability when the ML service is throttled.

**Result**  
Post‑deployment, average ETA latency dropped from 12 s to 3.8 s (a 68% improvement), peak‑hour failure rate fell by 87%, and driver‑reported “on‑time” scores rose 18%. Cost was kept below $5k/month due to the pay‑per‑use Lambda model, saving ~30% over our previous EC2 fleet.

**Reflection**  
I took full **Ownership** of the feature, diving deep into telemetry to surface bottlenecks. The iterative A/B test taught me that coupling serverless with a fallback rule engine balances **Bias for Action** and risk mitigation—key lessons I now apply whenever scaling ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
