---
qid: ing_dc16bfafcf__aws__local
question: 'Explain: Stateless Protocol, Stateful Systems — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 730
total_tokens: 964
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:36:01-05:00'
sources: []
---

**S – Situation**

In my last role I led the redesign of a recommendation engine that was originally built on a monolithic Java servlet stack. The system had to serve 3 M requests per day and provide real‑time personalization while staying within a $200K/yr budget.

**T – Task**

I needed to shift from an opaque, stateful architecture (sessions persisted in memory) to a stateless HTTP API that could scale horizontally, reduce operational overhead, and still keep user context for the recommendation logic.

**A – Action**

1. **Identify requirements**  
   * Statelessness → request‑to‑response, no server‑side session.  
   * Context retention → tokenized user profile in JWT + cache lookup.  
   * Availability & scalability → auto‑scaling, zero‑downtime deployments.

2. **Design & AWS services**  
   * **API Gateway + ALB** – front‑end for HTTPS, throttling, and routing.  
   * **ECS/Fargate** – stateless containers that run the inference service; each task is isolated and can be replaced instantly.  
   * **DynamoDB (partition key = user_id)** – persistent profile store; read capacity auto‑scaled to 10 k RCU for peak traffic.  
   * **ElastiCache Redis** – hot‑cache of recent user vectors, reducing DynamoDB reads by ~70%.  
   * **S3 + Lambda** – cold‑start image storage and feature extraction pipeline.

3. **Scalability & Cost**  
   * Fargate tasks auto‑scale based on CPU/Memory; average cost $0.045/hr per task → ~$130K/yr for 30 tasks.  
   * DynamoDB’s on‑demand mode costs ~$1.25/MWCU; with 10 k RCU, ~\$6K/yr.  
   * Redis cluster (cache‑read only) adds ~$4K/yr.

4. **Trade‑offs**  
   * Statelessness removes sticky sessions but requires JWT validation and cache lookups – negligible latency (<5 ms).  
   * DynamoDB’s eventual consistency is acceptable for recommendation freshness; we enforce read‑after‑write where needed.

**R – Result**

The migration cut infrastructure spend by 35% (from $200K to $130K) while increasing request throughput from 3 M to 7 M per day. Latency dropped from 120 ms to 70 ms, and the system achieved 99.99% availability due to multi‑AZ deployment of Fargate tasks.

**What a bar‑raiser looks for**

* **Ownership** – I owned the full lifecycle: analysis, design, implementation, cost optimization.  
* **Dive Deep** – I quantified every service’s capacity, cost, and latency impact.  
* **Quantified Impact** – 35% savings, 70 ms latency reduction, 7× traffic boost.  
* **Learning from Failure** – Initial monolith had “session‑stickiness” bugs; the stateless model eliminated them, proving the value of proper protocol choice.

---

**Key Leadership Principles:** *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
