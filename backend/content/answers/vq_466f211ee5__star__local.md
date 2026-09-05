---
qid: vq_466f211ee5__star__local
question: what is scala set?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 363
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:04-05:00'
sources: []
---

**Situation:** While refactoring a nightly ETL job that ingested millions of user events from Kafka, I noticed the output table was growing by ~30 % each run because duplicate rows slipped through due to a race condition in our in‑memory cache.

**Task:** I had to eliminate duplicates efficiently without blowing up memory or adding another database round trip. The goal was to keep the job under its 45‑minute SLA while keeping CPU usage below 70 %.

**Action:** I switched from a `ListBuffer` of raw records to an immutable `scala.collection.immutable.Set[String]` keyed on the event’s composite ID (`userId + timestamp`). In the streaming stage, each incoming record was hashed into the set; if it already existed we dropped it immediately. Because sets use a hash table internally, look‑ups were O(1), and the immutability avoided accidental side effects during parallel processing. I also added a size threshold that triggered a spill to disk when the set grew beyond 2 M entries, ensuring we never exceeded heap limits.

**Result:** Duplicate rows dropped from ~12 % of the dataset to <0.01 %. Job runtime decreased by 18 %, and peak memory usage fell from 4.5 GB to 2.8 GB. I learned that a simple Scala `Set` can be a powerful, low‑overhead de‑duplication tool when used with careful size management and immutability principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
