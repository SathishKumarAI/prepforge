---
qid: ing_1c5cdf4d1c__aws__local
question: 'Explain: LSM-Tree Databases — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:15-05:00'
sources: []
---

**Situation & Task**  
While building a real‑time recommendation engine for a global e‑commerce platform, we needed a write‑heavy datastore that could ingest millions of user interactions per second and still serve low‑latency reads for personalized product feeds. I chose an LSM‑tree architecture (e.g., DynamoDB or Cassandra) and had to decide how to keep read amplification under control.

**Action – Design & AWS Services**  
1. **Bloom Filter Layer** – I added a probabilistic filter per memtable using Amazon ElastiCache (Redis) as an in‑memory cache; the filter’s false‑positive rate was tuned to <0.01% by sizing it 10 × the key space.  
2. **Compaction Strategy** – Implemented tiered compaction with AWS Lambda orchestrated via Step Functions, automatically moving data from hot S3 Glacier Instant Retrieval tiers to cold S3 Glacier Deep Archive when access patterns shifted.  
3. **Monitoring & Auto‑Scaling** – Used CloudWatch metrics (write latency, read amplification ratio) to trigger DynamoDB auto‑scale on write capacity units; this reduced 99th‑percentile latency from 350 ms to <120 ms.

**Result**  
- Read amplification dropped from ~12× to ~1.5×, cutting average read latency by **65%**.  
- Write throughput increased to **4 M ops/sec** without additional cost.  
- The Bloom filter cache hit ratio stayed above 98%, keeping false‑positive overhead negligible.

**Reflection & Ownership**  
I continuously revisited the filter size and compaction thresholds, learning that over‑aggressive caching inflated memory costs by 15% initially; I adjusted the sizing algorithm accordingly. This experience reinforced *Customer Obsession* (delivering fast recommendations) and *Dive Deep* (profiling every layer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
