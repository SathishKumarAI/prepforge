---
qid: ing_b7fe4dec89__star__local
question: 'Explain: B-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:21-05:00'
sources: []
---

**Situation:**  
At my previous job, we were migrating our user activity log store from a legacy MySQL table to a new time‑series database that had to handle millions of writes per second while still supporting fast range queries for analytics.

**Task:**  
I was tasked with choosing the underlying storage engine that would give us high write throughput without sacrificing read latency for 10‑minute window aggregations.

**Action:**  
I evaluated B‑Tree indexes, which offer O(log n) lookups but require many disk seeks on bulk writes. I then studied LSM‑Trees (Log‑Structured Merge trees), noting their append‑only log phase followed by periodic merges that amortize write costs into sequential disk operations. Implementing an LSM‑Tree via RocksDB, I tuned compaction thresholds and used Bloom filters to reduce read amplification. I also added a small in‑memory B‑Tree cache for the most recent events to keep latency low.

**Result:**  
Write throughput increased from ~30 k ops/s with B‑Tree to ~250 k ops/s with LSM‑Tree, while 10‑minute range query latency dropped from 200 ms to 35 ms. The experience taught me that choosing between B‑Trees and LSM‑Trees hinges on write‑heavy workloads: B‑Trees excel at point reads, whereas LSM‑Trees shine when writes dominate and sequential compactions can be leveraged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
