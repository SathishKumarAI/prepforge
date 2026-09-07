---
qid: ing_90de6bac39__aws__local
question: 'Explain: Scalable Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 602
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:39-05:00'
sources: []
---

**Scenario (S)**  
At my previous role I was tasked to reduce the latency of a global fraud‑detection pipeline that scanned 200 M user actions per day for known bad patterns. The team needed an *in‑memory* filter that could scale horizontally while keeping false‑positive rates below 0.5 %.  

**Task (T)**  
Design a scalable Bloom Filter service that can ingest billions of keys, support near‑real‑time queries from 10 k concurrent workers, and roll out updates without downtime.

**Action (A)**  
1. **Architecture** – I proposed a *sharded* Bloom Filter backed by Amazon DynamoDB for persistence and Amazon ElastiCache‑Redis for fast reads. Each shard holds a distinct hash range; we route keys via consistent hashing.  
2. **Data flow** – A Lambda function streams incoming keys from Kinesis Data Streams into the appropriate Redis cache, updating bitmaps atomically with Lua scripts to avoid race conditions.  
3. **Scalability & Cost** – Using on‑demand DynamoDB tables gives us 1 TB of storage at ~\$0.25 per GB/month; Redis clusters scale out by adding nodes (≈\$0.15 per node/hour). The system handles >50 k QPS with <5 ms latency.  
4. **Availability** – Each shard is replicated across three AZs; read replicas provide failover within 30 ms.  
5. **Monitoring & Roll‑back** – CloudWatch metrics track false‑positive rate and cache hit ratio; if the rate exceeds 0.6 % we trigger an automated rollback to the last stable snapshot.

**Result (R)**  
After deployment, query latency dropped from 120 ms to 4 ms, throughput increased by 250 %, and false positives fell below 0.3 %. The service processed 1.2 B keys/day with a total cost of \$12k/month—30 % cheaper than the legacy solution.

**Leadership Principles Highlighted**  
- **Customer Obsession / Deliver Results** – Delivered measurable performance gains directly impacting fraud detection accuracy.  
- **Ownership & Dive Deep** – Own the end‑to‑end pipeline, dig into DynamoDB vs. Redis trade‑offs, and iterate on hash functions to tune error rates.

*Bar‑raiser cues*: clear ownership of the design, deep dive into data structures, quantified impact (latency, cost), and lessons learned from iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
