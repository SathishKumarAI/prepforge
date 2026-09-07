---
qid: ing_7c46bb191e__aws__local
question: 'Explain: Enterprise Sales Director (Brazilian Portuguese speaking)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 429
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:24-05:00'
sources: []
---

**Situation / Task**  
I was tasked with launching a new AI‑powered sales platform in Brazil for our Fortune 500 clients. The goal: grow enterprise revenue by 30% YoY while ensuring the solution met local compliance and language needs.

**Action**  
*Customer Obsession & Ownership*: I led cross‑functional squads (product, data science, legal) and established a Portuguese‑first feedback loop—weekly calls with key Brazilian accounts to surface pain points.  
*Dive Deep*: Built a data pipeline in **Amazon SageMaker** + **AWS Glue** that ingested 5 TB of CRM logs, applied NLP for sentiment analysis, and surfaced actionable insights.  
*Bias for Action*: Deployed the model on **AWS Lambda** with an API Gateway front‑end, guaranteeing <200 ms latency; auto‑scaled via CloudWatch alarms to handle peak sales pushes (up to 2,000 concurrent users).  
*Invent & Simplify*: Replaced a legacy on‑prem ML stack with a fully managed serverless architecture, cutting infra costs by 45% and eliminating maintenance overhead.  

**Result**  
Within six months the platform drove **$12 M incremental revenue**, exceeding the target by 20%. Adoption grew to 85% of our Brazilian accounts, and churn fell from 8% to 3%. The project was recognized in Amazon’s internal “Top Impact” awards for its measurable lift on both customer satisfaction (CSAT +15pts) and operational efficiency.

**Bar‑raiser takeaways**  
- Demonstrated *ownership* by steering the end‑to‑end delivery.  
- Showed *depth* with a full data‑driven ML stack design.  
- Quantified impact via revenue, churn, and cost metrics.  
- Learned from early latency spikes: introduced a caching layer (Amazon ElastiCache) to keep response times consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
