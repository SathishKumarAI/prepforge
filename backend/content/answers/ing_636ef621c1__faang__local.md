---
qid: ing_636ef621c1__faang__local
question: 'Explain: Public APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 469
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:44-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *what* a public API is in the context of machine‑learning systems and why it matters for system design. I’ll assume we’re talking about an HTTP/REST style interface exposed by a ML model or service, not internal SDKs.

**Approach**  
1. Define “API” generically.  
2. Highlight characteristics of *public* APIs (authentication, rate‑limiting, versioning).  
3. Tie to ML: inference endpoint, data ingestion, training job orchestration.  
4. Mention common patterns (model registry + serve‑as‑a‑service).

**Depth**  
An **API (Application Programming Interface)** is a contract—specification of endpoints, request/response formats, and error handling—that allows one system to call functionality in another without sharing implementation details. A **public API** extends this by exposing the contract over the internet so third‑party developers can integrate with your service.

In ML, a public inference API typically accepts a JSON payload (e.g., image bytes or feature vector) via POST and returns predictions in JSON. It must handle:  
- *Authentication* (API keys/OAuth).  
- *Rate limiting* to protect compute resources.  
- *Versioning* (`/v1/predict`) so models can evolve without breaking clients.  
- *Latency guarantees*—often <100 ms for real‑time inference, which drives choices of container orchestration, autoscaling, and edge caching.

**Edge Cases**  
- Malformed payloads → 400 errors.  
- Model drift → need a rollback endpoint or “staging” API.  
- High traffic spikes → cold starts if using serverless; mitigate with pre‑warm pools.

**Optimize & Communicate**  
Explain trade‑offs: containerized services give control but slower scaling vs. serverless (pay‑per‑request) but potential cold‑start latency. Emphasize monitoring metrics (latency, error rate) and the need for a robust CI/CD pipeline to deploy new model versions safely. This shows you understand both the *what* of APIs and the *how* they shape ML system architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
