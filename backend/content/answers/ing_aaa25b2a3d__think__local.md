---
qid: ing_aaa25b2a3d__think__local
question: 'Explain: Database Operations — Top 6 Cases to Apply Idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 472
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:18:10-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Idempotency* means “running an operation multiple times has the same effect as running it once.”  
- Assume we’re dealing with relational/NoSQL databases that expose CRUD‑style APIs (REST, gRPC, etc.).  
- We care about safety for retries, circuit breakers, or idempotent HTTP verbs (`PUT`, `DELETE`).  

**2️⃣ Mental model / framework**  
- Map each database operation to its *side‑effects* and *idempotence requirement*.  
- Use the “read‑modify‑write” cycle: read → compute → write.  
- Think in terms of *state change* vs. *query*; only state changes need idempotency guarantees.

**3️⃣ Step‑by‑step reasoning to list the top 6 cases**  
1. **Create / Insert** – normally not idempotent; wrap with “upsert” or use a unique key.  
2. **Update / Patch** – often non‑idempotent if it’s additive; enforce deterministic updates (e.g., set value).  
3. **Delete** – naturally idempotent: deleting an already deleted row is a no‑op.  
4. **Upsert** – explicitly designed to be idempotent by combining insert/update logic.  
5. **Increment / Counter** – tricky; use atomic increment operations that are safe on retries.  
6. **Transactional batch** – wrap multiple ops in a single transaction and expose an idempotency key.

**4️⃣ Common traps & wrong turns**  
- Assuming `INSERT` is idempotent: duplicate keys will error unless handled.  
- Ignoring *side‑effects* like triggers or cascades that can cause non‑idempotence.  
- Forgetting to propagate the idempotency key through all layers (API, service, DB).  

**5️⃣ Sanity‑check & communicate**  
- Verify each case against a real retry scenario: “What happens if I call it twice?”  
- Explain why each operation *is* or *needs* idempotence in plain terms.  
- Provide concrete code snippets or SQL examples to illustrate the pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
