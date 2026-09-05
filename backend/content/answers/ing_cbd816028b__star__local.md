---
qid: ing_cbd816028b__star__local
question: 'Explain: Billions of Rows — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 373
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:33-05:00'
sources: []
---

**Situation**  
At my previous role we had a user‑engagement platform that collected clickstream events from over 5 million daily active users. The raw table grew to ~3 billion rows within six months, and our nightly ETL job started timing out because HBase was unable to keep up with the write throughput.

**Task**  
I needed to redesign the schema and tuning strategy so that the ingestion pipeline could sustain >10,000 writes per second while still allowing fast point‑lookup queries for real‑time dashboards.

**Action**  
1. Re‑partitioned the table by using a composite key of `user_id|timestamp` with a custom hash‑prefix to spread rows across region servers.  
2. Implemented row‑key salting (10 prefixes) and added a `cf:metadata` column family for secondary indexes.  
3. Tuned HBase’s compaction policy: switched from “universal” to “tiered”, set a larger block cache (12 GB), and enabled Bloom filters on the key columns.  
4. Added a pre‑write buffer using a Kafka producer pool, which batched 50 k rows before flushing to HBase, reducing network round trips.

**Result**  
Write latency dropped from ~1.8 s per batch to <200 ms, and throughput increased to ~18,000 writes/second. The real‑time dashboard now updates in under 5 seconds, and the region server CPU usage stayed below 70%. I learned that careful key design combined with targeted HBase tuning can turn a bottleneck into a high‑performance pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
