---
qid: ing_d52d3e734e__faang__local
question: 'Explain: High Availability Architectures — How to Design for High Availability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 493
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:55:25-05:00'
sources: []
---

**Clarify**  
You’re asking how to build systems that stay up when anything goes wrong—network hiccups, hardware failures, or software bugs. I’ll assume a cloud‑native stack (containers, orchestrators), multi‑region deployment, and a need for low latency.  

**Approach**  
1. **Redundancy** – duplicate every tier (load balancer, app servers, DB replicas).  
2. **Health checks & auto‑scaling** – continuously probe services; scale out on load or failure.  
3. **Graceful failover** – DNS routing with low TTL, active‑active or active‑passive zones.  
4. **Data consistency** – choose CAP trade‑offs (e.g., eventual consistency for writes, strong consistency for reads).  
5. **Observability & automation** – metrics, logs, alerts, and automated rollback scripts.

**Depth**  
- *Load Balancer*: use a global LB (e.g., Cloudflare or AWS Global Accelerator) that routes to regional clusters based on health.  
- *App Layer*: stateless containers in Kubernetes with `Deployment` replicas ≥ 3 per AZ; use `PodDisruptionBudget` to control voluntary outages.  
- *Database*: multi‑region, synchronous replication for critical tables (e.g., RDS Aurora Global) and read replicas elsewhere.  
- *Stateful services*: store session data in a distributed cache (Redis Cluster with sentinel).  
- *CI/CD pipelines* include canary deployments; if metrics spike, auto‑rollback.  
Complexity: \(O(n)\) for health checks across regions; cost scales linearly with redundancy.

**Edge Cases**  
- Simultaneous AZ failure → rely on multi‑region routing.  
- Network partitions → design idempotent APIs to avoid double processing.  
- Data corruption in replicated DBs → use quorum reads/writes or conflict resolution policies.

**Optimize & Communicate**  
Start simple (single region, 2 replicas), then add regions for higher SLA. Use chaos engineering to validate assumptions. Explain trade‑offs: more replicas = higher cost but lower MTTR; synchronous replication = stronger consistency but higher latency. This narrative shows clear problem framing, systematic design, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
