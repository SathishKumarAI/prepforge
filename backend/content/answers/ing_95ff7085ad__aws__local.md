---
qid: ing_95ff7085ad__aws__local
question: 'Explain: Non-functional Requirements — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:02-05:00'
sources: []
---

**Situation / Task**  
I was hired as a senior ML engineer at a fintech startup that wanted to replace its legacy “map‑service” (Yelp/Google‑style) used for fraud detection and user onboarding. The requirement: **non‑functional**—low latency, high availability, elastic scaling, strict data privacy, and cost predictability.

**Action**  
*Owned* the end‑to‑end architecture. I first *dove deep* into SLAs: 99.9 % uptime, <200 ms query time for 95 % of requests, and a maximum $5k/month budget.  

- **Compute:** AWS Lambda + API Gateway (stateless, auto‑scales to millions of calls).  
- **Data Store:** DynamoDB with global tables for multi‑region replication; TTL on stale coordinates keeps storage lean.  
- **ML inference:** SageMaker endpoints behind Application Load Balancer, autoscaling based on CPU/latency metrics.  
- **Security:** KMS‑encrypted attributes + IAM roles per microservice.  

I benchmarked against the legacy stack: latency dropped from 350 ms to 140 ms (60 % improvement), availability improved from 99.5 % to 99.95 %, and monthly spend fell by 35 % while handling a 4× traffic spike.

**Result**  
The new service handled 10M requests/day with <200 ms latency, achieved 99.95 % uptime, and saved the company $18k/month. The design was reviewed by a bar‑raiser who praised my *ownership* of both business impact and technical depth, and my learning loop that iterated on metrics after each deployment.

**Leadership Principles Highlighted**  
- **Ownership**: Took full responsibility for SLAs, cost, and security.  
- **Dive Deep**: Conducted detailed performance and cost analyses to justify architectural choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
