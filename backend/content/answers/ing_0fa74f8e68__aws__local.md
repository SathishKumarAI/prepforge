---
qid: ing_0fa74f8e68__aws__local
question: 'Explain: Cloud Agents (Vendor-Hosted, API-Driven)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 413
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:49-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had to migrate a legacy analytics stack that ran on a private data‑center to the cloud while keeping a tight SLA of < 5 % downtime during peak load. The goal was to expose our core AI model as a vendor‑hosted, API‑driven Cloud Agent so partners could query results in real time without managing any infrastructure.

**Action**  
I designed an **AWS‑native micro‑service** using **Amazon SageMaker Endpoint** (real‑time inference) behind an **API Gateway** and protected with **IAM + Cognito**. To guarantee high availability I enabled **Multi‑AZ deployment** and set up a **Lambda auto‑scaler** that spun up additional endpoints when CPU > 70 %. For cost control, the endpoint was set to “on‑demand” during business hours and switched to **SageMaker’s “Inference Realtime – GPU” spot instances** at night. I also built an **AWS Step Functions** orchestrator for batch jobs that fed new training data nightly.

**Result**  
The migration cut partner query latency from 350 ms to 85 ms (77 % improvement) and reduced operational cost by 42 %. The system achieved 99.95 % uptime over 12 months, meeting the SLA with no outages.  

**Learning & Ownership**  
I owned the full end‑to‑end process—from requirement capture to post‑production monitoring—using CloudWatch dashboards for real‑time metrics. When a spike in traffic caused throttling on API Gateway, I quickly added an **WAF rate limit rule** and re‑balanced the Lambda pool, turning a potential incident into a learning moment about capacity planning.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Customer Obsession**, and **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
