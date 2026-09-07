---
qid: ing_241dbddb91__aws__local
question: 'Explain: Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 555
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:38-05:00'
sources: []
---

**S – Situation:**  
At my last role I was tasked with building a *Coding Adventure* platform that gamified learning Python through an AI‑driven chess tutor. The goal was to increase student engagement by 30 % and reduce drop‑off rates during the first week.

**T – Task:**  
I owned the end‑to‑end solution: data ingestion, model training, real‑time inference, and a scalable web interface. I had to deliver within six months while staying under a $50k budget.

**A – Action (Design & Tech):**  
1. **Data pipeline** – Ingested 200 k historic game logs into **Amazon S3**, processed with **AWS Glue** ETL, and stored feature vectors in **Amazon DynamoDB** for low‑latency lookups.  
2. **Model training** – Trained a reinforcement‑learning model on **SageMaker** (using the built‑in “Chess” example). Leveraged spot instances to cut GPU costs by 60 %.  
3. **Inference & API** – Deployed the model as an endpoint in **SageMaker Hosting**, exposed via **API Gateway** + **Lambda Authorizer** for secure, per‑student throttling (10 TPS max).  
4. **Frontend** – Built a React SPA served from **CloudFront** with edge caching; used **AWS Amplify** for authentication and real‑time data sync via **AppSync**.  
5. **Observability** – Instrumented with **CloudWatch Metrics** (latency, error rates) and set up alerts to auto‑scale the endpoint based on queue depth in **SQS**.

**R – Result:**  
- Student engagement rose 38 % (from 42 % to 80 % active users after week 1).  
- Drop‑off dropped from 27 % to 12 %.  
- Cost per inference stayed under $0.02, staying within budget.  

**Leadership Principles Highlighted:**  
- **Ownership** – I drove the project from concept through production, negotiating with stakeholders for resources and timelines.  
- **Dive Deep** – Detailed cost‑benefit analysis of spot vs on‑demand instances; tuned batch size to balance latency vs throughput.  

**Bar‑raiser takeaways:**  
- Demonstrated ownership by handling all phases and stakeholder communication.  
- Showed depth through concrete AWS service choices, scalability trade‑offs, and cost optimization.  
- Quantified impact with real metrics that exceeded the original target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
