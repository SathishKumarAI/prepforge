---
qid: ing_3206a0b640__fp__local
question: 'Explain: Conditional Update — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 445
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:51:08-05:00'
sources: []
---

**Conditional Update – the “write‑through with version check” that lets Uber’s cache stay consistent while serving >40 M reads/s**

At its core the problem is *how to keep a distributed cache in sync with an online store when updates are frequent and latency must be negligible*. A naïve approach would stream every write through the cache, but that forces the cache to lock for each update, breaking read throughput. The alternative—ignoring writes—creates stale data and violates service‑level agreements.

Uber’s solution treats a *cache line* as a **versioned value**: `(key, value, v)` where `v` is a monotonically increasing counter issued by the backend store (e.g., Cassandra). When an update arrives, the cache receives the new tuple but does not blindly overwrite. Instead it performs:

1. **Compare‑and‑Swap (CAS)** on the in‑memory version: if `cache.v < incoming.v`, replace; otherwise discard.
2. If replacement occurs, propagate the change *asynchronously* to the backing store via a write‑through queue.

This is essentially a *conditional update* because it only succeeds when the cache’s current version is older than the new one. The deep principle here is **optimistic concurrency control**: we assume most reads are valid and updates rare relative to reads, so we let reads flow unhindered while guarding writes with a lightweight CAS.

A non‑obvious insight is that by keeping the *version* in the cache, we avoid a costly round‑trip to the store for every read. The cache can answer “is this stale?” locally, and only when a read hits an old version does it trigger a store fetch. This selective invalidation turns what would be a bulk consistency problem into a *lazy consistency* one, preserving 40 M RPS while keeping staleness bounded to the write latency.

In short, conditional update is a CAS‑based, versioned cache policy that lets Uber decouple read traffic from backend writes without sacrificing correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
