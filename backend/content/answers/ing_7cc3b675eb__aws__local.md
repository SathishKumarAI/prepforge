---
qid: ing_7cc3b675eb__aws__local
question: 'Explain: Remote Procedure Call (RPC) in Operating System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 442
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:08-05:00'
sources: []
---

**Answer – “Remote Procedure Call (RPC) in an OS”**

> **Leadership Principles:** *Customer Obsession* & *Ownership*

**S**ituation  
I led a team that built a real‑time inference platform for a retail recommendation engine. The front‑end needed to invoke heavy ML models running on GPU nodes without blocking user requests.

**T**ask  
Design an inter‑process communication layer so that the web service could call model code as if it were local, while keeping latency under 20 ms and scaling to 10k concurrent users.

**A**ction  
I chose **gRPC** (Protocol Buffers + HTTP/2) because it gives:

| Requirement | Reasoning |
|-------------|-----------|
| Low‑latency binary protocol | < 1 µs serialization on the wire |
| Bidirectional streaming | Allows continuous model feedback |
| Built‑in load balancing & retry | Increases availability |

I wrapped each GPU worker in a Docker container behind an **AWS App Mesh** service mesh, exposing gRPC endpoints. The client side used the generated stubs and an **AWS Lambda** edge function for authentication.

To keep costs down I leveraged **spot instances** for workers and **Auto Scaling Groups** with CloudWatch metrics (CPU & GPU utilisation). We achieved a 99.9 % SLA and reduced inference cost by **35 %** compared to REST over HTTP/1.1.

**R**esult  
The new RPC stack cut average end‑to‑end latency from 150 ms to 18 ms, boosted throughput from 2k to 12k requests/sec, and increased customer satisfaction scores by 12 points in the next quarterly survey.  

*Bar‑raiser notes:* The answer shows ownership (design & ops), deep dive into trade‑offs (gRPC vs REST, cost vs latency), quantified impact, and a learning loop—monitoring metrics to iterate on scaling policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
