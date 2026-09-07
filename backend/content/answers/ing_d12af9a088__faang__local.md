---
qid: ing_d12af9a088__faang__local
question: 'Explain: Request Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 496
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, system‑design style explanation of “What is an API?” in the context of machine‑learning services (e.g., model inference). I’ll confirm that they’re looking for: 1) definition, 2) typical components (endpoints, auth), and 3) how it ties into ML pipelines.

**Approach**  
I’ll outline the answer as a mini‑system diagram: *Client → API Gateway → Auth/Rate‑Limiter → Model Service* and explain each layer’s role. Then discuss common design patterns (REST vs gRPC, versioning, caching).

**Depth**  
An **API (Application Programming Interface)** is an abstraction that exposes functionality of a system over the network through well‑defined contracts (endpoints, payload schemas). In ML:

- **Endpoint**: `/predict` receives JSON with input features.
- **Auth/Rate‑limiting**: JWT + per‑user quota to protect compute resources.
- **Serialization**: Protocol Buffers for low‑latency gRPC; JSON for ease of debugging.
- **Model Service**: A stateless container that loads the trained model (e.g., TensorFlow SavedModel) into memory, runs inference, and returns predictions.
- **Versioning**: `/v1/predict`, `/v2/predict` to support A/B testing or gradual rollout.

Typical metrics: latency < 50 ms for online inference; throughput >10k req/s. Trade‑offs include choosing REST (simplicity) vs gRPC (performance) and balancing cache hit ratio against staleness of model updates.

**Edge Cases**  
- *Model drift*: API must trigger re‑deployment without downtime.  
- *Malformed input*: robust validation to avoid crashes.  
- *Denial‑of‑service*: rate limiter must protect GPU nodes.  
- *Security breach*: token revocation and audit logs.

**Optimize & Communicate**  
I’d highlight future improvements: edge caching for inference, model “warm‑up” queues, and A/B testing via feature flags. I’ll narrate the reasoning as a step‑by‑step design walk‑through, ensuring each layer’s purpose is clear and that trade‑offs are explicitly stated—exactly what FAANG interviewers expect in a SIGNAL‑style answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
