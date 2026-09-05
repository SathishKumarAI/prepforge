---
qid: ing_d67de371b7__star__local
question: 'Explain: Design the serving stack for a ChatGPT-scale consumer assistant:
  hundreds of millions of weekly users, streaming chat, multiple model tiers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 376
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:45-05:00'
sources: []
---

**Situation** – At my previous company we were tasked with launching a new AI‑powered virtual assistant that would support up to 300 million active users per week. The product required real‑time, low‑latency chat streams and the ability to route requests across multiple model tiers (a lightweight inference engine for casual queries and a heavy GPT‑4 style backbone for complex tasks).  

**Task** – Build a serving stack that could handle millions of concurrent connections, guarantee sub‑200 ms response time under peak load, and allow dynamic scaling of both model types without service interruption.  

**Action** – I chose a microservice architecture with Kubernetes on GKE, using Istio for traffic routing and mutual TLS. For the inference layer, we deployed Triton Inference Server behind an Envoy front‑end; it manages GPU pools and supports batching to maximize throughput. The lightweight tier runs on CPU‑only nodes with ONNX Runtime, while the heavy tier uses A100 GPUs behind a Ray cluster that shards requests by user session. I implemented a feature‑flag service that routes traffic based on model confidence scores and cost budgets, and used Prometheus/Grafana for end‑to‑end latency monitoring. Autoscaling policies were tuned to trigger at 70 % CPU/ GPU utilization with a cooldown period of 2 min to avoid thrashing.  

**Result** – The system handled 350 M weekly active users with an average chat latency of 180 ms, and the cost per request dropped by 22 % compared to our legacy monolith. I learned how to balance compute intensity with real‑time constraints, and that a fine‑grained traffic‑shaping layer is critical for scaling heterogeneous AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
