---
qid: ing_87264c83c1__aws__local
question: 'Explain: Learner reviews — Machine Learning in Production | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:45-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the “ML‑in‑Production” revamp of a recommendation engine that served 12 M daily active users (DAU). The existing pipeline was monolithic, had >3 h batch latency, and hit a 1.5 % error rate on new feature rollouts.

**Action – Design & Execution**  
*Customer Obsession + Ownership* – I re‑architected the stack into a fully serverless, event‑driven workflow:  
- **AWS SageMaker Pipelines** for CI/CD of model training (auto‑scaling to 8 GPU nodes).  
- **SageMaker Model Registry & Endpoint** with A/B testing via **Amazon API Gateway + Lambda**.  
- Real‑time inference through **Amazon Kinesis Data Streams → Lambda → SageMaker Runtime** (≤150 ms latency).  
- Continuous monitoring: **CloudWatch Alarms**, **AWS X-Ray** for traceability, and **Amazon Lookout for Metrics** to surface drift.

I introduced a *feature flag* system that allowed rolling out the new model to 1 % of traffic first, then ramping up in 10 % increments—reducing failure risk by 90 %.  

**Result**  
- Latency dropped from 3 h to <150 ms (99th percentile).  
- Accuracy improved by 4.2 % absolute, boosting revenue per user by $0.03/month.  
- Cost saved: $120K/yr by shifting from EC2‑based inference to Lambda/SageMaker Runtime.  

**Reflection – Dive Deep & Learn**  
The initial rollout hit a 0.8 % error spike; post‑mortem revealed missing data validation in the preprocessing step. I added a **data quality guardrail** (AWS Glue Crawler + Athena query) that now rejects malformed inputs before training, preventing future regressions.

*Bar‑raiser takeaway*: Demonstrated true ownership by redesigning the end‑to‑end pipeline, quantified impact with real numbers, and iterated quickly on failure lessons—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
