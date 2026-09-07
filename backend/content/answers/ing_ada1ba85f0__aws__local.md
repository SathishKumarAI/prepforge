---
qid: ing_ada1ba85f0__aws__local
question: 'Explain: 3.1. Manual Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 397
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:05-05:00'
sources: []
---

**Situation / Task**  
While leading a migration of our on‑prem microservices to AWS for the new recommendation engine, we had to expose dozens of stateless ML inference services that could scale elastically. The requirement was: “When a service comes online or goes offline, every consumer must discover it without hard‑coded endpoints.”  

**Action**  
I designed **Service Discovery** using *Amazon Cloud Map* + *ECS/EKS Service Connect*. Each container registers its IP/port to Cloud Map at launch; the API gateway pulls the latest DNS records from the same namespace. I added health‑checks (ELB target groups) and a short TTL (30 s) so stale entries expire quickly.  
- **Scalability:** Auto‑scaling groups can spin up 200+ inference pods per hour with no manual re‑configuration.  
- **Availability:** Health‑check failures route traffic to healthy instances; Cloud Map’s cross‑region replication keeps discovery fast even during a regional outage.  
- **Cost:** Eliminated the need for an external service registry (e.g., Consul) and avoided 1 M queries/month on Route 53.

**Result**  
Post‑migration, API latency dropped from 150 ms to 35 ms (∼77% reduction), and ops incidents related to “service not found” fell by **92 %**.  

**Learnings** – I owned the discovery layer end‑to‑end, dove deep into DNS TTL trade‑offs, and iterated on failure handling after an early false‑positive health check spike. This reinforced *Ownership* and *Dive Deep* in my leadership style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
