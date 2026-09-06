---
qid: ing_b6acc425a8__think__local
question: 'Explain: API Rate Limiter — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 506
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:00:58-05:00'
sources: []
---

**1️⃣ Clarify the problem & scope**  
   * Confirm whether we’re designing a generic rate‑limiter (per user/endpoint) or a specific API gateway scenario.  
   * Decide on constraints: latency (<5 ms), consistency guarantees, burst tolerance, and failure modes.

**2️⃣ Choose a mental model**  
   * Think of the limiter as a “token bucket” that tracks permits over time.  
   * Map key sub‑systems: **ingress filter**, **state store (in‑memory vs distributed)**, **burst handling**, **metrics & alerts**.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to do | Why |
|------|------------|-----|
| a. Define rate rules | e.g., 100 req/min per user, 10 k req/s global | Provides clear boundaries |
| b. Pick storage | In‑memory (Redis/LRU) for speed vs DB for durability | Trade‑off between consistency & latency |
| c. Implement token bucket algorithm | Refill tokens on schedule, decrement on request | Handles bursts smoothly |
| d. Handle concurrency | Use atomic ops (`INCRBY`, Lua scripts in Redis) or distributed locks | Prevents race conditions |
| e. Expose API endpoints | `/rate_limit/status`, `/config` for dynamic updates | For observability & management |
| f. Add fallbacks | Circuit breaker, graceful degradation | Keeps service available under load |

**4️⃣ Common traps to avoid**  
   * **Over‑shutting**: a hard limit can kill legitimate traffic during spikes.  
   * **State leakage**: forgetting to clean expired keys leads to memory bloat.  
   * **Single point of failure**: relying on one Redis instance without replication.  
   * **Ignoring multi‑region latency**: requests from distant regions hit the same limiter and cause unfair throttling.

**5️⃣ Sanity checks & communication**  
   * Verify that a burst of 200 requests at t=0 still serves 100 immediately, then queues/denies the rest.  
   * Explain how the algorithm scales horizontally: each edge node can locally cache tokens; only on cache miss do we hit Redis.  
   * Summarize trade‑offs in a diagram and emphasize observability (latency graphs, rate‑limit violations).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
