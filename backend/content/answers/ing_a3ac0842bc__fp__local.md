---
qid: ing_a3ac0842bc__fp__local
question: 'Explain: Putting It Together: The Message Flow — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 376
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:17-05:00'
sources: []
---

**Putting It Together: Why a Message‑Flow Architecture Must Be “Push‑Only” and “Event‑Driven”**

At its core, a chat app must guarantee *eventual consistency* of a user’s conversation history while keeping latency below a few hundred milliseconds.  
The first principle is that each message is an **immutable event** that can be replayed by any replica.  If we treat a send as “create‑message” and delivery as “publish‑event,” the system becomes *append‑only*.  This eliminates write conflicts: two users never update the same record concurrently, so no locking or version vectors are needed.

The second principle is **decoupled storage and delivery**.  
*Storage* lives in a horizontally scalable log (e.g., Kafka or a sharded NoSQL table).  
*Delivery* is handled by a lightweight worker that subscribes to the log and pushes the event to every online recipient via WebSocket or FCM.  Offline recipients receive the event when they reconnect, simply replaying the tail of the log.

Because delivery workers are stateless, we can scale them independently from storage, satisfying the *bounded latency* requirement: adding more workers reduces the time a message spends in the queue.  
A non‑obvious insight is that **read amplification** (each user re‑reads all past messages) is avoided by keeping an “inbox” index per device; the worker writes to this index once, and subsequent reads hit a cache or local store.

Thus, the WhatsApp message flow emerges naturally from the need for immutable events, decoupled persistence, and stateless delivery workers—an architecture that scales linearly while preserving correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
