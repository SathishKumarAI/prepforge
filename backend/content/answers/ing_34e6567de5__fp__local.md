---
qid: ing_34e6567de5__fp__local
question: 'Explain: High Availability Patterns — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 356
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:57:03-05:00'
sources: []
---

**High‑availability (HA) is the guarantee that a service remains reachable and functional even when parts of its infrastructure fail.**  
At its core, HA solves a *redundancy* problem: every logical operation in a distributed system can be seen as a function \(f\) applied to some state \(S\). If one node fails, we still need an alternative execution path that yields the same output with negligible latency.

The simplest solution is **active‑passive replication**—a standby replica mirrors the primary. It works because the *state* can be serialized and replayed; the trade‑off is that the passive node is idle until failure, so recovery time (RTO) is high.  

A more sophisticated pattern is **active‑active geo‑replication**. Here, each region holds a *consistent snapshot* of \(S\), allowing local reads/writes. Consistency is maintained through conflict‑free replicated data types (CRDTs) or consensus protocols like Raft/Paxos. The deeper principle is that *information flow* must be bounded: every update propagates to all replicas within a network delay, ensuring eventual convergence.

**Non‑obvious insight:** Many designs focus on failover latency but ignore **partial failure isolation**. By partitioning the system into *micro‑services with independent state stores*, you can localize failures—one service’s outage doesn’t cascade. This mirrors the *cut‑and‑paste* property of information theory: keeping data in separate “cuts” reduces cross‑entropy between components, thereby improving overall availability without sacrificing consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
