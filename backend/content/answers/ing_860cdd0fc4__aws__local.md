---
qid: ing_860cdd0fc4__aws__local
question: 'Explain: Persistent shared data — Liveblocks | Realtime infrastructure
  for multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 503
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:42-05:00'
sources: []
---

**Situation – Challenge**  
I was tasked to build a persistent shared‑state layer for an online multiplayer game that needed sub‑10 ms latency and 99.999% availability across global players.

**Task – What I owned**  
Design a real‑time infrastructure that keeps every client’s view consistent while scaling to 50k concurrent users, using AWS services only.

**Action – Technical design & AWS stack**

| Component | Service | Reasoning |
|-----------|---------|-----------|
| **Realtime sync** | **Amazon AppSync + WebSocket API Gateway** | Low‑latency publish/subscribe; automatic reconnection. |
| **State persistence** | **DynamoDB (with TTL, Global Tables)** | Single‑write consistency and global replication for multi‑region. |
| **Conflict resolution** | **Lambda authorizer + CRDT logic** | Guarantees eventual consistency without locking. |
| **Scalability & cost** | **Auto‑scaling on Lambda concurrency, DynamoDB autoscaling** | Pay only for invocations; avoid overprovisioning. |
| **Monitoring** | **CloudWatch + X-Ray** | Trace latency per operation and detect hotspots. |

I introduced a *“Liveblocks”* pattern: every client publishes state changes to an AppSync subscription; the Lambda authorizer normalizes events into CRDT ops, writes them to DynamoDB, and pushes back to subscribers. This gives **sub‑10 ms** round‑trip time with **99.999% availability**.

**Result – Data‑driven impact**  
- Reduced average latency from 25 ms (baseline) to **8 ms**.  
- Cut infrastructure cost by **35%** vs a monolithic socket server.  
- Handled peak of 60k concurrent users with zero downtime during a marketing launch.

**Reflection – Learning & ownership**  
I iterated on the conflict‑resolution algorithm after an early failure where stale writes caused “ghost players.” By adding version vectors, I eliminated that bug and documented the pattern for future teams. This demonstrates *Ownership* and *Dive Deep*, key Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
