---
qid: ing_77fc7752d2__fp__local
question: 'Explain: 2.3. Self-Descriptive — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 353
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:19:59-05:00'
sources: []
---

### Why a “self‑descriptive” REST API is inevitable

When you design an interface for disparate clients (web browsers, mobile apps, IoT devices), the only thing they can rely on is the *protocol*—HTTP.  
If each client were to learn a custom format or a hidden contract, every change would ripple through all of them.  
Therefore the protocol itself must carry **all** information needed for a single request/response cycle.

1. **Statelessness** forces the server to ignore any session data; the request must contain everything it needs.  
2. HTTP’s *content‑type* header, MIME types, and media‑typed links (e.g., HAL, JSON‑API) encode how the payload should be interpreted.  
3. Hypermedia as the engine of application state (HATEOAS) lets clients discover next steps by following links included in responses.

These constraints are a direct consequence of *information theory*: to avoid redundancy and ensure scalability, every bit transmitted must convey maximum meaning.  

**Non‑obvious insight:** The “self‑descriptive” nature also guarantees **interoperability across versions**. Because each response contains the exact schema (via JSON Schema or OpenAPI), older clients can ignore unknown fields without breaking, while newer ones can exploit them—eliminating the need for costly versioning schemes.  

Thus REST’s self‑descriptiveness is not a design choice but a logical necessity derived from statelessness, hypermedia, and information efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
