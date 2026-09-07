---
qid: ing_dc1176e5d9__aws__local
question: 'Explain: So you don''t want it to be — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 448
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:35:18-05:00'
sources: []
---

**Situation & Task**  
At a former startup I led the migration of an on‑prem TensorFlow inference pipeline to a fully managed **AWS SageMaker + Lambda** stack so we could serve 200 k requests/day without over‑provisioning. The goal was to reduce infra costs by 40 % while keeping latency < 150 ms.

**Action (Dive Deep & Ownership)**  
1. **Architecture** – Deployed a **SageMaker Endpoint** behind an **API Gateway** + **Lambda@Edge** for request routing, with autoscaling based on CloudWatch metrics.  
2. Implemented *model versioning* using SageMaker Model Registry and automated A/B testing via **AWS CodePipeline**.  
3. Used **Amazon CloudFront** to cache inference results for 1‑hour static predictions, cutting endpoint hits by ~35 %.  
4. Integrated **X-Ray** for end‑to‑end tracing; identified a 12 ms cold‑start bottleneck in Lambda and moved to *Provisioned Concurrency*.

**Result (Deliver Results)**  
- Cost fell from $18k/month to $10.8k/month (~40 % savings).  
- Latency improved from 210 ms to 120 ms (30 % reduction).  
- Uptime hit 99.99 %, surpassing SLA by 0.01 %.  

**Reflection & Learnings**  
I learned that *simplicity* in the deployment pipeline (SageMaker + API Gateway) beats custom containers, and that continuous monitoring is essential—one mis‑scaled batch job could have cost $5k/day. This experience reinforced my bias for action: move fast, fail early, then iterate with data.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Deliver low‑latency predictions that users trust.  
- **Ownership & Dive Deep** – Own the entire ML stack and dig into metrics to optimize cost & performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
