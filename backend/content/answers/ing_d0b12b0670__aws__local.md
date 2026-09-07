---
qid: ing_d0b12b0670__aws__local
question: 'Explain: Caching Anti-Patterns — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 480
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:45-05:00'
sources: []
---

**What I did (S)**  
When I led the redesign of our recommendation engine at a mid‑size e‑commerce startup, we discovered that stale data in our cache was causing a 12 % drop in click‑through rate (CTR). The problem was an *anti‑pattern*: we used a single Redis instance with a hard TTL and no invalidation logic, so every user saw the same “popular items” list for hours.

**Task & Challenge**  
My goal was to eliminate stale data while keeping latency < 50 ms for 99.9 % of requests, without blowing up cost or operational overhead.

**Action (T)**  
1. **Define a cache‑invalidation policy**: publish “item‑updated” events to SNS → Lambda → DynamoDB Streams → update cache keys atomically.  
2. **Use Amazon ElastiCache for Redis Cluster** with read replicas for high availability and auto‑scaling.  
3. **Implement a “cache stampede guard”** using a distributed lock (Redlock) so that only one request refreshes a key while others wait, preventing cache misses from spiking.  
4. **Add a fallback to DynamoDB** when the cache is down, ensuring graceful degradation.

**Result (R)**  
- CTR increased by 9 % within two weeks (from 3.2 % to 3.5 %).  
- Cache hit ratio rose from 68 % to 92 %.  
- Cost per request dropped 15 % because we reduced the number of expensive DynamoDB reads.

**What I learned**  
Ownership: I took full responsibility for data freshness and latency trade‑offs.  
Dive Deep: Profiling cache misses revealed that a single TTL was the root cause.  
Bar‑raiser focus: Quantified impact (CTR, hit ratio), clear failure mode (stale data), and continuous improvement loop (monitoring metrics, auto‑scaling).  

**Leadership Principles Anchored**  
- **Customer Obsession** – Delivering fresher recommendations directly improved user engagement.  
- **Ownership** – I owned the end‑to‑end solution from design to production monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
