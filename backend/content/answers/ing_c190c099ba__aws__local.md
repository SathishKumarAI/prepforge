---
qid: ing_c190c099ba__aws__local
question: 'Explain: The interview loop — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 465
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:50-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built an *AI‑powered conversation platform* for customer support. The product had a monthly user base of ~2 M, but our NPS dropped to 35 because the bot’s intent classification lagged behind new slang and product changes.

**Action (Design & Technical)**  
I owned the end‑to‑end “Cognition Loop” that continuously refreshed the model:

1. **Data Ingestion** – Use *Amazon Kinesis* to stream live chat logs into a *Glue* ETL job, auto‑tagging intent via a lightweight rule engine.
2. **Model Training** – Spin up an *SageMaker* notebook per week; training on 3 TB of historical data + fresh streams.  
   *Auto‑ML hyper‑parameter tuning* reduced dev time from 4 hrs to 45 min.
3. **Deployment & Canary** – Push the model into *ECS Fargate* behind an ALB; roll out a 5% canary and monitor perplexity with CloudWatch metrics.
4. **Feedback Loop** – If perplexity > 0.7 or NPS dips, trigger a rollback automatically.

This loop runs **every 24 h**, ensuring the bot stays current without manual intervention.

**Result**  
Within two months of deployment:

- Intent accuracy rose from 78 % → 92 %.
- First‑contact resolution increased by **18 %**.
- NPS climbed to **48** (+13 points).
- Operational cost dropped 22 % thanks to serverless scaling and automated training.

**Learning & Bar‑raiser Insight**  
I took full ownership, diving deep into data pipelines, AWS services, and model metrics. I quantified impact (accuracy %, NPS), iterated quickly, and documented failures (e.g., initial overfitting on slang) so the team could avoid them. This aligns with **Ownership**, **Dive Deep**, and **Bias for Action**—the very qualities a bar‑raiser looks for in an Amazonian.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
