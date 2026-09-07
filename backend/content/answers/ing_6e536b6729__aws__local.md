---
qid: ing_6e536b6729__aws__local
question: 'Explain: 4.2. Server-Side Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 453
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:30-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Ownership**, **Dive Deep**  

> **Situation / Task:** While leading the migration of a multi‑region e‑commerce platform to a microservice architecture, I was asked to design *Server‑Side Service Discovery* so that services could locate each other without hard‑coded endpoints.  
> **Action:** I mapped requirements: dynamic registration, health checks, latency‑aware routing, and cross‑zone resiliency. I chose **AWS Cloud Map** as the core registry because it natively supports custom namespaces, integrates with ECS/EKS, and offers low‑latency DNS queries.  
> 1️⃣ **Registration & Deregistration:** Services publish themselves to Cloud Map via SDK calls on startup/shutdown; I added a *Health Check* endpoint that Cloud Map polls every 30 s, ensuring stale entries are purged automatically.  
> 2️⃣ **Discovery API:** Consumer services query Cloud Map with the `DiscoverInstances` API, receiving all healthy instances and their attributes (e.g., region, zone).  
> 3️⃣ **Scalability & Availability:** Cloud Map scales horizontally; DNS queries hit Route 53 private zones for sub‑microsecond resolution. I leveraged *latency‑based routing* to direct traffic to the nearest zone, reducing average request latency from 200 ms to 85 ms (≈ 57% improvement).  
> **Result:** After rollout, the platform’s *service‑to‑service error rate dropped by 42%, and deployment time for new microservices fell from ~4 hrs to <30 min*—a direct impact on time‑to‑market.  

**Bar‑raiser cues I hit:** Demonstrated end‑to‑end ownership (from design through metrics), deep dive into AWS services, quantified business benefit, and a clear learning loop: “If we had used Route 53 alone, we'd have missed health‑check automation, leading to 12 % more failed requests.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
