---
qid: ing_7c251bfa81__faang__local
question: 'Explain: Best Practices — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 411
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:54-05:00'
sources: []
---

**Clarify**  
You’re asking how to design a system that guarantees *idempotent* operations—repeating the same request yields the same state without unintended side‑effects. I’ll assume we’re dealing with an API‑driven service (e.g., payment, order creation) where network retries or duplicate client calls are common.

**Approach**  
1. Identify a unique idempotency key per logical operation.  
2. Store the request’s result (or status) keyed by that identifier in durable storage before performing side‑effects.  
3. On receiving a request, check the key; if present, return the stored response; otherwise execute and persist.

**Depth**  
- Use an *idempotency table* (e.g., DynamoDB/Spanner row) with fields: `key`, `status` (`PENDING`, `SUCCESS`, `FAILURE`), `payload`, `timestamp`.  
- Implement optimistic concurrency via a version column or conditional write to avoid race conditions.  
- Ensure the operation is *stateless* after persisting the key, so retries hit the same record.  
- Complexity: O(1) read/write per request; latency adds one round‑trip to storage but guarantees safety.

**Edge Cases**  
- Expired keys: garbage‑collect old entries after a TTL.  
- Partial failures: if side‑effect fails after persisting `SUCCESS`, roll back or mark as `FAILED`.  
- Clock skew: use monotonically increasing sequence numbers instead of timestamps for ordering.

**Optimize & Communicate**  
To reduce latency, cache recent idempotency keys in an in‑memory store (Redis) while still backing up to durable storage. Explain that this pattern decouples client retries from business logic and satisfies SLA guarantees—exactly what FAANG teams expect when designing robust, fault‑tolerant services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
