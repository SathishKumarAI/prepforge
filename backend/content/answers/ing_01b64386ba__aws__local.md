---
qid: ing_01b64386ba__aws__local
question: 'Explain: Coding - AI Engineer Questions — My 2026 Perplexity AI Interview
  Process and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 585
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:05-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“In my last role I led the end‑to‑end migration of a production‑grade text‑classification pipeline from on‑prem to AWS for a $12 M e‑commerce catalog.”*  

### Situation  
The legacy system was a monolithic Java app running on EC2 with an Oracle DB. It handled ~30k requests/day, but latency spiked during flash sales and there were frequent outages.

### Task  
Design a highly available, scalable AI inference service that reduces cost by 35 % while keeping SLA < 200 ms.

### Action  
1. **Architecture** – Split the monolith into micro‑services:  
   * **Inference Service** → AWS SageMaker Endpoint (real‑time).  
   * **Feature Store** → Amazon DynamoDB + DAX cache for sub‑10 ms reads.  
   * **Model Training** → SageMaker Pipelines with Spot Instances (70 % cost savings).  
2. **Scalability & Availability** – Use **AWS Auto Scaling** and **Elastic Load Balancer** across two AZs; enable **SageMaker Multi‑model endpoints** to host 20 models on a single instance.  
3. **Cost Control** – Adopt **Reserved Instances** for baseline traffic, Spot for burst; set up **CloudWatch Alarms** to trigger scaling based on latency thresholds.  
4. **Monitoring & Feedback Loop** – Deploy **Amazon CloudTrail + GuardDuty** for security; use **SageMaker Model Monitor** to detect drift and retrain automatically.

### Result  
* 30 % drop in inference latency (from 250 ms to 170 ms).  
* 38 % reduction in monthly infra spend ($120k → $73k).  
* Zero production outages over 12 months; handled a peak of 1.2M requests during a holiday sale.

---

**Leadership Principles Highlighted**

| Principle | How it Shows |
|-----------|--------------|
| **Ownership** | Took full responsibility for migration, from design to ops. |
| **Dive Deep** | Analyzed latency traces, DB query plans, and cost reports to pinpoint bottlenecks. |
| **Bias for Action** | Deployed the new pipeline within 8 weeks, ahead of the quarterly roadmap. |
| **Deliver Results** | Quantified performance & cost gains that directly impacted revenue. |

*Bar‑raiser focus*: They’ll look for concrete ownership, depth in troubleshooting (e.g., “Why did latency spike?”), measurable impact, and lessons from any failed experiments (we dropped a model after drift detection).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
