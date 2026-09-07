---
qid: ing_0db390f800__faang__local
question: 'When Should You Use REST vs. gRPC? — gRPC vs. REST: Key Similarities and
  Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 497
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:42-05:00'
sources: []
---

**Clarify**

You’re asked to decide when a service should expose **RESTful HTTP/JSON** versus **gRPC** (HTTP/2 + Protobuf).  
Assumptions:  
- Clients may be browsers, mobile apps, micro‑services, or legacy systems.  
- Bandwidth, latency, and payload size matter.  
- You can control the transport protocol and serialization format.

---

**Approach**

1. List the criteria that influence the choice (client type, payload, latency, tooling).  
2. Map each criterion to REST or gRPC strengths.  
3. Summarize with a decision table.

---

**Depth**

| Criterion | REST (HTTP/1.1 + JSON) | gRPC (HTTP/2 + Protobuf) |
|-----------|------------------------|--------------------------|
| **Human‑readable** | ✔️ JSON in browser devtools | ❌ Binary, requires tooling |
| **Browser compatibility** | ✔️ Native `fetch`/XHR | ❌ Needs polyfill or native gRPC-Web |
| **Streaming** | Limited (Chunked, SSE) | ✅ Bidirectional streaming |
| **Latency / bandwidth** | Higher overhead (text, headers) | Lower (binary, multiplexing) |
| **Schema evolution** | Loose (JSON schema optional) | Strict (proto defs, backward‑compatible changes) |
| **Tooling & language support** | Ubiquitous; easy to mock | Strong in modern languages; requires `protoc` |
| **Firewall/NAT traversal** | ✔️ Uses port 80/443 | ❌ May require HTTP/2 support |

---

**Edge Cases**

- Legacy systems that can’t parse Protobuf → REST.  
- Real‑time telemetry needing streams → gRPC.  
- Public APIs for developers → REST (human‑friendly).  
- Internal microservices with tight latency budgets → gRPC.

---

**Optimize & Communicate**

Explain trade‑offs: *“If you need low‑latency, bidirectional streaming and can enforce a strict contract, gRPC wins. If you prioritize broad client reach, ease of debugging, or public exposure, REST is safer.”*  
Mention that many firms adopt a hybrid approach: expose REST for external consumers and gRPC internally to leverage its performance benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
