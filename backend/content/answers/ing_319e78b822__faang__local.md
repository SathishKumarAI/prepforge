---
qid: ing_319e78b822__faang__local
question: 'Explain: Power of 9s — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 439
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:40-05:00'
sources: []
---

**Clarify**  
The “Power‑of‑9” technique is a high‑availability pattern that lets you keep services online even when the underlying hardware or network fails. I’ll assume we’re working with stateless microservices in a cloud environment, and we need to expose them behind a load balancer without single points of failure.

**Approach**  
1. **Deploy 9 identical replicas** (or “instances”) across multiple availability zones.  
2. Use a **global traffic manager** (e.g., Route 53 or CloudFront) that performs health checks on each replica.  
3. When a replica fails, the manager removes it from rotation and routes traffic to the remaining healthy ones.  
4. Periodically run a **self‑healing script** to replace failed instances.

**Depth**  
- *Availability*: With 9 replicas, the probability that ≥1 instance is up is extremely high (assuming independent failure probabilities).  
- *Load balancing*: Each request is distributed evenly; if one zone goes down, traffic automatically shifts.  
- *Cost*: Roughly 9× compute cost vs a single instance, but trade‑off for zero downtime.  
- *Complexity*: Requires orchestration (e.g., Kubernetes) and health‑check logic.

**Edge Cases**  
- Simultaneous zone failure: If an entire AZ fails, you still have up to 6 replicas left.  
- Network partition: Health checks must be fast; otherwise, stale healthy status could misroute traffic.  
- Scaling: Adding/removing replicas should trigger re‑registration with the load balancer.

**Optimize & Communicate**  
I’d start with a small cluster (3–5 replicas) to validate health‑check logic, then scale up to 9 for production. I’d also implement automated rollback if the new instances don’t pass health checks within a timeout window. This demonstrates clear reasoning: we trade compute cost for high availability, and we can quantify reliability improvements using failure probability models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
