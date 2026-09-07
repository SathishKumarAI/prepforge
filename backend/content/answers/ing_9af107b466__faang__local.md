---
qid: ing_9af107b466__faang__local
question: 'Explain: Active-Active policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 479
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:35-05:00'
sources: []
---

**Clarify**  
You’re asking about an *active‑active* architecture and how it influences availability patterns in distributed systems—essentially, having two or more data centers (or clusters) that are simultaneously online and can serve read/write traffic. I’ll assume the goal is high availability (zero downtime), low latency for global users, and eventual consistency.

**Approach**  
1. Identify the primary components: replication strategy, conflict resolution, routing, and failure detection.  
2. Map how each component contributes to the availability SLA (e.g., 99.999%).  
3. Contrast with *active‑standby* to highlight trade‑offs.

**Depth**  
- **Replication**: Use synchronous or semi‑synchronous replication; synchronous gives stronger consistency but higher latency, while semi‑sync balances latency and safety.  
- **Conflict resolution**: Operational Transformation (OT) or CRDTs allow concurrent writes without locking.  
- **Routing**: Global load balancers route traffic based on health checks and proximity; DNS-based failover can redirect clients to the nearest active node.  
- **Failure detection**: Heartbeats + quorum consensus (Paxos/Raft) ensure that a majority of nodes agree before committing changes, preventing split‑brain.  
- **Availability pattern**: With *active‑active*, both clusters remain in read/write mode; if one fails, the other continues seamlessly—yielding higher uptime than passive failover.

**Edge Cases**  
- Network partitions: requires careful quorum logic to avoid data loss.  
- Latency spikes can lead to stale reads; need read‑repair or background sync.  
- Sudden load surge on one region may overload it; autoscaling and rate limiting help.

**Optimize & Communicate**  
- Start with a *semi‑synchronous* replication model for latency-sensitive workloads, then move to full synchronous only where business rules demand strong consistency.  
- Explain that the cost is higher infrastructure overhead (more replicas, more complex conflict resolution) but the payoff is near‑zero downtime and global low latency—exactly what FAANG customers expect.  

This structure demonstrates clear problem framing, a thoughtful plan, technical depth, awareness of edge cases, and a concise rationale for design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
