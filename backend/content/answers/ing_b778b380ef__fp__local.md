---
qid: ing_b778b380ef__fp__local
question: 'Explain: Cache Invalidation — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 439
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:00-05:00'
sources: []
---

**Why caching is mandatory**

When a ride‑request arrives, the system must answer *“Is there an available driver within 5 km?”* in < 50 ms.  
The underlying store (e.g., HBase) can’t deliver 40 M reads/second with such latency; each query would hit disk and network, adding ~10–20 ms per request.  
Hence Uber introduced a *distributed, in‑memory cache* that sits between the mobile app and the persistent store.

**How it works – an integrated invalidation loop**

1. **Write‑through + event sourcing**: Every driver status change (online/offline, location update) is first written to the main database and immediately emitted as a message on Kafka.  
2. **Cache subscriber**: A set of cache workers consume those events in real time. For each event they compute which geohash cells are affected and invalidate or update the corresponding cache entries.  
3. **Lazy re‑load**: When a read arrives for a cell that has been invalidated, the worker fetches fresh data from the database, writes it back to the cache, and serves the request.

The key principle is *eventual consistency with bounded staleness*: by coupling writes to event streams we guarantee that every cache entry reflects all updates within a few milliseconds.  
Because each read only touches the in‑memory store (O(1) lookup), Uber can sustain >40 M reads/second while keeping latency < 10 ms.

**Non‑obvious insight**

Most systems treat invalidation as a *push* problem—“expire this key.”  Uber’s design treats it as a *pull* of the minimal delta: only the specific geohash cells whose drivers changed are refreshed.  
This selective, event‑driven invalidation turns what would be a global cache wipe into a localized update, preserving throughput even under heavy write traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
