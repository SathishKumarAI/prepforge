---
qid: ing_e56c2508e8__think__local
question: 'Explain: High-level design — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 437
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:07:13-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Identify what “high‑level design” means (architecture, components, trade‑offs).  
   * Assume a typical interview context: no code, focus on scalability, reliability, and maintainability.  
   * Decide whether to cover a generic pattern or a specific use‑case (e.g., recommendation engine).

**2️⃣ Adopt a reusable framework**  
   * **Problem decomposition** → Identify core services (API gateway, data ingestion, processing, storage).  
   * **Interaction diagram** → Show request flow and data pipelines.  
   * **Scalability & fault tolerance** → Discuss load balancing, sharding, replication.  
   * **Monitoring & observability** → Logs, metrics, alerts.

**3️⃣ Step‑by‑step reasoning**  
   1. Start with user‑facing layer: REST/GraphQL API + CDN.  
   2. Add a message queue for decoupling heavy ML jobs.  
   3. Design the feature store (real‑time vs batch).  
   4. Choose model serving strategy (batch inference, online inference via microservice).  
   5. Decide on storage: vector DB for embeddings, relational DB for metadata.  
   6. Wrap up with CI/CD pipeline and monitoring stack.

**4️⃣ Avoid common pitfalls**  
   * Don’t over‑optimize early; keep the diagram simple first.  
   * Skip implementation details (exact libraries) unless asked.  
   * Beware of “magic bullet” claims—explain trade‑offs.  

**5️⃣ Sanity check & verbalize**  
   * Verify each component’s purpose and data flow.  
   * Explain why you chose a particular pattern (e.g., event‑driven vs synchronous).  
   * Summarize strengths, weaknesses, and potential extensions (caching, A/B testing).  

Follow this checklist to produce a clear, interview‑ready high‑level system design cheat sheet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
