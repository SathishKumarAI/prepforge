---
qid: ing_0040ff3402__aws__local
question: 'Explain: Model Parallelism — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 506
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:04-05:00'
sources: []
---

**Model‑Parallel Serving – Architecture & Impact**

*Situation*: At my previous company we had a 1 B‑parameter LLM that couldn’t fit on a single GPU, yet real‑time inference latency had to stay <200 ms for our mobile product.

*Task*: Build a production‑ready, highly available serving stack that scales horizontally while keeping cost per request under $0.01.

*Action*:  
- **Design**: Split the model across 4 NVIDIA A100s using *pipeline parallelism*. Each shard runs on an EC2 g5.12xlarge instance; we wrap each shard in a lightweight **AWS Lambda@Edge** container (via Amazon ECS Fargate) so shards can be autoscaled by CPU/queue depth.  
- **Communication**: Use **Amazon SQS FIFO** queues for inter‑shard messaging to guarantee order and avoid race conditions, and **Elasticache Redis** for in‑memory state sharing between shards.  
- **Deployment**: Implement a *Service Mesh* (AWS App Mesh) to route requests from the front‑end API Gateway to the first shard, then chain through the mesh. Health checks at each hop keep the system resilient.  
- **Observability**: CloudWatch metrics + X-Ray traces reveal that latency spikes only when queue depth >10 k; we auto‑scale to 8 shards in those bursts, cutting tail latency from 600 ms to 180 ms.

*Result*: In production, average inference cost dropped from $0.07 → $0.009 per request, and 99th‑percentile latency fell below 200 ms under peak load (1k QPS). The system handled a 4× traffic spike during a marketing campaign with zero downtime.

**Leadership Principles Highlighted**

- **Customer Obsession** – delivering sub‑200 ms latency for end users.  
- **Ownership & Dive Deep** – architecting cross‑shard communication and monitoring to preempt failures.  

*Bar‑raiser notes*: Look for evidence of ownership (end‑to‑end responsibility), depth in the technical trade‑offs, quantified impact, and a lesson learned from an earlier failure when we tried naive single‑instance serving that blew up under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
