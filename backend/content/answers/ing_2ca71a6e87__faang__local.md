---
qid: ing_2ca71a6e87__faang__local
question: 'Explain: APIs Are Boundaries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 446
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:26:40-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *what* an API is and why it’s considered a boundary in system design, not just for ML pipelines but for any distributed component.

**Approach**  
1. Define “API” as the contract that exposes functionality to callers.  
2. Explain how it defines *inputs*, *outputs*, and *semantics*.  
3. Show how this contract becomes a boundary: separate implementation, versioning, security, and scaling concerns.

**Depth**  
An API is a **public interface**—a set of functions, endpoints, or message schemas—that other services call to perform operations. It specifies:
- **Input schema** (e.g., JSON payload, protobuf fields).  
- **Output schema** (return type, error codes).  
- **Behavioral guarantees** (idempotency, latency SLAs).  

Because the API is a *stable contract*, the underlying implementation can change without affecting clients. In ML systems, for instance, the inference endpoint might swap models or batch‑process requests while keeping the same REST/GRPC signature.

The boundary also isolates concerns:
- **Security**: authentication tokens validated at the API layer.  
- **Scalability**: load balancers route traffic to stateless API servers.  
- **Observability**: metrics and tracing are attached to API calls, not internal logic.

**Edge Cases**  
*Breaking changes* (e.g., removing a field) break clients; versioning mitigates this. *Over‑exposing* internal state can leak secrets or create tight coupling. Testing should cover schema validation, contract drift, and back‑compatibility.

**Optimize & Communicate**  
Explain that a well‑designed API is a **contract-first** approach: define schemas in OpenAPI/GraphQL/Protobuf, enforce them with codegen, and document changes. Emphasize the trade‑off between strictness (harder to evolve) and flexibility (easier to iterate). Conclude by noting that treating APIs as boundaries lets teams innovate independently while preserving system integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
