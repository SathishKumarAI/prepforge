---
qid: ing_664db2f173__think__local
question: 'Explain: Protect the System Under Load — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 413
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:49:18-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
*Assume a web‑scale service (e.g., e‑commerce or streaming) with a stateless HTTP API front‑end and a backend that can be horizontally scaled.*  
*Define “under load” as traffic spikes (flash sales, viral content).*

**2️⃣ Adopt the layered mental model**  
Use *client → load balancer → application tier → caching layer → database tier → storage*.  
Each layer is independent, stateless where possible, and can scale out.

**3️⃣ Reason through mitigation tactics step‑by‑step**  

| Layer | Technique | Rationale |
|-------|-----------|-----------|
| Load Balancer | Round‑robin + health checks | Evenly distributes requests; removes unhealthy nodes. |
| App Tier | Stateless services (Docker/K8s), autoscaling, graceful shutdown | New pods can be added instantly; no session affinity needed. |
| Caching | In‑memory cache (Redis/Memcached) for hot data | Offloads DB reads; reduces latency. |
| Database | Read replicas + connection pooling | Allows read scaling; pool keeps connections efficient. |
| Storage | CDN + object storage (S3) | Serves static assets globally, offloading origin servers. |

**4️⃣ Avoid common traps**  
- Don’t over‑optimize early: start simple, add cache only when latency spikes.  
- Beware of “sticky sessions” that break horizontal scaling.  
- Don’t ignore graceful shutdown; otherwise you’ll get half‑processed requests.

**5️⃣ Sanity‑check & verbalize**  
*Walk through a traffic spike scenario:* hit load balancer → new pods spin up, cache warms via prefetch, read replicas absorb DB reads, CDN serves static files. *Explain to the team how each layer’s design choice directly mitigates overload, ensuring throughput and low latency.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
