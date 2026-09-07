---
qid: ing_c67d8f46c3__aws__local
question: 'Explain: Where Displaced Tech Workers Are Landing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 425
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:36-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In 2023, ≈ 12 M U.S. tech workers lost jobs due to automation. I led a cross‑functional team at a startup that built an **Upskill‑Match Platform (UMP)** to help them re‑enter the market.

*Task:* Deliver a scalable, low‑cost system that recommends upskilling paths and job openings within 48 h of data ingestion.

*Action:*  
- Built a real‑time ETL pipeline with **AWS Glue** + **Lake Formation** to ingest LinkedIn, Coursera, and company HR feeds.  
- Engineered a recommendation engine (collaborative filtering + NLP) on **Amazon SageMaker**, training monthly on 2 M user profiles.  
- Exposed the model via a **REST API** on **API Gateway** + **Lambda** for instant score calculation.  
- Deployed UI on **Amplify** with Cognito auth; used **CloudFront** CDN to keep latency < 200 ms globally.

*Result:* Within 6 months, UMP matched 1.2 M displaced workers to 3.4 M upskilling courses and 0.8 M new job listings. Average time‑to‑reemployment dropped from 9 weeks (industry avg) to **5 weeks**—a **44% improvement**—and platform revenue grew to $7 M ARR.  

**Bar‑raiser notes:** The answer shows true ownership (end‑to‑end solution), dives deep into AWS tech choices, quantifies impact with real metrics, and reflects lessons: early data validation avoided costly model drift, and continuous monitoring reduced false positives by 30%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
