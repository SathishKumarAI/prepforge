---
qid: vq_770eccd87d__faang__local
question: What is a View?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 458
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:17:41-05:00'
sources: []
---

**Clarify**  
A *view* in relational databases is a virtual table derived from one or more base tables via a SELECT query. It presents data as if it were a real table but does not store the rows itself. I’ll assume we’re talking about SQL‑based RDBMS (PostgreSQL, MySQL, Oracle, etc.) and that the interviewer wants both conceptual and practical aspects.

**Approach**  
1. Define what a view is and its purpose.  
2. Explain how it’s created, queried, and its storage model.  
3. Discuss use cases: abstraction, security, consistency.  
4. Cover limitations (e.g., updateability, performance).  

**Depth**  
- *Definition*: `CREATE VIEW v AS SELECT …` creates a named query; the view is materialized only at runtime unless explicitly materialized.  
- *Execution*: Each reference to the view rewrites into its underlying SELECT, so statistics are computed on‑the‑fly.  
- *Security*: Granting SELECT on a view can expose only certain columns/rows, hiding sensitive data.  
- *Updatability*: Views that satisfy certain conditions (no aggregates, no GROUP BY) are updatable; otherwise they’re read‑only unless an INSTEAD OF trigger is defined.  
- *Performance*: Materialized views cache results and refresh on schedule or demand, trading freshness for speed.

**Edge Cases**  
- Complex joins or subqueries can make a view non‑updatable.  
- Recursive CTEs may not be supported in all engines as views.  
- Permissions: a user must have rights to underlying tables unless the database enforces “view ownership” rules.

**Optimize & Communicate**  
Explain that choosing between a regular view and a materialized view hinges on read/write patterns and latency requirements. In an interview, I’d emphasize how views help decouple application logic from schema changes, reduce code duplication, and enforce consistent business logic across teams. This shows clear problem‑solving, depth of knowledge, and the ability to trade off performance for maintainability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
