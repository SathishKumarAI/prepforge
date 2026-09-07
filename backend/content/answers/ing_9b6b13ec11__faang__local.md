---
qid: ing_9b6b13ec11__faang__local
question: When to implement RAW query in hibernate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 407
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:37-05:00'
sources: []
---

**Clarify**  
You’re asking *when* a raw (native) SQL query is preferable over Hibernate’s HQL/Criteria API. I’ll assume: you need full control of the query, you’re working with legacy tables or complex joins, and performance or vendor‑specific features matter.

**Approach**  
1. Benchmark HQL vs native for the use case.  
2. Identify if the mapping can be expressed in HQL/Criteria.  
3. Check transaction/locking requirements.  
4. Consider portability: will you need to support multiple RDBMSs?  

**Depth**  
- **Use raw SQL when**:  
  - The query involves complex set operations, window functions, or vendor‑specific hints that HQL can’t express.  
  - You need fine‑tuned performance (e.g., `SELECT /*+ INDEX(...) */`).  
  - The data model isn’t fully mapped in Hibernate (legacy schema).  
- **Avoid raw SQL when**:  
  - The same logic is portable and maintainable via HQL/Criteria; the ORM can handle lazy loading, cascades, and caching.  
  - You need automatic result mapping to entities or projections—Hibernate can map automatically with `@SqlResultSetMapping`.  

**Edge Cases**  
- Mixing native queries inside a transaction that expects Hibernate’s first‑level cache may lead to stale data.  
- Using native queries for pagination on large tables without proper indexing can degrade performance.  

**Optimize & Communicate**  
Start with HQL; only refactor to native if profiling shows >10× slowdown or if you need vendor hints. Document the decision, keep a mapping layer (`@NamedNativeQuery`) so future developers understand why raw SQL was chosen. This demonstrates disciplined trade‑off analysis and clear communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
