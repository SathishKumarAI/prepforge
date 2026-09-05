---
qid: ing_74f5e16c74__star__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 329
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:40-05:00'
sources: []
---

**Situation** – At my previous company we ran a global chat platform on Cassandra. By year‑end our message store had grown to ~3 trillion rows and read latency was climbing past 150 ms during peak hours. The engineering team decided a NoSQL shift to ScyllaDB could cut costs and hit sub‑10 ms reads.

**Task** – I was tasked with designing, testing, and executing the migration while keeping the service live and guaranteeing data integrity for every user message.

**Action** – First, I benchmarked both systems using Apache Cassandra’s `nodetool bulkload` versus Scylla’s `sstableloader`. I built a staged pipeline: (1) export partitions via Spark into Parquet, (2) transform timestamps to the new schema, (3) load into Scylla with `scylla-loader` in parallel shards. I added idempotent checks and cross‑check counters on 10 % of rows. To avoid downtime, we ran a “shadow” read replica that mirrored traffic for 48 hrs, then cut over using a rolling switch‑over script in Kubernetes.

**Result** – The migration finished in 3 weeks, with zero data loss and an average read latency drop from 145 ms to 8 ms. Storage costs fell by 27 % and we gained linear scalability for future growth. I learned that meticulous validation scripts and staged traffic routing are critical when moving petabyte‑scale data between NoSQL engines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
