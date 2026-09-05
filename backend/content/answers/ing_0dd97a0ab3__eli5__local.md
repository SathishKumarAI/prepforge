---
qid: ing_0dd97a0ab3__eli5__local
question: 'Explain: Design a token-based rate limiter for a multi-tenant LLM API.
  Implement the core, then tell me what changes when it''s distributed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 310
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:24-05:00'
sources: []
---

Imagine every request to your language‑model service is a “coffee cup” you can buy from a vending machine that only has a limited number of cups in each minute.  
**Token bucket**: Each tenant gets its own bucket that starts full (say 10 tokens). Every time the tenant calls the API, one token is taken out—just like a coffee cup is dispensed. When the bucket empties, the tenant must wait until new tokens “top up” at a fixed rate (e.g., 1 token per second). This keeps traffic smooth and fair across tenants.

**Core implementation**  
1. Store for each tenant: `tokens`, `lastRefillTime`.  
2. On request: calculate elapsed time, add `elapsed * refillRate` to tokens (cap at bucket size), then subtract one if a token is available; otherwise reject the call.  

**Distributed changes**  
In a single server, you can keep that state in memory. When multiple servers share the workload, each must see the same token count. That requires a shared store (Redis, database) or a consensus protocol so all nodes read‑modify‑write the bucket atomically. You also need to handle network latency and clock drift—usually by letting the central store perform the refill calculation. The logic stays the same; only the place where you keep and update the token counts changes from local memory to a distributed, consistent storage layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
