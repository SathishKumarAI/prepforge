---
qid: ing_ba96ab82ea__star__local
question: 'Explain: Common Vertical Scaling Actions — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 378
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:11-05:00'
sources: []
---

**Situation** – At my previous company we launched a recommendation engine for a mid‑tier e‑commerce platform. Within the first month, traffic spiked by 70 % during flash sales, and our inference latency rose from 120 ms to over 600 ms, pushing the SLA of 95 % requests under 300 ms below target.

**Task** – I was tasked with restoring sub‑300 ms latency for all users while keeping cost under a 20 % budget increase. The goal was to identify vertical scaling actions that would give us immediate performance relief without redesigning the entire pipeline.

**Action** – First, I profiled the inference process in TensorFlow Serving and found that CPU bound operations on the GPU‑accelerated nodes were bottlenecked by memory bandwidth. I upgraded the node type from a g4dn.xlarge (1 vCPU, 16 GB RAM) to a g4dn.2xlarge (2 vCPUs, 32 GB RAM), doubling both CPU and GPU memory. Next, I enabled TensorRT optimizations in the model graph, which reduced matrix multiplication latency by ~30 %. Finally, I re‑balanced the load across the new instances using Kubernetes HPA with custom metrics for GPU utilisation.

**Result** – Latency dropped to 210 ms on average during peak periods, and the SLA hit 97 % within two days. The cost increase was only 15 %, staying below our target. I learned that vertical scaling—carefully selecting instance types and enabling framework‑level optimisations—can be a quick win for latency‑sensitive ML services before investing in horizontal sharding or model compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
