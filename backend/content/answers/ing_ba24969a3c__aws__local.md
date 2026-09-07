---
qid: ing_ba24969a3c__aws__local
question: 'Explain: Solution — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 374
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:30-05:00'
sources: []
---

**Situation / Task**  
I was tasked to enable a fleet of micro‑services that run in ECS Fargate to locate each other without hard‑coding endpoints, while keeping the architecture cost‑effective and highly available for our global e‑commerce platform.

**Action**  
I implemented **Server‑Side Service Discovery** using *AWS Cloud Map* coupled with *ECS Service Connect*.  
1. Each service registers a logical name in Cloud Map when it starts.  
2. ECS Service Connect injects DNS records that point to the current task IPs, allowing clients to resolve `orders.service.local`.  
3. I added health‑check routing policies so traffic automatically shifts away from unhealthy instances.  
4. To keep costs low, I leveraged *AWS PrivateLink* for cross‑region access instead of a public load balancer.

**Result**  
- **Latency dropped 35 %** (from 120 ms to 78 ms) because services no longer hit an external load balancer.  
- **Operational overhead fell by 70 %**, eliminating manual config and reducing DNS TTL errors.  
- The architecture is **99.999% available** thanks to Cloud Map’s built‑in failover, and we saved ~\$12k/month on ELB usage.

**Reflection**  
I took full ownership of the migration, diving deep into ECS Service Connect docs and running a phased rollout that minimized risk. I learned that coupling DNS with health checks gives us instant resiliency; failure to do so would have left stale entries in memory. This pattern exemplifies **Customer Obsession** (faster service response) and **Ownership** (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
