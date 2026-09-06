---
qid: ing_c3a0121397__fp__local
question: 'Explain: Summary — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 418
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:09-05:00'
sources: []
---

**Why we need an API in machine‑learning systems**

When a trained model lives on a server, the *problem* is how to expose its inference capability to arbitrary clients (web, mobile, IoT) while preserving isolation, scalability, and security. The solution must let a client send data and receive predictions without revealing internal state or requiring the client to understand the model’s representation.

**Deriving the API abstraction**

1. **Interface contract** – Clients must agree on a *protocol* (HTTP/GRPC) and a *message schema* (JSON, Protobuf). This is the first layer of abstraction that decouples implementation from consumption.
2. **Statelessness** – Each request contains all information needed; the server need not keep session state, enabling horizontal scaling. This follows the principle of *stateless service design* in distributed systems.
3. **Serialization / deserialization** – Data must be converted to a canonical binary format for efficient transport and parsed back into tensors on the server side. The choice of format (e.g., flatbuffers) is guided by *information‑theoretic efficiency*: minimal redundancy while preserving precision.
4. **Versioning & schema evolution** – As models evolve, the API must support backward compatibility. This mirrors *continuous integration* in software engineering and leverages *semantic versioning*.

**Non‑obvious insight**

Most people treat an ML API as a “black box” that simply returns numbers. In reality, the *shape of the request payload* (e.g., padding strategy for variable‑length sequences) is a *latent hyperparameter*. A poorly designed API can unintentionally bias inference by forcing suboptimal preprocessing—effectively changing the model’s behavior without code changes. Designing the API to expose preprocessing options, or to let clients supply preprocessed tensors, preserves the true intent of the trained model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
