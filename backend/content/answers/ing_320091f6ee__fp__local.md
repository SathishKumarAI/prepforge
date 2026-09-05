---
qid: ing_320091f6ee__fp__local
question: 'Explain: Step 2: Define Core Data & APIs — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 365
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:59-05:00'
sources: []
---

### Step 2: Define Core Data & APIs  
**Why it matters** – In a system‑design interview the interviewer wants to see that you can *translate* user requirements into a concrete data model and a set of services that operate on that model. This is the bridge between “what the system should do” (the problem) and “how it will do it” (the implementation).  

1. **Identify the minimal domain objects** – start from the user stories, extract nouns (e.g., `User`, `Post`, `Comment`) and their relationships.  
2. **Choose persistence granularity** – decide which entities live in a relational DB, which are cached in memory, and which can be derived on‑the‑fly. The goal is to keep the *core* data set small enough for quick reads while still expressive enough for all required queries.  
3. **Design APIs as CRUD + business‑logic endpoints** – each API should expose a single responsibility (e.g., `POST /posts` creates a post). Think in terms of *data contracts*: request/response schemas, status codes, and versioning.  

> **Non‑obvious insight:** Treat the API surface as a *state machine* for your core data. Every endpoint should move the system from one well‑defined state to another; this guarantees consistency and makes reasoning about edge cases (concurrency, rollback) tractable.  

By grounding your design in clear data entities and deterministic APIs, you give the interviewer confidence that the system will scale, be maintainable, and meet user needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
