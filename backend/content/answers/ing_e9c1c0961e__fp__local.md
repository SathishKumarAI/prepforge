---
qid: ing_e9c1c0961e__fp__local
question: 'Explain: the backup data center will help to — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 414
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:15:57-05:00'
sources: []
---

In a large‑scale ride‑hailing platform the **backup data centre** is not merely a “hot standby” for disaster recovery; it is an integral part of the system’s *availability* budget.  
The fundamental problem solved is that users expect 99.999 % uptime while each request may touch dozens of micro‑services (matching, pricing, fraud detection, billing). A single data centre failure would cascade through these services and violate SLAs.  

**Why it must work this way**

1. **Geographical diversity** – a backup in another region guarantees that even if an entire power grid or ISP fails, the system can still route traffic to a healthy cluster.  
2. **Synchronous replication + eventual consistency** – critical state (driver status, vehicle location) is replicated with low‑latency protocols (e.g., Raft‑based quorum writes), while bulk data (trip history, analytics) uses asynchronous streaming. This balances the *CAP* trade‑off: we accept a small window of stale reads for high write throughput.  
3. **Failover orchestration** – an OLA (Operational Level Agreement) between services specifies that the backup must take over within 2 s after heartbeat loss, and that all dependent services can re‑establish session affinity without user impact.

**Non‑obvious insight**

The backup data centre is often *more* heavily loaded than the primary because it serves both live traffic (in case of a failover) and continuous data replication. Therefore, capacity planning must treat the backup as a “dual‑role” node: its latency budget is tighter than for a pure standby. This subtle requirement forces architects to design read‑write splitting and sharding strategies that keep per‑region load balanced even during a failover scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
