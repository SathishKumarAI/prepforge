---
qid: ing_51caf111bf__think__local
question: 'Explain: Endpoint: GET /recommendations — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 517
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:24:28-05:00'
sources: []
---

**Metacognitive Blueprint for Tackling “Endpoint: GET /recommendations – Design Spotify”**

1. **Clarify the Scope & Assumptions**  
   - *What* is expected? A high‑level design, not code.  
   - *Assume* a typical traffic mix (hundreds of millions of users, millions of requests/day).  
   - *Define* key constraints: latency (<200 ms), data freshness, scalability, and privacy.

2. **Choose a Design Framework**  
   - Start with the classic **“What‑If”** diagram: Users → API Gateway → Recommendation Service (stateless) ↔ Data Layer (catalog + user profile).  
   - Add **caching**, **pre‑computed batches**, and **real‑time scoring** as layers.  
   - Map to the **CAP** trade‑offs for each component.

3. **Step‑by‑Step Reasoning**  
   1. **User Context** → fetch user profile, listening history, device, location.  
   2. **Feature Engine** → compute features (e.g., recent play counts, genre affinity).  
   3. **Model Serving** → feed features to a trained model (collaborative filtering or deep learning).  
   4. **Post‑Processing** → apply business rules (explicit bans, region restrictions).  
   5. **Cache & Pagination** → store top‑N results in Redis; support “next page” tokens.

4. **Avoid Common Pitfalls**  
   - Don’t treat the endpoint as a monolith; separate concerns early.  
   - Beware of *cold starts* for heavy ML models—use pre‑warm or lighter inference engines.  
   - Ignore data freshness? Use incremental updates (Kafka streams) rather than full re‑train.

5. **Sanity Check & Communicate**  
   - Verify latency: each hop < 30 ms → total <200 ms.  
   - Confirm scalability: horizontal scaling of stateless services, sharded caches.  
   - Present the diagram first, then walk through a user request trace, highlighting bottlenecks and mitigations.

Follow this scaffold whenever you face a “design an endpoint” interview question—clarify, structure, iterate, guard against traps, then validate and articulate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
