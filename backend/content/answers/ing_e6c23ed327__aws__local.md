---
qid: ing_e6c23ed327__aws__local
question: 'Explain: Customer Success — Jobs at Together AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 357
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:59-05:00'
sources: []
---

**Situation / Task**  
At Together AI I led the launch of a “Customer Success” product that would surface actionable insights from our generative‑model output for SaaS clients. The goal was to reduce churn by 20% and increase upsell revenue.

**Action (Technical & Leadership)**  
- **Ownership + Customer Obsession**: Built an end‑to‑end pipeline in AWS: S3 buckets for raw logs, Lambda for real‑time parsing, DynamoDB for state, Step Functions orchestrating an Athena‑based analytics job.  
- **Dive Deep + Bias for Action**: Added a CloudWatch dashboard that surfaced model confidence scores and flagged content that required human review.  
- **Invent & Simplify**: Replaced the monolithic Java service with a serverless micro‑service, cutting infra cost by 35% while scaling to 10× concurrent users.  
- **Deliver Results**: Rolled out A/B tests; customers who received automated “Success Tips” saw churn drop from 12 % to 9 %, and upsell revenue grew 18 %.  

**Result**  
- 95 % of the customer base adopted the feature within two weeks.  
- Operational cost fell from $120k/month to $75k/month.  
- I documented a playbook that now trains new hires, ensuring knowledge retention.

**Bar‑raiser takeaway**  
Demonstrated deep ownership, quantified impact, and iteratively learned from early feedback (e.g., adjusting thresholds after the first month).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
