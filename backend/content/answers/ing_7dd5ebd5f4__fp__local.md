---
qid: ing_7dd5ebd5f4__fp__local
question: 'Explain: Common API Styles — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 429
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:33:17-05:00'
sources: []
---

## What Is an API?

At its core, an **API (Application Programming Interface)** is a contract that tells one software component how to request services from another without exposing internal details. In machine‑learning systems, this contract usually takes the form of HTTP endpoints, gRPC methods, or SDK functions that accept data payloads and return predictions, model metadata, or training status.

### Why an API Must Be “Service‑Oriented”

1. **Decoupling** – The client (e.g., a web app) never needs to know how the model is stored or what framework runs it.  
2. **Scalability** – Each request can be routed to an instance of the inference service, enabling horizontal scaling.  
3. **Observability** – Logs and metrics can be attached at the API layer, giving insight into latency, error rates, and usage patterns.

### Common Styles in ML Deployments

| Style | Typical Use‑Case | Strength |
|-------|------------------|----------|
| **REST/JSON** | Simple prediction calls from browsers or microservices. | Human‑readable, cacheable, stateless. |
| **gRPC/Protocol Buffers** | High‑throughput pipelines (e.g., feature store → model). | Binary serialization, low latency, bidirectional streaming. |
| **GraphQL** | Clients need flexible field selection (e.g., only a subset of prediction metadata). | Reduces over‑fetching, dynamic schema introspection. |

### A Non‑Obvious Insight

Most practitioners treat an API as a *thin wrapper* around a model, but the **API itself can be the primary optimization surface**. By exposing batch endpoints or streaming interfaces that match downstream workload patterns, you shift computational cost from the model to the network layer—effectively turning latency into bandwidth savings and vice versa. This perspective turns the API from a passive conduit into an active participant in overall system performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
