---
qid: ing_8037c24825__aws__local
question: 'Explain: Continuous Batching and Prefix Caching — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 531
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:10-05:00'
sources: []
---

**Customer Obsession | Ownership**

> **S**ituation: Our product was a real‑time recommendation engine that served 50 k requests per second. Latency spikes during traffic bursts caused user churn.

> **T**ask: Design an inference pipeline that keeps latency < 200 ms while maximizing GPU utilisation.

> **A**ction:  
> *Implemented **continuous batching** in SageMaker Neo‑compiled models – a custom Lambda layer pulls incoming requests from SQS, aggregates them into micro‑batches of 64 samples, and pushes the batch to an ECS Fargate container running TensorRT. The container streams GPU memory back to Lambda, which splits results per request.*  
> *Added **prefix caching**: for cold starts we pre‑warm a small “prefix” tensor (e.g., user profile embeddings) stored in ElastiCache Redis. Each batch pulls the prefix once, reuses it across all samples, cutting CPU overhead by 30 %. The cache key is hashed on request attributes, ensuring hit‑rate > 85 % during peak hours.*  
> *Monitored with CloudWatch Alarms; if batch size falls below 32 due to low traffic, the system automatically scales out to a smaller Fargate task and switches to single‑request mode.*

> **R**esult: GPU utilisation rose from 45 % to 92 %, average inference latency dropped from 350 ms to 140 ms (a 60 % reduction), and cost per inference fell by 25 %. The system handled a 4× traffic spike without any outage.

**What the bar‑raiser looks for**

* **Ownership** – I owned the end‑to‑end pipeline, from design through production rollout.  
* **Dive Deep** – I quantified GPU utilisation, cache hit‑rate, and latency buckets; I iterated on batch size until convergence.  
* **Quantified Impact** – 60 % latency reduction + 25 % cost savings directly improved user engagement metrics (CTR ↑ 12 %).  
* **Learning from Failure** – Early prototypes suffered from “batch starvation” during low traffic; we introduced a dynamic scaling rule that prevented SLA violations, turning a potential failure into a resilient design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
