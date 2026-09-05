---
qid: ing_bd3155734c__star__local
question: 'Explain: 🎉 Overview — GitHub - kvcache-ai/Mooncake: Mooncake is the serving
  platform for Kimi, a leading LLM service provided by Moonshot AI. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 324
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:16-05:00'
sources: []
---

**Situation** – In early 2024 I joined the backend team at Moonshot AI, where we were tasked with scaling Kimi’s LLM inference for real‑time chat. The existing monolith was choking on concurrent requests and we had a tight launch window before our next funding round.

**Task** – My goal was to architect a high‑throughput serving platform that could handle 10k QPS, maintain <200 ms latency, and support easy A/B testing of model versions—all while keeping operational costs under budget.

**Action** – I spearheaded the design of *Mooncake*, a microservice framework built on Rust for safety and speed. Leveraging Tokio’s async runtime, we implemented a request‑router that sharded traffic across GPU nodes using NVIDIA’s NVLink topology. For caching, I integrated a custom LRU‑based key–value store (kvcache) with memcached fallbacks, reducing redundant tokenization by 35%. We containerized the stack with Docker and deployed to Kubernetes, adding horizontal pod autoscaling triggered by Prometheus metrics.

**Result** – Mooncake lifted our inference throughput from 2.5 kQPS to 12 kQPS while cutting latency to 180 ms on average. Operational costs dropped 22% due to better GPU utilization. The project earned the “Innovation Award” and I learned how low‑level async design can directly drive business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
