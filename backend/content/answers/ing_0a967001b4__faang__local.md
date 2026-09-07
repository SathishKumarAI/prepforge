---
qid: ing_0a967001b4__faang__local
question: 'Explain: API Protocols'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 488
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:08:45-05:00'
sources: []
---

**Clarify**

We’re asked to explain *API protocols* in the context of machine‑learning systems.  
Assumptions:  
1. The audience knows what an API is but not the protocol layers (REST, gRPC, GraphQL).  
2. We should cover why different protocols matter for ML workloads (latency, streaming, schema evolution).

**Approach**

- Define “API protocol” and its role in ML pipelines.  
- Compare the three dominant styles: REST/HTTP, gRPC‑protobuf, GraphQL.  
- Highlight trade‑offs relevant to model serving, data ingestion, and training.

**Depth**

| Protocol | Typical use‑case | Strengths | Weaknesses |
|----------|-----------------|-----------|------------|
| **REST (JSON over HTTP)** | Simple inference endpoints, web dashboards | Human‑readable, cacheable, firewall friendly | Verbose payloads, higher latency, no streaming |
| **gRPC (Protocol Buffers)** | Low‑latency model servers, microservice orchestration | Binary, efficient, bi‑directional streams, built‑in auth | Requires codegen, less firewall‑friendly, harder debugging |
| **GraphQL** | Flexible data pulls for feature stores, dashboards | Single request fetches nested data, reduces over‑fetching | Complex schema evolution, caching is non‑trivial |

For training pipelines, REST suffices for job submission; gRPC shines for parameter server sharding or real‑time inference. GraphQL is useful when clients need to pull heterogeneous model metadata.

**Edge Cases**

- Firewall/NAT restrictions → gRPC may fail without proxying.  
- Large feature vectors → JSON becomes a bandwidth bottleneck.  
- Schema changes in production models → REST needs versioning; gRPC relies on protobuf backward compatibility.

**Optimize & Communicate**

I’d start by asking which ML workload (training vs inference) the team focuses on, then recommend a hybrid stack: REST for public-facing inference APIs, gRPC internally between micro‑services, and GraphQL for analytics dashboards. I would also suggest monitoring latency per protocol to validate assumptions. This structured answer demonstrates clear reasoning, technical depth, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
