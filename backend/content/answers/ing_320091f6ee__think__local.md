---
qid: ing_320091f6ee__think__local
question: 'Explain: Step 2: Define Core Data & APIs — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 499
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:24:40-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “Core Data & APIs” in this context?* I’ll assume it means identifying the essential data entities (tables, objects) and the key API endpoints that will drive the ML pipeline.  
- *Audience level:* interviewers expect a concise, architecture‑oriented explanation rather than code details.  
- *Assume I’m interviewing for a system design role in an ML platform.*

**2️⃣ Adopt a mental model**  
Use the classic “Data → Feature Store → Model Serving” flow:  
1. **Raw data ingestion** (sources, formats).  
2. **Feature extraction & storage** (feature store schema).  
3. **API layer** for training, inference, and monitoring.  
Map each step to concrete entities and endpoints.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to define | Why it matters |
|------|----------------|----------------|
| 1. Identify core data entities | User profiles, event logs, model metadata | These are the building blocks for features and training data. |
| 2. Design schema & storage | Relational tables vs NoSQL collections; partitioning strategy | Determines query performance for feature retrieval. |
| 3. Outline API contracts | `/features?user_id=`, `/train`, `/predict` | Exposes a clean interface for downstream services. |
| 4. Consider versioning & lineage | Feature versions, model checkpoints | Enables reproducibility and rollback. |

**4️⃣ Common traps to avoid**  
- *Over‑engineering*: Don’t pre‑design every micro‑service; focus on the core data flows.  
- *Neglecting latency*: API calls for feature retrieval must be sub‑100 ms for real‑time inference.  
- *Ignoring data privacy*: Skip GDPR considerations in the first pass, but note them as a future enhancement.

**5️⃣ Sanity‑check & verbalize**  
- Re‑read the explanation: does each entity have a clear purpose?  
- Run through an example request: “Get features for user 42 → API hits feature store → returns JSON.”  
- End with a brief note on scalability (sharding, caching) to demonstrate depth.  

This structured approach keeps the answer concise yet comprehensive, ready for a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
