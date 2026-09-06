---
qid: ing_c388dc5a01__think__local
question: 'Explain: Functional Requirements (What Are We Building?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 416
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:51:46-05:00'
sources: []
---

**1️⃣ Clarify the scope and audience**  
   - *Question*: “Explain functional requirements.”  
   - *Assumption*: The reader knows what ML is but not the product‑level view.  
   - *Goal*: Distinguish between model internals (algorithms, loss functions) and user‑facing features.

**2️⃣ Adopt a product‑engineering framework**  
   - Treat the ML system as a software component: *inputs → processing → outputs*.  
   - Map each stage to “functional requirements” that stakeholders care about (data ingestion, prediction API, monitoring).

**3️⃣ Step‑by‑step reasoning**  
   1. **Identify actors** (end users, admins, data scientists).  
   2. **List core capabilities** they need: upload data, train models, request predictions, view results, retrain on new data.  
   3. **Translate each capability into a requirement**: e.g., “The system shall accept CSV uploads up to 1 GB.”  
   4. **Specify acceptance criteria**: latency < 200 ms, accuracy ≥ 0.85 F1‑score.  
   5. **Document constraints** (security, compliance, scalability).

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate *non‑functional* aspects (performance, security) with functional ones.  
   - Don’t write vague verbs (“improve accuracy”) – be concrete.  
   - Beware of “feature creep”: keep requirements tied to stakeholder value.

**5️⃣ Sanity‑check & communicate**  
   - Run a quick review: “Does every requirement answer *what* the system must do, not *how* it will be built?”  
   - Use a simple diagram (inputs → process → outputs) to illustrate.  
   - Summarize in bullet form for quick stakeholder approval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
