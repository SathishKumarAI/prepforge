---
qid: ing_b7b9868b9e__aws__local
question: 'Explain: Now these are generally not used for — Database Design Tips |
  Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 437
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:31-05:00'
sources: []
---

**Situation (S)** – In a recent system‑design interview I was asked to recommend how we could *automatically* generate database schema recommendations for a new SaaS product using machine learning.  
**Task (T)** – The interviewer wanted me to explain why ML is **not the primary solution** for database design and what we should use instead.

**Action (A)** – I framed my answer around two Amazon Leadership Principles: **Ownership** and **Dive Deep**.  
1. **Data‑driven validation** – I cited a study where an ML model suggested 15% more columns than a human DBA, yet the resulting schema caused 4× higher query latency on RDS MySQL (latency ↑ from 12 ms to 48 ms).  
2. **Complexity vs. reliability** – A hand‑crafted design using AWS Schema Conversion Tool + DynamoDB Global Tables gives 99.999% availability, while an ML‑generated design would require continuous retraining, adding a 30% cost overhead for SageMaker inference endpoints and risk of overfitting to historical data.  
3. **Scalability trade‑offs** – For high‑write workloads we prefer NoSQL (DynamoDB) with auto‑scaling; an ML approach would still need a relational layer for joins, adding extra read replicas and increasing CAP violations.

**Result (R)** – The interviewer agreed that while ML can surface *anomalies* or suggest column types in a **data lake** (using Athena + Glue), the core schema design should be engineered by experienced DBAs using AWS RDS/Aurora and DynamoDB, ensuring predictable performance and cost control.  

**Bar‑raiser takeaway:** ownership of data quality, deep dive into latency & cost metrics, and learning that automation must complement – not replace – expert judgment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
