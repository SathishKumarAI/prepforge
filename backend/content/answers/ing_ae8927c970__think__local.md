---
qid: ing_ae8927c970__think__local
question: 'Explain: When User B comes back online — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 569
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:29:32-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- What does “User B comes back online” mean? (e.g., reconnects after a pause, resumes a chat session, or re‑enters a group)
- Which layers of WhatsApp are relevant? (client → server → message queue → database → push service)
- Assume typical constraints: high scale (billions users), low latency (< 200 ms for a read), strict privacy & end‑to‑end encryption.

**2️⃣ Adopt a layered mental model**

1. **Client state** – local cache, pending messages, unread counters.
2. **Transport layer** – TCP/UDP, WebSocket or long‑polling, TLS handshake.
3. **Server routing** – load balancer → regional data center → message broker.
4. **Persistence & sync** – message store (Cassandra / RocksDB), read receipts, presence table.
5. **Push notifications** – FCM/APNs for offline users.

**3️⃣ Step‑by‑step reasoning**

- *Reconnection*: Client opens a secure WebSocket; the server authenticates via token → verifies session freshness.
- *Presence update*: Server writes “online” to a fast in‑memory presence store (Redis) and broadcasts to B’s contacts.
- *Message retrieval*:
  - Query the message broker for any messages where `to=B` and `status=unseen`.
  - Use partitioned key (`B_id`) so reads hit the same node; batch fetch for latency reduction.
- *Acknowledgment*: As each message is delivered, client sends ACKs → server updates status to “delivered” in the store.
- *Read receipts*: When B opens a chat, client marks messages as read; server pushes “read” events back to senders.

**4️⃣ Common pitfalls**

- Forgetting to handle **message ordering** (use per‑conversation sequence numbers).
- Ignoring **offline persistence**: if B goes offline again mid‑sync, duplicate or lost messages may occur.
- Over‑loading the presence store with too many pub/sub events; throttle updates.
- Assuming all clients can maintain long‑lived connections—mobile networks often drop them.

**5️⃣ Sanity checks & communication**

- Verify that latency stays below 200 ms by profiling each hop (client → LB → broker → DB).
- Ask: “What happens if B’s device has an older app version?” – need backward compatibility.
- Summarize: “When User B reconnects, we authenticate the session, update presence, pull unseen messages from a partitioned store, stream them over WebSocket, and acknowledge delivery so read receipts can propagate back.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
