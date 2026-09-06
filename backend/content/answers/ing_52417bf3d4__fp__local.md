---
qid: ing_52417bf3d4__fp__local
question: 'Explain: URL Generation Service — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 573
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:00:04-05:00'
sources: []
---

### From the problem to the solution

A **URL shortener** turns a long, human‑readable address into a tiny identifier that redirects to the original resource.  
At its core it must satisfy three orthogonal constraints:

| Constraint | What it means | Why it cannot be ignored |
|------------|---------------|--------------------------|
| **Uniqueness** | Every shortened token must map back to exactly one long URL. | Collisions would break the redirect chain and erode trust. |
| **Scalability** | The system should handle millions of writes per day and billions of reads with sub‑millisecond latency. | Users expect instant redirects; a slow service is unusable. |
| **Durability** | Once created, a short URL must persist forever (or until explicitly deleted). | Deleting a mapping would invalidate links already shared in the wild. |

These constraints lead to a minimal architecture:

1. **Stateless API layer** – handles HTTP requests and returns a 302 redirect or JSON payload.  
2. **Short‑ID generator** – uses a monotonic counter (or UUID) + base‑62 encoding to guarantee uniqueness without coordination.  
3. **Write path** – stores `(id, longURL)` in an append‑only log (e.g., Kafka → HBase).  
4. **Read path** – a read‑optimized key/value store (Cassandra/Redis) with the short ID as the primary key; reads are cache‑first.  

### Deeper principle: *information density vs. collision probability*

Encoding a counter in base‑62 yields 6 characters for ~56 billion entries (`62^6`). This is the sweet spot where the identifier length stays human‑friendly while the collision probability remains negligible (≈10⁻¹⁶). If you need more capacity, simply increase the base or add a salt.

### Non‑obvious insight

**The *write* path should be fully decoupled from reads.**  
Because writes are append‑only, they never modify existing rows; thus, readers can operate on a consistent snapshot without locking or versioning. This separation lets you scale writes horizontally (partitioned logs) while keeping reads ultra‑fast (single‑node cache). It also makes eventual consistency trivial: once the write reaches the log, replication to all read replicas guarantees that any new short URL will be immediately resolvable.

---

*In summary*, a URL shortener is essentially a distributed key/value store with an efficient ID generator. By treating writes as immutable events and reads as cache‑driven lookups, you satisfy uniqueness, scalability, and durability without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
