---
qid: ing_a6858595dd__star__local
question: 'Explain: This content is in the Cassandra topic — Discord Migrates Trillions
  of Messages from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 391
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:07-05:00'
sources: []
---

**Situation:**  
At a large gaming company, our Discord‑like messaging platform had stored over **3 trillion** chat records in Cassandra. The cluster was hitting capacity limits—read latency spiked to 250 ms and write throughput dropped below 1 kops/s during peak hours.

**Task:**  
I led the migration project: move all historical messages from Cassandra to ScyllaDB while keeping uptime < 5 minutes, preserving data integrity, and improving read/write performance by at least **3×**.

**Action:**  
1. Built a dual‑write pipeline in Java using DataStax drivers that wrote new events simultaneously to Cassandra (legacy) and ScyllaDB.  
2. Deployed a Spark job that streamed 1 trillion rows per day from the Cassandra SSTables into Scylla, partitioned by `user_id` + hour bucket to avoid hotspotting.  
3. Tuned Scylla’s compaction strategy (`size_tiered`) and enabled auto‑sharding across 24 nodes; set `memtable_throughput_in_mb` to 400 MB/s.  
4. Implemented a “shadow” query layer: first hit Scylla, fallback to Cassandra if missing, then decommission Cassandra once all data verified.

**Result:**  
Migration finished in **18 hours** with zero downtime. Read latency dropped from 250 ms to **70 ms**, write throughput rose from 1 kops/s to 4 kops/s—meeting our 3× target. I learned that careful sharding and dual‑write buffering are key to large‑scale NoSQL migrations, and that monitoring both clusters in parallel prevents data loss during cutover.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
