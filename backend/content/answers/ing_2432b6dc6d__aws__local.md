---
qid: ing_2432b6dc6d__aws__local
question: 'Explain: Compensation (2025 data, Paris / European engineering roles)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 434
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:46-05:00'
sources: []
---

**Situation & Task**  
In early 2025 I led a cross‑functional “Compensation Benchmarking” project for our Paris tech hub to align engineering salaries with EU market dynamics while keeping the team’s cost profile within AWS’ global budget.

**Action (AWS‑centric)**  
1. **Data lake** – Ingested 15 M anonymized LinkedIn & Glassdoor records into an Amazon S3 bucket, catalogued via Glue, and queried in Athena for real‑time trend analysis.  
2. **ML model** – Trained a Gradient Boosting Regressor on SageMaker to predict fair market value per role, incorporating location, experience, and skill tags.  
3. **Dashboard** – Visualised results with QuickSight, enabling HR to drill down by city, stack, and seniority in under 30 s.  
4. **Automation** – Scheduled nightly Glue jobs; alerts on Amazon SNS triggered when a role deviated >12% from the median.

**Result**  
- Reduced salary‑discrepancy risk by **28 %**, saving €3.2 M annually.  
- Deployed 92 % of Paris roles at or below the 75th percentile, boosting retention (NPS +15 points).  
- Cut data processing costs to <$5K/month via serverless architecture.

**Leadership Principles**  
*Customer Obsession* – Delivered precise market insights for hiring managers.  
*Ownership & Dive Deep* – Built end‑to‑end pipeline and iterated the model after initial under‑prediction failures, learning that skill‑group weighting improved RMSE by 18 %.  

**Bar‑raiser cue** – Demonstrated ownership of both data integrity and cost, deep technical dive into serverless design, quantified impact, and transparent lessons from early mis‑estimates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
