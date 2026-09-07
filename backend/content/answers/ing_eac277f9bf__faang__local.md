---
qid: ing_eac277f9bf__faang__local
question: 'Explain: Idempotency Keys — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 540
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:39-05:00'
sources: []
---

## Clarify  
**Question restated:** In distributed ML services (e.g., model training or inference APIs), how do idempotency keys guarantee that repeated client requests don’t trigger duplicate side‑effects? What assumptions must we confirm about the underlying storage, network, and request patterns?

*Assumptions to verify:*  
- The client can generate a unique, cryptographically secure key per logical operation.  
- Backend stores the key‑result mapping durably (e.g., in a replicated KV store).  
- Idempotent operations are idempotent at the business level (e.g., training job creation).

## Approach  
1. **Client‑side**: generate a UUID4 or HMAC(key, payload) per request.  
2. **Server‑side**: upon receipt, atomically check/insert key in KV store with `PUT_IF_ABSENT`.  
3. **If absent** → perform operation, write result + status to store; return response.  
4. **If present** → read stored result and replay it.

## Depth  
- **Atomicity**: Use a single transactional write (`SET key=hash | value`) so that concurrent requests race correctly.  
- **Durability**: Persist key‑value in a distributed log (e.g., Cassandra, DynamoDB) with replication factor ≥3.  
- **Idempotency window**: TTL on keys to avoid unbounded growth; can be extended if operations are long‑running.  
- **Complexity**: O(1) average read/write due to KV store; space proportional to number of pending/active jobs.

## Edge Cases  
- **Network partitions**: A client may see “duplicate” after a split‑brain; use quorum reads/writes.  
- **Clock skew**: Ensure TTL based on server clock, not client.  
- **Operation failure**: Store error state so retries return the same error instead of re‑executing.

## Optimize & Communicate  
Explain that idempotency keys transform an *at‑least‑once* API into a *exactly‑once* semantics for side‑effects while keeping latency low. Highlight trade‑offs: extra storage vs. safety, and how TTL tuning balances memory usage against potential stale key replay. Narrate this as a two‑phase commit pattern where the first phase records intent (key insertion) and the second commits the result. This demonstrates clear reasoning, complexity awareness, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
