---
qid: ing_e0a664ee13__aws__local
question: What Is Client-Server Architecture? — Client-Server Architecture | System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 399
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:31-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Situation*: I was tasked to redesign a legacy recommendation engine for an e‑commerce platform that served ~3 M daily users. The existing monolith suffered from latency spikes and couldn’t scale during Black Friday traffic.

*Task*: Build a **client‑server architecture** that isolates the ML inference layer, guarantees 99.9% availability, and cuts cost by 25%.

*Action*:  
1. **Client side**: Implemented a lightweight SDK (JavaScript/Swift) that serializes user context and sends it to an API Gateway endpoint.  
2. **Server side**: Deployed the inference model in a **Amazon SageMaker Endpoint** behind an Application Load Balancer, autoscaling based on CPU utilization.  
3. Added a **Redis cache (ElastiCache)** for frequently requested predictions to reduce round‑trips.  
4. Employed **AWS Step Functions** to orchestrate fallback logic: if the endpoint is unhealthy, serve a static “fallback” model from S3.  
5. Monitored latency with CloudWatch Alarms; triggered Lambda to scale up the SageMaker instance during traffic surges.

*Result*: Latency dropped from 750 ms to <120 ms (95th percentile), uptime rose to 99.97%, and infrastructure cost fell by **$48k/month** (≈25% savings).  

**Leadership Principles**:  
- *Customer Obsession* – delivered a faster, more reliable recommendation experience.  
- *Ownership & Dive Deep* – iterated on the architecture until performance targets were met, learning to balance cache hit rates vs. model freshness.

This design shows how client‑server separation, coupled with AWS managed services, can scale ML workloads while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
