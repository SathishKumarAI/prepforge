---
qid: ing_f5bc721eca__fp__local
question: 'Explain: ‘acks=0’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 578
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:41:46-05:00'
sources: []
---

**Kafka acks=0 – the fire‑and‑forget case**

The *acks* setting is Kafka’s way of quantifying the durability guarantee that a producer asks its broker to provide before returning success to the client.  
At the lowest level, when a publisher sends a record it must be written to a partition log on a **leader** broker and optionally replicated to followers. The producer can decide how many acknowledgments it will wait for:

| acks | What the broker guarantees |
|------|---------------------------|
| 0    | No acknowledgment is sent back; the client simply drops the send result. |
| 1    | Leader writes to its local log and replies immediately. |
| -1 (all) | All in‑sync replicas have written the record before reply. |

With **acks=0** the broker performs a *fire‑and‑forget* write: it receives the packet, appends it to the leader’s log, and returns no response. The producer continues without waiting for any confirmation.  
This behaviour is derived from the fundamental trade‑off between latency and durability—an instance of the CAP principle where we sacrifice consistency/durability for maximal throughput and minimal round‑trip time.

**Why it “must” work this way**

* **Network efficiency:** Eliminating the ACK eliminates a round‑trip, which is critical when sending millions of records per second.
* **Stateless client logic:** The producer can treat all sends as non‑blocking; no retry state needs to be stored for each message.

**Non‑obvious insight**

Even though *acks=0* gives the client zero guarantee, the record still lands in the broker’s log. If the leader crashes before persisting it to disk, the message is lost—yet Kafka will not inform the producer of that loss. Therefore, acks=0 is useful only when you can tolerate occasional losses (e.g., telemetry or metrics) and your application can recover from missing data without explicit error handling.

In short, *acks=0* is the extreme point on the durability spectrum: maximum speed, zero consistency guarantees, but still relies on Kafka’s internal fault tolerance to keep most writes safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
