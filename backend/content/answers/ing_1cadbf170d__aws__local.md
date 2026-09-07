---
qid: ing_1cadbf170d__aws__local
question: 'Explain: Cache Layer (Redis) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 407
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:06-05:00'
sources: []
---

**Situation & Task**  
I led a product‑owner sprint to launch an internal URL shortener for our marketing team that needed to handle 50 M click‑throughs per day while keeping latency under 5 ms. The goal was to reduce the 200 µs database hit time and lower operational cost.

**Action (Design)**  
1. **Cache Layer – Redis**: I chose Amazon ElastiCache for Redis as a fully managed, highly available in‑memory store.  
   * **Key**: `shortcode → longURL` with TTL of 30 days.  
   * **Eviction policy**: LRU to keep hot URLs resident.  
2. **Write path**: API Gateway + Lambda writes to DynamoDB (partitioned by hash of the short code) and asynchronously updates Redis via SNS → Lambda.  
3. **Read path**: Lambda first checks Redis; on miss it falls back to DynamoDB, then populates Redis.  
4. **Scalability**: Multi‑AZ Redis cluster with read replicas; auto‑scaling Lambda concurrency ensures 99.9 % availability.  
5. **Cost**: 2 TB of hot data in Redis (~$1k/month) versus $3k for full DynamoDB reads.

**Result**  
- Latency dropped from 200 µs → 4 ms (average).  
- Cache hit ratio reached 96 % after two weeks.  
- Operational cost cut by 35 %.  

**Leadership Principles**  
*Customer Obsession*: Delivered a system that met marketing’s SLA and reduced user friction.  
*Ownership & Dive Deep*: I drove the end‑to‑end design, quantified impact, and iterated on cache eviction based on real traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
