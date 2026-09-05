---
qid: ing_786351e841__star__local
question: 'Explain: Search — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 349
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:53-05:00'
sources: []
---

**Situation:**  
At my previous company we had a petabyte‑scale event log stored in PostgreSQL for a real‑time fraud detection service. The search engine needed to return the last 30 days of user activity within 3 seconds, but queries were timing out because the database was constantly ingesting billions of rows per day.

**Task:**  
Redesign the time‑series storage and query path so that ad‑hoc searches over any 30‑day window would complete in under 3 seconds while keeping write throughput above 10 kTPS.

**Action:**  
I introduced a sharded architecture: each shard was a PostgreSQL instance on SSDs, partitioned by month and hashed user ID. I added the `timescaledb` hypertable extension to enable efficient range scans and created composite indexes on `(user_id, event_time)`. For query acceleration I built a materialized view that pre‑aggregated daily counts per user into an append‑only table, refreshed nightly via incremental WAL replay. I also tuned autovacuum parameters (vacuum_cost_delay=0, vacuum_cost_limit=10000) to prevent pauses during heavy writes and employed `pg_partman` for automated partition maintenance.

**Result:**  
Query latency dropped from 12 seconds to 1.8 seconds on a 30‑day window, while write throughput remained at 12 kTPS. The system now supports real‑time dashboards with sub‑second refreshes. I learned that combining native time‑series extensions with careful sharding and incremental materialization can break the petabyte barrier without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
