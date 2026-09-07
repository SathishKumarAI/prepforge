---
qid: ing_52d69705db__aws__local
question: 'Explain: Meet Our Experts — Machine Learning Mastery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 418
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:02-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
When our e‑learning platform hit a 40 % drop in expert‑to‑learner engagement during peak enrollment, I owned the “Meet Our Experts” feature. The goal was to boost real‑time matchmaking between learners and certified instructors while keeping latency under 200 ms.

**Action (Dive Deep, Bias for Action)**  
I built an ML‑driven recommendation engine using **Amazon Personalize** on a **Serverless architecture** (Lambda + API Gateway).  
*Data pipeline:* Real‑time learner signals streamed to **Kinesis Data Streams**, batched into S3, and processed by Glue jobs that updated the Personalize dataset.  
*Model:* A hybrid collaborative‑content filter trained nightly with **SageMaker Pipelines**; inference served via **Amazon SageMaker Endpoint** behind a **Elastic Load Balancer**.  
*Scalability & Cost:* Auto‑scaling Lambda kept costs < $0.02 per request, and the endpoint autoscaled to 1,200 RPS during exams, yielding 99.9 % availability.

**Result (Deliver Results)**  
Within two weeks of launch, expert‑to‑learner match rate rose from 56 % to **82 %**, cutting average wait time from 5 min to 30 sec—an 80 % improvement that lifted course completion by 15 %. The solution cost $3.5k/month, a 60 % reduction versus the legacy monolithic system.

**Learnings (Invent & Simplify)**  
I realized that streaming raw logs to Personalize was wasteful; switching to aggregated features cut data volume by 70 %. I also documented failure modes in a post‑mortem, ensuring future teams could iterate faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
