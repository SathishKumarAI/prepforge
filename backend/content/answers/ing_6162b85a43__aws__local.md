---
qid: ing_6162b85a43__aws__local
question: 'Explain: Production Uses — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 428
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:42-05:00'
sources: []
---

**Situation (S)** – In my last role I led a data‑pipeline that had to decide in real time whether an incoming URL was already indexed by our crawler. The naive approach required a full MySQL lookup for every request, which hit latency and cost limits during traffic spikes.

**Task (T)** – Design a scalable “hit‑or‑miss” service that could handle 10 M requests/second with <5 ms latency while keeping storage costs under \$0.01 per million checks.

**Action (A)** – I chose a Bloom filter because it offers constant‑time membership tests and sub‑megabyte memory footprints.  
* **AWS Services**:  
  * **Amazon ElastiCache for Redis** – store the bit array in a replicated cluster; Redis’ SETBIT/GETBIT commands give O(1) access.  
  * **Lambda + API Gateway** – thin front‑end that performs the hash calculations and calls Redis, keeping the logic stateless and auto‑scalable.  
  * **CloudWatch + X-Ray** – instrument latency and error rates for continuous monitoring.  

I tuned the filter to a false‑positive rate of 0.1 % (k≈7 hashes, m≈10 MB per shard) and partitioned it across 4 shards for high throughput. This architecture cut our per‑request cost from \$0.05 to \$0.003 while keeping hit latency at 2.3 ms during peak loads.

**Result (R)** – The new system handled 12 M req/s, reduced MySQL traffic by 95 %, and saved ~\$30k/month.  

*Leadership Principles*: **Ownership** – I took full responsibility for the end‑to‑end design; **Dive Deep** – I benchmarked hash functions and Redis performance to justify trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
