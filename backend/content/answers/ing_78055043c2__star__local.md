---
qid: ing_78055043c2__star__local
question: 'Explain: Build a rate limiter for an API gateway: per-key token bucket
  first, then extend it to multiple gateway instances.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 306
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:09-05:00'
sources: []
---

**Situation**  
At my previous startup we exposed a public analytics API that was being hammered by a handful of clients. The single‑instance gateway started throttling legitimate traffic because the per‑client quota was enforced only in memory, so bursts from one key would spill over and hit the downstream services.

**Task**  
I had to design a rate limiter that honored a token‑bucket policy per API key, then scale it across multiple gateway instances without losing consistency or creating race conditions.

**Action**  
First I implemented an in‑memory token bucket for each key: tokens refilled at 100 req/min with a burst capacity of 200. To synchronize across nodes I switched to Redis’ `INCRBY` and Lua scripting, storing each key’s token count and timestamp as a hash. The script atomically calculated the new token balance, applied the request, and updated the state in one round‑trip, guaranteeing no double‑counting even under high contention. For resilience I added a fallback to a local cache with a short TTL when Redis was unreachable.

**Result**  
The distributed limiter cut over‑request errors by 95 % and kept per‑key latency below 30 ms. We also saw a 40 % reduction in backend overload incidents, and the system now supports horizontal scaling without any extra configuration. I learned that atomic scripts in Redis are essential for correct token bucket semantics at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
