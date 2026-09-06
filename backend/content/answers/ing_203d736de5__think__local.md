---
qid: ing_203d736de5__think__local
question: 'Explain: Storage Requirements — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 628
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:49:13-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What is a “notification service” in this context?*  
  Assume push/email/SMS messages that can be sent immediately or scheduled, with read/unread status and retry logic.  
- *Key metrics:* throughput (msgs/sec), latency (< 200 ms), durability, scalability.  
- *Data model:* user profile → subscriptions → message queue → delivered history.  
- *Storage types:* event log (write‑only), state store (read/write).  
- State assumptions: 10M users, 1B messages/day, 99.9% uptime.

**2️⃣ Mental framework**

Use the **CAP + PACELC** lens plus a layered architecture:

```
Input → Ingestion Layer → Event Store
                     ↘          ↙
                Metadata Store   Delivery Queue
```

- *Event store* (immutable log) for audit & replay.  
- *Metadata store* (key‑value or relational) for user prefs, message status.  
- *Delivery queue* (e.g., Kafka) decouples producers from consumers.

**3️⃣ Step‑by‑step reasoning**

1. **Write path**: API → validate → append to event log (append‑only; O(1)).  
2. **Read path**: consumer reads events, updates metadata store (read/write).  
3. **Capacity calculation**:  
   - 1 B messages/day × avg 200 bytes ≈ 200 GB raw.  
   - Replication factor = 3 → 600 GB.  
   - Add index & metadata (~10 %) → ~660 GB.  
4. **Sharding strategy**: hash on user‑id or message‑id to distribute across nodes.  
5. **Durability**: use erasure coding for long‑term storage; hot data in SSD cluster.

**4️⃣ Common pitfalls**

- *Assuming a single monolithic DB*: leads to contention and latency spikes.  
- *Underestimating replay cost*: immutable log must be efficiently searchable (e.g., using Parquet or columnar store).  
- *Ignoring retention policies*: old logs can bloat storage; enforce TTL or tiered archiving.  
- *Over‑optimizing for read‑heavy workloads*: notification systems are write‑intensive.

**5️⃣ Sanity check & verbalize**

- Verify that the calculated capacity covers peak bursts (e.g., 10 k msgs/sec).  
- Check that latency budgets meet SLA: ingestion < 50 ms, delivery processing < 200 ms.  
- Explain trade‑offs: using a log for audit vs. a fast key‑value store for status updates.  

Convey the architecture in a diagram, walk through a sample message lifecycle, and confirm that each component’s storage choice aligns with its access pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
