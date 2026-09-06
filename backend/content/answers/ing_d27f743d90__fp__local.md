---
qid: ing_d27f743d90__fp__local
question: 'Explain: Summary — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 397
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:28:31-05:00'
sources: []
---

**Kafka Acknowledgements (acks) – a first‑principles view**

In a replicated log, every record is written to a *leader* broker and then asynchronously forwarded to one or more *followers*. The core safety problem is: **when can the client safely consider the write committed?**  
1. **Durability** requires that at least one copy survives a broker crash.  
2. **Consistency** demands that all replicas agree on the record’s position before any subsequent read sees it.

Kafka encodes this trade‑off in the *acks* setting:

| `acks` | Commit rule | Effect |
|--------|-------------|--------|
| 0 | Leader writes to its log and replies immediately. | Zero durability – fastest, but data may be lost if leader dies before replication. |
| 1 | Leader persists locally then acknowledges; followers may lag. | Guarantees the record is on disk at the leader (safe from that broker’s crash) with minimal latency. |
| all / -1 | Leader waits until *all* in‑sync replicas (ISR) have persisted the record before replying. | Highest durability and strong consistency, but higher latency and throughput drop if ISR is small or network is slow. |

The non‑obvious insight: **`acks=all` does not require every replica to be online; it only waits for those in the ISR list.** If a follower falls behind, Kafka removes it from the ISR, preventing *“wait forever”* scenarios while still ensuring that all remaining replicas agree on the record’s position. This subtle dynamic between ISR membership and acknowledgment level is what lets Kafka balance durability, consistency, and performance in real‑time streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
