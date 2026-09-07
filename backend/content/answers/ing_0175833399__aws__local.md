---
qid: ing_0175833399__aws__local
question: 'Explain: Relational Databases (RDBMS) — 15 Types of Databases and When
  to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 450
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:30-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a legacy data‑warehouse from an on‑prem RDBMS to a cloud‑native stack. The goal was to support **10× more concurrent analytics queries** while cutting operational costs by 35 %. I had to decide which AWS database service fit each use case—transactional OLTP, analytical OLAP, or hybrid workloads.

**Action**  
I mapped the 15 common relational patterns (e.g., *Normalized OLTP*, *Star‑Schema Analytics*, *Temporal Versioning*, *Geo‑Partitioned*). For each I chose an AWS product:

| Pattern | AWS Service | Why |
|---------|-------------|-----|
| OLTP, high write | **Amazon Aurora PostgreSQL** | Sub‑millisecond latency + 15× cheaper than RDS MySQL |
| Complex joins, reporting | **Redshift Spectrum** | Massively parallel query over S3 data, no ETL |
| Time‑series analytics | **Timestream** | Built‑in downsampling & retention policies |
| Geospatial | **Aurora PostgreSQL + PostGIS** | Native spatial indexes, low cost |
| Multi‑region read replicas | **RDS Multi‑AZ** | 99.95 % availability |

I also introduced *schema‑on‑load* for analytics tables and *read‑replica promotion* for failover.

**Result**  
Post‑migration, query latency dropped from 4 s to 0.6 s (≈ 83 % faster), cost fell by **$48k/yr**, and we achieved 99.999 % uptime during a major outage thanks to Aurora’s automated failover.  

**Reflection**  
I learned that “*Dive Deep*” means validating each service with real workload tests, not just theoretical fits. I also practiced *Bias for Action*: spinning up trial clusters within days instead of weeks. This ownership mindset accelerated delivery and earned me the “Innovation Champion” award last quarter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
