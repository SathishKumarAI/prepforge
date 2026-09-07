---
qid: ing_14395c1880__faang__local
question: 'Explain: Now what is the third category? Let''s — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 714
total_tokens: 961
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:14-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about the *third* major category of database‑design tips that often appear in system‑design interviews. In most teaching materials the first two are (1) **Data Modeling & Schema Design** and (2) **Scalability / Partitioning Strategies**. So we’ll explain what typically constitutes the third pillar.

---

### 1. **Performance & Query Optimization**

| Sub‑topic | Why it matters |
|-----------|----------------|
| **Index Selection** | Reduces scan cost for frequent lookups, joins, and range queries. |
| **Denormalization vs Normalization** | Balances read speed against write complexity; often a hybrid “micro‑denormalized” approach is used. |
| **Caching & Materialized Views** | Offloads hot data from the DB, lowers latency for analytics or high‑traffic reads. |
| **Connection Pooling & Load Balancing** | Prevents resource exhaustion and ensures even traffic distribution across replicas. |

---

### 2. **Approach**

1. Identify query patterns (read‑heavy, write‑heavy, analytical).
2. Pick indexes that cover the most frequent predicates.
3. Evaluate whether denormalizing a few fields reduces costly joins.
4. Add caching layers or materialized views for hot aggregates.
5. Configure connection pools and read replicas.

---

### 3. **Depth**

- **Indexing**: B‑tree for equality/range, hash for exact matches, GiST/GIN for full‑text or geospatial. Use composite indexes when queries filter on multiple columns.
- **Denormalization**: Store a user’s `last_login` in the posts table if it is queried often; keep write logic idempotent.
- **Caching**: Redis/Memcached for 1–5 ms latency; set TTLs to avoid stale data.
- **Connection Pooling**: Keep pool size proportional to CPU cores; monitor idle timeout.

*Complexity*: Index creation is O(1) per insert if maintained, but can add overhead to writes. Caching introduces consistency challenges (stale reads).

---

### 4. **Edge Cases**

| Scenario | Pitfall |
|----------|---------|
| Heavy write bursts after caching layer invalidates | Cache stampede – use “cache aside” with locking. |
| Complex joins on large tables without proper indexes | Full table scans, O(N²) behavior. |
| Denormalized data diverging from source of truth | Inconsistent reads; need compensating writes or eventual consistency guarantees. |

---

### 5. **Optimize & Communicate**

- **Trade‑off**: More indexes = faster reads, slower writes.
- **Narrative**: “I’ll start by profiling the query mix, then iteratively add indexes and denormalized columns only where the hit‑rate justifies the write overhead.”
- **Metrics to track**: Query latency, cache hit ratio, write amplification.

> *Bottom line*: The third category—**Performance & Query Optimization**—focuses on turning a correct schema into a fast, reliable system by judicious use of indexes, denormalization, caching, and connection management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
