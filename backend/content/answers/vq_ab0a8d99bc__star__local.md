---
qid: vq_ab0a8d99bc__star__local
question: what is hbase compaction technique and write operation hbase using spark??
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 397
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:09-05:00'
sources: []
---

**Situation** – While leading the migration of our click‑stream analytics pipeline from Hadoop MapReduce to Apache Spark, we discovered that the HBase table holding user session data was suffering from severe read latency: a single row could contain up to 30,000 cells and compaction logs were growing to 12 GB per day.  

**Task** – I had to design an efficient write strategy with Spark that would keep compactions under control while ensuring the ingestion rate stayed above 200k rows per second for our real‑time dashboard.

**Action** – First, I enabled **major compaction on a scheduled basis (nightly at 02:00 UTC)** and tuned the `hbase.regionserver.compaction.threads` to 8 to parallelize merges. I also set `hbase.hstore.blockingStoreFiles` to 5 to trigger minor compactions earlier. For Spark writes, I used the **HBase‑Spark connector** with a custom `PutWriter`. Each RDD partition performed batch puts of 10 k rows using `Put.put(Bytes.toBytes(key), Bytes.toBytes(colFam), Bytes.toBytes(colQual), value)`, and I leveraged `foreachPartition` to reduce RPC overhead. Finally, I added an **incremental Bloom filter** on the session ID column family to speed up point lookups.

**Result** – The compaction size dropped from 12 GB to 3 GB daily, while read latency for 99th‑percentile queries fell below 120 ms. Write throughput remained steady at ~210k rows/s. I learned that balancing minor/major compactions with Spark’s batch API and tuning HBase’s blocking thresholds is key to high‑performance ingestion in a real‑time analytics stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
