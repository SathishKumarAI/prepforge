---
qid: ing_a5e782509a__fp__local
question: 'Explain: What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 382
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:31-05:00'
sources: []
---

**API – the interface that turns a model into a service**

When we train a machine‑learning model we solve an *optimization problem*: find parameters θ that minimize a loss L(θ) over data D. The resulting θ is a deterministic function f(x;θ). In practice, however, the goal is not the parameters but the ability to apply f to arbitrary inputs x in real time.

An **API (Application Programming Interface)** is the *mapping* from an external request to that internal function call. Formally:

```
request  →  parse→  validate   →  f(x;θ)  →  format response
```

Why must it be this way?  
1. **Encapsulation** – the model’s internals (weights, feature pipelines, device placement) are hidden so that clients need only know how to supply inputs and read outputs.  
2. **Decoupling** – changes in training or infrastructure do not ripple through client code; only the API contract (input schema, output format, error codes) matters.  
3. **Scalability & reliability** – by exposing a stateless endpoint you can load‑balance, cache predictions, and monitor latency independently of the ML pipeline.

A non‑obvious insight: *the API is itself an optimization surface.* The design choices (batch size, serialization format, compression) trade off latency vs. throughput just like hyperparameters in training. A poorly chosen API schema can become the bottleneck that defeats a highly optimized model. Thus, in system design, the API should be treated as another layer of the objective function—minimize total end‑to‑end response time while preserving accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
