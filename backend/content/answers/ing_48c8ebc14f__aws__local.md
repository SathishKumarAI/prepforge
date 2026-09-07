---
qid: ing_48c8ebc14f__aws__local
question: 'Explain: 📇 Courses — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 467
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:59-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*  
> **Situation:** In my last role I was tasked with creating an internal “Machine‑Learning Course Hub” for 4,000+ data scientists who needed up‑skilling without leaving their pipelines.  
> **Task:** Build a scalable, self‑service platform that recommends curated courses (video + code labs) and tracks progress in real time.  
> **Action:**  
> * **Requirements & Design** – I scoped the system as a serverless micro‑service architecture:  
>   * API Gateway + Lambda for user requests (fast cold starts < 200 ms).  
>   * DynamoDB for course catalog & user progress, with TTL on stale entries.  
>   * Step Functions orchestrating content ingestion from S3 (video) and training notebooks in SageMaker Studio.  
>   * Personalization engine using Amazon Personalize to surface relevant courses; we achieved a 30 % lift in completion rates over the baseline.  
>   * Cognito for secure auth, IAM roles scoped per course for fine‑grained access.  
> * **Scalability & Cost** – Auto‑scaling Lambda handled 50k requests/second during peak training sessions; DynamoDB throughput was provisioned to 5 M reads/s, but on‑demand mode kept spend below $200/month while maintaining 99.9 % availability.  
> * **Result:** Launched in 8 weeks, the hub saw a 40 % increase in course completions and reduced support tickets by 25 %. The platform also saved the organization ~$120k annually compared to third‑party LMSs.  
> **Reflection (Bar‑raiser focus):** I took full ownership of scope creep, iterated quickly with A/B tests on recommendation algorithms, and learned that a “no‑code” ingest pipeline for new courses dramatically cuts onboarding time—an insight I’ll bring to future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
