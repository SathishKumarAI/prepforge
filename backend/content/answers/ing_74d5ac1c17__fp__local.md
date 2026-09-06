---
qid: ing_74d5ac1c17__fp__local
question: 'Explain: Exactly once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 401
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:13:34-05:00'
sources: []
---

### Exactly‑once delivery semantics (in machine‑learning pipelines)

**Problem it solves**  
When a learning system consumes data from an external source (e.g., sensor streams, log collectors), each datum must be processed *once* to avoid bias: duplicate samples inflate confidence; missing ones degrade generalization. The fundamental requirement is **idempotent consumption**—the output of the learner should be invariant under repeated deliveries.

**Why it must work that way**  
Consider a stochastic gradient update \(w \leftarrow w - \eta\,\nabla_{\!w}\ell(x,y)\). If the same sample \((x,y)\) is applied twice, the weight shift doubles, effectively changing the learning rate. This violates the underlying assumption of i.i.d. data and distorts convergence guarantees (e.g., Robbins–Monro conditions). Hence a system must guarantee that each tuple traverses the pipeline exactly once.

**Connection to deeper principles**  
Exactly‑once delivery is a manifestation of *statistical consistency* in streaming inference: the empirical distribution seen by the learner equals the true data distribution. It also aligns with **information theory’s no‑surprise principle**—no redundant information should be injected into the model, preserving entropy.

**Non‑obvious insight**  
The real cost is not in detecting duplicates but in *re‑processing* them safely when failures occur. A robust exactly‑once system uses a transaction log that records each message’s unique identifier and its processing status. If a failure happens mid‑update, the learner can roll back to the last consistent checkpoint, ensuring that re‑delivery does not double‑count. Thus, exactly‑once semantics is less about “not sending twice” and more about **atomicity of state transitions** in the learning algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
