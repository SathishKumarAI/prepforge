---
qid: ing_eafcf93b02__think__local
question: 'Explain: Compatible with Sourcegraph products — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 383
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:31:20-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify what “Compatible with Sourcegraph products” means (e.g., integration, API usage, data formats).  
- Assume the reader knows basic ML but not Sourcegraph specifics; keep explanations at a high level.  

**2️⃣ Adopt a mental model: Product‑Feature Mapping**  
- Map *Cody* (ML code assistant) to Sourcegraph’s ecosystem: docs, search, repo indexing.  
- Use a three‑layer diagram: Data → Model → Interface.

**3️⃣ Step‑by‑step reasoning**  
1. **Data ingestion** – Cody pulls source files from Sourcegraph’s indexed repos via the GraphQL API.  
2. **Model execution** – The ML model runs locally or in a cloud service, consuming that data.  
3. **Result delivery** – Answers are returned through Sourcegraph’s UI (comments, code lenses).  
4. **Feedback loop** – User actions feed back to Sourcegraph for continuous improvement.

Explain each layer, showing how APIs, authentication tokens, and schema compatibility enable seamless operation.

**4️⃣ Avoid common traps**  
- Don’t conflate *Cody* with generic “GitHub Copilot”; highlight Sourcegraph‑specific integrations.  
- Don’t assume the reader knows GraphQL; briefly explain its role.  
- Avoid overloading with internal tech jargon that isn’t needed for the concept.

**5️⃣ Sanity‑check & communicate**  
- Verify each layer logically flows: data → model → UI.  
- Use analogies (e.g., “Cody is like a librarian who reads Sourcegraph’s books to answer questions”).  
- End with a quick recap of how compatibility hinges on shared APIs, auth, and consistent data schemas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
