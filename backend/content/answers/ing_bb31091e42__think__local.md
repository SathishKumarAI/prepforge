---
qid: ing_bb31091e42__think__local
question: 'Explain: Core APIs — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 466
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:18:11-05:00'
sources: []
---

**Meta‑Thinking Guide for “Explain: Core APIs – Design WhatsApp”**

1. **Clarify the scope & assumptions**  
   * What does “Core APIs” mean? (message send/receive, presence, media, group management?)  
   * Assume a high‑scale, low‑latency mobile messaging service; users in millions, messages per second in thousands.  
   * State any constraints you’re taking: e.g., no third‑party services, focus on design rather than code.

2. **Choose a mental model**  
   * Start with the classic “client–server” diagram → identify main subsystems (API gateway, message broker, persistence, media storage).  
   * Map each subsystem to the APIs it exposes (REST/GRPC endpoints, websockets for real‑time).

3. **Step‑by‑step reasoning**  
   1. List core user actions: register/login, send text, send media, create/join group, read receipts, typing indicator.  
   2. For each action, decide the API contract (HTTP verb, path, payload).  
   3. Think about data flow: client → gateway → auth → business logic → persistence/broker → push to recipients.  
   4. Identify cross‑cutting concerns: authentication, rate limiting, encryption, monitoring.

4. **Common traps to avoid**  
   * Forgeting eventual consistency for read receipts vs. immediate delivery guarantees.  
   * Mixing sync and async patterns in the same endpoint (e.g., trying to stream media over a REST call).  
   * Over‑engineering: adding too many microservices where a few will suffice.

5. **Sanity checks & verbalizing**  
   * Ask “does this API expose exactly what the client needs, nothing more?”  
   * Verify that each endpoint is idempotent if required (e.g., media upload).  
   * Walk through a sample conversation: User A sends “Hi” → API call → broker queues → User B receives via websocket.  

Use this checklist to structure your explanation and keep the interviewee focused on high‑level design rather than implementation details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
