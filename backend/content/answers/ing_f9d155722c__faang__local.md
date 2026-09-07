---
qid: ing_f9d155722c__faang__local
question: 'Explain: Materialized Views — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 464
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants a design for *materialized views* that can be refreshed at scale while keeping read latency low and write throughput high. Assume we have a primary OLTP store (e.g., PostgreSQL) and analytics queries that would benefit from pre‑aggregated tables. Clarify: how often does the view need to update? Is it batch, real‑time, or hybrid? What consistency guarantees are required?

**Approach**  
1. **Decouple reads & writes** – keep a copy of the base data in a separate analytic cluster (e.g., BigQuery, ClickHouse).  
2. **Incremental refresh** – capture DML changes via CDC (Debezium, logical replication) and apply them to the view store.  
3. **Partitioned materialized tables** – shard by time or key to enable parallel updates and pruning old data.  
4. **Metadata & versioning** – maintain a timestamp or sequence number so readers can see a consistent snapshot.

**Depth**  
- Use *logical replication* to stream changes as JSON into a Kafka topic, then an *incremental updater* (Kafka Streams/ Flink) writes to the materialized table in ClickHouse.  
- Each update is applied idempotently using the primary key and sequence number.  
- Reads query only the analytic store; OLTP remains unaffected.  
- Complexity: write path O(1) per row, read O(log n) due to partitioned indices.  
- Consistency: eventual (sub‑second lag); can add a “ready” flag for strict guarantees.

**Edge Cases**  
- Bulk loads or schema changes – trigger a full rebuild with downtime window.  
- High write bursts – back‑pressure in Kafka, batch apply.  
- Data skew – rebalance partitions.

**Optimize & Communicate**  
Explain that this architecture scales horizontally (add more analytic nodes), isolates failure domains, and allows different consistency levels per consumer. Summarize trade‑offs: higher latency for near‑real‑time refresh vs. simpler cron‑based rebuilds. Conclude by noting monitoring of lag metrics to auto‑scale the updater pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
