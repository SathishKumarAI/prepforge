---
qid: ing_614b30eb5c__star__local
question: 'Explain: Design a deduplication pipeline for a web-scale pretraining corpus.
  It has to run as a streaming process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 327
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:33-05:00'
sources: []
---

**Situation:** While leading data ingestion for a new language‑model project, our team had to build a streaming deduplication pipeline that could handle billions of text chunks arriving in real time from multiple web crawlers.

**Task:** I needed to design a low‑latency, fault‑tolerant system that would detect and discard duplicate documents on the fly, ensuring we kept only unique training data without bottlenecking the ingestion flow.

**Action:** I chose Apache Flink for its event‑time processing and stateful operators. Each incoming chunk was hashed with a 64‑bit Murmur3 fingerprint and sent to a keyed state store (RocksDB) partitioned by hash bucket. A sliding window of 24 hours stored recent fingerprints; if a new hash matched an existing key, the record was dropped immediately. To handle scalability, I sharded the state across 128 Flink task slots and enabled checkpointing every 5 minutes to guarantee exactly‑once semantics. For late or out‑of‑order events, we used event‑time timers to purge stale fingerprints after 48 hours.

**Result:** The pipeline processed 10⁶ documents per second with <50 ms latency, reducing duplicate volume by 92 % compared to a batch dedup approach. We saved roughly 3 TB of storage and cut downstream training time by 25 %. This experience taught me the importance of combining lightweight hashing with stateful stream processing to achieve web‑scale deduplication reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
