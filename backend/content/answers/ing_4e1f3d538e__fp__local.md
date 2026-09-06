---
qid: ing_4e1f3d538e__fp__local
question: 'Explain: Summary — How to Choose the Number of Topics/Partitions in a Kafka
  Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 517
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:51:30-05:00'
sources: []
---

**Why the number of partitions matters**

Kafka stores each topic as an ordered log split into *partitions*.  
Each partition lives on exactly one broker (and its replicas) and can be read or written by only a single thread at a time.  
Thus, the **maximum parallelism** in a cluster is bounded by the total number of partitions: you cannot have more consumer‑group threads than partitions, and each producer request must acquire a lock for the target partition.

From an optimization view this is a *capacity planning* problem:

| Goal | Constraint | Decision |
|------|------------|----------|
| Throughput | One I/O thread per partition | Choose partitions so that the total I/O load can be spread across all broker cores. |
| Latency | Producer/consumer must wait for lock contention | Keep partitions ≈ 2× number of broker cores; more causes thread‑pool oversubscription and cache thrashing. |
| Fault tolerance | Replication factor × partitions ≤ available disk | Ensure enough replicas to survive a broker failure without running out of space. |

**Derivation**

1. **Compute desired throughput** \(T\) (records/sec).  
2. **Determine per‑partition I/O rate** \(t_{\text{part}}\) that a single broker core can sustain (≈ 10⁵–10⁶ records/sec on modern SSDs).  
3. The minimal partitions needed are \(\lceil T / t_{\text{part}} \rceil\).  
4. Add a safety margin (~20 %) for burst traffic and consumer lag.

**Non‑obvious insight**

Increasing partitions beyond the “2× cores” rule can *improve* fault tolerance but **degrades ordering guarantees**: each partition keeps its own order, so with many tiny partitions an application that needs global ordering across keys must perform client‑side reordering. Thus, choose partitions to balance throughput and the *semantic* requirement of key ordering rather than blindly maximizing parallelism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
