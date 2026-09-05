---
qid: ing_e2575a20cd__star__local
question: What are the methods of database sharding?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 373
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:01:23-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling the user‑feedback database that feeds our recommendation engine. The table had grown to 12 TB and query latency hit 300 ms, breaking the real‑time constraints of our AI pipeline.

**Task** – Reduce read/write latency to under 50 ms while keeping consistency for the “like” events that feed the model updates every minute.

**Action** – I designed a hybrid sharding strategy:  
1. **Horizontal partitioning by user hash** – split users into 64 shards on a consistent‑hash ring, using PostgreSQL’s table inheritance and `pg_shard` to route traffic.  
2. **Range sharding for time‑series logs** – each shard had a daily sub‑table to keep write paths short.  
3. **Geographic sharding** – we replicated the first 8 shards in an edge data center to reduce round‑trip latency for EU users.  
4. **Secondary indexes per shard** – tuned B‑tree and partial GIN indexes on the `feedback_type` column, cutting query time by 70 %.  
5. **Cross‑shard aggregation** – used a lightweight Kafka stream to merge results in real time for the AI model.

**Result** – Query latency dropped from 300 ms to 45 ms, write throughput increased 4×, and the recommendation accuracy improved by 3 % due to fresher data. I learned that combining hash, range, and geographic sharding can meet both performance and consistency needs in an AI‑driven system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
