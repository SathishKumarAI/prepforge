---
qid: ing_fb3c0cae10__aws__local
question: 'Explain: Compensation (2025 data, US engineering roles)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 475
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:30-05:00'
sources: []
---

**Situation & Task**  
When I joined the People Analytics team, senior leaders asked me to build a predictive model that would recommend *fair and competitive compensation* for AI‑engineers in the U.S. (2025 data). The goal was to align pay with market rates while keeping internal equity and ensuring we could attract top talent.

**Action & Design**  
I owned the project from scratch, diving deep into LinkedIn Salary, Glassdoor, and CompData reports. I built an end‑to‑end pipeline in **AWS Glue → S3 → Redshift** for data ingestion, used **Amazon SageMaker** to train a gradient‑boosted tree that predicts salary ranges based on role, seniority, tech stack, and geography.  
To keep costs low, I leveraged spot instances (≈30 % cheaper) and scheduled nightly jobs during off‑peak hours. The model’s feature importance highlighted “AI specialization” (+$12k), “team size” (+$4k), and “product impact score” (+$8k).  

**Result**  
Within 90 days, the model increased offer acceptance by **17 %** (from 68 % to 85 %) and reduced time‑to‑fill from 45 to 28 days. The predictive accuracy was **R² = 0.87**, and the median deviation from market rates stayed under **$1.5k**.  

**Reflection & Learning**  
I practiced *Bias for Action* by prototyping in two weeks, then *Ownership* by iterating on feedback loops with hiring managers. The biggest failure was an initial assumption that location alone drove pay; once we “dove deep” into skill metrics, the model’s performance improved dramatically.  

> **Leadership Principles Highlighted**  
> • **Customer Obsession** – Delivering offers that match candidate expectations.  
> • **Ownership** – From data collection to production deployment.  
> • **Dive Deep** – Uncovering hidden salary drivers.  
> • **Deliver Results** – Tangible hiring metrics and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
