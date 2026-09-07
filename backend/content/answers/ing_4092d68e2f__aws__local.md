---
qid: ing_4092d68e2f__aws__local
question: 'Explain: Business Recruiter — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:54-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I was hired as the first *Business Recruiter* for Sierra’s new “Careers” platform, where we needed to scale hiring across three continents while keeping candidate experience top‑tier.  
> 
> **Task:** Build a data‑driven pipeline that could surface high‑fit talent in under 48 hrs and reduce time‑to‑fill from 60 days to <20 days.  
> 
> **Action:**  
> * **Customer Obsession & Ownership** – I mapped candidate pain points (slow feedback loops, opaque status) and owned the end‑to‑end workflow.  
> * **Dive Deep** – Leveraged AWS SageMaker to train a logistic‑regression model on 1 M historical interview logs; engineered features such as skill‑gap score, interview‑rating variance, and cultural‑fit embeddings from LinkedIn data.  
> * **Bias for Action & Deliver Results** – Deployed the model via Lambda + API Gateway into an automated email/Slack bot that recommends next steps to recruiters in real time. The system ran on EC2 spot fleets (cost $0.02/hr) and S3 for storage, guaranteeing 99.9% availability.  
> * **Invent & Simplify** – Replaced a manual Excel triage with an automated scoring dashboard in QuickSight; cut admin hours by 70%.  
> 
> **Result:** Candidate‑to‑offer cycle dropped from 60 days to 18 days (−70%). Hiring cost per hire fell from $12k to $5.3k, saving Sierra ~$1.2M annually. The model’s precision at top‑10 candidates was 87%, exceeding the hiring manager’s benchmark of 80%.  
> 
> **Bar‑raiser takeaway:** I showed ownership by owning metrics, depth by engineering a production ML pipeline, quantified impact with real savings, and learned from early false positives to retrain on newer data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
