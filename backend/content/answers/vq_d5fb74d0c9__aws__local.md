---
qid: vq_d5fb74d0c9__aws__local
question: are they applied?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 418
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:42-05:00'
sources: []
---

**Situation & Task**  
When I joined the Machine‑Learning Ops team at a mid‑size SaaS firm, our recommendation engine was running on on‑prem GPU clusters that stalled during peak traffic and cost 30 % more than projected. The product manager asked: *“Are AI models actually being applied to drive revenue?”* I had to prove value, reduce costs, and scale the service.

**Action**  
I took full ownership, mapped out a **serverless inference pipeline** using **Amazon SageMaker**, **AWS Lambda**, and **API Gateway**.  
1. Migrated the trained PyTorch model (≈ 200 MB) to SageMaker Endpoint with *Auto Scaling* enabled.  
2. Wrapped the endpoint call in a Lambda function that cached results for 10 seconds, cutting redundant inference by 70 %.  
3. Deployed **Amazon CloudWatch** metrics and **X‑Ray** tracing to dive deep into latency spikes; identified a 5 ms network jitter issue and re‑architected the VPC endpoints, reducing average latency from 120 ms to 45 ms.  
4. Implemented an *A/B test* in SageMaker Experiments to compare the new model against the legacy one.

**Result**  
- Revenue lift: **+12 %** on upsell conversions within two weeks of deployment (≈ $1.2M incremental ARR).  
- Cost reduction: **35 %** lower inference spend and 40 % fewer GPU idle hours.  
- Availability: 99.97 % SLA achieved, up from 95 %.  

**Reflection**  
I learned that *Customer Obsession* drives the right KPI (conversion), while *Dive Deep* uncovered a hidden latency bottleneck. I documented lessons in an internal white‑paper, which became the playbook for future model rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
