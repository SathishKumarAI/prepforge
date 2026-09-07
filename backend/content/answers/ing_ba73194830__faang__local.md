---
qid: ing_ba73194830__faang__local
question: 'Explain: Active-Passive (Standby) — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 471
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:20-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Active‑Passive (stand‑by)* availability pattern for a system. I’ll assume we want high reliability, minimal downtime, and cost‑efficiency; the primary goal is that one node serves traffic while another stays idle until failure.

**Approach**  
1. Identify the active component (primary) and passive standby.  
2. Describe failover mechanics: health checks → promotion of standby.  
3. Highlight data consistency strategy (synchronous replication vs. eventual).  
4. Mention monitoring, alerting, and rollback.

**Depth**  
- **Architecture**: Primary node receives all traffic; a secondary node mirrors state via continuous data replication (e.g., streaming logs or database binlogs). A health‑check service watches the primary’s liveness.  
- **Failover**: On heartbeat loss, the orchestrator (e.g., Kubernetes controller) marks the standby as *Ready*, updates load balancer routing to it, and optionally de‑provisions the failed node.  
- **Consistency**: Synchronous replication guarantees zero data loss but adds latency; asynchronous is cheaper but risks a small window of inconsistency that can be mitigated with write‑ahead logs or conflict resolution.  
- **Cost**: Only one instance runs full workloads; standby incurs lower compute cost (e.g., spot instances).  

**Edge Cases**  
- Network partitions: split‑brain scenarios – use quorum or two‑phase commit to avoid both nodes thinking they’re primary.  
- Data loss: if replication lag > acceptable threshold, the system should reject writes until sync catches up.  
- Load spikes during failover: ramp‑up standby capacity pre‑emptively.

**Optimize & Communicate**  
Explain that this pattern offers 99.9%+ availability with modest overhead compared to active‑active. For a production rollout, I’d prototype with a single service, instrument metrics (latency, replication lag), and run chaos tests to validate failover latency < 5 s. Finally, document rollback procedures: if the promoted standby fails, revert routing to a fresh primary instance.

---  
*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
