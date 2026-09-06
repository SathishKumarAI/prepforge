---
qid: ing_b694a08750__fp__local
question: 'Explain: Make Processing Safe to Repeat — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 484
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:32:10-05:00'
sources: []
---

### Making Processing Safe to Repeat – Webhooks

When a service emits a webhook it **pushes** data to an external endpoint without any guarantee that the call will succeed or be delivered only once. The fundamental problem is *reliable, consistent state change* in the face of network unreliability and eventual duplicate delivery.

1. **Model the operation as an idempotent command**  
   Every webhook payload represents a *command* (e.g., “user #42 updated”). A deterministic function `f(command) → new_state` guarantees that applying `f` multiple times yields the same state as a single application. This is the core of the *Command Pattern* in distributed systems.

2. **Assign a unique identifier**  
   The sender attaches an opaque, monotonically increasing ID (often a UUID). The receiver stores this ID in a *deduplication table*. On receipt, it checks: if the ID exists, the payload is ignored; otherwise it processes and records the ID. This implements *exactly‑once* semantics on top of at-least‑once delivery.

3. **Persist before side‑effects**  
   Write the new state to durable storage first, then perform external actions (e.g., sending an email). If the system crashes after persisting but before the side‑effect, a retry will re‑execute the idempotent operation without duplicating the effect.

4. **Graceful failure and exponential backoff**  
   The sender retries on non‑2xx responses or timeouts, gradually increasing delay to avoid overwhelming the receiver.

#### Non‑obvious insight
Many developers think idempotency is only about “don’t double‑count.” In reality, it is a *design contract* that decouples *when* an operation occurs from *how many times* it is attempted. By treating each webhook as an atomic, side‑effect‑free state transition, the system becomes resilient to network glitches without any complex compensating logic. This principle scales: whether you’re updating a database row or invoking a third‑party API, idempotence turns unreliable transport into reliable computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
