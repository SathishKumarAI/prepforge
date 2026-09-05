---
qid: ing_06de0954df__star__local
question: 'Explain: Log Compaction — Logcompaction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 351
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:40-05:00'
sources: []
---

**Situation:**  
In my last role I was responsible for the real‑time recommendation engine that ingested clickstream events from our mobile app via Apache Kafka. The topic “user‑events” grew to 12 TB over six months, and the consumer lag started creeping up because old events were still sitting in the log while we only needed the latest state per user.

**Task:**  
I had to reduce storage usage by 70% and cut consumer lag below 5 seconds without losing the ability to replay recent events for debugging or reprocessing.

**Action:**  
I enabled Kafka’s log compaction on the “user‑events” topic, configuring a retention policy of 7 days plus a compacted checkpoint. I added a key‑based deduplication step in our producer so each user ID became the record key. Then I wrote a small Spark job that reads from the compacted topic and writes to HDFS for batch training, ensuring we only ever processed the most recent event per user. I monitored compaction throughput with Kafka’s metrics and tweaked segment sizes to balance write amplification.

**Result:**  
Storage dropped from 12 TB to 3.4 TB in under a week, consumer lag fell to 2 seconds on average, and our nightly training jobs ran 40% faster. I learned that log compaction is not just about disk space—it’s a powerful tool for stateful stream processing when you care only about the latest record per key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
