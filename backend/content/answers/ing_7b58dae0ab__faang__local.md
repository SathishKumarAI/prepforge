---
qid: ing_7b58dae0ab__faang__local
question: 'Explain: Design the reliability layer for calls to an LLM provider: timeouts,
  retries, circuit breakers, idempotency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 620
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:55-05:00'
sources: []
---

**Clarify**

We need a *reliability layer* that wraps every outbound request to an LLM service (e.g., OpenAI).  
Key goals:  
1. **Timeouts** – avoid hanging calls.  
2. **Retries** – recover from transient failures.  
3. **Circuit breaker** – stop hammering when the provider is down.  
4. **Idempotency** – ensure duplicate retries don’t produce side‑effects (e.g., duplicate billing or hallucinations).  

Assumptions: single‑tenant vs multi‑tenant, stateless requests, provider supports idempotent keys, we can inject headers.

---

**Approach**

1. Build a thin wrapper (`LLMClient`) that accepts a request payload and an optional *idempotency key*.  
2. Inside `call()`:
   - Apply **client‑side timeout** (e.g., 10 s).  
   - Use a **retry policy** (exponential backoff + jitter, max 3 attempts).  
   - Check a **circuit breaker** state before each call; if open, return cached/fallback.  
   - Attach the idempotency key in the request header.

---

**Depth**

| Component | Implementation |
|-----------|----------------|
| Timeout | `context.WithTimeout(ctx, 10s)`; abort if exceeded. |
| Retry | `retryablehttp` or custom loop: on 5xx, network error → wait `base * 2^n + jitter`. |
| Circuit Breaker | **Token‑bucket** style: failure counter; open after 5 consecutive failures for 30 s; reset after success. |
| Idempotency | Provider accepts header `Idempotency-Key`; we generate UUID per logical operation and cache the result in Redis with TTL to return on duplicate keys. |

Complexity:  
- **Time** – O(1) per call, retries add up to 3 × timeout worst‑case.  
- **Space** – small state for breaker + optional cache.

---

**Edge Cases**

* Provider returns non‑retryable 4xx (e.g., auth). → skip retry.  
* Idempotency key collision: use namespace+hash of request body.  
* Circuit breaker stuck open due to false positives → implement half‑open test call.  

Testing: unit tests for timeout, backoff logic; integration with mock provider that injects failures.

---

**Optimize & Communicate**

- **Observability:** expose metrics (`llm_request_latency`, `retry_count`, `circuit_breaker_state`).  
- **Graceful degradation:** fallback to local cached prompt or a simpler model.  
- Explain trade‑offs: stricter timeouts reduce latency but may increase retry overhead; larger circuit breaker windows avoid flapping but delay recovery.

This design balances resilience, cost control, and user experience—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
