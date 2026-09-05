---
qid: ing_117aed48a7__fp__local
question: 'Explain: End-to-End Example — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 668
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:59-05:00'
sources: []
---

**Why the problem matters**

Every web request carries a long URI that must be routed through DNS, load‑balancers, and application servers.  
In practice we *store* only the identifier part of that URI; the rest is static infrastructure.  
The core challenge: map an arbitrary user string → a unique short key with *constant‑time lookup*, while guaranteeing:

1. **Uniqueness** – no collisions.
2. **Scalability** – millions of requests per second, billions of keys.
3. **Availability** – high read/write throughput.

These constraints force us to treat the mapping as an *encoding* problem: compress a 64‑bit identifier into 6–8 characters (≈62 symbols), then persist it in a distributed store that supports point reads/writes with sub‑millisecond latency.

---

### Step 1 – Key generation

* **Base‑62 counter**  
  *Maintain a global atomic counter (e.g., Redis `INCR` or a sharded key).  
  Convert the counter value to base‑62 (`0–9,a–z,A–Z`).  
  This guarantees uniqueness and monotonic growth, which aids cache locality.*

* **Non‑obvious insight** – *ordering is a feature*: newer URLs map to lexicographically larger keys, enabling efficient range queries for analytics without extra indices.

---

### Step 2 – Persistence

| Layer | Role |
|-------|------|
| **Primary store (e.g., DynamoDB / Cassandra)** | `short_key → long_url` mapping; single‑partition key for O(1) lookup. |
| **Secondary cache (Redis, Memcached)** | Hot URLs cached to reduce read traffic on the primary store. |

*The counter lives in the same store as keys or in a dedicated high‑throughput service to avoid bottlenecks.*

---

### Step 3 – Routing

Incoming request →  
1. Lookup `short_key` in cache; if miss, fetch from DB and populate cache.  
2. Issue HTTP 301/302 redirect to `long_url`.  

*Because the key is deterministic, we can pre‑warm caches for popular keys (e.g., via scheduled jobs or real‑time analytics).*

---

### Step 4 – Metrics & Limits

- **Rate limiting** per IP/user to prevent abuse.  
- **TTL on cache entries** to evict stale data automatically.  
- **Monitoring**: latency, hit‑rate, error rates.

---

#### One non‑obvious trick

Use a *hash‑sharded counter* (e.g., `INCRBY` with random offsets) to distribute writes across multiple shards. When a shard fills, rotate it and maintain a mapping table so old keys still resolve. This eliminates a single point of contention while keeping the key generation logic simple.

---

**Bottom line**

A URL shortener is an elegant illustration of *compact encoding + distributed key‑value storage*, where the design balances uniqueness, speed, and scale—core principles that recur across all high‑traffic systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
