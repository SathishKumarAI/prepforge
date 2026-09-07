---
qid: ing_d47c132664__faang__local
question: What's an API? — System Design was HARD until I Learned these 30 Concepts
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:58-05:00'
sources: []
---

**Clarify**  
You’re asking *“What is an API in the context of machine‑learning systems?”* – i.e., a programmatic contract that lets clients request ML predictions, ingest data, or manage models without knowing internal details. I’ll assume we’re talking about REST/GraphQL HTTP APIs exposed by model serving services.

**Approach**  
1. Define what an API is generally.  
2. Highlight why ML needs a clean interface (model versioning, scaling, security).  
3. Show typical request/response patterns (JSON payloads, metadata).  
4. Mention key design concerns: latency, throughput, monitoring, and A/B testing.

**Depth**  
An ML API is an HTTP endpoint that accepts a **predict** or **train** request.  
- *Predict*: POST `/v1/models/{model_id}:predict` with JSON `{ "instances": [...] }`. The service deserializes the payload, runs inference through the loaded model graph (TensorFlow Serving / TorchServe), and returns `{ "predictions": [...] }`.  
- *Metadata*: GET `/v1/models/{model_id}` yields performance metrics, version, and schema.  
The API layer handles authentication (JWT/OAuth), rate‑limiting, request validation, and routes to a model pool behind a load balancer. It’s stateless so autoscaling is trivial; each call can be retried idempotently.

**Edge Cases**  
- *Large payloads*: chunked transfer or streaming inference.  
- *Model drift*: version mismatch leads to 400 errors.  
- *Cold starts*: first request latency spikes—cache warm‑up logic.  
- *Security*: avoid exposing model weights; enforce TLS and input sanitization.

**Optimize & Communicate**  
To reduce latency, cache embeddings or use a gRPC gateway for binary payloads. Log all requests with correlation IDs to trace failures. In interviews, I’d explain that the API abstracts away the ML stack while enabling continuous delivery: new models can be rolled out behind feature flags without changing client code. This design balances performance, maintainability, and operational observability—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
