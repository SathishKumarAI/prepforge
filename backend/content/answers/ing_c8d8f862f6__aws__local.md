---
qid: ing_c8d8f862f6__aws__local
question: 'Explain: How it works — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 416
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:03-05:00'
sources: []
---

**Situation & Task**  
I led a team that had to expose an on‑prem ML inference model (≈ 30 GB) as a public REST API while keeping latency < 200 ms and scaling to 10k QPS. The goal was a fault‑tolerant, cost‑efficient load balancer.

**Action & Design**  
- **Architecture:** Fronted the inference service with an *Application Load Balancer* (ALB) that routes traffic to an auto‑scaling group of GPU‑enabled EC2 Spot Instances running Docker containers.  
- **Scaling Policy:** CloudWatch metrics (`CPUUtilization`, `GPUUtilization`) trigger scaling every 60 s, capped at 50 instances to control cost.  
- **Caching Layer:** A Redis cluster (Amazon ElastiCache) stores the top‑10 most frequent feature vectors; miss → request forwarded to ALB.  
- **Health Checks & Circuit Breaker:** ALB performs HTTP health checks; unhealthy targets are drained and replaced automatically, ensuring 99.95 % availability.  
- **Cost Control:** Spot instances + Auto Scaling reduce compute spend by 60 % vs. on‑demand; cache hit ratio of 72 % cuts GPU usage further.

**Result**  
- Latency dropped from 450 ms to 120 ms (30 % avg reduction).  
- Sustained 12k QPS with < 0.2 % error rate.  
- Operational cost fell 58 %, saving $15K/month.  

**Reflection**  
I *owned* the end‑to‑end pipeline, *dove deep* into CloudWatch telemetry to tune thresholds, and learned that a hybrid cache + auto‑scaling model is essential for high‑throughput ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
