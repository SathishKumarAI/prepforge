---
qid: ing_d8c9813a75__aws__local
question: 'Explain: Query Patterns — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:28-05:00'
sources: []
---

**Situation (S)** – While leading the data‑science team at a fintech startup, we needed to serve real‑time risk scores to every transaction (~10 M/day). The existing SQL pipeline lagged 1–2 s per query, hurting our *Customer Obsession* goal.

**Task (T)** – Redesign the data layer so that ML models could read features in <50 ms while still supporting complex analytics for model training.

**Action (A)**  
- **Dive Deep** into access patterns: feature reads were *read‑heavy*, *temporal* and *key‑based*; analytics needed *aggregation* over long periods.  
- Migrated transactional tables to **Amazon DynamoDB** (event‑driven, key‑value) for low‑latency lookups, adding a **Global Secondary Index** on user ID for “last 24 h” scans.  
- Deployed an **S3 + Athena** lake for batch analytics; used **Redshift Spectrum** to join S3 data with DynamoDB via the **DynamoDB Data Connector**.  
- Employed **Amazon SageMaker** endpoints that read from DynamoDB directly, reducing model‑inference latency by 70 %.  
- Implemented **on‑demand capacity + auto‑scaling** and reserved instances for cost control; overall spend dropped 35 % while SLA improved to <30 ms.

**Result (R)** – Real‑time risk scores hit every transaction with 99.9 % availability, cutting fraud losses by 18 M USD/year and boosting user satisfaction scores from 4.2→4.7/5.  
*Ownership* was demonstrated by driving the migration end‑to‑end; *Bias for Action* through rapid prototyping; *Learned* that hybrid SQL/NoSQL is often the sweet spot for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
