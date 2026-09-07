---
qid: ing_73b833a8f8__aws__local
question: 'Explain: Uh, we probably should have added them — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:32-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team at a mid‑size fintech, our model training pipeline was a monolith on EC2 that ran nightly jobs. The platform hit 99 % availability during peak load but suffered from *model drift* and *slow rollback*, costing us $3k/day in manual interventions. My task: redesign the system to reduce drift detection time, enable instant rollbacks, and cut operational cost by 30 %.

**Action**  
1. **Ownership & Dive Deep:** I mapped every data flow, identified bottlenecks (batch ingestion → feature store → training job).  
2. **Design** – *Serverless Feature Store + SageMaker Pipelines*:  
   - **AWS Glue** for nightly ETL, storing features in **Amazon DynamoDB** with TTL for drift freshness.  
   - **SageMaker Processing Jobs** triggered by a **Step Functions** state machine; each job tags its output and sends metrics to **CloudWatch**.  
   - **Model Registry** (SageMaker) + **Lambda** for automated rollback when drift > 5 %.  
3. **Scalability & Cost:** Serverless components scale automatically; we switched from 8 vCPU EC2 instances ($0.40/hr) to on‑demand SageMaker endpoints ($0.25/hr) and Glue jobs (~$0.07/hr), slashing compute spend by 35 %.  
4. **Bias for Action & Invent Simplify:** I added a *canary deployment* hook that runs 10% of traffic through the new model, automatically rolling back if latency > 100 ms.

**Result**  
- Drift detection time dropped from 24 h to <5 min.  
- Rollback latency became instant (≤2 s).  
- Operational cost fell 32 %, freeing $40k/yr for R&D.  
- SLA improved from 99 % to 99.9 %.  

**Learning & Bar‑raiser cues**  
I documented every trade‑off (serverless cold start vs. predictable latency) and built a post‑mortem process that now feeds into our continuous improvement loop, embodying *Customer Obsession* and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
