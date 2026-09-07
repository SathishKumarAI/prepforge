---
qid: ing_1c0641f288__faang__local
question: 'Explain: Reference — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 532
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:10-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Kafka’s acknowledgment (acks) semantics*—the guarantees producers receive when sending a record. I’ll assume we’re focusing on the `acks` config, its impact on durability and latency, and how it ties into replication.

**Approach**  
1. Define each `acks` level (`0`, `1`, `-1/All`).  
2. Map them to the producer’s success criteria (leader only, all replicas).  
3. Discuss trade‑offs: durability vs. round‑trip latency and throughput.  
4. Mention related configs (`retries`, `max.in.flight.requests.per.connection`) that affect safety.

**Depth**  
| `acks` | What the broker does | Producer’s guarantee | Typical use |
|--------|---------------------|----------------------|-------------|
| `0` | No ACK sent; record written to leader only. | *No guarantee* – loss on failure. | High‑throughput, best‑effort logging (e.g., metrics). |
| `1` | Leader acknowledges after persisting locally. | Record reaches the broker that accepted it. | Balanced safety/latency for many apps. |
| `-1` / `All` | Leader waits until all in-sync replicas (ISRs) have persisted. | Record is durably stored on at least one follower; survives leader loss. | Critical data, financial transactions. |

*Durability*: With `All`, if the leader crashes before ISR replication, the producer sees a failure and can retry.  
*Latency*: `0` gives the lowest latency (no round‑trip). `All` adds the time to write to every follower.

**Edge Cases**  
- If the ISR shrinks below one replica while `acks=All`, writes fail until ISR size recovers.  
- Network partitions: `1` may succeed but data could be lost if the leader fails before replication.  
- Producer retries with `retries>0` can cause duplicate records unless idempotence is enabled.

**Optimize & Communicate**  
Explain that choosing `acks` is a classic durability‑vs‑performance trade‑off. In practice, most services start with `1`, then bump to `All` for mission‑critical streams while enabling `enable.idempotence=true` to avoid duplicates. Summarize by highlighting that understanding `acks` lets you tune Kafka for the right balance in your system’s context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
