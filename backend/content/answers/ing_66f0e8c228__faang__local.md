---
qid: ing_66f0e8c228__faang__local
question: 'Explain: Non-Functional Requirements — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 492
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:42-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *real‑time presence platform* (e.g., “online/offline” status for millions of users). Core non‑functional requirements: **latency ≤ 50 ms**, **high availability (99.999%)**, **elasticity under peak traffic**, and **data consistency** across geo‑regions. Confirm assumptions: expected user base, write/read ratio, acceptable staleness, GDPR/retention constraints.

**Approach**  
1. **Client → Edge CDN**: lightweight WebSocket or long‑polling for low latency.  
2. **Presence Service (stateless)** behind a load balancer.  
3. **Distributed in‑memory store** (Redis Cluster / Aerospike) to hold current status; persistence layer (Cassandra/Spanner) for audit.  
4. **Event bus (Kafka/Kinesis)** for change propagation and replication.  
5. **Geo‑replication** with read‑through caches and eventual consistency; use causal ordering where needed.

**Depth**  
- *Latency*: WebSocket handshakes ~10 ms, status updates via pub/sub < 20 ms.  
- *Throughput*: Redis cluster sharded by user hash → thousands of ops/sec per node.  
- *Consistency*: Strong read‑write at origin; other regions see eventual consistency (≤ 200 ms).  
- *Fault tolerance*: Multi‑AZ, automatic failover; health checks on presence nodes.  
- *Scalability*: Autoscale based on queue depth and cache miss rate.

**Edge Cases**  
- Sudden spike from a viral event → queue backpressure, fallback to HTTP polling.  
- Node failure while user is online → stale status until next heartbeat.  
- Data center outage → use read‑replicas; write redirects to secondary region.

**Optimize & Communicate**  
Iterate on the heartbeat interval: longer intervals reduce traffic but increase perceived staleness; benchmark with real users. Explain trade‑offs clearly: “We chose Redis for low latency, accepting eventual consistency in distant regions.” Highlight monitoring (latency dashboards, SLA alerts) and continuous improvement loops. This structured narrative satisfies FAANG’s emphasis on clarity, depth, and impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
