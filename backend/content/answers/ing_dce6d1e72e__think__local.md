---
qid: ing_dce6d1e72e__think__local
question: 'Explain: Summary — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 448
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:32:32-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   * Identify what “Availability” means in a system‑design context (uptime %, MTBF, fault tolerance).  
   * Decide whether we’re talking about single‑region or multi‑region deployments, on‑prem vs cloud, and any SLAs that must be met.  

**2️⃣ Adopt the “Redundancy → Health Checks → Failover” framework**  
   * Redundancy: active‑active, active‑passive, or stateless replicas.  
   * Health checks: heartbeat, liveness/readiness probes, and monitoring dashboards.  
   * Failover: automatic routing (e.g., DNS failover, load balancer health) and graceful degradation.  

**3️⃣ Reason through each layer step by step**  
   1. **Application tier** – add stateless services behind a load balancer; use rolling updates to avoid downtime.  
   2. **Database tier** – employ master‑replica or multi‑master replication, with automatic failover and read replicas for scaling.  
   3. **Infrastructure tier** – distribute across AZs/regions, use autoscaling groups, and maintain backups (snapshots, point‑in‑time recovery).  

**4️⃣ Watch out for common traps**  
   * Assuming “high availability” = “zero downtime”; it’s a trade‑off with complexity & cost.  
   * Neglecting network latency or cross‑region traffic costs.  
   * Over‑reliance on a single cloud provider—introduce multi‑cloud or hybrid patterns if necessary.  

**5️⃣ Sanity‑check and articulate the plan**  
   * Verify that each failure domain is isolated; check recovery time objectives (RTO) & recovery point objectives (RPO).  
   * Explain how monitoring alerts trigger automated remediation, and how manual intervention paths are defined.  
   * Summarize the overall uptime guarantee and any SLAs you commit to, tying them back to the chosen redundancy strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
