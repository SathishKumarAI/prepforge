---
qid: ing_828f26b655__think__local
question: 'Explain: Endpoint: GET /users/{user_id}/presence — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 528
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:37:05-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Confirm that “Endpoint: GET /users/{user_id}/presence” is a REST API call to fetch a user’s current online/offline/typing status.  
   - Assume we’re designing for a WhatsApp‑like app: millions of users, real‑time updates, low latency, high availability, and privacy constraints.

**2️⃣ Adopt a layered design framework**  
   - *Client → API Gateway → Service Layer → Data Store*  
   - Include caching, pub/sub for presence events, and a CDN for static assets.  

**3️⃣ Step‑by‑step reasoning**  
   1. **API contract** – Define JSON payload: `{ "user_id": "...", "status": "online", "last_seen": ... }`.  
   2. **Authentication** – Token (JWT) validated at gateway; short‑lived to reduce risk.  
   3. **Presence source** – Pull from a real‑time store (Redis pub/sub or in‑memory table).  
   4. **Cache strategy** – Cache per‑user presence for ~5 s with TTL, invalidated on status change events.  
   5. **Scalability** – Horizontal scaling of the service; use a load balancer; shard Redis by user_id hash.  
   6. **Consistency** – Use eventual consistency: updates go to a write‑through cache then async DB persist.  
   7. **Monitoring & retries** – Circuit breakers, exponential backoff for transient failures.

**4️⃣ Common pitfalls to avoid**  
   - *Over‑caching*: stale status leading to “ghost” online indicators.  
   - *Single point of failure*: putting all presence logic in one DB node.  
   - *Security oversights*: exposing internal IDs or allowing unauthenticated reads.

**5️⃣ Sanity‑check & verbalize**  
   - Run through a sample flow: user logs in → status set to online → gateway receives GET → cache hit → response.  
   - Verify latency targets (<50 ms) and that the system meets privacy laws (e.g., GDPR).  
   - Summarize trade‑offs: higher cache TTL reduces load but hurts accuracy; more nodes increase cost but improve resilience.

---  

Use this checklist to structure your interview answer, ensuring you cover functional requirements, scalability, fault tolerance, and security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
