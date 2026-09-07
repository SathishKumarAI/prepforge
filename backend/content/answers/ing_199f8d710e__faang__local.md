---
qid: ing_199f8d710e__faang__local
question: 'Explain: In-Sync Replicas (ISR) — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 475
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:47-05:00'
sources: []
---

**In‑Sync Replicas (ISR)**  
*Kafka’s mechanism for ensuring strong consistency and durability across a topic partition.*

---

### 1️⃣ Clarify  
We’re asked to explain ISR: *What it is*, *why it matters*, and *how Kafka uses it*.  
Assumptions to confirm:  
- Topic has multiple replicas.  
- Clients write to the leader; consumers read from any replica.  

### 2️⃣ Approach  
Give a concise definition → describe how ISR is maintained during replication → explain its impact on writes, reads, and failure handling.

### 3️⃣ Depth  
- **Definition**: ISR is an ordered list of replicas that have acknowledged receipt of all messages up to the latest offset.  
- **Maintenance**:  
  - Leader appends a record → sends it to followers.  
  - Follower writes locally, then acknowledges.  
  - Upon acknowledgment, follower moves to the head of ISR; if it falls behind beyond `replica.lag.max.messages` or `replica.lag.max.ms`, it is removed.  
- **Write guarantees**:  
  - `acks=all`: producer blocks until *all* replicas in ISR have committed.  
  - Guarantees that a message survives a leader crash as long as at least one follower remains in ISR.  
- **Read guarantees**: Consumers can read from any replica; if reading from a non‑ISR follower, they may see stale data.  

### 4️⃣ Edge Cases  
- **Network partition**: A follower loses contact → removed from ISR → new leader elected.  
- **Slow consumer lag**: If ISR size < `min.insync.replicas`, writes with `acks=all` will fail (producer error).  
- **Rapid re‑joins**: Followers that recover quickly can be reintegrated into ISR after catching up.

### 5️⃣ Optimize & Communicate  
Highlight trade‑offs: larger ISR → higher durability but more network traffic and latency. Explain tuning knobs (`min.insync.replicas`, `replica.lag.max.ms`). Conclude with why ISR is the backbone of Kafka’s fault‑tolerance strategy, enabling strong consistency while keeping replication efficient.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
