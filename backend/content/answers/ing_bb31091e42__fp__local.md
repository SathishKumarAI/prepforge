---
qid: ing_bb31091e42__fp__local
question: 'Explain: Core APIs — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 457
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:44-05:00'
sources: []
---

**Core APIs for a WhatsApp‑style messaging system**

1. **User service (Auth & Profile)**  
   *Problem*: Identify who is sending/receiving.  
   *Why it works*: A stateless JWT + a “user‑by‑id” cache gives O(1) lookup; the token carries only immutable claims, satisfying the principle of *least privilege* and reducing attack surface.

2. **Contact & Group APIs**  
   *Problem*: Manage membership lists.  
   *Why it works*: Store each user’s contacts as a set in Redis (fast membership tests). Groups are directed graphs; edges are “member → group” with metadata (role, timestamp). This mirrors the *sparse‑matrix* representation of social networks—O(1) add/remove.

3. **Message API**  
   *Problem*: Persist, route, and retrieve messages reliably.  
   *Why it works*: Use an append‑only log per conversation (`topic/convId`) in a distributed KV store (Kafka or GCP Pub/Sub). The log guarantees ordering without locking, embodying the *event sourcing* principle.

4. **Delivery & Presence APIs**  
   *Problem*: Inform senders when messages are delivered/read.  
   *Why it works*: A “last‑seen” timestamp per user plus a WebSocket or long‑poll channel implements the *observer pattern*. Push notifications offload latency from the client, respecting *asynchronous communication*.

5. **Media API**  
   *Problem*: Store large blobs efficiently.  
   *Why it works*: Content addressed storage (hash → object) ensures deduplication; a CDN caches per‑region for low‑latency retrieval—an application of *geometric locality*.

**Non‑obvious insight**: Treat the conversation log as an *immutable stream* rather than a mutable table. This eliminates locking contention, allows perfect replay for offline clients, and lets you compute derived state (read receipts, typing indicators) on demand—turning storage into computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
