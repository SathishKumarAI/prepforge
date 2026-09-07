---
qid: ing_16f4b07cf1__aws__local
question: 'Explain: Leading Science, Laser-focused On Impact'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 368
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:29-05:00'
sources: []
---

**Leading Science, Laser‑Focused on Impact**  
*(Amazon Leadership Principles: Customer Obsession & Deliver Results)*  

**Situation:** At my previous role I was tasked to accelerate the launch of a new AI‑driven recommendation engine for our e‑commerce platform, which required ingesting 2 TB of user data per day and generating real‑time suggestions for 1 M concurrent users.  
**Task:** Deliver a production‑ready system that improves conversion by at least 10% while keeping latency under 200 ms.  

**Action:**  
- **Owned the end‑to‑end pipeline**: built an AWS Glue ETL workflow to clean and feature‑engineer data, then streamed it via Kinesis Data Streams into SageMaker for model training.  
- **Deployed a serverless inference layer** using Lambda + API Gateway with DynamoDB caching; added a step‑function orchestrator to fallback to EC2 Spot instances during peak loads.  
- **Implemented A/B testing on CloudWatch metrics**, iterating models until we hit the 10% lift target.  

**Result:** Achieved a **12.3 % increase in conversion** and reduced average latency from 350 ms to 180 ms, saving ~$1.2 M annually in infrastructure costs by leveraging spot capacity and serverless scaling.  

*Bar‑raiser notes:* I demonstrated ownership by owning the full stack, dove deep into performance bottlenecks (Kinesis buffer sizing, Lambda timeout tuning), quantified impact with conversion lift, and learned from early failures—shifting from a monolithic deployment to a micro‑service architecture after latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
