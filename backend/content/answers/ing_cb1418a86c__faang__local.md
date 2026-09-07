---
qid: ing_cb1418a86c__faang__local
question: 'Explain: Active-passive — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 544
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:38-05:00'
sources: []
---

**Clarify**  
You’re asking me to explain the *active‑passive* architecture that appears in the “system‑design‑primer” repo on GitHub, and how it applies to large‑scale systems (e.g., a global web service). I’ll assume you want: 1) what active‑passive means; 2) why it’s useful; 3) key implementation details; and 4) trade‑offs.

**Approach**  
1. Define the pattern in plain terms.  
2. Map out its components (primary/secondary nodes, failover logic).  
3. Highlight typical use cases (databases, caches, message queues).  
4. Discuss pros/cons, consistency models, and operational knobs.  

**Depth**  
- **Definition**: An *active‑passive* setup has one “primary” node that handles all traffic; a “secondary” sits idle or in standby mode until the primary fails. The secondary periodically synchronizes state (e.g., via log shipping).  
- **Failover flow**: health checks → automatic switchover → routing updates (DNS/ load balancer) → optional data catch‑up.  
- **Consistency**: Strongly consistent because only one writer exists; replication lag is bounded by the sync interval, so read replicas can become stale if you read from them during failover.  
- **Typical use cases**: RDBMS replicas (PostgreSQL streaming), distributed caches (Redis Sentinel), message brokers (Kafka ZK‑based controller).  
- **Operational knobs**: replication lag threshold, heartbeat frequency, DNS TTL for routing, automated vs manual switchover.  

**Edge Cases**  
- Network partitions where both nodes think they’re primary → split brain; mitigated by quorum or consensus layers.  
- Long sync lag causing data loss on failover—test with simulated delays.  
- Simultaneous failures (primary + secondary) – requires a third standby or multi‑region design.

**Optimize & Communicate**  
To improve the system, add *read‑scale* by exposing passive nodes as read replicas with eventual consistency, and use a *consensus* layer (Raft/Etcd) to avoid split brain. When explaining, start with the high‑level intuition (“one writer, one standby”), then drill into failure scenarios, latency trade‑offs, and finally how you’d monitor health and automate recovery. This demonstrates structured thinking, depth in distributed systems fundamentals, and awareness of real‑world operational concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
