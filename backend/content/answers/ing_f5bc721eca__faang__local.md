---
qid: ing_f5bc721eca__faang__local
question: 'Explain: ‘acks=0’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 429
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:11:04-05:00'
sources: []
---

**Clarify**  
You’re asking about the `acks` setting on a Kafka producer—specifically what it means when you set `acks=0`. The goal is to understand how this impacts reliability and latency.

**Approach**  
1. Restate the semantics of each `acks` value.  
2. Explain the trade‑off between durability and throughput.  
3. Highlight what “no acknowledgment” implies for message loss.  
4. Mention typical use cases and pitfalls.

**Depth**  
- `acks=0`: The producer sends a record to the broker **without waiting for any response**. The send call returns immediately, giving maximum throughput but no guarantee that the broker received or stored the data. If the leader fails before replication, the message is lost.  
- `acks=1`: Producer waits only for the leader’s acknowledgment; replicas are not guaranteed.  
- `acks=-1` (or `all`): Producer waits until **all in‑sync replicas** confirm receipt, offering the strongest durability at higher latency.

Setting `acks=0` reduces round‑trip time and network usage but sacrifices reliability—ideal only for “best‑effort” logging or metrics where occasional loss is acceptable.

**Edge Cases**  
- If a broker crashes immediately after the send, the producer has no record of success.  
- Retries are not triggered automatically because the client never receives an error.  
- Consumer will see missing records, potentially breaking downstream pipelines that expect strict ordering or completeness.

**Optimize & Communicate**  
In practice, use `acks=0` only when latency is critical and loss tolerance is high (e.g., telemetry). Otherwise, default to `acks=1` for a balance of speed and safety. Explain this rationale clearly to stakeholders: “We’ll get faster writes but risk 1‑in‑10⁶ message loss.” This shows you weigh performance against correctness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
