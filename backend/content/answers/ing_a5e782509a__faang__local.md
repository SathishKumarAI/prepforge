---
qid: ing_a5e782509a__faang__local
question: 'Explain: What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:37-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise definition of “API” in the context of machine‑learning systems—i.e., how a model or service exposes functionality to clients.

**Approach**  
1. Define API broadly.  
2. Highlight its role in ML: serving predictions, training data ingestion, metadata queries.  
3. Illustrate with common patterns (REST, gRPC, GraphQL).  
4. Touch on scalability, security, versioning.  

**Depth**  
An **Application Programming Interface (API)** is a contract—textual or binary—that specifies how external code can interact with a system’s functionality without exposing internal implementation. In ML, an API typically wraps a trained model behind a stateless service:

- **Input**: JSON payload or protobuf containing feature vectors.  
- **Processing**: Deserialize → inference via TensorFlow/PyTorch → post‑process.  
- **Output**: Prediction scores, confidence intervals, or embeddings in JSON.

Common transport layers:
- **REST/HTTP** (simplicity, cacheability).  
- **gRPC** (low latency, streaming, protobuf typing).  
- **GraphQL** (fine‑grained data retrieval).

Key concerns:  
- **Scalability** → horizontal pod autoscaling + model sharding.  
- **Security** → OAuth2/JWT auth, TLS encryption.  
- **Versioning** → semantic version tags or URL prefixes to avoid breaking clients.

**Edge Cases**  
- Non‑deterministic models (e.g., dropout) – must expose seed or deterministic mode.  
- Large payloads – switch to multipart uploads or streaming.  
- Model drift – need A/B testing endpoints and canary releases.

**Optimize & Communicate**  
Explain that a well‑designed ML API abstracts complexity, allows CI/CD pipelines for model updates, and supports observability (latency metrics, error rates). Emphasize trade‑offs: REST offers broader compatibility but higher overhead; gRPC gives speed at the cost of client language support. Conclude by noting that in production you’d combine these patterns with a service mesh for routing, retries, and circuit breaking—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
