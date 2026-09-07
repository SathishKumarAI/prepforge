---
qid: ing_58b20715cc__aws__local
question: 'Explain: Success Response (201 Created) — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 445
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:09-05:00'
sources: []
---

**Situation** – I was hired as a Solutions Architect for an e‑commerce startup that needed to expose a REST API for its ML inference service (image classification). The API had to return **201 Created** on success, trigger downstream analytics, and scale from 10 req/s to >50k req/s during flash sales.  

**Task** – Design a highly available, cost‑effective load‑balancing layer that guarantees the 201 response while feeding data into an ML pipeline.

**Action**  
1. **Front‑end**: Amazon API Gateway (regional) + Lambda authorizer for auth → *Customer Obsession* & *Ownership*.  
2. **Load Balancer**: Classic ELB in front of an autoscaling group of NLB‑backed ECS Fargate containers running the inference microservice.  
3. **Health checks** on `/healthz` with 200 OK; unhealthy tasks are drained automatically (ensuring *Bias for Action*).  
4. **Metrics**: CloudWatch Alarms on latency (>300 ms) and error rate (>2%) trigger a 5‑min auto‑scale.  
5. **Cost/Trade‑off**: NLB + Fargate keeps per‑request cost <$0.003, while using ALB would add ~30% overhead but offers path routing; we chose simplicity.  

**Result** – After launch, the API handled 60k req/s with <250 ms latency, 99.99 % availability, and a 40 % reduction in error rate compared to the legacy monolith (previously 5 %.).  

*Bar‑raiser focus*: I demonstrated ownership by owning the end‑to‑end flow, dove deep into latency trade‑offs, quantified impact with real numbers, and iterated on failure modes (auto‑heal after container crashes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
