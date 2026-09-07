---
qid: ing_cdea018e08__aws__local
question: 'What is a REST API? — gRPC vs. REST: Key Similarities and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 445
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:35-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent **ML inference platform redesign**, I led the decision to expose models through a **RESTful API** rather than gRPC because our customers were primarily browser‑based and required simple HTTP/JSON consumption.  

- **Situation:** 12,000 monthly active users hit the inference endpoint; latency > 200 ms on legacy SOAP service.  
- **Task:** Reduce latency, increase throughput, and simplify client integration.  
- **Action:** Adopted **REST + AWS API Gateway** + **Lambda@Edge** for edge caching. I compared gRPC (HTTP/2, binary Protobuf) vs. REST (HTTP/1.1, JSON). Key findings:  

| Feature | REST | gRPC |
|---------|------|------|
| **Transport** | HTTP/1.1 (textual) | HTTP/2 (binary) |
| **Client support** | Native in browsers & most SDKs | Requires generated stubs |
| **Serialization** | JSON – human‑readable, larger payload | Protobuf – compact, faster parse |
| **Streaming** | Not native | Bidirectional streaming built‑in |
| **Tooling** | Swagger/OpenAPI | gRPC‑IDL (proto) |

- **Result:** Latency dropped from 200 ms to **45 ms** (90% improvement), request throughput increased by **3×**, and cost per inference fell by **15%** due to reduced data transfer.  

**Leadership Principles highlighted:**  
1. *Customer Obsession* – chose REST for broader client compatibility.  
2. *Dive Deep* – quantified performance trade‑offs with real metrics.  

**Bar‑raiser cues I listened for:** ownership of the end‑to‑end pipeline, depth in protocol comparison, and clear evidence that the change delivered measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
