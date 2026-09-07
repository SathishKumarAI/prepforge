---
qid: ing_161fab661d__faang__local
question: 'Explain: Materialized View — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:51-05:00'
sources: []
---

**Clarify**  
A *materialized view* is a pre‑computed table that stores the result of a query so downstream consumers can read it faster than recomputing on demand.  
Assumptions:  
1. The underlying data changes frequently (writes > reads).  
2. Query patterns are stable enough to justify caching results.  
3. We have control over refresh strategy (incremental vs full).

**Approach**  
1. **Identify candidate queries** – those with high read volume and expensive joins/aggregations.  
2. **Define the view schema** – choose columns, indexes, and storage format (columnar for analytics).  
3. **Choose a refresh policy** – *on‑commit* for near real‑time or *scheduled incremental* for batch workloads.  
4. **Implement** using database features (PostgreSQL `CREATE MATERIALIZED VIEW`, BigQuery materialized views) or a separate caching layer (Redis, Snowflake).  

**Depth**  
- *Storage*: Persisted on disk; size can be large but amortizes query cost.  
- *Refresh*: Full rebuild is O(N); incremental uses change logs/Ops like CDC to update only affected rows—O(k).  
- *Consistency*: Trade‑off between freshness and latency; use MVCC or staleness windows.  
- *Indexing*: B‑trees on key columns, partitioning for large tables.

**Edge Cases**  
- Skewed data updates cause hotspots during refresh.  
- Schema changes require view re‑creation.  
- Very low read volume: materialization overhead outweighs benefit.  

**Optimize & Communicate**  
To improve:  
- Use *partitioned* materialized views to limit scan scope.  
- Combine with *incremental refreshes* and *change data capture* for near real‑time updates.  
- Monitor hit ratio; if <30 %, drop the view.  
Explain trade‑offs clearly: “We gain 10× read latency at the cost of a 5 % storage overhead and a 2‑second refresh lag.” This shows balanced judgment—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
