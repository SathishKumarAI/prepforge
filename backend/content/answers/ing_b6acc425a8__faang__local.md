---
qid: ing_b6acc425a8__faang__local
question: 'Explain: API Rate Limiter — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 501
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:55-05:00'
sources: []
---

**Clarify**  
You’re asked to design an *API rate limiter*: a service that accepts requests from many clients and guarantees that each client cannot exceed a configured number of calls per time window (e.g., 100 req/min). Clarify: is it per‑user, per‑IP, or per‑endpoint? Do we need hard limits or smooth throttling? Assume we want sub‑second latency, horizontal scalability, and eventual consistency across shards.

**Approach**  
1. **Request flow** – client → API gateway → rate‑limiter microservice → backend.  
2. **Data model** – key = `<client_id>`, value = counter + expiry.  
3. **Storage** – in‑memory (Redis, Memcached) for low latency; fallback to a distributed cache if we need persistence.  
4. **Algorithm** – sliding window or token bucket. Token bucket is easier to implement and provides smoother traffic: each client has `tokens` that refill at rate `R` per second.  

**Depth**  
- *Token Bucket*: store `(last_refill_ts, tokens)` per key. On request, compute elapsed time → add `elapsed*R` up to capacity; decrement if available else reject. Complexity: O(1) per request.  
- Use Redis `SETNX`/`INCRBYFLOAT` with Lua script for atomicity.  
- Partition keys across shards by hash to avoid hot spots.  
- For bursty traffic, use a leaky‑bucket fallback or increase capacity temporarily.

**Edge Cases**  
- Clock skew between nodes → store timestamps in UTC, use Redis server time.  
- Sudden traffic spike → shard rebalancing needed; monitor per‑shard load.  
- Clients with no prior key → create entry lazily to avoid cache thrash.  

**Optimize & Communicate**  
Explain trade‑offs: token bucket gives smooth throttling but requires more state; sliding window is simpler but can over‑reject during bursts. Emphasize horizontal scaling (stateless gateway + sharded Redis), monitoring (latency, hit rates), and graceful degradation (fallback to exponential backoff). Conclude with the chosen design’s time/space complexity: O(1) per request, O(N) storage for N active clients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
