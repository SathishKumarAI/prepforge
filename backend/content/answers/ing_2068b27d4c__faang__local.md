---
qid: ing_2068b27d4c__faang__local
question: 'Explain: Features — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 499
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:05-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *features* are stored and queried in **Apache Cassandra**, a wide‑column NoSQL database. I’ll confirm: we’re talking about column families, primary keys (partition + clustering), and secondary indexes or materialized views used to expose “feature” columns.

**Approach**  
1. Map each feature to a column within a row keyed by an entity ID.  
2. Use a composite partition key if sharding across nodes is needed.  
3. Decide between normalised (one table per feature set) and denormalised (wide‑row) designs.  
4. Leverage Cassandra’s TTL or time‑series tables for evolving features.

**Depth**  
- **Schema**: `CREATE TABLE user_features (user_id text, feature_name text, value blob, ts timestamp, PRIMARY KEY ((user_id), feature_name));`  
  - Partition key = `user_id` → data locality.  
  - Clustering key = `feature_name` allows ordered reads per user.  
- **Retrieval**: `SELECT * FROM user_features WHERE user_id='u123';` fetches all features in a single read.  
- **Write path**: Upserts are cheap; each feature write is an idempotent insert.  
- **TTL/Time‑Series**: Add `USING TTL 86400` for stale features, or create a separate table with timestamp clustering key for versioned history.  
- **Indexing**: If you need to query by feature value (e.g., all users where `age=30`), use materialized views or secondary indexes—though they can hurt write performance.

**Edge Cases**  
- Extremely wide rows (>10k columns) hit read amplification; consider bucketing features.  
- Hot partitions if many writes target the same user_id.  
- Secondary index contention on high‑cardinality values.

**Optimize & Communicate**  
Explain trade‑offs: denormalisation speeds reads but duplicates data; secondary indexes simplify queries at write cost. Suggest monitoring compaction and read latency, tuning `compaction_throughput_mb_per_sec`. Conclude by summarising that Cassandra’s columnar model naturally maps to feature vectors when keyed properly, enabling low‑latency, high‑throughput ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
