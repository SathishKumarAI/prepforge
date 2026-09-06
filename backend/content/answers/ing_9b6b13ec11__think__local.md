---
qid: ing_9b6b13ec11__think__local
question: When to implement RAW query in hibernate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 481
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:21:31-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- *What is “RAW” here?* Assume it means a native SQL query (not HQL/Criteria).  
- *Why ask “when”?* Likely: performance, legacy tables, complex joins, or non‑entity data.  
- *Assume the app already uses Hibernate mappings and you can mix JPQL & native queries.*

**2️⃣ Mental model / framework**

Use a *decision tree*:  

```
Is the needed data representable as an entity?
   ├─ Yes → use HQL/Criteria
   └─ No  → consider native query
```

If “No” branch, evaluate:

- **Performance need** – large result sets or complex aggregations.  
- **Legacy schema / database‑specific features** – e.g., stored procedures, vendor functions.  
- **Non‑entity results** – DTOs, scalar values, maps.

**3️⃣ Step‑by‑step reasoning**

1. Identify the query’s goal (fetch entities? compute aggregates?).  
2. Check if a mapping exists for all columns; if not, native query may be required.  
3. Measure the cost: JPQL vs raw SQL in a profiling run.  
4. Evaluate maintainability: will the native query break with schema changes?  
5. Decide to use `createNativeQuery()` (with or without result set mapping) only when the above criteria justify it.

**4️⃣ Common traps**

- *Over‑optimizing early*: native queries add complexity; stick to JPQL until proven slow.  
- *Ignoring portability*: raw SQL can lock you into a vendor’s dialect.  
- *Mixing mappings incorrectly*: forgetting `@SqlResultSetMapping` leads to runtime errors.

**5️⃣ Sanity‑check & communicate**

- Run a quick benchmark: same data set, JPQL vs native.  
- Document the rationale (e.g., “requires non‑entity DTO; uses vendor function”).  
- Communicate that native queries should be isolated in DAO/Repository classes with clear unit tests to guard against schema drift.  

This structured approach ensures you only resort to RAW queries when they truly add value and keeps your codebase maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
