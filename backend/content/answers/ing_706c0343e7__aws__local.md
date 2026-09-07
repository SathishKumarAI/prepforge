---
qid: ing_706c0343e7__aws__local
question: 'Explain: ML Take-Home Projects — Data Science & AI Interview Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 484
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:23-05:00'
sources: []
---

**Situation (S)**  
When I applied for a data‑science role at an AI startup, the interview panel asked me to walk through my ML take‑home projects from StrataScratch. They wanted to see not just code but *impact* and *ownership*.

**Task (T)**  
I chose two projects:  
1️⃣ A churn‑prediction model for a telecom dataset (≈ 500k rows).  
2️⃣ An NLP sentiment analyzer trained on Twitter data (≈ 2M tweets).

My goal was to demonstrate production readiness, scalability, and measurable business value.

**Action (A)**  
*Data & Feature Engineering* – used **AWS Glue** for ETL, storing clean tables in **Amazon S3**.  
*Model Training* – leveraged **Amazon SageMaker** notebooks; automated hyper‑parameter tuning with **SageMaker Experiments** to keep runtime < 2 hrs.  
*Deployment* – deployed each model as a REST endpoint via **SageMaker Hosting Services**, auto‑scaling between 1–10 instances (95th percentile latency < 200 ms).  
*Monitoring & Feedback Loop* – set up **Amazon CloudWatch** metrics and **AWS Lambda** for retraining triggers when drift > 5%.  

**Result (R)**  
- Churn model achieved **AUC‑ROC = 0.87**, reducing churn by 12% in a pilot, translating to $1.2M annual revenue retention.  
- Sentiment analyzer hit **accuracy = 92%**, enabling real‑time brand sentiment dashboards that cut manual review time from 4 hrs to 30 min per week.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results** – delivered quantifiable ROI and fast, reliable services.  
- **Ownership & Dive Deep** – maintained end‑to‑end pipeline, tuned hyper‑parameters, and built automated retraining.

*Bar‑raiser cue*: I showed ownership by building a fully managed ML workflow, depth through detailed trade‑offs (SageMaker vs. EC2), and quantified impact with real revenue metrics—exactly what the interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
