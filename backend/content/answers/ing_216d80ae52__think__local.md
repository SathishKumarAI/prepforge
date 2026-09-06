---
qid: ing_216d80ae52__think__local
question: 'Explain: The Offline Message Flow — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 459
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:54:33-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is “offline” here?* Assume a user’s device isn’t connected to the Internet or the server (e.g., airplane mode).  
   - *Which entities matter?* Clients, local storage, server APIs, message queue.  
   - *Performance targets:* low latency when re‑connected, minimal data usage, eventual consistency.

**2️⃣ Adopt a layered mental model**  
   1. **Client layer** – UI + local persistence (SQLite/Realm).  
   2. **Sync layer** – detects connectivity changes, queues requests.  
   3. **Server layer** – receives batched updates, resolves conflicts, pushes back state.

**3️⃣ Step‑by‑step reasoning**  
   - *Send path:* User writes → message stored locally with a “pending” flag → UI shows “sent”.  
   - *When online:* Sync layer flushes queue → server acknowledges → client marks as “delivered”.  
   - *Receive path:* Incoming push notification → payload contains message ID & metadata → client stores and displays.  
   - *Conflict resolution:* Use timestamps or Lamport clocks; last‑write wins for simple cases, otherwise merge.

**4️⃣ Common pitfalls to avoid**  
   - Forgetting to persist the queue across app restarts → loss of unsent messages.  
   - Blindly trusting server timestamps → clock skew leads to misordered chats.  
   - Over‑aggressive batching → memory blow‑up on low‑end devices.

**5️⃣ Sanity checks & verbalizing**  
   - Walk through a scenario: user offline, sends 3 msgs, reconnects → ensure all three appear in order.  
   - Ask “What if the server rejects one?” → verify retry logic and user feedback.  
   - Summarize: *Offline messages are first written locally with metadata; upon reconnection, a sync module batches them to the server, handles acknowledgments, updates UI, and ensures eventual consistency.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
