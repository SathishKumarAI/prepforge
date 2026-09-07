---
qid: ing_d27f743d90__faang__local
question: 'Explain: Summary — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 563
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:49:46-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet deep explanation of *Kafka’s acknowledgment (acks) levels*—the settings that determine when a producer considers a write successful and how they affect durability vs. latency. I’ll assume we’re talking about the `acks` configuration in Apache Kafka, not any vendor‑specific tweaks.

**Approach**  
1. Define each acks level (`0`, `1`, `-1/ALL`).  
2. Explain the mechanics: broker receipt → leader commit → follower replication.  
3. Discuss trade‑offs (latency vs. durability).  
4. Highlight edge cases and common pitfalls.  
5. Wrap up with best‑practice recommendations.

**Depth**  
| acks | Meaning | What’s acknowledged? | Latency | Durability |
|------|---------|-----------------------|--------|------------|
| `0`  | Producer sends record, **no wait** for any acknowledgment. | None; broker may drop the message on failure. | Lowest – essentially fire‑and‑forget. | Lowest – risk of data loss. |
| `1`  | Producer waits for **leader only** to write to its log and reply. | Leader’s local append. | Moderate – one round‑trip to leader. | Medium – if the leader dies before followers sync, message can be lost. |
| `-1`/`ALL` | Producer waits until **all in‑sync replicas (ISR)** acknowledge. | All ISR have persisted the record. | Highest – requires acknowledgment from every follower. | Highest – guarantees that a failure of any single node won’t lose data. |

**Edge cases**  
- If ISR shrinks (e.g., follower down), `ALL` may block until enough replicas recover, potentially causing timeouts.  
- With `0`, network partitions can silently drop messages.  
- `1` on an under‑provisioned cluster risks loss if the leader crashes before followers catch up.

**Optimize & Communicate**  
For most applications, start with `acks=1` to balance speed and safety; switch to `ALL` when data integrity is critical (e.g., financial transactions). Always pair acks with appropriate `retries`, `max.in.flight.requests.per.connection`, and `delivery.timeout.ms`. Emphasize that the chosen level should align with SLAs—latency‑sensitive apps lean toward `0/1`; loss‑tolerant systems may tolerate higher latency for guaranteed durability. This structured walk‑through shows clear reasoning, depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
