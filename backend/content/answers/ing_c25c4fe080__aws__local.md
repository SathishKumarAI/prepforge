---
qid: ing_c25c4fe080__aws__local
question: 'Explain: Create with Purpose — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 427
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:27-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Science team at my previous company, we were tasked with launching a *“Create with Purpose”* initiative—an internal ML‑driven campaign to boost employee engagement on sustainability projects. The goal was to predict which employees would be most receptive to volunteer opportunities and to personalize outreach so that participation rose by 30 % within six months.

**Action (Technical)**  
I owned the solution from data ingestion to deployment:  

1. **Data Pipeline** – Ingested 4 M rows of HR, project‑impact, and engagement logs into an S3 lake.  
2. **Feature Store** – Built a SageMaker Feature Store with real‑time scoring APIs (Lambda + API Gateway).  
3. **Modeling** – Trained a Gradient Boosting model in SageMaker, tuned via Hyperparameter Tuning jobs; achieved 0.82 AUC on the holdout set.  
4. **Deployment & Scaling** – Deployed as a SageMaker endpoint behind an Application Load Balancer with autoscaling based on CPU/Memory metrics (max 8 vCPU).  
5. **Cost Optimization** – Leveraged Spot Instances for training, reserved instances for inference, cutting $12k/month in compute spend.

**Result**  
Within three months, employee participation increased by **34 %**, surpassing the target and generating a projected $2M annual cost saving on external volunteer management services. The campaign was adopted company‑wide, and I presented the architecture at AWS re:Invent, earning a “Best Use of SageMaker” award.

**Reflection (Bar‑raiser Lens)**  
I took full ownership, dug deep into data quality issues, quantified impact with clear KPIs, and learned to balance latency vs. cost by iterating on instance types—an example that showcases *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
