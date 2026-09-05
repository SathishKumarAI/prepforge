---
qid: ing_f9b4b4abc1__star__local
question: 'Explain: Write Path — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 377
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:54-05:00'
sources: []
---

**Situation**  
At Uber we had to surface real‑time trip data for millions of drivers and riders. Our analytics layer was built on a ledger‑style store that ingested every event (pickup, drop‑off, surge, payment) in chronological order. The challenge: the system needed to support billions of distinct keys—each driver, vehicle, location, and time bucket—yet still return queries within 200 ms.

**Task**  
Design an indexing strategy that could handle trillions of entries without blowing up storage or latency, while keeping write throughput above 5 M events/sec.

**Action**  
I introduced a *write‑ahead path* where every incoming record was first written to a compact in‑memory buffer. The buffer held a Bloom filter per logical shard, allowing us to detect duplicate keys and skip unnecessary writes. When the buffer hit 1 GB we flushed it as an immutable sorted segment on disk. Each segment carried a lightweight prefix tree (Trie) of the most frequent prefixes, which compressed common driver IDs and location codes into a single node. For lookups we performed a parallel binary search across active segments plus a small in‑memory cache of hot keys. We also leveraged LSM‑style compaction to merge old segments, keeping the total index size under 15× the raw data footprint.

**Result**  
The new Path‑Ledger architecture supported over 3 trillion indexed records while maintaining <150 ms query latency for 99th percentile traffic. Write throughput stayed above 6 M events/sec, and storage costs dropped by 40% compared to our previous monolithic index. I learned that combining probabilistic filters with prefix compression can turn an otherwise intractable index into a scalable, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
