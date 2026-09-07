---
qid: ing_e0e51220a7__aws__local
question: 'Explain: Load Balancing — What is an API Gateway? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 452
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:54-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role at a fintech startup I was tasked with scaling our customer‑onboarding API from a single EC2 instance to a globally distributed service that could handle 10 k RPS without downtime.

> **Situation:** The monolithic backend had an unbalanced traffic pattern—peak loads hit the US‑East region while other regions were idle, causing 3xx errors and degraded latency.  
> **Task:** Build an API gateway that automatically load‑balances requests across three availability zones, exposes a single endpoint to consumers, and records metrics for continuous improvement.  
> **Action:** I chose **Amazon API Gateway** + **AWS Lambda** + **Elastic Load Balancing (ALB)**.  
> *API Gateway* served as the entry point, providing throttling, caching, and OAuth2 validation. Behind it an ALB routed traffic to region‑specific Lambda containers via AWS Global Accelerator, ensuring low latency globally. I added CloudWatch metrics (`integration_latency`, `error_count`) and set up a Step Functions workflow that auto‑scales Lambda concurrency based on real‑time queue depth.  
> **Result:** After deployment, request latency dropped from 350 ms to 70 ms (80% improvement), error rate fell below 0.01%, and cost per transaction decreased by 25 %. The system now supports 15 k RPS with 99.999% availability.  

**Leadership Principles Highlighted:**  
- **Customer Obsession & Deliver Results** – we measured latency directly against user experience.  
- **Ownership & Dive Deep** – I wrote the entire architecture, debugged traffic anomalies, and iterated on metrics until SLA was met.  

**Bar‑raiser cues:** They would look for evidence of ownership (full stack responsibility), depth (understanding ALB vs NLB vs API Gateway trade‑offs), quantified impact (exact latency & cost numbers), and lessons learned (e.g., why we chose Lambda over EC2 for burst capacity).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
