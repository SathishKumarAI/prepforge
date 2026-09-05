---
qid: ing_46e093d26f__think__local
question: 'Explain: New Components for Offline Handling — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 544
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:11:30-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- Confirm that “New Components for Offline Handling” refers to how WhatsApp keeps messages, status updates, and media available when a device is offline or has intermittent connectivity.  
- Assume we’re designing from scratch (not retrofitting) and that the goal is low latency, high reliability, and minimal battery drain.

**2️⃣ Mental model / framework**  
Use the *Offline‑First* pattern combined with *event sourcing*.  
1. **Local store** – a lightweight database (e.g., SQLite or Realm).  
2. **Sync engine** – background worker that pushes local changes to the server and pulls remote updates.  
3. **Conflict resolution** – last‑write‑wins or operational transforms for media queues.  
4. **Caching strategy** – LRU for media, TTL for status updates.

**3️⃣ Step‑by‑step reasoning**  

| Step | Reasoning |
|------|-----------|
| **Identify data types** | Text messages (small), media (large), status (short-lived). |
| **Model local schema** | `Message(id, content, timestamp, isSent)`; `Media(id, path, pending)`. |
| **Design sync protocol** | Use incremental delta REST or gRPC streams with sequence numbers. |
| **Handle offline writes** | Queue mutations locally; mark as *pending* until acked. |
| **Conflict resolution** | For messages: use server timestamps; for media: dedupe by hash. |
| **Battery & bandwidth** | Sync only when on Wi‑Fi or after user wakes up; compress media before upload. |
| **Edge cases** | Device reset → restore from cloud backup; app uninstall → incremental sync on reinstall. |

**4️⃣ Common traps to avoid**  
- *Over‑caching*: storing all media locally leads to storage bloat.  
- *Sync storms*: pushing too many small packets can exhaust battery.  
- *Blind optimistic writes*: assuming server will always accept, leading to data loss if network fails mid‑upload.

**5️⃣ Sanity‑check & verbalize**  
- Verify that every offline event has a corresponding local record and eventual consistency guarantee.  
- Speak the flow: “When I type a message, it’s written locally with a pending flag; once connectivity is detected, the sync engine batches pending messages, sends them to the server, receives an ack, updates the flag, and purges temporary media.”  

This structured approach ensures you cover all angles while keeping the explanation clear and concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
