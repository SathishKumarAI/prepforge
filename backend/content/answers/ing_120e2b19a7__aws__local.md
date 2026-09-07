---
qid: ing_120e2b19a7__aws__local
question: 'Explain: Limitations — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 515
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:24-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to replace our on‑prem cache of user IDs with an in‑memory Bloom Filter in DynamoDB for a real‑time fraud detection pipeline. The goal was to cut query latency from 250 ms to <30 ms while keeping cost under $2k/month.

**Action (Design & Trade‑offs)**  
I mapped the problem to three core AWS services:  
- **Amazon ElastiCache‑Redis** for fast probabilistic lookup.  
- **AWS Lambda** to rebuild the filter daily from DynamoDB streams.  
- **Amazon CloudWatch** for monitoring false‑positive rates.

Key limitations of Bloom Filters I addressed were:  

| Limitation | Mitigation | Result |
|------------|------------|--------|
| **False positives** | Chose a 10 % target and tuned `k` and `m` using the formula *m = -(n ln p) / (ln²2)*; n=1M keys, p=0.01 → m≈14.5 Mb per shard. | False‑positive rate dropped to 8.7 %. |
| **No deletions** | Implemented a “counting Bloom Filter” by allocating 4‑bit counters in Redis, allowing safe key eviction. | No stale entries after user deactivation; zero missed fraud alerts. |
| **Scalability bottleneck** | Partitioned the filter across 8 shards (shard count ≈ log₂(n)) and used Elasticache clustering to auto‑scale on CPU >70 %. | Sustained 50k QPS with <0.5 % throttles, cost $1,800/month. |

I also added an **audit trail** in S3 for every rebuild, enabling rollback if the false‑positive rate spiked.

**Result**  
Latency fell from 250 ms to 28 ms (≈89 % improvement). Fraud detection throughput increased by 120 %, and we saved $200/month on DynamoDB reads.  

**Reflection**  
I learned that Bloom Filters are powerful but require careful sizing, partitioning, and monitoring—otherwise the very speed advantage turns into a correctness risk. This experience reinforced my ownership mindset: I owned both the performance gains and the integrity of the data pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
