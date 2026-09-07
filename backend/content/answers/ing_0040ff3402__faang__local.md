---
qid: ing_0040ff3402__faang__local
question: 'Explain: Model Parallelism — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 516
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:58-05:00'
sources: []
---

**Model Parallelism – Serving Infrastructure**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | We’re asked how *model parallelism* works when you actually serve a model in production. The goal: split a single inference graph across multiple devices (GPUs/TPUs) so that the overall latency stays low while scaling to huge models. I’ll assume we’re dealing with deep nets that exceed one device’s memory, and that we want zero‑copy data flow between workers. |
| **Approach** | 1️⃣ Partition the model into stages (e.g., encoder layers on GPU A, decoder layers on GPU B). 2️⃣ Deploy each stage as a microservice or RPC endpoint. 3️⃣ Stream activations from one stage to the next over an efficient transport (gRPC with zero‑copy buffers or RDMA). 4️⃣ Use pipelining: while GPU A processes batch i, GPU B works on batch i‑1. 5️⃣ Add a load balancer that dispatches requests to the first stage and aggregates results. |
| **Depth** | *Data flow*: Input → Stage 0 (GPU A) → pipe → Stage 1 (GPU B) → output. We keep activations in GPU memory, avoid host‑to‑device copies. *Latency*: pipelining gives ~latency ≈ max(stage latency). *Throughput*: increases linearly with number of stages up to a point. *Fault tolerance*: each stage can be replicated; the orchestrator retries on failure. |
| **Edge Cases** | • Skewed layer sizes cause bottlenecks (balance stages). <br>• Network congestion or high queue times break real‑time guarantees – monitor RTT per pipe. <br>• Partial failures of a GPU must not stall the whole pipeline – use heartbeats and graceful fallback. |
| **Optimize & Communicate** | • Auto‑sharding tools (e.g., TorchElastic) can discover optimal partitions. <br>• Use mixed precision to reduce bandwidth. <br>Explain trade‑offs: more stages → lower per‑stage memory but higher coordination overhead. Conclude by summarizing that model parallelism in serving turns a monolithic inference into a pipelined, distributed microservice stack with controlled latency and high scalability. |

*Word count: ~200 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
