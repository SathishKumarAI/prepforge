---
qid: ing_9b6b13ec11__fp__local
question: When to implement RAW query in hibernate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 380
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:00-05:00'
sources: []
---

### Why Hibernate’s `@Query` sometimes must be “raw”

The fundamental problem is **performance vs abstraction**.  
Hibernate builds an object‑graph from a SQL statement; the cost of that mapping can dominate when:

1. **The result set is huge or highly denormalised** – e.g., a report that joins many tables, returns millions of rows, or projects only a few columns.  
2. **The query logic is too complex for JPQL/HQL** – sub‑queries with window functions, `GROUPING SETS`, or vendor‑specific extensions.  
3. **You need to bypass the entity lifecycle** – no dirty checking, no cascading, no lazy loading.

When those conditions hold, a *raw* JDBC/SQL query is preferable because:

- It eliminates Hibernate’s metamodel traversal and proxy creation.  
- The database can use specialised optimisers (e.g., `LIMIT/OFFSET` paging, materialised views).  
- You gain full control over result mapping (e.g., `ResultSetExtractor`, `SqlRowSet`) which is often faster than reflection‑based hydration.

#### One non‑obvious insight

Many developers assume “raw” means you lose all transaction safety. In reality, a native query executed via the same `EntityManager` or `Session` inherits the current transaction context and JDBC connection settings (e.g., isolation level, fetch size). Thus you can still honour JTA/transaction boundaries while enjoying raw‑SQL speed.

**Bottom line:** Use a native query when the abstraction layer would add measurable overhead—large, denormalised reads, vendor extensions, or when you need to skip Hibernate’s lifecycle. For small, simple CRUD operations, keep JPQL/HQL; for heavy analytics or legacy integration, go raw.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
