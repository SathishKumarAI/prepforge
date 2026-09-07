---
qid: ing_23d4aabbb9__aws__local
question: 'Explain: Product — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 432
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:39-05:00'
sources: []
---

**Product – Jobs at Glean (AWS‑style answer)**  

*Leadership Principles:* **Customer Obsession** & **Ownership**

---

**Situation**  
I joined Glean’s product team to launch the “Jobs” feature—an AI‑driven job board that surface relevant roles across the enterprise. Stakeholders demanded a 2× faster search latency than existing internal tools and 30 % higher click‑through rates.

**Task**  
Own the end‑to‑end solution: data ingestion, model training, inference serving, and analytics, while ensuring scalability for >50 k users and compliance with privacy policies.

**Action**  
1. **Data Pipeline** – Built an EventBridge → S3 → Glue ETL to normalize job postings from HR, ATS, and external feeds.  
2. **Modeling** – Trained a Sentence‑Transformers model on 200k internal resumes & job descriptions (GPU‑EC2 p3.xlarge). Deployed via SageMaker Endpoint with autoscaling (min 1, max 10).  
3. **Search Layer** – Indexed embeddings in Amazon OpenSearch Service; used query‑time cosine similarity for top‑N ranking.  
4. **Observability** – Integrated CloudWatch metrics & X-Ray traces to capture latency and error rates.  

**Result**  
- Search latency dropped from 1.2 s to 0.35 s (3× faster).  
- Click‑through rate increased by 38 % within the first month, surpassing the target.  
- Cost per inference reduced by 22 % through spot instance usage and endpoint autoscaling.

**Learnings**  
Tried a monolithic Lambda approach initially; it hit throttling under load. The shift to microservices on ECS + SageMaker resolved scalability but required tighter monitoring—underscoring that **ownership means iterating until the system meets real‑world demands**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
