---
qid: ing_3703878b61__faang__local
question: What Is a Database Index? — Indexing | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 555
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:51:56-05:00'
sources: []
---

**Clarify**  
*Question:* “What is a database index?” – i.e., how does it speed up queries and what are its trade‑offs?  
*Assumptions to confirm:* We’re dealing with relational (or key‑value) stores, primary vs secondary indexes, read/write patterns.

---

### Approach
1. Define an index as a separate data structure mapping keys to row locations.  
2. Explain common implementations: B‑Tree/B‑+Tree for range scans; hash tables for equality lookups; bitmap for low‑cardinality columns.  
3. Discuss how the DB engine uses it during query planning and execution.  
4. Highlight costs (storage, maintenance on DML) and when to create/drop.

---

### Depth
An **index** is essentially a sorted lookup table that stores key values and pointers (row IDs or page offsets).  
- *B‑Tree/B‑+Tree:* Balanced tree where internal nodes contain keys; leaves hold row pointers. Enables O(log n) search, prefix/range queries, and can be used for ORDER BY / GROUP BY.  
- *Hash Index:* Direct hash map; fast equality lookups but no ordering or range support.  
- *Bitmap Index:* Bit vector per key value; excellent for low‑cardinality columns (e.g., gender), allowing set operations with bitwise ops.

During query execution, the optimizer estimates cost: if an index covers the predicate and projection, it can replace a full table scan. The engine may use a **covering index** to avoid fetching rows entirely.

*Costs:*  
- **Storage:** Index size ≈ 20–40 % of data (depends on key size).  
- **Write overhead:** Every INSERT/UPDATE/DELETE must modify the index, adding latency.  
- **Fragmentation:** Requires periodic rebuild/rebalance.

---

### Edge Cases
- *High cardinality with many updates:* Hash or B‑Tree may degrade; consider partial or composite indexes.  
- *Very large tables:* Partitioned indexes reduce maintenance windows.  
- *Composite keys:* Order of columns matters for range queries.  

---

### Optimize & Communicate
- **Index only on selective predicates** to avoid write penalties.  
- Use **covering indexes** for read‑heavy workloads.  
- Periodically run `ANALYZE`/`VACUUM` (PostgreSQL) or equivalent to keep statistics accurate.

*Communication:* “Think of an index as a library’s card catalog—quickly tells you where the book is, but you must update it whenever books move.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
