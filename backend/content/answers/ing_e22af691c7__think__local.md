---
qid: ing_e22af691c7__think__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 565
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:55:56-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is “Step 3: Design core components” about?*  
  It refers to the third phase in building a Pastebin‑style service as described in the System‑Design‑Primer repo.  
- Assume we already know the functional requirements (user sign‑up, paste creation, sharing) and have scoped out scalability/availability constraints from Step 2.

**2️⃣ Mental model / framework**

Use a **layered architecture**:

1. *Client* → 2. *API Gateway* → 3. *Application layer* → 4. *Data layer*.  
Map each core component (auth, paste store, CDN, search) to one of these layers.

**3️⃣ Step‑by‑step reasoning**

| Layer | Core Component | Purpose |
|-------|----------------|---------|
| API Gateway | REST endpoints (`/paste`, `/user`) | Exposes the service, handles rate‑limiting & routing. |
| Auth Service | JWT/OAuth logic | Issues tokens, validates requests, stores user metadata in a fast key‑value store (e.g., DynamoDB). |
| Paste Service | Write‑through cache + write‑ahead log | Accepts paste payload, assigns unique ID, writes to cache (Redis) and durable store. |
| Storage | Object storage (S3/Blob) + NoSQL DB for metadata | Persists raw paste data; DB holds index fields (author, timestamp). |
| CDN / Cache | Edge caches | Serves static paste content with low latency. |
| Search & Analytics | Optional inverted‑index service | Allows keyword search or usage stats. |

- **Decouple** each component so they can scale independently.
- Use **event‑driven patterns** (e.g., Kafka) for async persistence and audit logs.

**4️⃣ Common traps to avoid**

- *Monolithing*: bundling auth, paste logic, and storage into one service defeats horizontal scaling.  
- *Ignoring cache invalidation*: stale pastes in Redis can lead to consistency bugs.  
- *Underestimating cost of CDN*: for large files, edge caching is crucial; otherwise latency explodes.

**5️⃣ Sanity‑check & communicate**

- Run through a user flow: sign‑up → paste creation → retrieval. Verify each step hits the correct component.  
- Present the diagram to peers and ask: “Which component would you scale if traffic doubles?” If they point to the cache or storage, your design is on track.

By following this structured reasoning, you can articulate Step 3 clearly and confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
