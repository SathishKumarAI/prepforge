---
qid: ing_0d42478de8__aws__local
question: 'Explain: Slower Implementation Than REST — gRPC vs. REST: Key Similarities
  and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 515
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:50-05:00'
sources: []
---

**Situation & Task**  
While redesigning our recommendation engine for the **Prime Video** catalog, I led a squad that had to expose two new services: *GetRecommendations* (REST) and *StreamInsights* (gRPC). The goal was to evaluate which protocol delivered faster time‑to‑market while meeting latency and throughput targets.  

**Action**  
1. **Requirements & Design** – Both services required 50 ms response times, 10k QPS, and zero‑downtime upgrades. I mapped the APIs to AWS API Gateway (REST) and ALB + gRPC‑enabled ECS containers (gRPC).  
2. **Implementation** – For REST, we used **Node.js Lambda behind API Gateway**, leveraging caching and request throttling. For gRPC, we built a **Spring Boot microservice in Docker**, deployed on ECS Fargate with *application load balancer* targeting HTTP/2.  
3. **Metrics & Tuning** – We ran parallel load tests (Artillery + k6). REST hit 45 ms latency but required ~30% more CPU due to JSON parsing; gRPC achieved 32 ms but needed a dedicated ALB listener and TLS termination, increasing infra cost by 12%.  

**Result**  
The gRPC service reduced API response time by **28 %** and cut per‑request payload size by **70 %**, enabling us to handle a projected 30 % traffic surge with the same Fargate capacity. However, the REST implementation went live **1.5 weeks faster** because of the out‑of‑the‑box Lambda integration.  

**Leadership Principles Reflected**  
- *Customer Obsession*: Chose protocol that best served latency‑critical user interactions.  
- *Dive Deep & Ownership*: Conducted side‑by‑side benchmarks, analyzed trade‑offs, and owned post‑deployment monitoring.  

**Bar‑raiser takeaway** – Quantified impact (latency, cost), deep technical dive into AWS service interplay, and a clear learning loop: “If we had started with gRPC, we’d have saved 1 week; if we had prioritized speed, we’d have paid higher latency.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
