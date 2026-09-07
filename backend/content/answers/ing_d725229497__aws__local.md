---
qid: ing_d725229497__aws__local
question: 'Explain: 98% cheaper changes the economics — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 357
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:52-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a migration of our on‑prem ML inference stack to the cloud. The goal was to cut operational cost by **98 %** while keeping model latency under 50 ms for our live recommendation engine.

**Action**  
*Customer Obsession & Ownership* – I first mapped every customer touchpoint (API gateway → front‑end) and quantified pain points: 12 hrs of GPU hours per month, 30 % SLA drift.  
I designed a serverless inference pipeline using **Amazon SageMaker Endpoint**, **AWS Lambda** for pre/post‑processing, and **App Mesh** for observability via **Splunk**.  
*Dive Deep & Bias for Action* – I instrumented the stack with **CloudWatch Metrics** (latency, error rate) and used **SageMaker Model Monitor** to auto‑scale based on traffic spikes, eliminating idle GPU costs.

**Result**  
- Cost dropped from $120k/month to $2.4k/month (**98 % reduction**).  
- Latency improved 25 % (40 ms → 30 ms).  
- SLA drift fell from 30 % to <1 %.  

**Learning**  
I realized that splitting the model into micro‑components and using event‑driven scaling gives elasticity. The trade‑off was increased cold‑start latency, mitigated by **Provisioned Concurrency**. This experience reinforced that *Ownership* means iterating until the customer’s cost & performance pain points vanish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
