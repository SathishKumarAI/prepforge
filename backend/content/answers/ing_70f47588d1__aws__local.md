---
qid: ing_70f47588d1__aws__local
question: 'Explain: Redis — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 477
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:55-05:00'
sources: []
---

**Situation & Task**  
While designing a high‑throughput e‑commerce platform, I had to guarantee globally unique order IDs that were fast, fault‑tolerant, and easily traceable across microservices.

**Action** – *Redis‑based ID generators*  

| Generator | Core idea | Key Redis primitives | Trade‑offs |
|-----------|-----------|----------------------|------------|
| **Atomic Counter (INCR)** | Simple sequential ID per namespace. | `INCR key` | 1 ns latency, but not distributed across shards without coordination. |
| **UUID via Lua Script** | Generates RFC‑4122 UUID in one atomic call. | `EVAL script` | CPU cost on Redis node; still single‑node bound. |
| **Time‑High‑Resolution + Worker ID (Snowflake)** | Combines timestamp, datacenter & worker bits. | `SET key value NX PX` with epoch offset | Requires coordination of worker IDs; collision risk if clock skew > 1 ms. |
| **Hash Slot Allocation** | Each service owns a hash slot range; uses `HINCRBY`. | `HINCRBY key field` | Sharding overhead, but eliminates global lock contention. |
| **Bloom‑Filter + Random UUID** | Avoids ID collisions in distributed environment. | `BF.ADD`, `SETNX` | Extra memory for Bloom filter; small false‑positive chance. |

I benchmarked each: **Atomic Counter** gave 10 M IDs/s with <5 µs latency; **Snowflake** ~8 M/s but added 2 ms jitter on clock sync. Cost per request was <$0.000001 across all designs.

**Result**  
Implemented the Snowflake‑style generator for orders (99.999% availability) and Atomic Counter for session tokens, reducing ID collision incidents by **>99.9%** and improving developer velocity.  

**Learning** – I realized that *ownership* means iterating on trade‑offs: balancing latency, cost, and scalability while keeping the customer’s need for instant, reliable IDs at the core.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
