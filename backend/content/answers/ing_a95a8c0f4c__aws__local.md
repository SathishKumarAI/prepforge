---
qid: ing_a95a8c0f4c__aws__local
question: 'Explain: Characteristic #2: It has a minimal amount of database tables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 417
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:21-05:00'
sources: []
---

**Situation / Task**  
While leading the migration of our recommendation engine to a serverless architecture, I discovered that the legacy system used **12 database tables** to store user interactions, item metadata, and model artefacts—creating bottlenecks in data ingestion and lagging model refreshes. My goal was to reduce this footprint while keeping data integrity and latency low.

**Action**  
I applied **Ownership** and **Dive Deep**: I profiled every table’s access patterns with CloudWatch and X-Ray, identified 7 tables that were rarely joined or had redundant columns, and consolidated them into a single **Amazon DynamoDB** table using composite keys (`PK = UserID#Timestamp`, `SK = ItemID`). For model artefacts I switched to **Amazon S3** + **SageMaker Endpoint**. The new design removed 83 % of the storage overhead, cut read/write latency from ~120 ms to <30 ms, and eliminated cross‑table joins that were a pain point for developers.

**Result**  
- **Cost savings:** $18k/month in RDS licensing + $4k in DynamoDB provisioned throughput.  
- **Performance:** 3× faster data ingestion during peak hours; model refresh time dropped from 45 min to 12 min.  
- **Reliability:** Multi‑AZ DynamoDB and S3 provided >99.999% availability, removing the single point of failure that existed in the old schema.

**Learning**  
I learned that a minimal table design can drastically improve scalability and reduce operational cost, but it requires rigorous data access analysis to avoid over‑simplification that could hurt query flexibility. This experience sharpened my ability to balance **Invent & Simplify** with **Customer Obsession**, ensuring our recommendation service remained fast and reliable for millions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
