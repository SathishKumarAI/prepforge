---
qid: ing_418862f80f__think__local
question: 'Explain: 134: Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 524
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:59:28-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “Mobile System Design”?* – Designing scalable, responsive mobile back‑ends (APIs, storage, real‑time sync).  
- *Audience level:* interviewees are usually senior engineers or architects.  
- *Assumptions:* you can use any tech stack; focus on high‑level trade‑offs rather than code.

**2️⃣ Adopt a mental model**  
Use the classic **“SPECS” framework** (Scale, Performance, Extensibility, Consistency, Security).  
For each dimension list constraints and typical mobile concerns (latency, battery, intermittent connectivity).

**3️⃣ Step‑by‑step reasoning**  
1. *Define core requirements* – user count, data size, feature set (messaging, media, offline sync).  
2. *Choose the right architecture*: client‑server vs peer‑to‑peer, REST vs GraphQL vs gRPC, push notifications vs websockets.  
3. *Data storage & caching*: local SQLite/Realm for offline; remote DB (NoSQL vs SQL) with eventual consistency.  
4. *Scalability*: auto‑scaling API gateways, CDN for media, sharding strategies.  
5. *Reliability*: retry logic, exponential backoff, graceful degradation when offline.  
6. *Security & privacy*: token auth, TLS, data encryption at rest and in transit.  
7. *Monitoring & observability*: metrics (latency, error rate), logging, A/B testing hooks.

**4️⃣ Common traps to avoid**  
- Over‑optimizing for “one” metric (e.g., latency) without considering consistency or cost.  
- Ignoring offline user experience; assume constant connectivity.  
- Underestimating the impact of push notifications on battery life.  
- Treating every feature as a monolith; ignore microservice decomposition early.

**5️⃣ Sanity‑check & verbalize**  
- Re‑state the problem in one sentence: *“Design a mobile backend that handles X users, Y data, with Z latency and offline support.”*  
- Walk through each SPECS point aloud, ensuring you address trade‑offs.  
- End with a quick “next steps” (e.g., prototype a simple API gateway, run a load test).  

This structured thought process turns an open‑ended interview question into a disciplined design conversation that showcases analytical depth and practical know‑how.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
