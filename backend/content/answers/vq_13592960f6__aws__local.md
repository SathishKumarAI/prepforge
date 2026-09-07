---
qid: vq_13592960f6__aws__local
question: STORED PROCEDURE ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 384
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:47-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked with redesigning the nightly batch that populated our data warehouse from transactional tables. The existing monolithic SQL script ran for over **4 hrs**, caused lock contention, and produced inconsistent results when the system load spiked.

**Task (T)**  
I owned the migration to a *stored‑procedure* based pipeline on Amazon RDS PostgreSQL so we could parallelize work, reduce lock time, and expose audit metadata for compliance.

**Action (A)**  
1. **Dive Deep** – profiled the script with `EXPLAIN ANALYZE`, identified 12 hotspots, and rewrote them as reusable CTEs inside a single procedure.  
2. Leveraged **AWS Lambda** to trigger the procedure via the RDS Data API, enabling *serverless* orchestration that scales on demand.  
3. Added versioning tags and an audit table; every run writes a UUID, start/end timestamps, and status—critical for our *Customer Obsession* with data integrity.  
4. Implemented retry logic in Lambda to handle transient database errors (retry‑backoff).  

**Result (R)**  
- Execution time dropped from **4 hrs → 45 min** (a 90% reduction).  
- Lock contention events fell by **97%**, freeing the DB for OLTP traffic.  
- Cost of the RDS instance decreased by **$1,200/month** due to shorter usage windows and reduced need for larger instances.

*Ownership & Bias for Action*: I drove the end‑to‑end change, delivered measurable performance gains, and documented lessons so the team could avoid similar bottlenecks in future migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
