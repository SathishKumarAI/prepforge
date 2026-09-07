---
qid: ing_aca64bb39e__aws__local
question: 'Explain: Indexing — Database-Internals/DataStructures/Index.md at main
  \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 412
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:15-05:00'
sources: []
---

**Situation (Customer Obsession)**  
While building a recommendation engine for an e‑commerce platform, our team hit a bottleneck: query latency over the user‑interaction table jumped from **30 ms to >1 s** after scaling to 10 M rows. The customers were experiencing slow page loads, so I took ownership of the root cause.

**Task (Ownership)**  
Identify why lookups on `(user_id, timestamp)` degraded and redesign the index strategy to keep latency <50 ms at scale.

**Action (Dive Deep + Bias for Action)**  
1. **Profiling** – used `EXPLAIN ANALYZE` and `pg_stat_statements`; discovered a full table scan because the composite B‑tree index was fragmented after many updates.  
2. **Design** – created a **partial GIN index** on `(user_id, jsonb_path_ops)` for active sessions + a **covering bitmap index** on `(timestamp DESC)` to accelerate recent queries.  
3. **AWS Services** – migrated the database to **Amazon Aurora PostgreSQL** with *Aurora Serverless v2* for auto‑scaling and *Global Database* for multi‑region reads.  
4. **Cost/Availability trade‑offs** – chose `WRITE_AHEAD_LOG` retention of 24 h (≈$0.10 per GB) to balance durability vs cost; enabled read replicas in us-east-2 for 99.99% availability.

**Result (Deliver Results)**  
Query latency dropped from 1,200 ms to **42 ms** (a 95 % reduction). Page load times improved by **18 %**, boosting conversion rate by **3 pp** in the next quarter. Post‑mortem highlighted that we’d previously ignored index fragmentation—a lesson that now drives our proactive monitoring with CloudWatch alarms on `pg_stat_all_indexes`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
