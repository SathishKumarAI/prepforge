---
qid: ing_5dca4f0c1c__fp__local
question: 'Explain: Related patterns — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 374
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:24:07-05:00'
sources: []
---

**Transactional Outbox – a principled solution for reliable event publishing**

The fundamental problem is *atomicity*: when an application mutates its domain state (e.g., writes to a database) it often must emit side‑effects (messages, events). If the write succeeds but the publish fails, the system becomes inconsistent—some services see the new state while others never receive the notification. A naïve retry loop breaks isolation or causes duplicate events.

The outbox pattern solves this by **co‑locating** the event payload with the domain transaction in a dedicated “outbox” table. The same database commit guarantees that either both the state change and the event record exist, or neither does. An independent *dispatcher* later reads new rows, publishes them to the broker, and marks them as sent (or deletes them). Because dispatch happens after commit, it never violates ACID: the dispatcher can retry safely without risking duplicate business‑logic side effects.

**Deeper principle:** this is an instance of *transactional out‑of‑band communication*, a specific case of **write‑ahead logging**. The outbox acts as a durable log that decouples persistence from messaging, enabling eventual consistency while preserving strong consistency locally.

**Non‑obvious insight:** the dispatcher can be *stateless* and run in parallel across many workers without coordination. Since each outbox row is processed exactly once, you avoid distributed locks or idempotency keys at the application layer—simplifying both code and operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
