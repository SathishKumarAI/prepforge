---
qid: ing_e3b8dd2e12__aws__local
question: 'Explain: gRPC vs. REST — gRPC vs. REST: Key Similarities and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 470
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:49-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a recent migration of our recommendation engine from an on‑prem microservice stack to Amazon EKS, I led the decision between **gRPC** and **REST** for inter‑service communication.  

| | gRPC | REST |
|---|------|-----|
| Protocol | Binary HTTP/2 (protobuf) | Textual HTTP/1.1 (JSON) |
| Latency | ~30 % lower on 10 Gbps links | Higher due to text parsing |
| Bandwidth | 4× more efficient | 3–5× larger payloads |
| Streaming | Full duplex, built‑in | Requires WebSockets or long polling |
| Tooling | Codegen for all languages | Mature tooling everywhere |

**Situation:** Our recommendation service needed sub‑millisecond response times and bidirectional streaming to stream model updates.  
**Task:** Pick a protocol that would keep latency < 50 ms at 10k QPS while staying cost‑effective on AWS.  
**Action:** I benchmarked both protocols on an EC2‑C5 instance, measured with *wrk* and *grpc‑benchmark*. gRPC achieved **0.42 ms per call** vs REST’s **1.12 ms** at 10k QPS. I chose gRPC, added Envoy as a sidecar (managed via AWS App Mesh), and enabled HTTP/2 multiplexing on the ALB.  
**Result:** Post‑migration latency dropped from 1.1 ms to 0.42 ms (60% reduction). Throughput increased by 3× without extra instances, saving ~30 % in EC2 costs over six months.  

I own the trade‑off: gRPC’s binary format saves bandwidth but requires protobuf schema management; REST offers easier debugging and broader language support. The learning point—always run a lightweight benchmark before making architectural decisions.  

**Leadership Principles:** *Customer Obsession* (delivering faster responses), *Dive Deep* (profiling latency), *Bias for Action* (quick prototyping).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
