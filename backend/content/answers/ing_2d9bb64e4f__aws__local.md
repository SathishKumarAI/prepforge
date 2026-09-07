---
qid: ing_2d9bb64e4f__aws__local
question: 'Explain: Anthropic — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 547
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:27-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation** – In 2024 I led a cross‑functional team at a mid‑size fintech to evaluate new generative‑AI models for fraud detection. We had to decide between Anthropic’s Claude, OpenAI’s GPT‑4, and in‑house fine‑tuned BERT, all under a $2 M cap and 90‑day delivery window.  
> 
> **Task** – Deliver a production‑ready model that increased true‑positive fraud detection by ≥15% while keeping latency <200 ms per transaction and staying within budget.  
> 
> **Action** –  
> * **Dive Deep & Ownership** – I built an end‑to‑end pipeline in AWS: S3 for raw logs, Glue for ETL, SageMaker JumpStart to prototype Claude and GPT‑4, and Lambda for inference gating. We used CloudWatch metrics and XGBoost feature importance to surface the most predictive fields (transaction amount, geolocation, device fingerprint).  
> * **Bias for Action & Invent** – Instead of waiting for vendor SLAs, I deployed a hybrid approach: Claude handled 70% of low‑risk queries via API Gateway + Lambda, while GPT‑4 ran in a private SageMaker endpoint behind VPC endpoints. We added a custom “confidence score” layer that forwarded borderline cases to an on‑prem Spark cluster for deeper analysis.  
> * **Cost & Scalability** – By auto‑scaling the Lambda concurrency and using Spot instances for SageMaker training, we kept monthly spend at $1.8 M (≈10% below target). The architecture achieved 99.9% availability with a 5–second failover to the on‑prem cluster.  
> 
> **Result** – Fraud detection accuracy rose from 78% to 94%, yielding an estimated $12 M annual revenue protection and a 30% reduction in false positives. Post‑deployment, we logged over 10 k API calls/day with <200 ms latency, meeting SLA targets.  
> 
> **Reflection** – The biggest learning was that hybrid models can combine the speed of cloud APIs with the robustness of on‑prem compute. We later migrated the on‑prem cluster to an AWS Outposts deployment, further reducing latency by 25%.  

*Leadership Principles highlighted: Customer Obsession (protecting revenue), Ownership (end‑to‑end delivery), Dive Deep, Bias for Action, Invent & Simplify, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
