---
qid: ing_0957122f62__think__local
question: 'Explain: You run 40 replicas of the same model behind a load balancer,
  and round-robin gives you a terrible prefix cache hit rate. Design the routing layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 595
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:19:55-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What* is “terrible prefix cache hit rate”?  Assume we’re caching only prefixes of inference requests (e.g., shared context).  
- *Why* does round‑robin hurt it?  Because identical requests go to different replicas, each with its own cache.  
- *Goal*: keep related requests on the same replica so cached prefixes are reused.

**2️⃣ Adopt a routing framework**  
Use a **consistent‑hashing / sharding** approach: hash the request’s key (e.g., user ID, session ID, or request fingerprint) to a shard number, then map that shard deterministically to one of the 40 replicas.  

- *Benefits*:  
  - Requests with the same prefix go to the same replica → high cache hit rate.  
  - Minimal re‑routing when replicas are added/removed (only ~1/N of keys move).  

**3️⃣ Step‑by‑step reasoning**

| Step | Action | Rationale |
|------|--------|-----------|
| A | Extract a stable key from each request (user ID, query text hash, etc.). | Must be consistent across requests that share the same cache prefix. |
| B | Compute `hash(key) % N` where *N* = 40. | Gives deterministic shard index. |
| C | Maintain a mapping table: `shard → replica`. | Allows load balancer to forward to the right node. |
| D | When scaling, use *virtual nodes*: multiple hash slots per physical replica to keep distribution even. | Prevents hot‑spots if some keys dominate. |
| E | Add cache eviction policy on each replica (LRU/TTL) but rely on shared prefixes staying local. | Keeps memory usage bounded while preserving hit rate. |

**4️⃣ Common traps to avoid**

- **Non‑deterministic key extraction** → different replicas get same request.  
- **Hash collisions** across replicas that are not accounted for → inconsistent routing.  
- **Over‑hashing** (e.g., hashing the entire payload) can waste cache space; focus on prefix‑relevant fields.  
- **Ignoring load imbalance**: if some keys dominate, consider adaptive sharding or per‑replica request quotas.

**5️⃣ Sanity‑check & communicate**

- *Test*: Send a burst of identical requests; all should hit the same replica and show cache hits.  
- *Explain*: “By hashing on a stable key we ensure that any two requests with the same prefix are routed to the same replica, so its local cache can serve them. Consistent hashing keeps this property even as replicas change.”  

This routing layer transforms a naive round‑robin into a cache‑friendly distribution while preserving scalability and fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
