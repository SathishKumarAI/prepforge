---
qid: ing_623dd30f48__faang__local
question: 'Explain: Transactions — Sendsmsmessageapitwillo'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 472
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:32:17-05:00'
sources: []
---

**Clarify**  
The question asks how a system can guarantee that an *SMS send request* (via an external API) is processed exactly once, even if network failures or retries occur.  
Assumptions to confirm:  
- The SMS provider exposes a REST/HTTP endpoint with idempotency support.  
- We have control over the client‑side retry logic and can persist state.  
- Latency tolerance for the end‑user is moderate (seconds).

**Approach**  
1. **Generate a unique, immutable request ID** per user action.  
2. Persist the request locally (e.g., in a relational DB or Redis) with status `PENDING`.  
3. Send the SMS using the provider’s API, attaching the idempotency key.  
4. On success → mark `COMPLETED`; on failure → retry up to *N* times with exponential back‑off.  
5. If the client re‑sends (e.g., after a timeout), look up the status by ID and respond accordingly.

**Depth**  
- **Idempotency key**: ensures the provider deduplicates identical requests; if not available, we rely on our local state.  
- **Persistence layer**: ACID guarantees avoid lost updates; use optimistic locking to prevent race conditions when multiple retries hit simultaneously.  
- **Retry policy**: exponential back‑off + circuit breaker to protect against provider outages.  
- **Complexity**: O(1) per request for DB lookup; network latency dominates.

**Edge Cases**  
- Provider rejects the idempotency key → fall back to local dedupe.  
- Clock skew between services → use monotonic counters instead of timestamps.  
- Network partition during status update → eventual consistency via a background job to reconcile state.

**Optimize & Communicate**  
- Cache recent request IDs in Redis for O(1) lookup, evict after completion.  
- Log every attempt with correlation ID; expose metrics (retry count, latency).  
- Explain to interviewers: “We combine local persistence with provider‑side idempotency to guarantee exactly‑once delivery while keeping latency low and failure handling robust.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
