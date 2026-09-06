---
qid: ing_b04f5d50f9__fp__local
question: 'Explain: Flow: Redirecting to Original URL — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 395
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:23-05:00'
sources: []
---

**Redirecting to the Original URL – why it must work that way**

The core problem is *fast resolution*: a user types `https://s.t/abc123` and receives the target in < 100 ms.  
We can model this as a **lookup + redirect** system:  

1. **Lookup** – translate the short key (`abc123`) to its long URL.  
2. **Redirect** – issue an HTTP 301/302 response pointing to that long URL.

The lookup must be *deterministic* and *constant‑time*.  
Given a distributed storage layer (e.g., a hash table in a NoSQL DB), the key is hashed once, the node responsible for that bucket is found via consistent hashing, and the value returned. This guarantees O(1) amortized time regardless of scale.

The redirect step is an HTTP protocol requirement: browsers cache 301 responses; 302 indicates temporary redirects. Using the proper status code reduces client‑side round trips and preserves SEO semantics.

**Non‑obvious insight:**  
Most designs treat the short key as a random identifier, but the *entropy* of the key must be high enough to avoid collisions **and** allow efficient prefix‑based sharding. A simple base‑62 counter suffices for many systems, yet a *prefix hash* (e.g., first 3 chars) can serve as a shard key, decoupling storage from key generation and enabling horizontal scaling without re‑hashing the entire table.

Thus, the redirect flow is not an arbitrary convenience; it is dictated by information‑theoretic bounds on lookup time, HTTP semantics for caching, and geometric partitioning of data in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
