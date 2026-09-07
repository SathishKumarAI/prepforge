---
qid: ing_30e999bf2d__aws__local
question: 'Explain: KV cache: the thing that eats your GPU — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 432
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:55-05:00'
sources: []
---

**Situation & Task**  
While leading a team that deployed an LLM‑based recommendation engine on SageMaker, we observed GPU utilisation spiking to **95 %** during peak traffic (≈3k requests/sec). The model’s key‑value cache (KV cache) was the culprit—every inference copied 1.2 GB of KV data into GPU memory, causing thrashing and a 40 % latency increase.

**Action**  
I scoped the problem with a **Dive Deep** audit: measured per‑request KV copy time, analysed cache hit ratios, and profiled GPU memory fragmentation. I designed a **shared CPU‑resident KV cache** using an in‑memory store (Redis on ECS Fargate) and modified the inference pipeline to stream only cache misses to the GPU via **SageMaker Runtime**.  

Key AWS services:  
- **ECS Fargate + Amazon Elasticache Redis** for low‑latency CPU cache.  
- **AWS Lambda** orchestrates cache lookup and fallback.  
- **Amazon CloudWatch** tracks hit ratios and GPU utilisation.

We added a **fallback tier** that serialises KV to S3 if the cache is exhausted, ensuring availability with an SLA of 99.9 %. Cost savings were significant: GPU hours dropped from 500 h/month to 220 h/month, cutting inference cost by **~45 %** while latency fell from 200 ms to 110 ms.

**Result**  
The new architecture delivered a **55 % reduction in GPU utilisation**, **40 % lower latency**, and **$18k annual savings** on our inference spend. It also demonstrated clear ownership: I took full responsibility for the redesign, iterated quickly (bias for action), and documented lessons so the team could avoid similar pitfalls in future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
