---
qid: ing_f926b30080__faang__local
question: 'Explain: Distributed Rate limiter implementation for an API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:06-05:00'
sources: []
---

**Distributed Rate Limiter for an API**

| Step | What to do |
|------|------------|
| **Clarify** | We need a rate‑limit that works across many service instances, ensuring no client exceeds *N* requests per minute (or any window) even if calls hit different nodes. Confirm limits (per‑client vs global), clock sync, and persistence needs. |
| **Approach** | 1. Store counters in a fast, distributed store (Redis or DynamoDB with TTL). <br>2. Use atomic increment (`INCRBY`) + `EXPIRE` to reset per window. <br>3. For burst protection use a token‑bucket algorithm: maintain bucket size & refill rate. <br>4. Expose a middleware that checks/updates the counter before routing request. |
| **Depth** | *Redis*: `INCRBY key 1; EXPIRE key window`. Complexity O(1). Handles high concurrency with Lua scripts to avoid race conditions. <br>*Token bucket*: `DECRBY` tokens atomically, refill on read. <br>Store keys as `clientID:timestampWindow`. |
| **Edge Cases** | • Clock drift between nodes → use Redis time (`TIME`). <br>• Network partitions → fallback to local counters (risk of over‑limit). <br>• High burst traffic → set a maximum bucket size; reject if empty. <br>• Zero‑trust clients → require API key validation first. |
| **Optimize & Communicate** | • Cache recent counter reads in memory to reduce round‑trips for frequent callers. <br>• Use pipelining for bulk rate checks (batching). <br>Explain trade‑offs: Redis gives low latency but single point of failure; DynamoDB offers higher availability at cost of slightly higher latency. <br>Convey that the design balances consistency, scalability, and developer ergonomics—key signals for FAANG interviews. |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
