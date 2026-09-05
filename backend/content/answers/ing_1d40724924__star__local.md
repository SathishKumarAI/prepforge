---
qid: ing_1d40724924__star__local
question: 'Explain: HLL in the wild — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 343
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:58-05:00'
sources: []
---

**Situation**  
At my previous role, our analytics platform was tracking user events for a global e‑commerce site. We needed to estimate the number of unique visitors per day in real time, but our data lake could not afford to store every event ID; memory and bandwidth were tight, and we had to serve dashboards with sub‑second latency.

**Task**  
Implement a scalable cardinality estimator that would fit into our streaming pipeline, use less than 1 MB of RAM per shard, and return estimates within ±2% error for up to 100 million distinct users daily.

**Action**  
I chose HyperLogLog (HLL) because its probabilistic guarantees matched the requirements. I wired it into our Kafka Streams topology: each event hash fed into a 16‑bit register array; we used Murmur3 hashing and the standard HLL algorithm with B=14 (16384 registers). To keep memory low, I serialized the HLL sketch to Parquet and persisted it every hour. For merging results across shards, I leveraged HLL’s linear combination property—just summing registers after applying the bias correction formula from Flajolet et al.

**Result**  
The solution reduced unique‑visitor estimation time from 4 s (SQL count distinct) to under 200 ms, using only 1.2 MB per shard. Accuracy stayed within ±1.8% on real traffic tests. I learned how the choice of register size trades memory for precision and that HLL’s mergeability is a game‑changer in distributed analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
