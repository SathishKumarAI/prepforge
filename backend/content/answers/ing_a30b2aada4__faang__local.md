---
qid: ing_a30b2aada4__faang__local
question: 'Explain: Guaranteeing “exactly once” semantics — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 448
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:34-05:00'
sources: []
---

**Clarify**  
We’re asked how to give callers *exactly‑once* guarantees when calling a service that may be retried (e.g., network hiccups). We must expose an API that is *idempotent*: repeated identical calls have the same effect as one. Assumptions: stateful backend, distributed system, eventual consistency, and the client can generate a stable request ID.

**Approach**  
1. Require a unique `requestId` in each call.  
2. Store the result of every processed request keyed by that ID.  
3. On receipt of a request, first check the cache; if present, return the stored response.  
4. If not, execute the operation atomically and persist both the result and its status.  

**Depth**  
- **Idempotency key storage**: use a write‑once table (e.g., DynamoDB with `PUT` using conditional writes) to avoid race conditions.  
- **Atomicity**: wrap the business logic in a transaction; if it fails, roll back so no partial state is persisted.  
- **Response caching**: include TTL or garbage‑collect old keys to bound storage growth.  
Complexities: O(1) lookup and O(log N) for cache eviction. Trade‑off: extra write latency versus correctness.

**Edge Cases**  
- Duplicate IDs with different payloads → reject or ignore the second.  
- Very large payloads → store only a hash in the key table to save space.  
- Clock skew → use server timestamps, not client clocks.

**Optimize & Communicate**  
Explain that this pattern converts *at‑most‑once* semantics into *exactly‑once* by decoupling request identification from processing state. Highlight how it scales (sharding by hash prefix) and how you’d monitor key hit rates to detect abuse or mis‑generation of IDs. Conclude with a short demo of the API contract: `POST /process?requestId=…` → 200 with body, idempotent across retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
