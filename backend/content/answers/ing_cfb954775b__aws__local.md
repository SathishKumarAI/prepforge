---
qid: ing_cfb954775b__aws__local
question: 'Explain: APIs and connectors — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 451
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:26-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Leadership Principles: Ownership & Dive Deep*  

**Situation:** In my last role I led a data‑platform revamp for a SaaS firm that was struggling to integrate heterogeneous data sources (REST APIs, JDBC connectors, Kafka streams). The existing “data architecture” was a monolith of ad‑hoc ETL jobs; we couldn’t ship new features faster than the quarterly cycle.  

**Task:** Redesign the data architecture so that all API and connector feeds could be ingested, cataloged, and queried in near real‑time while keeping costs under $500k/yr.  

**Action:**  
1. **Define “data architecture”** as a set of *infrastructure patterns* (ingestion pipelines, schema‑management, storage layers) that expose data through APIs for downstream analytics.  
2. Built an **Event‑Driven ingestion layer** with Amazon EventBridge → Lambda → Amazon S3 (raw landing).  
3. Implemented a **Schema Registry** in AWS Glue Data Catalog; each connector publishes a JSON schema that is versioned automatically.  
4. Created a *data lake* on S3 + Athena for ad‑hoc queries, and an *analytic warehouse* on Amazon Redshift Serverless for BI workloads.  
5. Added **API Gateway + Lambda authorizers** to expose curated datasets as RESTful endpoints with fine‑grained IAM controls.  

**Result:** The new architecture cut data‑to‑analytics time from 4 weeks to <48 hrs, reduced ETL maintenance hours by 70%, and kept annual spend at $420k—down 15% vs the prior model. I also authored a “Connector Playbook” that lowered onboarding time for new partners from days to 2 hours.

**Learning:** Ownership means questioning the status quo; diving deep into the data‑flow stack revealed hidden bottlenecks and cost levers. Future work will focus on ML‑based schema drift detection to further reduce manual effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
