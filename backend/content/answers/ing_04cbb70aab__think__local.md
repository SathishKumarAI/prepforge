---
qid: ing_04cbb70aab__think__local
question: 'Explain: High-Level Design — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 492
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:03:59-05:00'
sources: []
---

**1. Clarify the scope & constraints**  
   - Ask whether we’re building a full‑stack WhatsApp clone or just key subsystems (messaging, presence, media).  
   - Identify non‑functional requirements: latency targets, user scale, data consistency, privacy, and cost limits.  

**2. Adopt a layered mental model**  
   - Use the classic *client–server* → *API gateway* → *service layer* → *data store* decomposition.  
   - Separate concerns into **core services** (chat, contacts, media) and **infrastructure services** (auth, notification, monitoring).  

**3. Reason step‑by‑step through the architecture**  
   1. Define user flows: login → contact sync → send/receive message → read receipt.  
   2. For each flow, list required data paths and latency constraints.  
   3. Choose transport protocols (WebSocket for real‑time, HTTP/REST for RESTful ops).  
   4. Map out data models and storage choices: NoSQL for messages (append‑only logs), relational DB for user accounts.  
   5. Plan scaling: horizontal sharding of message queues, CDN for media, global replication for presence.  

**4. Avoid common pitfalls**  
   - Don’t over‑optimize early; start with a simple single‑region design and then discuss horizontal scaling.  
   - Remember that *consistency* is often sacrificed for availability in chat apps—explain CAP trade‑offs.  
   - Beware of “magic” service names; show how to split responsibilities (e.g., separate *MessageService* from *NotificationService*).  

**5. Sanity‑check & communicate**  
   - Re‑walk the user journey: does every step have a clear service and data path?  
   - Estimate throughput: e.g., 1 M concurrent users → ~10 k msg/s, so design queues accordingly.  
   - Summarize in a diagram (blocks + arrows) and explain each component’s purpose and scaling strategy.  

This structured approach keeps the discussion focused, demonstrates architectural thinking, and lets interviewers see how you translate requirements into concrete, scalable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
