---
qid: ing_1bbc3c7580__fp__local
question: 'Explain: Design Deep Dive — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 441
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:56-05:00'
sources: []
---

**Why a URL shortener matters**

The core problem is *one‑to‑many mapping*: millions of long URLs must be stored and retrieved with a single HTTP request. The constraints are threefold:  
1️⃣ **Scalability** – read/write throughput in the billions per day.  
2️⃣ **Latency** – sub‑100 ms redirect for global users.  
3️⃣ **Durability & consistency** – no lost or duplicated mappings.

**Fundamental design choices**

| Layer | Principle | Implementation |
|-------|-----------|----------------|
| **Key generation** | *Hash‑to‑space* + *collision avoidance* (information theory) | Use a base‑62 counter or SHA‑256 truncated to 6–8 chars; on collision, increment counter. |
| **Storage** | *O(1) lookup* (probabilistic data structures) | A distributed key‑value store (e.g., DynamoDB) with a small in‑memory LRU cache for hot URLs. |
| **Routing** | *Geographical proximity* (network geometry) | Global CDN front‑end that forwards to nearest region; if miss, fallback to central DB. |

**Non‑obvious insight**

Most designs treat the counter as opaque. In fact, a *monotonic counter* embeds *time order*, enabling efficient analytics (e.g., “most popular URLs in last 24 h”) without extra tables. By partitioning counters per region and merging via a lightweight aggregator, we avoid global locks while preserving ordering semantics.

**Putting it together**

1. User posts long URL → server atomically increments counter → encodes to base‑62 → stores `(shortID→longURL)` in DB + cache.  
2. Client requests `/abc123` → CDN routes → local cache hit → redirect; otherwise DB lookup, then update cache.

This architecture satisfies the three constraints while remaining simple enough for interview evaluation and production deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
