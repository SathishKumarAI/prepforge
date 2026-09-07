---
qid: ing_f39631e600__aws__local
question: 'Explain: Vertical Scaling — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 383
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:21-05:00'
sources: []
---

**Vertical Scaling (Scale‑Up) vs Horizontal Scaling (Scale‑Out)**  
*Leadership Principles: Ownership & Dive Deep.*

> **Situation:** My team was tasked with launching a real‑time recommendation engine for an e‑commerce platform that needed to serve 50 k requests/sec.  
> **Task:** Decide whether to scale the ML inference service vertically or horizontally while keeping cost and latency in check.  
> **Action:** I performed a *dive deep* analysis of the model’s CPU/GPU requirements, memory footprint, and I/O patterns.  
> • **Vertical path**: A single m5.metal EC2 with 96 vCPU + 384 GiB RAM could handle ~15 k rps but was vulnerable to a single point of failure and had a $3,000/month price tag.  
> • **Horizontal path**: Deploying an Auto Scaling Group of t4g.medium (GPU‑free) instances behind an Application Load Balancer allowed 50 k rps at ~$1,200/month with built‑in fault tolerance.  
> I chose horizontal scaling, implemented *Amazon SageMaker Endpoint* with *Auto Scaling*, and used *AWS CloudWatch* for real‑time metrics.  
> **Result:** Latency dropped from 250 ms to <80 ms (a 68% improvement), cost decreased by 60%, and we achieved 99.95% availability during a traffic spike, proving the design’s scalability and resilience.

**Bar‑raiser cues:** Demonstrated ownership of trade‑offs, deep technical dive into performance metrics, quantifiable impact on latency/cost, and learned to prefer horizontal scaling for high‑throughput ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
