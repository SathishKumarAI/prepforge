---
qid: ing_1dc3ce1b89__faang__local
question: LLM APIs are slow, expensive, and flaky. How does your retry strategy differ
  from retrying a normal REST dependency?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 448
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:54:28-05:00'
sources: []
---

**Clarify**  
We’re dealing with large‑language‑model (LLM) APIs that return high‑latency, costly responses and can time‑out or throttle. The question asks how a retry strategy for such an API would differ from the “one‑size‑fits‑all” retry logic used for typical REST calls.

**Approach**  
1. **Identify failure modes specific to LLMs** (rate limits, quota exhaustion, content filtering errors).  
2. **Choose a back‑off policy that respects cost and latency budgets**.  
3. **Introduce request deduplication & caching** to avoid duplicate expensive calls.  
4. **Add circuit‑breaker logic** to stop hammering the API when it’s unhealthy.

**Depth**  
- *Exponential back‑off with jitter* (e.g., `t = base × 2^n + rand(0, jitter)`) keeps retries spaced out and reduces contention.  
- *Maximum retry cap* tied to a cost budget: if cumulative token usage > threshold → abort.  
- *Rate‑limit awareness*: read `Retry-After` headers or quota limits; sleep accordingly instead of blind retries.  
- *Cache responses* keyed by prompt + parameters; subsequent identical requests hit cache, saving tokens and latency.  
- *Circuit breaker*: after N consecutive failures (e.g., 5), open the circuit for a cooldown period to avoid spamming an already degraded endpoint.

**Edge Cases**  
- Non‑idempotent calls: ensure retries don’t produce duplicate side‑effects (use idempotency keys).  
- Partial responses or streaming errors: decide whether to resume from checkpoint.  
- Token limits per request: if exceeding, split prompt rather than retrying whole call.

**Optimize & Communicate**  
Explain that this strategy reduces unnecessary token consumption, respects provider quotas, and keeps latency within SLA while still providing resilience. Highlight trade‑offs: stricter caps may reduce success rate but save cost; caching trades freshness for speed. Conclude with a quick pseudo‑code sketch to illustrate the flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
