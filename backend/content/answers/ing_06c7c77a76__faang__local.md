---
qid: ing_06c7c77a76__faang__local
question: 'Explain: In-sync replicas — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 611
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:10-05:00'
sources: []
---

**Clarify**  
We’re asked how “in‑sync replicas” (ISR) affect the `acks` setting in Apache Kafka.  
*Assumptions:*  
- Producer is using the standard `acks` property (`0`, `1`, or `all`).  
- Broker cluster has multiple replicas per partition, and ISR is maintained by ZooKeeper/ZK‑less controller.

**Approach**  
Explain the role of ISR in durability, then map each `acks` value to its interaction with ISR. Highlight why ISR matters for consistency and performance.

**Depth**  

| `acks` | What the producer waits for | Effect of ISR |
|--------|-----------------------------|---------------|
| **0**  | No acknowledgment – writes are sent asynchronously. | Broker writes to local log; if broker dies before replication, data is lost. ISR irrelevant. |
| **1**  | Waits only for leader’s write confirmation. | Leader can commit even if no follower in ISR. If the leader fails, a new leader may be chosen from the ISR or non‑ISR, potentially causing a split‑brain scenario. |
| **all** (or `-1`) | Must receive acknowledgments from *every* broker currently in ISR before replying to producer. | Guarantees that all up‑to‑date replicas have persisted the record; if any follower is out of sync or down, the write blocks until it catches up or the request times out. |

Key points:  
- ISR contains only replicas that are caught up within `replica.lag.max.ms`.  
- If a replica falls behind and leaves ISR, it will no longer receive `acks=all` confirmations.  
- The producer’s `request.timeout.ms` determines how long it waits for the required acks; exceeding this triggers a retry.

**Edge Cases**  
- **Broker crash before replication:** With `acks=1`, writes survive on leader only; with `acks=all`, they may be lost if the follower that was in ISR crashes.  
- **Network partition:** A follower can stay in ISR temporarily, causing `acks=all` to succeed even though it hasn’t truly replicated yet (unless `min.insync.replicas` is set).  
- **ISR shrinkage during a write:** If ISR drops below the required number of replicas after the request starts, the producer will receive an error (`NotEnoughReplicasException`).

**Optimize & Communicate**  
Explain that setting `min.insync.replicas` together with `acks=all` protects against data loss when a follower goes offline. Trade‑off: higher latency and lower throughput versus stronger durability guarantees. Conclude by summarizing the practical choice: use `acks=1` for low latency, `acks=all + min.insync.replicas` for strong consistency in mission‑critical workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
