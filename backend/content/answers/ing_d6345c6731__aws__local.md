---
qid: ing_d6345c6731__aws__local
question: 'Explain: TripsDB - RDBMS — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 500
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:34-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑engineering sprint for the “TripsDB” microservice at Gojek, I was tasked to redesign the relational schema that feeds the driver‑allocation engine. The existing single‑table approach caused 35 % slower query times during peak hours and a 12 % spike in API latency.

**Task (T)**  
Reduce allocation query latency below 200 ms for 99.5 % of rides, while keeping storage costs under $1M/year.

**Action (A)**  
*Architecture*:  
- Shard the Trips table by geographic region and use **Aurora Serverless v2** to auto‑scale read replicas.  
- Introduce a **materialized view** (`DriverAvailability`) indexed on `region_id, vehicle_type, status` stored in **Amazon DynamoDB** for real‑time lookups.  
- Implement an **event‑driven pipeline** (Kafka → Kinesis Data Streams → Lambda) to sync trip state changes into the materialized view within 500 ms.  
- Add a *pre‑allocation cache* in **ElastiCache Redis** with TTL of 30 s for hot spots.

*Cost/Availability*:  
- Aurora Serverless cuts compute costs by ~40 % compared to provisioned clusters; DynamoDB offers single‑digit millisecond latency and 99.99 % availability.  
- Multi‑AZ deployments and automated failover satisfy high‑availability SLA.

**Result (R)**  
Post‑migration, allocation query latency dropped from 650 ms to **145 ms** (55 % improvement), API error rate fell by 18 %, and storage cost reduced by **$0.8M/year**. The solution also enabled real‑time driver‑matching during surge events, boosting ride‑completion rates by 7 %.

---

*Leadership Principles*: **Ownership** – I took full responsibility for end‑to‑end performance; **Dive Deep** – I dissected query plans and data access patterns to uncover bottlenecks.  
*Bar‑raiser focus*: depth of analysis, quantifiable impact, and iterative learning from pilot failures (initial DynamoDB throttling was mitigated by adaptive partitioning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
