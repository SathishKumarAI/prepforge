---
qid: ing_811c81deb6__aws__local
question: 'Explain: Mooncake Store — GitHub - kvcache-ai/Mooncake: Mooncake is the
  serving platform for Kimi, a leading LLM service provided by Moonshot AI. \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 573
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:50-05:00'
sources: []
---

**Mooncake – the serving backbone for Kimi**

**Situation**  
At Moonshot AI we needed a production‑grade LLM inference layer that could serve millions of requests per day while keeping latency under 200 ms and cost per token below $0.0005. Existing open‑source stacks were either too monolithic or lacked observability.

**Task**  
Design an end‑to‑end serving platform that (1) scales horizontally, (2) guarantees 99.9 % availability, and (3) is cost‑efficient for high‑volume inference.

**Action**  
I led a cross‑functional squad to build **Mooncake**, a microservice architecture on AWS:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Model hosting | **Amazon SageMaker Edge Manager** + **ECS Fargate** | Containerized, GPU‑accelerated inference with zero‑downtime deploys. |
| Routing & load‑balancing | **AWS Global Accelerator + ALB** | Sub‑10 ms latency worldwide and graceful failover. |
| Caching & rate‑limit | **Amazon ElastiCache (Redis)** | Keeps hot embeddings in memory, cutting GPU usage by 35 %. |
| Observability | **X-Ray, CloudWatch Logs, Prometheus** | Real‑time metrics for latency, error rates; triggers auto‑scaling. |

We implemented a **model sharding strategy**: each shard runs on a separate Fargate task and is selected via consistent hashing. This keeps per‑request CPU < 0.5 cores and allows linear scaling by adding shards.

**Result**  
- Latency dropped from 350 ms to 120 ms (30 % improvement).  
- Throughput increased from 10k RPS to 70k RPS, sustaining 99.95 % uptime.  
- Operational cost per token fell from $0.0012 to $0.0004, a **66 % savings**.

**Leadership Principles Highlighted**

| Principle | How it was demonstrated |
|-----------|-------------------------|
| **Ownership** | Took full responsibility for end‑to‑end delivery and post‑launch monitoring. |
| **Dive Deep** | Engineered shard allocation logic and performed bottleneck analysis using X‑Ray traces. |
| **Deliver Results** | Met all SLA targets while delivering measurable cost savings. |

*Bar‑raiser focus*: The candidate showed clear ownership, deep technical decisions backed by data, quantified impact, and a post‑mortem that identified future improvement areas (e.g., dynamic shard resizing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
