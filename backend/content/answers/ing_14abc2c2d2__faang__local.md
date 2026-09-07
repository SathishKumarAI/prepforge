---
qid: ing_14abc2c2d2__faang__local
question: 'Explain: Indexing — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 606
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:31:14-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked: *“Explain indexing – 7 must‑know strategies for scaling a database.”*  
Assumptions: we’re dealing with relational or NoSQL stores, data is read‑heavy, and the goal is to keep query latency low as size grows. We’ll focus on index design principles that apply across engines.

**2️⃣ Approach**  
1. Identify hot queries.  
2. Pick column(s) that filter/sort most often.  
3. Decide on index type (B‑Tree, hash, bitmap, composite).  
4. Balance read/write overhead.  
5. Monitor fragmentation and update frequency.  
6. Leverage covering indexes to avoid lookups.  
7. Use partitioning or sharding in tandem with indexing.

**3️⃣ Depth**  

| Strategy | Why it matters | Typical implementation |
|----------|----------------|------------------------|
| **Single‑column B‑Tree on selective predicates** | Keeps lookup cost O(log n). | `CREATE INDEX idx_user_email ON users(email);` |
| **Composite (multi‑column) index for combined filters** | Avoids Cartesian scans. | `CREATE INDEX idx_order_user_date ON orders(user_id, order_date DESC);` |
| **Covering indexes (include non‑key columns)** | Eliminates table lookups. | `CREATE INDEX idx_cover ON products(cat_id) INCLUDE(price, stock);` |
| **Hash or GiST for equality/geo queries** | Faster exact matches / spatial data. | `CREATE INDEX idx_location ON stores USING GIST(location);` |
| **Partial / filtered indexes** | Reduce size when conditions are selective. | `CREATE INDEX idx_active ON sessions(user_id) WHERE active=true;` |
| **Clustered index (primary key)** | Physical ordering speeds range scans. | `ALTER TABLE orders CLUSTER BY order_date;` |
| **Maintenance & monitoring** | Prevents fragmentation, stale statistics. | Automated `ANALYZE`, `VACUUM`, and log‑based refreshes. |

**4️⃣ Edge Cases**  
- Highly write‑heavy tables: composite or covering indexes add overhead.  
- Very low cardinality columns (e.g., gender) rarely benefit from indexing.  
- Partitioned tables may require local vs global indexes; mixing can cause performance regressions.

**5️⃣ Optimize & Communicate**  
After initial deployment, run query plans (`EXPLAIN`) to confirm index usage. Adjust column order in composites based on cardinality. Use auto‑tuning tools (e.g., PostgreSQL’s `pg_auto_explain`). Finally, document each index with its target query and maintenance schedule so future developers understand the rationale.

*Result:* With these seven strategies, you can keep read latency low even as data scales to billions of rows while minimizing write friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
