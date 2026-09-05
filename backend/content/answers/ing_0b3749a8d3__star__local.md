---
qid: ing_0b3749a8d3__star__local
question: 'Explain: Context — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 357
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:15-05:00'
sources: []
---

**Situation** – In the summer of 2023, I joined a fintech startup that was launching an AI‑driven credit scoring engine. The existing monolith stored all user, transaction, and model data in one huge PostgreSQL database. As we added more ML models (fraud detection, risk assessment, recommendation), the table grew to 12 TB, causing slow queries and making it impossible for the new services to scale independently.

**Task** – I was tasked with refactoring the data layer so each microservice could evolve its own schema without locking the whole system. The goal was to reduce latency on model inference by 30% while keeping cross‑service consistency within a single transaction where needed.

**Action** – I designed a “database per service” pattern:  
1. Created separate PostgreSQL instances for the CreditScoreService, FraudDetectionService, and RecommendationService.  
2. Used logical replication to stream user profile updates from the central UserDB to each service’s DB with minimal lag (≤ 200 ms).  
3. Implemented a lightweight event‑driven sync via Kafka for transactional consistency—when a loan application was approved, an event updated all relevant services’ databases atomically.  
4. Added connection pooling and read replicas per service to handle high inference traffic.

**Result** – Query latency dropped from 1.2 s to 0.35 s on average, throughput increased by 45%, and each team could deploy schema changes without affecting others. I learned that careful replication design can preserve consistency while enabling true microservice independence in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
