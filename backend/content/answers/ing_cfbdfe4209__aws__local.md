---
qid: ing_cfbdfe4209__aws__local
question: 'Explain: Cache Layers — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 354
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**  

**Situation / Task** – I led a team that had to reduce the latency of our recommendation engine from ~400 ms to <100 ms while keeping cost under $0.05/req. The bottleneck was repeatedly querying a large, slowly‑updated user‑profile table in DynamoDB.  

**Action** – I introduced a two‑tier cache:  
1. **Local in‑process LRU (using Guava)** for ultra‑fast lookups of the most recent 10 k users per request.  
2. **Distributed Redis (Amazon ElastiCache) with read replicas** as a global second layer, keyed by userID, TTL 12 h, and invalidated on profile updates via SNS → Lambda → Cache‐flush.  

I modeled traffic (≈1M req/day), estimated hit rates (70% local, 20% Redis, 10% DB) and used the AWS Pricing Calculator to show a 65 % cost reduction vs. direct DynamoDB reads.  

**Result** – Latency dropped from 400 ms to **82 ms** on average; throughput increased by **3×** without impacting consistency. Quarterly ops saved $18k in read capacity units.  

*Bar‑raiser cues:* Ownership of end‑to‑end performance, deep dive into cache invalidation patterns, quantified latency & cost impact, and post‑mortem analysis that led to automated monitoring for TTL drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
