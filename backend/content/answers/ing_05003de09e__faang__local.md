---
qid: ing_05003de09e__faang__local
question: 'Explain: Rate Limiting — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 425
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:56:13-05:00'
sources: []
---

**Clarify**  
Rate limiting controls how many requests a client can make in a given time window (e.g., 100 req/min). I’ll assume we need per‑user and global limits, distributed across stateless services, with high availability and low latency.

**Approach**  
1. Choose a token bucket or leaky‑bucket algorithm.  
2. Store counters in an in‑memory store (Redis) for speed; fall back to persistent DB on eviction.  
3. Expose a middleware that checks the counter atomically (`INCRBY` + `EXPIRE`).  
4. For global limits, use a separate key or a sharded counter.  
5. Use Redis Lua scripts to ensure atomicity and avoid race conditions.

**Depth**  
- **Token bucket:** Each user has a bucket with capacity C; tokens added at rate R per second.  
- `INCRBY` reduces the token count; if <0 → reject.  
- Complexity: O(1) per request, memory ≈ number of active users.  
- Redis guarantees eventual consistency across nodes; we can use a cluster with replication for HA.  
- For burst handling, set C > R to allow short spikes.

**Edge Cases**  
- Clock skew on distributed services → rely on Redis timestamps.  
- Sudden traffic spike → Redis memory limits may trigger eviction; fallback to DB or throttle aggressively.  
- Client IP spoofing → tie limits to authenticated user IDs instead of IPs.

**Optimize & Communicate**  
- Cache the remaining quota in a short‑lived local map to reduce round‑trips for repeated requests.  
- Expose metrics (hit rate, evictions) via Prometheus; alert on abnormal drops.  
- Document API headers (`X-RateLimit-Limit`, `X-RateLimit-Remaining`) so clients can adapt.  

This design balances speed, consistency, and scalability while keeping the implementation straightforward for interview evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
