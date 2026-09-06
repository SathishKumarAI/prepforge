---
qid: vq_3c9537f739__faang__local
question: WHAT IS AN INDEX IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:39-05:00'
sources: []
---

**Clarify**  
You’re asking about *indexes* in relational databases (e.g., MySQL, PostgreSQL, SQL Server). An index is a data structure that lets the database engine locate rows faster than scanning the whole table. I’ll assume you want to understand what it is, how it works, and why it matters.

**Approach**  
1. Define the concept in plain terms.  
2. Explain typical underlying structures (B‑trees, hash).  
3. Discuss benefits vs. costs.  
4. Mention common use cases and caveats.

**Depth**  
- **What it is**: An index is a separate structure that maps key values to row locations (pointers or physical addresses). Think of it like an inverted table of contents for your data.  
- **How it works**: Most RDBMSes implement B‑tree indexes: leaf nodes store keys and pointers; internal nodes guide traversal, giving O(log n) lookup time. Hash indexes offer O(1) average lookups but can’t support range queries.  
- **Benefits**: Dramatically speeds up `SELECT … WHERE column = value` or range predicates (`BETWEEN`, `<`, `>`). Also supports unique constraints and foreign‑key enforcement efficiently.  
- **Costs**: Indexes consume disk space, slow down writes (INSERT/UPDATE/DELETE must update the index), and can become fragmented over time.

**Edge Cases**  
- Very small tables may not need an index—table scans are cheaper than maintaining one.  
- Columns with high cardinality (many distinct values) benefit most; low‑cardinality columns (e.g., gender) provide little advantage.  
- Composite indexes require careful ordering of columns to match query predicates.

**Optimize & Communicate**  
When interviewing, highlight that choosing the right index is a trade‑off: *“I’d start with the most selective column in the WHERE clause and add composite keys only if queries filter on multiple columns.”* Also mention monitoring tools (`EXPLAIN`, `pg_stat_user_indexes`) to validate effectiveness. This shows you understand both theory and practical tuning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
