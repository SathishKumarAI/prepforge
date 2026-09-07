---
qid: ing_0ee2fddd85__faang__local
question: 'Explain: Distributed Systems Resilience — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 482
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:18:15-05:00'
sources: []
---

**Distributed Systems Resilience – Design Interview**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want a system that stays up and delivers correct data even when components fail, right? I’ll assume we’re building a read‑heavy key‑value store for a global e‑commerce site, with 99.999% availability, low latency (<50 ms), and eventual consistency.” |
| **Approach** | 1️⃣ Replicate data across zones (geo‑sharding). <br>2️⃣ Use quorum reads/writes (Paxos/Raft). <br>3️⃣ Detect failures via heartbeats; trigger rebalancing. <br>4️⃣ Employ circuit breakers and graceful degradation. |
| **Depth** | *Replication*: each write is sent to N replicas, chosen by consistent hashing with virtual nodes. <br>*Quorum*: read‑consistency `R`, write‑consistency `W` satisfy `R + W > N`. Raft elects a leader per shard; followers log entries. <br>*Failure detection*: health checks every 2 s, timeouts of 5 s. On timeout, the node is marked dead and its data re‑replicated to healthy peers. <br>*Circuit breaker*: if a service reports >10% error rate over 30 s, it trips; subsequent calls return cached or “service unavailable” until health recovers. |
| **Edge cases** | Network partitions: we’ll favor availability (CAP trade‑off). Clock skew causing stale reads—use vector clocks. Sudden traffic spikes: auto‑scale shards. Data loss during rebalancing: use write-ahead logs and anti‑entropy background sync. |
| **Optimize & Communicate** | To reduce latency, cache hot keys in a CDN layer; to cut costs, tier storage (SSD for hot, HDD for cold). I’d present this as a diagram, walk through a failure scenario, and quantify: with N=5, R=W=3 we get 99.999% availability under one node loss. This shows clear trade‑offs, scalability, and recoverability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
