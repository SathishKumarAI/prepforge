---
qid: ing_374399cb28__faang__local
question: 'Explain: Three Core Functionalities of GraphQL — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 569
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:35-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “Explain the three core functionalities of GraphQL and how it differs from REST.”  
Assumptions:  
- Audience knows HTTP basics but not GraphQL internals.  
- We’ll focus on *query*, *mutation*, and *subscription*.  
- Comparison should cover data fetching, over‑fetching/under‑fetching, versioning, and real‑time.

**2️⃣ Approach**  
1. Define each functionality in plain terms.  
2. Contrast with the REST equivalent (resource URLs, verbs).  
3. Highlight key trade‑offs: flexibility vs simplicity, schema evolution, network overhead.

**3️⃣ Depth**  

| Feature | GraphQL | REST |
|---------|---------|------|
| **Query** | Client sends a single query describing exactly the shape of data needed; server resolves fields via resolvers. | Multiple endpoints (e.g., `/users`, `/posts`) often return fixed payloads; client may need several round‑trips or accept excess data. |
| **Mutation** | Mutations are explicit operations that change state, returning the new object graph. They’re typed and can batch multiple changes in one request. | CRUD via HTTP verbs (`POST/PUT/PATCH`). Each endpoint handles a single resource; often returns status codes but not the updated entity unless explicitly requested. |
| **Subscription** | Persistent WebSocket connection for real‑time updates; server pushes only when data changes, with schema‑defined events. | Requires polling or third‑party services (WebSockets/Server‑Sent Events). No native long‑lived push in HTTP. |

*Key differences:*  
- **Over‑fetching/Under‑fetching:** GraphQL lets clients request precisely what they need; REST returns a fixed payload.  
- **Versioning:** GraphQL evolves via schema changes (deprecations) without breaking existing queries; REST often needs new endpoints.  
- **Real‑time:** Subscriptions are first‑class; REST relies on polling.

**4️⃣ Edge Cases**  
- Deeply nested queries can hit resolver performance limits → use batching/`DataLoader`.  
- Mutations that change many related objects may need transaction support.  
- Subscription scaling requires pub/sub infrastructure (e.g., Kafka, Redis).

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: GraphQL’s flexibility reduces round‑trips but adds server complexity; REST is simpler to cache and secure out of the box. Conclude with a quick recommendation: use GraphQL when client needs fine‑grained data or real‑time updates, otherwise stick with REST for straightforward CRUD services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
