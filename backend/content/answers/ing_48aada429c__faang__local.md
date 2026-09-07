---
qid: ing_48aada429c__faang__local
question: 'Explain: Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 528
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:48-05:00'
sources: []
---

**Kafka Acks Explained (FAANG‑style)**  

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking about the *acks* setting in Kafka producers—how it guarantees that a write reaches brokers before the client gets a success. Let’s confirm: you want to know the semantics of `acks=0/1/-1`, the trade‑offs between latency and durability, and how this maps to leader/follower replication.” |
| **Approach** | 1️⃣ Outline the producer flow (send → batch → partition → broker). <br>2️⃣ Explain each acks level in plain terms. <br>3️⃣ Map to failure scenarios: broker crash, network lag, disk flush. |
| **Depth** | - `acks=0`: Producer does *not* wait for any acknowledgment – fastest but no durability; message may be lost if broker dies before receiving it.<br>- `acks=1`: Waits for the leader of the partition to confirm receipt. If that leader fails before replicating, data can still be lost—only one copy guaranteed.<br>- `acks=-1` (or `all`): Waits until **all** in‑sync replicas acknowledge. Guarantees that once acks is returned, all surviving replicas have the record; highest durability but higher latency and potential throttling if many followers are slow.<br>Internally, Kafka writes to its log on disk first, then sends the acknowledgment back—so even `acks=1` includes a disk flush on the leader. |
| **Edge Cases** | • If a follower lags behind (not in sync), it won’t count for `all`. <br>• A broker crash after ack but before replication can still lose data with `acks=1`. <br>• Extremely high fan‑out topics may throttle producers when `acks=-1` because each batch must wait for many replicas. |
| **Optimize & Communicate** | For most apps, `acks=1` offers a good balance; use `all` only when you can tolerate higher latency (e.g., financial trades). Explain to stakeholders that the choice is a classic consistency‑vs‑performance trade‑off. If I were designing a system, I’d start with `acks=1`, monitor lag metrics (`replicaLagMs`) and switch to `all` if we hit data‑loss incidents. |

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
