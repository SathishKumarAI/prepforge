---
qid: ing_0dd97a0ab3__think__local
question: 'Explain: Design a token-based rate limiter for a multi-tenant LLM API.
  Implement the core, then tell me what changes when it''s distributed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 639
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:38:14-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   • Identify the tenant model (per‑user, per‑team, or per‑API key).  
   • Decide on rate limits: requests/second vs tokens/second, burst capacity, and reset windows.  
   • Assume a single‑node implementation first; later we’ll note what must change for distribution.

**2. Choose a mental model / framework**  
   • Token bucket algorithm (classic for API throttling).  
   • Store state per tenant: `tokens`, `last_refill_ts`.  
   • Use atomic operations or locks to guard concurrent access.

**3. Step‑by‑step reasoning toward the core implementation**  
   1. **Refill logic** – on each request, compute elapsed time since `last_refill_ts`; add `rate * elapsed` tokens up to `capacity`.  
   2. **Consume logic** – if `tokens >= cost`, subtract `cost` and allow; else reject with rate‑limit header.  
   3. **Persist state** – in-memory map for single node; consider serialization for crash recovery.  
   4. **API integration** – middleware that extracts tenant ID, looks up bucket, runs the algorithm, and sets HTTP headers (`X-RateLimit-*`).  

**4. Common traps to avoid**  
   • Forgetting to cap tokens at `capacity`.  
   • Race conditions when multiple requests hit the same tenant concurrently.  
   • Mis‑calculating cost (e.g., using request count instead of token usage).  
   • Not handling burst correctly, leading to sudden spikes.

**5. Sanity‑check & communicate**  
   • Test with a simulated load: ensure that after a burst the bucket drains at the configured rate.  
   • Verify headers and error codes match OpenAPI specs.  
   • Explain trade‑offs (in‑memory fast vs persistence needed for reliability).  

---

### Distributed changes

1. **State sharing** – move per‑tenant buckets into a distributed store (Redis, Memcached, or a sharded key‑value DB) to keep a single source of truth across nodes.  
2. **Atomicity & locking** – use atomic `INCRBY`/`DECRBY` with Lua scripts in Redis, or optimistic concurrency via versioned fields, to avoid race conditions.  
3. **Latency considerations** – network round‑trips add delay; consider local caching of buckets with periodic sync, or a “hot‑spot” approach for high‑traffic tenants.  
4. **Scalability & sharding** – partition tenants across shards to balance load and reduce contention.  
5. **Fault tolerance** – ensure that node failures don’t lose token counts: persistence in the distributed store guarantees recovery.  

By systematically mapping the single‑node logic onto a shared, atomic backend, we preserve correctness while enabling horizontal scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
