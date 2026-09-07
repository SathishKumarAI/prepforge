---
qid: ing_97b7325b76__aws__local
question: 'Explain: Disadvantages — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 475
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:44-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a distributed analytics platform that previously relied on plain RPC for inter‑service communication. The goal was to reduce latency and increase reliability while keeping operational overhead low.

**Action (Dive Deep + Bias for Action)**  
I mapped out the failure modes of traditional OS‑level RPC:  

| Disadvantage | Why it hurts | AWS service/solution |
|--------------|--------------|----------------------|
| **Blocking & Latency** | Calls tie up threads until a response arrives, causing thread pool exhaustion under load. | Replace with **AWS AppConfig + EventBridge** for asynchronous event‑driven patterns. |
| **Tight Coupling** | RPC signatures lock clients to server versions, stifling independent evolution. | Adopt **API Gateway + Lambda authorizers** to expose versioned REST/GraphQL endpoints. |
| **Error Propagation** | Exceptions bubble up the call stack, forcing callers to implement complex retry logic. | Use **AWS Step Functions** with built‑in retries and circuit breakers. |
| **Security Overhead** | Each RPC requires per‑connection TLS setup, incurring CPU cost at scale. | Offload encryption to **ALB + ACM**; use mutual TLS only where needed. |

I rewrote the communication layer using **gRPC over HTTP/2** with **AWS App Mesh**, adding observability via **X-Ray** and metrics in CloudWatch.

**Result (Deliver Results)**  
- Thread pool usage dropped from 85 % to <30 %.  
- End‑to‑end latency improved by 40 %, SLA hit rate rose from 92 % to 99.7 %.  
- Deployment frequency increased from once per month to weekly, thanks to decoupled services.

**Learning**  
The key takeaway: *RPC is fine for tightly coupled, low‑scale workloads, but in a cloud‑native environment its blocking nature and coupling cost outweigh the simplicity.* By applying AWS managed services I turned a legacy pain point into a scalable, observable architecture that directly supports Amazon’s “Customer Obsession” and “Ownership.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
