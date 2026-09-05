---
qid: ing_d9f2b299e7__star__local
question: 'Explain: Pattern 2: Active-Active — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 391
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:10-05:00'
sources: []
---

**Situation:**  
During my last role at a fintech startup, we had just launched a real‑time fraud detection service that processed 1.2 M transaction events per minute. Our single‑instance load balancer was hitting 80 % CPU under peak loads and started dropping packets, causing SLA breaches.

**Task:**  
I was tasked with redesigning the architecture to eliminate the single point of failure and ensure zero latency spikes while keeping costs within our $5k/month budget.

**Action:**  
1. **Active‑Active LB selection:** I chose HAProxy in a dual‑instance setup behind an internal ELB, each instance running on 4 vCPU t3.mediums.  
2. **Health checks & stickiness:** Implemented TCP health probes every 10 s and session persistence via client IP hashing to keep stateful connections intact.  
3. **Back‑end scaling:** Pulled the fraud model into a stateless microservice on ECS Fargate, autoscaling between 2–8 tasks based on CPU <70%.  
4. **Circuit breaker & fallback:** Added a Polly‑style circuit breaker in Go to short‑circuit failed back‑ends and route traffic to a cached “last known good” prediction for up to 5 s.  
5. **Observability:** Instrumented with Prometheus/Grafana; set alerts on LB queue depth >200ms.

**Result:**  
Post‑deployment, the average latency dropped from 120 ms to 45 ms, and CPU utilization stabilized at ~55 %. The system handled a sudden spike of 3× traffic without packet loss. I learned that an active‑active design not only removes bottlenecks but also provides graceful degradation when coupled with smart health checks and fallback logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
