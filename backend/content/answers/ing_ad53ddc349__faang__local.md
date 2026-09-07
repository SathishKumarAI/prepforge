---
qid: ing_ad53ddc349__faang__local
question: 'Explain: acks=1 - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 403
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:23-05:00'
sources: []
---

**Clarify**  
You’re asking what the *acks* setting does in Apache Kafka’s producer API when set to `1`. The question assumes we’re dealing with a single‑broker cluster or at least a leader for each partition and that “acks” refers to the acknowledgment level sent back to the producer after a record is written.

**Approach**  
Explain the three possible values (`0`, `1`, `all`), then focus on `acks=1`: the broker acknowledges once it writes the message to its local log. The producer can continue without waiting for replicas, but the client still knows the write succeeded on the leader.

**Depth**  
- **Ack flow:** Producer → Leader → *ack* → Producer.  
- **Durability trade‑off:** Guarantees persistence only on the leader; if that broker fails before replication, data is lost.  
- **Throughput vs safety:** Higher throughput than `acks=all` because no cross‑broker sync is required.  
- **Typical use case:** Low‑latency logging or metrics where occasional loss is acceptable.

**Edge cases**  
- If the leader dies immediately after acking but before replicas catch up, a follower may be promoted and lose that record.  
- With `acks=0`, the producer gets no confirmation at all; `acks=1` mitigates this risk slightly.  
- Testing should verify that failures on followers do not cause re‑acknowledgment delays.

**Optimize & communicate**  
Mention that for higher safety you’d bump to `acks=all`, or use a dedicated “at‑least‑once” retry strategy if loss is unacceptable. Conclude by summarizing the trade‑off in one sentence: *`acks=1` offers a middle ground—fast writes with leader durability, but no guarantee against broker failures before replication.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
