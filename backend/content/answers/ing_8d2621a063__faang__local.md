---
qid: ing_8d2621a063__faang__local
question: 'Explain: ‘acks=all’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 470
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:12:17-05:00'
sources: []
---

**Clarify**  
You’re asking about the `acks` configuration in Apache Kafka producers and what the value `acks=all` means. I’ll assume you want to know: *how it works*, *why it matters for durability*, and *its impact on latency*.

**Approach**  
1. Explain the producer‑to‑broker acknowledgement flow.  
2. Detail the three possible `acks` settings (`0`, `1`, `all`).  
3. Focus on `all`: broker‑level semantics, leader–follower replication, and failure scenarios.  
4. Finish with practical trade‑offs (latency vs. safety).

**Depth**  
- Kafka producers send a record to the partition’s **leader**.  
- The leader writes it to its local log, then replies with an ACK.  
- `acks=0`: no ACK is awaited; best latency, but possible data loss if broker crashes before persisting locally.  
- `acks=1`: leader acknowledges immediately after writing locally; safe against leader crash only if the record is on disk.  
- **`acks=all`** (or `acks=-1`) forces the leader to wait until *every* in‑sync replica (ISR) has written the record before replying. If any follower lags or fails, the leader will still acknowledge once the remaining ISR set confirms persistence. This guarantees that the message survives broker failures as long as at least one ISR remains.

**Edge Cases**  
- If all replicas fail simultaneously → producer gets a timeout/exception.  
- A slow follower can increase latency dramatically.  
- Mis‑configured `replication.factor` < 1 or no ISR leads to immediate failures.

**Optimize & Communicate**  
For mission‑critical streams, use `acks=all` with a replication factor ≥ 3 and monitor ISR lag. If you can tolerate occasional loss for higher throughput (e.g., telemetry), switch to `acks=1`. Always expose the trade‑off to stakeholders: “Higher durability = lower throughput.” This concise explanation shows structured thinking, technical depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
