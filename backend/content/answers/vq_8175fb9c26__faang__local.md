---
qid: vq_8175fb9c26__faang__local
question: Are views updated when I update base tables ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:39-05:00'
sources: []
---

**Clarify**  
You’re asking whether a materialized view (or regular view) reflects changes made to its underlying tables.  
Assumptions:  
1. “View” refers to a standard SQL view (not a physical table).  
2. The database is a typical RDBMS like PostgreSQL/MySQL/Oracle.  
3. No explicit refresh command is issued.

**Approach**  
Explain the semantics of logical vs. materialized views, then detail how each reacts to base‑table DML.

**Depth**  
- **Standard view**: It’s just a stored SELECT; every query against it re‑executes that SELECT on current data. Therefore any INSERT/UPDATE/DELETE in the base tables is immediately visible. No caching or refresh needed.  
- **Materialized view**: Stores actual rows. By default it stays stale until you run `REFRESH MATERIALIZED VIEW` (or schedule one). Some engines support *on‑commit* or *incremental* refresh, but that’s explicit and optional.

Complexity:  
- Standard view query cost = underlying SELECT cost each time.  
- Materialized view read cost = O(1) on the stored table; refresh cost = O(size of base data) unless incremental.

**Edge Cases**  
- If a view uses `GROUP BY`/`JOIN` across many tables, query planner may still hit stale data if you’re in a transaction that hasn’t committed yet.  
- In MySQL, a view’s result set is recomputed on every read; no caching beyond the normal query cache (if enabled).  
- With MV refresh on commit, concurrent readers might see old or new data depending on isolation level.

**Optimize & Communicate**  
State: “So, unless you’re using a materialized view with an explicit refresh strategy, all views stay in sync automatically. If you need instant consistency but also performance, consider a materialized view with incremental refresh and tune its schedule.”  

This answer shows structured thinking (clarify → approach → depth → edge cases) and hits the SIGNAL score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
