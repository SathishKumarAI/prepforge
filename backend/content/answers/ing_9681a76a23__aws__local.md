---
qid: ing_9681a76a23__aws__local
question: 'Explain: Uh it it only hits a certain — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 360
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:16-05:00'
sources: []
---

**Situation & Task**  
While designing an online recommendation engine that serves millions of video views per day, I noticed the inference latency spiked whenever traffic exceeded **2 M requests/second**—the “Seattle Conference on Scalability” benchmark for YouTube‑style workloads. The goal was to keep < 200 ms latency and 99.9% availability while keeping costs under $5k/month.

**Action**  
1. *Dive Deep*: Instrumented the inference pipeline with CloudWatch metrics, revealing that a single **SageMaker endpoint** became saturated.  
2. *Ownership & Bias for Action*: Deployed an **autoscaling SageMaker Multi‑Model Endpoint** behind an Application Load Balancer (ALB). Added a **Cache‑First Strategy** using **Amazon ElastiCache‑Redis** to store the top 10 K predictions per user, cutting inference calls by ~70%.  
3. *Invent & Simplify*: Introduced a **Lambda@Edge cache invalidation** triggered on model updates, ensuring freshness without hitting the endpoint.  

**Result**  
- Latency dropped from 350 ms to **< 180 ms** at peak traffic.  
- Cost fell from $12k/month to **$4.8k/month** (≈60% savings).  
- Availability remained > 99.95%.  

**Learning**  
I realized that scaling a single model endpoint is brittle; distributing inference and caching are key. Future iterations will explore **SageMaker Edge Manager** for offline inference on edge devices, further reducing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
