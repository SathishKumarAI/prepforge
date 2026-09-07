---
qid: ing_efc13ef734__aws__local
question: 'Explain: Metadata Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 412
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:09-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a “Metadata Traffic” layer for Spotify’s catalog—caching and serving millions of song/artist metadata objects with sub‑ms latency while keeping the write path scalable.

**Action (Design)**  
1. **Data model & sharding** – Partition by hash of `track_id` into 10,000 DynamoDB partitions; each item stores `metadata_hash`, `last_updated`.  
2. **Cache layer** – Global CloudFront + Amazon ElastiCache‑Redis cluster (cluster mode) for hot metadata; TTL 1 h, fallback to DynamoDB on miss.  
3. **Write path** – Use Kinesis Data Streams → Lambda → DynamoDB (write‑through). Lambda retries and DLQ for failures.  
4. **Observability** – CloudWatch metrics (`CacheHitRate`, `LatencyMs`), X-Ray traces; auto‑scale Redis based on hit ratio.

**Result**  
- 99.8 % cache hit rate, reducing read latency from 120 ms to <15 ms for 90 % of requests.  
- Cost dropped by 35 % (DynamoDB provisioned throughput reduced from 10k RCU/WCU to 3k).  
- Incident response time cut in half thanks to real‑time metrics.

**Leadership Principles**  
*Customer Obsession*: Prioritized end‑user latency.  
*Ownership & Dive Deep*: Built end‑to‑end pipeline, instrumented every hop, and iterated on failure patterns (e.g., Lambda retries).  

**Bar‑raiser notes** – Look for clear ownership of each layer, quantified impact (latency, cost), deep dive into trade‑offs (Redis vs. DynamoDB), and learning from failures (retry logic, DLQ).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
