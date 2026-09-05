---
qid: ing_40028c181a__think__local
question: 'Explain: When the message is sent — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 550
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:55:50-05:00'
sources: []
---

**1. Clarify the request & set assumptions**  
- Confirm what “When the message is sent” refers to (e.g., the instant a user taps *Send*).  
- Assume a typical WhatsApp‑style messaging app: end‑to‑end encryption, group chats, media attachments, offline support.  
- Decide scope: focus on the core *send‑message* flow, not the entire system.

**2. Adopt a mental model / framework**  
Use a layered design lens:  
1. **Client (mobile) layer** – UI → local cache → network stack.  
2. **Transport layer** – TCP/UDP with TLS + DTLS for media.  
3. **Server side** – API gateway, message broker, persistence, encryption services.  
4. **Consistency & reliability** – eventual consistency via Kafka, deduplication logic.  

**3. Step‑by‑step reasoning toward the answer**  
- Outline client workflow: user taps *Send* → write to local DB (optimistic UI) → serialize payload + metadata → encrypt with session key → enqueue for upload.  
- Describe network handling: use HTTP/2 or WebSocket for real‑time, fallback to background sync if offline.  
- On the server: API gateway receives encrypted blob → decrypt (if needed), store in message table, publish event to broker.  
- Broker routes to recipient services: push via FCM/APNs, update read receipts.  
- Persistence and scaling: shard by chat ID, use CDN for media, cache recent messages in Redis.

**4. Common traps & wrong turns**  
- Forgetting end‑to‑end encryption per message; assume server can decrypt.  
- Ignoring offline scenarios – no retry logic → lost messages.  
- Overcomplicating with too many microservices when a few well‑scoped services suffice.  
- Neglecting deduplication for idempotent sends (network glitches).

**5. Sanity‑check & verbalize the solution**  
- Verify each layer satisfies constraints: latency < 200 ms, availability > 99.9%, data privacy.  
- Walk through a sample message path aloud: “User → client DB → encrypt → send → gateway → broker → recipient push.”  
- Highlight trade‑offs (e.g., using HTTP/2 vs WebSocket) and justify choices.  

By following this structured, layer‑by‑layer approach you can articulate a clear, realistic design for the *send message* flow in a WhatsApp‑style system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
