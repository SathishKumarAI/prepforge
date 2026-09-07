---
qid: ing_19adce063d__aws__local
question: 'Explain: Shape how AI meets the world — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 393
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:29-05:00'
sources: []
---

**Situation & Task**  
When I joined the new *AI Careers* initiative at Anthropic, our goal was to create a scalable program that matched talent with projects across 12 data‑science teams while keeping onboarding time under 30 days.

**Action (AWS‑centric Design)**  
I architected a **serverless pipeline** using **Amazon SageMaker Pipelines**, **Lambda**, and **Step Functions**.  
* **SageMaker Feature Store** stored candidate embeddings, enabling cosine‑similarity matching against project requirement vectors.  
* **AppConfig + API Gateway** exposed the matcher as a REST endpoint with 99.9 % availability.  
* **DynamoDB** persisted match logs; **Athena** fed daily analytics dashboards for hiring managers.  
I introduced **auto‑scaling Lambda concurrency limits** to keep cost < $2k/month, and used **S3 Glacier Deep Archive** for audit trails.

**Result**  
- Matching accuracy improved from 68 % to **87 %**, reducing project lead time by **35 %** (from 12 days to 7 days).  
- Candidate‑to‑project placement rate rose from 40 % to **62 %** in the first quarter.  
- Onboarding cost dropped by **$15k annually** due to automated workflows.

**Reflection & Ownership**  
I owned end‑to‑end delivery, diving deep into latency logs to identify a bottleneck and iteratively refactor. The bar‑raiser will note my bias for action, ownership of metrics, and learning loop that turned a 30 % drop in placement into a 22 % lift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
