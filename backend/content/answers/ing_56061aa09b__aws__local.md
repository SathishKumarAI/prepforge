---
qid: ing_56061aa09b__aws__local
question: 'Explain: Core APIs — Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 404
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:37-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to design the core API layer for a global ML inference service that would serve millions of model predictions per day while keeping latency under 20 ms. The goal was to build a load‑balancing component that could auto‑scale, provide fault tolerance, and expose a simple REST/GRPC contract.

**Action (Design)**  
1. **API Gateway + Lambda@Edge** – Fronted the service with API Gateway for request validation and throttling; used Lambda@Edge in us-east-1 to route traffic regionally.  
2. **Elastic Load Balancer (ALB)** – Balanced requests across a fleet of EC2 Spot‑Fleet instances running Docker containers that host the inference models. The ALB’s *target groups* are health‑checked on a `/health` endpoint; unhealthy targets are removed automatically.  
3. **Auto Scaling + Spot Instances** – Set scale‑in/out policies based on CPU & request latency, with a 30 % capacity buffer for burst traffic.  
4. **Cache Layer (ElastiCache Redis)** – Caches the most frequent inference results to reduce model load by ~40%.  

**Result**  
- Achieved 99.98 % SLA with median latency 15 ms across 5 regions.  
- Reduced infrastructure cost by 35 % using Spot instances and cache hits.  
- Deployed in <4 hours, meeting a tight quarterly launch.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dived deep into latency bottlenecks, quantified impact with real metrics, and learned that early cache integration can halve compute costs. This aligns with **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
