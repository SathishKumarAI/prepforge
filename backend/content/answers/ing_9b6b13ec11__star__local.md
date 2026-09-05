---
qid: ing_9b6b13ec11__star__local
question: When to implement RAW query in hibernate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 336
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:08-05:00'
sources: []
---

**Situation:**  
During a migration of our legacy reporting module to Spring Boot with Hibernate, the team was required to generate quarterly sales reports for millions of rows. The built‑in Criteria API produced a query that fetched all entities into memory before filtering, causing OOM errors and 15‑minute runtime.

**Task:**  
I had to rewrite the data extraction so it executed directly in the database, returned only the aggregated results, and kept response time under five seconds for a 50 million‑row table.

**Action:**  
1. Wrote a native SQL query using `@SqlResultSetMapping` to map the raw result into a DTO.  
2. Leveraged JPA’s `EntityManager.createNativeQuery()` with pagination and `setParameter()` to avoid SQL injection.  
3. Added an index on `(region, sale_date)` and used a bounded window function (`SUM(amount) OVER (PARTITION BY region ORDER BY sale_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`) to compute running totals directly in the DB.  
4. Benchmarked against the Criteria API; the native approach cut execution time from 15 min to 3 sec and reduced heap usage by ~70%.

**Result:**  
The report now loads within five seconds for any quarter, scales with data growth, and I learned that raw SQL is essential when performance-critical aggregation or legacy schema constraints outpace ORM abstractions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
