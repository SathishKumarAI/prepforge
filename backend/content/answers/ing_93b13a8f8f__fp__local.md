---
qid: ing_93b13a8f8f__fp__local
question: 'Explain: Use cases: — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 361
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:04-05:00'
sources: []
---

**Delivery semantics in machine‑learning pipelines**

When a model is served as a stream of predictions, the *delivery semantics* (exact‑once, at‑least‑once, or at‑most‑one) dictate how many times a client receives an inference for a given input.  
The fundamental problem is to reconcile two competing goals:

1. **Consistency** – each request should be answered exactly once to avoid duplicate actions (e.g., double charging).
2. **Availability** – the system must keep processing requests even if network or node failures occur.

In distributed ML serving, the solution emerges from *probabilistic state‑machine replication* and *message‑queue idempotency*.  
- **Exact‑once** requires a deterministic replay of events; the model’s inference function must be idempotent, and the system must track which inputs have already been processed.  
- **At‑least‑once** trades consistency for throughput: messages are re‑sent until an acknowledgment is received, so duplicates may appear but no request is lost.  
- **At‑most‑once** guarantees no duplication by using a *deduplication window*, yet a failure can cause loss of predictions.

A non‑obvious insight: the choice of semantics can be framed as an optimization over *expected cost* (duplicate actions + missed predictions) rather than a binary safety property. In practice, many recommendation engines adopt **at‑least‑once** because the downstream business logic (e.g., “show product X”) is idempotent and duplicates are harmless, whereas fraud detection systems demand **exact‑once** to avoid double‑charged alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
