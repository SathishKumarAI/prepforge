---
qid: ing_217857a0fc__fp__local
question: 'Explain: Cache Key Bugs — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 432
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:17:26-05:00'
sources: []
---

**Why a “cache‑key bug” is fatal**

A CDN’s job is to *serve the same content* from many edge nodes, keeping each node’s memory bounded.  
The only way it knows what to return for a request is the **cache key** – a deterministic string derived from the HTTP request (URL path, query string, host, headers).  
If two semantically identical requests produce different keys, the CDN will fetch and store duplicate objects; if they produce the same key but the underlying content differs, clients see stale or wrong data.  

**Derivation of the rule**

1. **Uniqueness ↔ idempotence** – For any request *r*, the key `k(r)` must satisfy  
   \[
   k(r_1)=k(r_2)\;\Leftrightarrow\; \text{the response to } r_1 \text{ and } r_2 \text{ is identical.}
   \]
2. **Minimality** – The key should be as short as possible while preserving the above equivalence, because CDN storage is linear in key length.
3. **Determinism** – `k(r)` must be computed solely from request attributes that never change during a user’s session (e.g., path, host, immutable query parameters).

Any violation of these three properties yields a cache‑key bug.

**Non‑obvious insight**

Most people focus on *what* is included in the key; they overlook **order sensitivity**.  
Query string order changes the key even though browsers treat `?a=1&b=2` and `?b=2&a=1` as equivalent. If a CDN normalises only some parameters, two semantically identical URLs will be cached separately—leading to *hidden* cache fragmentation that scales with traffic volume.

By enforcing strict canonicalisation of query order and header inclusion, you eliminate the most insidious cache‑key bugs while keeping edge storage efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
