---
qid: ing_c283d85f42__aws__local
question: 'Explain: System Design Guided Practice - Sponsor — Cloud Spanner Database
  - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 498
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:53-05:00'
sources: []
---

**Situation (S)** – I led the redesign of an on‑prem PostgreSQL database that stored millions of *sponsor* records used by our recommendation engine. The data was highly relational, had strict consistency needs, and required horizontal scaling for a growing ad‑tech client base.

**Task (T)** – Migrate to **Google Cloud Spanner**, ensuring zero downtime, ACID guarantees, and sub‑millisecond latency for read/write operations that feed the ML pipeline.

**Action (A)**  
1. **Requirements & Trade‑offs** – I mapped each use case: real‑time sponsor updates (writes), high‑throughput campaign lookups (reads), and nightly batch ingestion of new sponsors.  
2. **Design** – Created a *single Spanner instance* partitioned by `region_id`, with strong primary keys (`sponsor_id, region_id`). Leveraged **Spanner’s global replication** for 99.999% availability and **automatic sharding** for scalability.  
3. **Integration** – Wrapped the Spanner client in a Go microservice exposed via gRPC; added caching (Redis) for hot read paths to keep ML inference latency <10 ms.  
4. **Cost & Monitoring** – Calculated that 5 nodes + 2 replicas would cost ~$12k/month versus $25k/year on‑prem. Implemented Cloud Monitoring dashboards and Alerting for write latency >200 µs.

**Result (R)** – Migration completed in 3 weeks with zero data loss. Read latency dropped from 120 ms to <10 ms, write throughput increased by 4×, and overall cost fell 48%. The new architecture also enabled our ML model to fetch sponsor attributes instantly, improving recommendation precision by 12% (AUC↑0.04).  

**Learning** – I realized the importance of *dive deep* into Spanner’s consistency semantics before committing; a quick test caught a subtle key‑range partitioning issue that would have caused data skew.

> **Leadership Principles Highlighted**  
- **Ownership**: Took full responsibility for end‑to‑end migration.  
- **Dive Deep & Deliver Results**: Detailed Spanner design and measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
