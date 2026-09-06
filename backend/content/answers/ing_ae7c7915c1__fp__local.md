---
qid: ing_ae7c7915c1__fp__local
question: 'Explain: Statement Cache — GitHub - brettwooldridge/HikariCP: \u5149 HikariCP\u30fbA
  solid, high-performance, JDBC connection pool at last. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 442
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:35-05:00'
sources: []
---

**Why a Statement Cache is essential for JDBC performance**

When an application executes a SQL query, the database driver must translate the textual command into an executable plan.  
That translation (parsing, binding, and optimization) costs CPU time and memory on the server. If the same statement is issued repeatedly—common in OLTP workloads—the driver can cache the *prepared* version of that statement.  

HikariCP implements a lightweight statement cache as follows:

1. **Keying by SQL string** – The cache key is the raw query text (not parameter values).  
   This guarantees that two logically identical statements share the same prepared handle, avoiding duplicate plans.

2. **Size‑controlled LRU eviction** – The pool keeps only a limited number of cached statements per connection (configurable via `maxStatements` / `cachePrepStmts`).  
   An LRU policy ensures that hot queries stay cached while stale ones are discarded, preventing memory blow‑up.

3. **Connection‑local storage** – Each physical JDBC connection maintains its own cache because prepared handles are tied to a connection’s session state (e.g., transaction isolation).  
   This respects the semantics of `Statement` objects and avoids cross‑connection leakage.

4. **Automatic invalidation on error** – If a cached statement fails due to schema changes or connection resets, HikariCP removes it from the cache so that subsequent executions will re‑prepare correctly.

*Non‑obvious insight:*  
Caching prepared statements is not only about reducing parsing overhead; it also enables the database’s query optimizer to reuse execution plans across different connections when those connections share the same statement. This yields a *collective* performance benefit: each new connection can immediately execute a plan that has already been vetted by the optimizer, effectively amortizing optimization cost over many clients.

By deriving from the core problem—repeated parsing and planning costs—and enforcing strict size/eviction policies, HikariCP’s statement cache delivers consistent, high‑throughput JDBC access with minimal memory footprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
