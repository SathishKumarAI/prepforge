---
qid: ing_32931c4021__think__local
question: 'Explain: Cache Repeated Work — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 385
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:26:09-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- What “repeated work” means in a client‑server ML setting (e.g., feature extraction, model inference).  
- Who benefits: clients (latency), server (compute load).  
- Assume stateless clients, stateless or stateful servers, and that results can be cached safely.

**2️⃣ Adopt a cache‑centric framework**  
- Identify *cache key* (input data + versioning).  
- Choose *storage medium* (in‑memory store like Redis vs. disk).  
- Decide *eviction policy* (LRU, TTL) and *invalidations* (model updates).

**3️⃣ Step‑by‑step reasoning**  
1. Client sends request → server checks cache for key.  
2. Cache hit → return cached result instantly.  
3. Cache miss → perform heavy computation, store output with key, then reply.  
4. When model or data changes, invalidate related keys (e.g., version bump).  
5. Optional: pre‑warm cache by batching common requests.

**4️⃣ Avoid common pitfalls**  
- Forgetting to version cached items → stale predictions.  
- Over‑caching large objects → memory bloat.  
- Ignoring consistency; concurrent writes can corrupt cache.  
- Not handling partial failures (fallback to recompute).

**5️⃣ Sanity‑check & verbalize**  
- “If a user requests the same image twice, does the server avoid re‑running inference?”  
- “Will my eviction policy free space when I deploy a new model?”  
- Explain trade‑offs: latency vs. memory cost, consistency guarantees.

Follow this checklist whenever you design caching for repeated ML work in a client‑server architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
