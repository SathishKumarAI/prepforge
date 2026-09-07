---
qid: ing_953869efb6__faang__local
question: 'Explain: Let''s say you are querying a database — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 510
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:31:18-05:00'
sources: []
---

**Clarify**  
The question asks how one would design or query a database for a system‑design interview, focusing on best practices and trade‑offs. I’ll assume: (1) the data is highly relational, (2) read traffic dominates writes, and (3) we need horizontal scalability.

**Approach**  
1. Identify entities & relationships → ER diagram.  
2. Normalize to 3NF for consistency, then denormalize critical joins for performance.  
3. Choose a database type: RDBMS (PostgreSQL/MySQL) for ACID needs; NoSQL (Cassandra/Spanner) if massive horizontal scale is required.  
4. Partition/shard data by natural key or hash to spread load.  
5. Add indexes on foreign keys and frequent query columns, but limit to avoid write overhead.  
6. Cache hot rows in Redis/Memcached to reduce DB hits.

**Depth**  
- **Schema design**: Use surrogate IDs, composite primary keys for many‑to‑many tables, and JSONB for flexible attributes.  
- **Query pattern**: Write SELECT * FROM orders JOIN customers ON … WHERE status = ‘shipped’ ORDER BY created_at DESC LIMIT 20.  
- **Indexes**: B‑tree on (status, created_at) gives O(log n) lookup; use partial indexes for sparse columns.  
- **Sharding**: Hash(customer_id) → shard N; maintain a consistent hash ring to minimize data movement during scaling.  
- **Replication**: Master–replica for reads, synchronous writes only when strict consistency is required.

**Edge Cases**  
- Skewed data (hot spots) can overload a shard; mitigate with range‑based sharding or secondary “hot” table.  
- Schema evolution may break existing queries; use versioned migrations and backward‑compatible fields.  
- Index bloat: monitor size, drop unused indexes.

**Optimize & Communicate**  
Explain that the trade‑off is between consistency (RDBMS) and scalability (NoSQL). I’d iterate on performance metrics—latency, throughput—and adjust sharding strategy or add materialized views if query times grow. By presenting this structured plan, I demonstrate clear problem framing, systematic design, and awareness of practical pitfalls—all key to a high‑score FAANG interview response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
