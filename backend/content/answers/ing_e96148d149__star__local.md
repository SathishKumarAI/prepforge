---
qid: ing_e96148d149__star__local
question: 'Explain: API Reference — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:51-05:00'
sources: []
---

**Situation:**  
In my last role, we were launching a new recommendation engine that had to ingest user profiles from several third‑party services. The data schema was evolving, and any mismatch caused the model training pipeline to crash during nightly runs.

**Task:**  
I needed to create a robust validation layer that could dynamically adapt to schema changes, provide clear error messages, and expose an API for downstream services to query field definitions and validation rules without hard‑coding them.

**Action:**  
I leveraged Pydantic’s `BaseModel` to define declarative schemas for each user profile source. Using the *Pydantic Evals* feature, I wrote custom validators that evaluated complex conditions (e.g., age must be > 18 if country is US) at runtime. I exposed these models through a lightweight FastAPI endpoint that returned the `.schema_json()` of any model on request—essentially an API reference for our data contracts. This allowed other teams to programmatically fetch field metadata and validation logic, reducing onboarding time. To keep performance in check, I cached schema responses with Redis, ensuring the API remained under 50 ms latency.

**Result:**  
The new validation service cut pipeline failures by 92%, reduced developer onboarding from two weeks to a few days, and enabled real‑time schema discovery across microservices. It also taught me how Pydantic’s evaluation hooks can be used not just for data integrity but as a living API reference that scales with evolving models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
