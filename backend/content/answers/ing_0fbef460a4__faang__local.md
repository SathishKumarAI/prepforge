---
qid: ing_0fbef460a4__faang__local
question: 'Explain: So the next use case and quickly — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 420
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:06-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how to design a database for a new ML‑driven feature (e.g., recommendation engine). Confirm whether the system is read‑heavy or write‑heavy, if data is time‑series, what latency bounds are required, and whether you need ACID guarantees or eventual consistency.

**Approach**  
1. **Identify data entities:** users, items, interactions, model artifacts.  
2. **Choose a storage type per entity:**  
   * Relational (PostgreSQL) for transactional user profiles.  
   * Column‑store (Cassandra/ScyllaDB) for high‑write interaction logs.  
   * Object store (S3 + DynamoDB metadata) for large model binaries.  
3. **Define access patterns** and shard keys to minimize hot spots.  
4. **Plan caching:** use Redis or Memcached for recent predictions.  
5. **Add observability**: metrics on read/write latency, cache hit ratio.

**Depth**  
- Use *wide‑column* stores for interaction logs (user_id → timestamp → item).  
- Leverage *secondary indexes* in PostgreSQL only when needed; otherwise denormalize.  
- Employ *time‑to‑live* (TTL) on short‑lived logs to control size.  
- For model artifacts, store a small metadata table in DynamoDB pointing to S3 keys.

**Edge Cases**  
- Burst traffic: auto‑scaling read replicas.  
- Data skew: add range partitions for hot users.  
- Schema evolution: use versioned tables or JSON columns.  

**Optimize & Communicate**  
Explain trade‑offs (e.g., eventual consistency vs. latency). Show that you can justify each database choice with the required throughput and data model, and how monitoring will guide future scaling decisions. This narrative demonstrates structured problem solving and depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
