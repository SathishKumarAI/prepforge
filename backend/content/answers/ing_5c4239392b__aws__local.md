---
qid: ing_5c4239392b__aws__local
question: 'Explain: Scalability at YouTube'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 449
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:48-05:00'
sources: []
---

**Situation (S)** – While leading the ML infra team at YouTube, we hit a bottleneck: recommendation inference latency rose from 120 ms to 480 ms during peak hours, hurting CTR by ~3%.  

**Task (T)** – I owned the redesign of our inference pipeline to deliver sub‑200 ms latency at scale while keeping cost under $2M/month.  

**Action (A)** –  
1. **Architecture**: Shifted from monolithic Docker containers on EC2 to a *serverless* micro‑service model using **AWS Lambda@Edge** + **Amazon SageMaker Runtime** for inference, and **Amazon CloudFront** for edge caching.  
2. **Model Serving**: Deployed the recommendation model as a **SageMaker Neo** compiled binary, enabling GPUless inference on AWS Inferentia instances (p3dn).  
3. **Observability**: Integrated **AWS X-Ray** & **CloudWatch Metrics** to capture per‑request latency and error rates; set up automated alarms with **Step Functions** for auto‑scaling.  
4. **Cost Control**: Leveraged **Spot Instances** + **Savings Plans**, achieving a 35% reduction in inference spend while keeping SLA at 99.9%.  

**Result (R)** – Latency dropped to 140 ms, CTR increased by 5%, and monthly inference cost fell from $3.2M to $2M.  
*Leadership Principles*: **Ownership** (owning the end‑to‑end pipeline), **Dive Deep** (profiling every layer), **Bias for Action** (rapid prototyping with Lambda@Edge).  

**Bar‑raiser check** – I documented trade‑offs (e.g., edge cache staleness vs. freshness), quantified impact, and iterated on model compression after a failed initial rollout, learning that inference latency is the single most critical metric for user engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
