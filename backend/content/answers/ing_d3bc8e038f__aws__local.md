---
qid: ing_d3bc8e038f__aws__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — gRPC vs. REST: Key Similarities
  and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 418
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:25-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a recent migration of our recommendation engine from an on‑prem REST API to **gRPC over HTTP/2**, I led the effort that cut latency by 35 % and reduced egress costs by 22 %.  
- **Situation:** Our mobile app was throttling during peak traffic (≈ 10k QPS), with round‑trip times > 200 ms.  
- **Task:** Replace REST/HTTP 1.1 to improve throughput while keeping backward compatibility for legacy services.  
- **Action:** I scoped the design, chose **AWS App Mesh** + **Amazon API Gateway v2 (HTTP/2)**, and defined a protobuf contract. The key differences we leveraged:  

| Feature | gRPC (HTTP/2) | REST (HTTP 1.1) |
|---------|---------------|-----------------|
| Transport | Multiplexed streams, header compression | Single connection per request |
| Payload | Binary, strongly typed via protobuf | JSON, loosely typed |
| Streaming | Full duplex streaming | Limited to server‑only or client‑only |
| Error handling | Structured status codes + trailers | HTTP status + body |

We kept **REST endpoints** for third‑party partners; the gRPC gateway translated between protocols.  

- **Result:** 35 % lower latency, 22 % cost savings on data transfer, and a 5× increase in request capacity without new instances.  
- **Learnings:** Deeply profiling the call graph (Dive Deep) revealed that header compression was a hidden bottleneck; adjusting `max_frame_size` yielded further gains.  

**Leadership Principles Anchored:** *Customer Obsession* – delivering faster, cheaper experience for users; *Ownership* – owning end‑to‑end migration and post‑deployment monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
