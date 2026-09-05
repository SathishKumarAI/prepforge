---
qid: ing_b6acc425a8__star__local
question: 'Explain: API Rate Limiter — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:33-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a public analytics API that suddenly saw a spike of 50,000 requests per second from a handful of partners during a marketing campaign. Our backend was throttling, causing a 30 % increase in error rates and a noticeable latency bump.

**Task:**  
I had to design a distributed rate limiter that could enforce per‑user quotas (e.g., 1,000 req/min) while keeping the system highly available and low‑latency under bursty traffic, all without adding significant operational overhead.

**Action:**  
I chose a token‑bucket algorithm backed by Redis Streams for coordination. Each user key stored remaining tokens in an atomic `INCRBY`/`DECRBY` operation, with a TTL equal to the bucket refill period. To avoid hot‑spots, I sharded keys across 256 Redis instances using consistent hashing and used Lua scripts to perform check‑and‑decrement atomically. For high availability, we ran each shard in a Redis Cluster with automatic failover. I also added an exponential backoff policy on the client side and exposed a “rate‑limit‑remaining” header for transparency.

**Result:**  
After deployment, request latency dropped from 350 ms to under 80 ms during peak loads, error rates fell by 42 %, and we handled 200% more traffic without scaling the API servers. I learned that combining a proven algorithm with sharded in‑memory stores yields both speed and resilience, and that exposing quota information helps clients self‑regulate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
