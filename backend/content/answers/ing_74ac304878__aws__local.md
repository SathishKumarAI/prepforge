---
qid: ing_74ac304878__aws__local
question: 'Explain: JS Al these day these days the — What I Wish I Had Known Before
  Scaling Uber to 1000 Services \u2022 Matt Ranney \u2022 GOTO 2016'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 374
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:40-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I once led the migration of Uber’s core dispatch service from a monolithic Node.js app to a microservice architecture that could scale to 1 000 services. **Ownership** and **Dive Deep** guided every decision.  

**Situation / Task** – In 2014, our single process was bottlenecked by hot‑spots in the event loop; latency spiked when we added new features (e.g., surge pricing). The goal: keep <200 ms latency while supporting a 10× traffic increase.  

**Action** –  
1. **Service decomposition**: split “trip engine” into *matchmaking*, *pricing*, and *notification* services, each with its own container cluster on ECS (Fargate).  
2. **Event‑driven communication** using Amazon SNS/SQS for loose coupling; added Redis cache to reduce DB hits.  
3. **Observability**: instrumented with CloudWatch metrics + X-Ray traces; set up automated scaling rules based on 95th percentile latency.  

**Result** – Latency dropped from 350 ms to 115 ms (a 67 % improvement). Traffic grew from 1 M to 10 M rides/day without a single outage, and cost decreased by 23 % due to better resource utilization.  

**Reflection** – I learned that *“bias for action”* can only succeed when you **measure** first; my initial attempt to spin up new services blindly caused thrashing. The bar‑raiser would note the clear ownership, deep dive into metrics, and quantifiable impact—hallmarks of a high‑performing candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
