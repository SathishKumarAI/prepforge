---
qid: ing_c47196314a__fp__local
question: 'Explain: 1.4. Cacheable — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 326
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:59:36-05:00'
sources: []
---

**Cacheability in REST**

A client‑side or intermediary cache can store a response only if the server guarantees that repeated requests for the same resource will yield an identical representation.  
Why is this constraint necessary? Because caching violates *freshness*: if a cached copy differs from the current state, the client receives stale data, breaking the *principle of idempotence* that REST demands for safe operations (GET, HEAD). Thus the HTTP protocol equips responses with **Cache‑Control** headers (`public`, `private`, `max-age`, `no-cache`) and ETags that encode a version identifier.  

When a client reissues a GET, it may supply an `If-None-Match` header; the server compares the supplied ETag to its current value. If unchanged, it replies **304 Not Modified**, letting the cache continue using the stored representation without retransmitting the payload—saving bandwidth and latency.

**Non‑obvious insight:**  
The *semantic* meaning of “cacheable” is not merely about performance; it’s a contract that preserves REST’s statelessness. A server can expose a mutable resource (e.g., `/users/123`) but mark its representation as `no-store` to force clients to always fetch fresh data. Conversely, a computed view (`/reports/daily`) can be safely cached for hours because its definition guarantees determinism. Thus cacheability is an *explicit declaration of predictability*, not just a hint for performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
