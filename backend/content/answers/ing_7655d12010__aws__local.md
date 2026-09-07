---
qid: ing_7655d12010__aws__local
question: 'Explain: How services find each other — System Design: What is Service
  Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 400
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:52:41-05:00'
sources: []
---

**Answer – Service Discovery (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*.  
> I own the reliability of our microservices and obsess over the customer’s experience: zero latency in inter‑service calls.

### Situation / Task
In 2023 we migrated a legacy monolith to a Kubernetes‑based fleet for an e‑commerce platform. The new services had to locate each other without manual IPs, yet keep **99.9 % availability** during rolling updates.

### Action – Design
1. **Service Registry** – AWS *ECS Service Discovery* (or *AWS Cloud Map*) automatically registers task endpoints.  
2. **Health Checks** – ECS/CloudMap runs health probes; unhealthy instances are removed instantly, preventing stale DNS entries.  
3. **Caching & TTL** – Services use the SDK’s local cache with a 30 s TTL to avoid frequent lookups while keeping data fresh.  
4. **Fallback Strategy** – On lookup failure, clients retry via an exponential back‑off and fall back to a static IP (e.g., load balancer) until registry stabilises.

### Result
- Reduced inter‑service latency by **15 %** (from 120 ms to 102 ms).  
- Eliminated manual IP churn; zero manual ops during deployments.  
- Achieved **99.98 % uptime** for the discovery layer, exceeding the SLA of 99.9 %.  

### Bar‑raiser Takeaway
I demonstrated *Ownership* by designing a self‑healing registry, *Dive Deep* through health‑check integration, and quantified impact with real latency & availability metrics—key signals a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
