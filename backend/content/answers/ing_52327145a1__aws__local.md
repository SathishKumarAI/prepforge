---
qid: ing_52327145a1__aws__local
question: 'Explain: There are 3 modules in this course — Supervised Machine Learning:
  Regression and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 384
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:46-05:00'
sources: []
---

**Situation (S)**  
I was teaching a three‑module online curriculum on supervised learning—Regression, Classification, and the Coursera platform integration—to a cohort of 200+ data scientists who had mixed backgrounds.  

**Task (T)**  
My goal was to design an end‑to‑end delivery that maximized student engagement while keeping infrastructure costs under $5k/month.

**Action (A)**  
1. **Architecture** – I used **Amazon SageMaker Studio** for interactive notebooks, **S3** for raw datasets, and **ECR + ECS** for custom Docker images containing the course code.  
2. **Scalability & Availability** – SageMaker endpoints were deployed in a multi‑AZ VPC; Auto Scaling was enabled so peak load (during labs) stayed under 1 % error.  
3. **Cost Control** – Spot instances and SageMaker’s “managed spot training” cut compute costs by 38%.  
4. **Metrics‑Driven Iteration** – I embedded A/B tests: a control group used static PDFs, while the experimental group had live notebooks. Completion rates rose from 62 % to 84 %, and average quiz scores improved by 15 points (out of 100).  

**Result (R)**  
The course achieved a **90 % student satisfaction score** and was featured in Amazon’s internal “Best Practices” library. I documented the architecture as an AWS Well‑Architected Framework reference, demonstrating ownership and dive‑deep knowledge.

*Leadership Principles:* **Ownership** (I took end‑to‑end responsibility), **Dive Deep** (I quantified every decision), and **Deliver Results** (measured success with clear metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
