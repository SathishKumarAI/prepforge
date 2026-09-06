---
qid: ing_0d301cbbb7__think__local
question: 'Explain: Core APIs — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 466
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:35:50-05:00'
sources: []
---

**1️⃣ Clarify & Set Assumptions**  
- Ask whether the focus is on *how* Spotify’s API architecture works (public endpoints, data flow) or on *designing a new core API layer* for a music service.  
- Assume we’re targeting high‑level design: authentication, streaming, recommendation, and scalability.  
- Note constraints: low latency, global CDN, large user base (~70 M).  

**2️⃣ Adopt a Design Framework**  
- **Layered Architecture** (Client → API Gateway → Service Layer → Data Layer).  
- **Microservices** for core domains (Auth, Catalog, Streaming, Recommendations).  
- **Event‑driven patterns** (Kafka) for real‑time updates.  
- Use **CQRS + Event Sourcing** where reads/writes differ heavily.  

**3️⃣ Step‑by‑Step Reasoning**  
1. *Define key APIs*: `/login`, `/search`, `/playback/start`, `/recommendations`.  
2. Map each to a service; identify shared contracts (e.g., `Track` DTO).  
3. Design API gateway: rate‑limit, caching, TLS termination.  
4. For streaming, use adaptive bitrate + HLS/DASH, backed by CDN edge nodes.  
5. Recommendation: model as an async microservice feeding a read‑optimized cache.  
6. Data persistence: relational DB for user data, NoSQL for catalog, vector store for embeddings.  

**4️⃣ Avoid Common Pitfalls**  
- Don’t over‑optimize early; keep services loosely coupled.  
- Beware of “single point of failure” in auth or CDN; use redundant clusters.  
- Don’t ignore security: OAuth2, token revocation, GDPR compliance.  

**5️⃣ Sanity‑Check & Communicate**  
- Run a quick latency budget (≤ 200 ms for API calls).  
- Sketch sequence diagrams to verify call flows.  
- Explain trade‑offs clearly: e.g., eventual consistency vs. strong consistency in recommendation updates.  

This meta‑plan lets you structure the interview answer, stay focused, and demonstrate depth without getting lost in details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
