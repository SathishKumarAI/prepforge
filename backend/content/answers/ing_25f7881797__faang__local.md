---
qid: ing_25f7881797__faang__local
question: 'Explain: :thumbsdown: Disadvantages of gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 370
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:12-05:00'
sources: []
---

**Disadvantages of gRPC (FAANG‑style)**  

| # | Issue | Why it matters | Mitigation / Trade‑off |
|---|-------|----------------|------------------------|
| **1** | *Binary protocol & code generation* | Requires language‑specific stubs; updating APIs forces regeneration and redeploy, slowing iteration. | Use REST/JSON for rapid prototyping or generate stubs only when breaking changes occur. |
| **2** | *Limited browser support* | gRPC works over HTTP/2 but browsers need WebSocket or special proxy; native web clients can’t call directly. | Expose a REST gateway (gRPC‑JSON transcoding) for front‑end use. |
| **3** | *Tooling & debugging* | Fewer mature debuggers, less human‑readable logs than plain HTTP/JSON. | Use Envoy or gRPC‑UI; log protobufs as JSON for readability. |
| **4** | *Cold start latency* | Protobuf parsing and TLS handshakes add overhead compared to lightweight REST calls. | Cache connections, use connection pooling, enable HTTP/2 multiplexing. |
| **5** | *Complexity in mixed‑stack environments* | Requires support libraries in every language; adds dependency surface area. | Adopt a single service mesh (e.g., Istio) that abstracts gRPC details. |

### Key Takeaway  
gRPC excels for high‑performance, typed microservice communication, but its binary nature, tooling gaps, and browser incompatibility can hinder rapid development and client diversity. Balancing these trade‑offs—often via a hybrid REST/gRPC strategy—is common in production FAANG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
