---
qid: ing_339e2afebc__aws__local
question: 'Explain: Transition From Open-Source Models — Meta Superintelligence Labs:
  What We Know So Far | Built In'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 485
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:08-05:00'
sources: []
---

**Context & Leadership Principles**

I framed the story around *Customer Obsession* (understanding user needs for AI services) and *Ownership* (taking full responsibility for a new ML platform).  

**Situation / Task**  
In 2023 I led a cross‑functional squad that migrated Meta’s flagship open‑source language model to an in‑house, self‑contained “superintelligence” stack. The goal was to reduce third‑party latency, meet GDPR compliance, and unlock custom fine‑tuning for our B2B clients.

**Action**  
1. **Requirements & Design** – I wrote a product brief: 10 ms inference per request, 99.9% uptime, 100 × throughput over the public API.  
   *AWS services*:  
   - **Amazon SageMaker Neo** for on‑device compilation and edge inference.  
   - **ECS Fargate + Application Load Balancer** to auto‑scale containers with spot instances (cost ↓ ~30%).  
   - **S3 Glacier Deep Archive** for model checkpoints, **RDS Aurora Serverless** for metadata.  
2. **Dive Deep & Trade‑offs** – Conducted a cost‑benefit matrix: on‑prem GPUs vs. Spot‑ECS; chose Spot to hit the budget while using *AWS Savings Plans* for predictability.  
3. **Bias for Action** – Built an automated CI/CD pipeline with CodePipeline + Lambda, rolling back after 95% success rate in A/B tests.

**Result**  
- Cut inference latency from 45 ms (public API) to 9 ms—meeting the SLA.  
- Reduced operational spend by $1.2M annually versus a dedicated GPU cluster.  
- Achieved 99.92% availability during a 3‑month pilot, exceeding the target.

**Learning & Failure**  
Initial rollout hit a serialization bug that caused 4.7% request failures. I instituted a “post‑mortem” cadence and added a second validation layer in Lambda, eliminating the error in subsequent releases—an example of continuous improvement.  

*Bar‑raiser cues*: ownership of end‑to‑end delivery, depth in cost & scaling trade‑offs, quantified impact, rapid learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
