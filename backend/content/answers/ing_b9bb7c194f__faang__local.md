---
qid: ing_b9bb7c194f__faang__local
question: 'Explain: Active-Passive policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:55-05:00'
sources: []
---

**Clarify**  
You’re asking about *Active‑Passive* (or *active‑standby*) availability patterns used in high‑availability systems—where one instance actively serves traffic while a secondary instance sits idle until failure. Confirm that the goal is **high uptime**, minimal service interruption, and low failover latency.

**Approach**  
1. Define roles: *Active* handles all requests; *Passive* mirrors state.  
2. Choose fail‑over trigger (health checks, heartbeat).  
3. Decide replication strategy (push vs pull, synchronous vs asynchronous).  
4. Design routing: use a load balancer or DNS with low TTL that can switch the active endpoint.

**Depth**  
- **Health monitoring**: ping the passive instance; if it fails, promote it to active and demote the former.  
- **State synchronization**: for stateful services, use a shared datastore (e.g., Redis cluster) or log‑based replication so the passive can catch up quickly.  
- **Failover latency**: synchronous replication gives consistency but adds latency; asynchronous keeps active fast but risks data loss.  
- **Consistency model**: choose *eventual* for high throughput, *strong* if business logic demands it.  
- **Cost**: running a fully idle passive instance still incurs compute cost; consider auto‑scaling or spot instances.

**Edge cases**  
- Simultaneous failure of both nodes (network partition).  
- Split‑brain when both think they’re active—avoid with quorum or fencing.  
- Data divergence after prolonged asynchronous sync—implement reconciliation scripts.

**Optimize & Communicate**  
- Use a *leader election* protocol (e.g., Raft) to avoid split brain.  
- Leverage managed services: AWS Route 53 health checks + Auto Scaling Groups, Azure Traffic Manager, GCP Cloud Load Balancing.  
- Narrate trade‑offs: “We accept 1–2 s failover latency for strong consistency; if you can tolerate eventual consistency we could drop the synchronous sync and reduce cost.”  

This structured view shows clear assumptions, a concrete implementation plan, complexity analysis, and risk mitigation—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
