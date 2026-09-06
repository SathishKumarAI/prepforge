---
qid: ing_55f515d028__think__local
question: 'Explain: Related patterns — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 486
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:39:58-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants an explanation of *“Related patterns – Pattern: Database per service.”*  
   - Assume they’re familiar with micro‑service concepts but not necessarily with database‑per‑service details.  
   - Treat “Machine Learning” as a domain where services may expose ML models; the pattern still applies.

**2️⃣ Adopt a mental model**  
   - Think of the pattern as a *“data isolation”* strategy: each service owns its own data store, avoiding shared schemas.  
   - Map it to the classic “Single Responsibility Principle” for databases.

**3️⃣ Step‑by‑step reasoning**  
   1. Define what a “service” is in this context (e.g., an API that serves predictions).  
   2. Explain why services need data (training metadata, inference logs, etc.).  
   3. Show the problem with shared DBs: coupling, schema evolution conflicts, scaling bottlenecks.  
   4. Describe how a dedicated DB per service solves these: independent schemas, isolated migrations, tailored performance tuning.  
   5. Mention trade‑offs: data duplication, cross‑service queries (use event sourcing or CQRS).  
   6. Tie back to ML: model versioning, feature store isolation, compliance (e.g., GDPR).

**4️⃣ Avoid common traps**  
   - Don’t conflate “database per service” with “no shared state”; it still may read from other services via APIs.  
   - Beware of under‑estimating operational overhead (multiple DBs to monitor).  
   - Don’t assume every service *must* have a DB; lightweight services can use in‑memory stores.

**5️⃣ Sanity‑check & verbalize**  
   - Re‑read the explanation for flow: intro → problem → solution → trade‑offs.  
   - Use concrete examples (e.g., “Predictor Service” uses PostgreSQL, “Feature Store Service” uses Redis).  
   - End with a quick summary sentence linking back to ML benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
