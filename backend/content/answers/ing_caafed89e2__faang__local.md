---
qid: ing_caafed89e2__faang__local
question: 'Explain: Acks’s utility — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 700
total_tokens: 933
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:49-05:00'
sources: []
---

**Clarify**  
You’re asking how *acknowledgements* (acks) work in Apache Kafka and why they matter for durability vs. latency. I’ll assume we’re talking about the producer‑side `acks` setting, the broker’s replication factor, and the consumer commit behaviour.

---

**Approach**  
1. Define the three acks options (`0`, `1`, `all`).  
2. Explain how each interacts with the leader and replicas during a produce request.  
3. Map durability guarantees to latency trade‑offs.  
4. Touch on consumer side commits for completeness.

---

**Depth**  

| `acks` | What happens in the broker chain | Durability guarantee | Typical use case |
|--------|----------------------------------|----------------------|-----------------|
| **0**  | Producer sends record, does *not* wait for any response. The leader writes to its local log and immediately returns success. | Record may be lost if leader crashes before replication. | Low‑latency metrics or logs where loss is acceptable. |
| **1**  | Producer waits for the leader’s acknowledgment after writing locally. Replicas are *not* awaited. | Loss only if the leader dies *before* the record is flushed to disk; replicas may not yet have it. | Most applications that need a balance of speed and safety. |
| **all** (or `-1`) | Producer waits until **all in-sync replicas (ISR)** acknowledge the write. The ISR is the subset of replicas that are caught up with the leader. | Guarantees record survives even if all non‑ISR replicas fail; loss only if *every* replica crashes before ack. | Financial, audit trails, or any use where data must not be lost. |

- **Replication factor**: Must be ≥ `acks`. If you set `acks=all` but replication = 1, the broker will treat it as `acks=1`.  
- **ISR dynamics**: If a follower lags and falls out of ISR, its loss doesn’t affect the ack count. The leader may still satisfy `acks=all`.

*Consumer side*: `enable.auto.commit=true` causes periodic commits of offsets; manual commit (`commitSync/commitAsync`) gives tighter control but adds latency.

---

**Edge cases**  

- **ISR shrinking**: If all ISR members crash, `acks=all` blocks until new ISR forms or the request times out.  
- **Network partitions**: A leader may keep accepting writes with `acks=1`, risking divergence if followers never catch up.  
- **Mis‑configured replication factor**: Setting `acks=all` with RF < 2 defeats the purpose—no redundancy.

---

**Optimize & Communicate**  

To improve throughput, you can batch records (`linger.ms`) and tune the producer’s `batch.size`. If durability is paramount, enable `compression.type=gzip` to reduce disk I/O. For latency‑critical workloads, set `acks=0` or `1`, but monitor broker health and ISR size to avoid silent data loss.

When explaining this to interviewers, emphasize: *“Acks trade off safety for speed; choosing the right level depends on business risk tolerance and system resilience.”* This shows a clear grasp of Kafka’s core reliability model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
