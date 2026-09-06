---
qid: ing_d52d3e734e__think__local
question: 'Explain: High Availability Architectures — How to Design for High Availability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 515
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:00:56-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What is “high availability” (HA) here?*  
  Usually ≥ 99.999% uptime, but the exact SLA matters for design choices.  
- *Which components need HA?*  
  Database, application servers, network gear, power, storage, etc.  
- *Operational constraints:* budget, existing infra, skill set, compliance.

**2️⃣ Adopt a layered mental model**

1. **Redundancy & fail‑over** – duplicate critical resources.  
2. **Health checks & monitoring** – detect failures early.  
3. **Automatic switchover** – minimal manual intervention.  
4. **Load balancing** – distribute traffic across healthy nodes.  
5. **Isolation** – separate failure domains (power, network, racks).  
6. **Recovery** – backup + rapid rebuild.

**3️⃣ Step‑by‑step reasoning**

1. *Identify single points of failure (SPOFs)* and rank by impact.  
2. For each SPOF, decide between active‑active vs. active‑passive redundancy.  
3. Design health probes (ping, TCP/HTTP checks) that feed a load balancer or orchestrator.  
4. Choose an orchestration tool (K8s, HAProxy, DRBD) that supports automatic failover.  
5. Separate failure domains: use different racks, power feeds, and network paths.  
6. Implement automated backups and test restores to meet RPO/RTO goals.

**4️⃣ Common traps to avoid**

- *“Redundant isn’t enough.”* Without health checks or graceful switchover, redundancy is useless.  
- *Ignoring network bottlenecks.* A single switch can become a SPOF.  
- *Over‑engineering cost‑effective parts.* E.g., using expensive HA clusters where simple load balancers suffice.

**5️⃣ Sanity‑check & communicate**

- Run a failure simulation (chaos engineering) to validate switchover logic.  
- Verify that monitoring alerts trigger the correct failover path.  
- Summarize the design in a diagram: components, redundancy links, health checks, and recovery flow.  

By iterating this process—clarify goals → layer model → step through design → avoid traps → test & document—you’ll build an architecture that truly delivers high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
