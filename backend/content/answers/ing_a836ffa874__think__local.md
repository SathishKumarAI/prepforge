---
qid: ing_a836ffa874__think__local
question: 'Explain: Rollover — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 399
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:09:37-05:00'
sources: []
---

**1️⃣ Clarify the request and assumptions**  
- The user wants an explanation of *“Rollover – Data streams”* from Elastic’s docs.  
- Assume they’re familiar with Elasticsearch basics but need a concise, conceptual overview rather than code‑heavy details.

**2️⃣ Adopt a mental model**  
- Think of data streams as “rolling logs”: continuous ingestion into a time‑ordered index.  
- Rollover is the *mechanism* that automatically moves the write pointer to a fresh backing index once certain criteria are met (size, age, document count).

**3️⃣ Step‑by‑step reasoning**  
1. Define what a data stream is and why it’s useful for time‑series data.  
2. Explain the “write alias” concept: writes go to the active backing index.  
3. Detail the rollover trigger conditions (max size/age/doc count).  
4. Describe what happens during rollover: new index created, write alias updated, older indices become read‑only.  
5. Mention how this keeps queries fast and indices manageable.

**4️⃣ Common traps to avoid**  
- Don’t conflate “rollover” with “index lifecycle management”; they’re related but distinct.  
- Avoid overloading the answer with API syntax unless explicitly asked.  
- Stay clear of jargon like “hot/cold tiers” unless you’re sure it’s relevant.

**5️⃣ Sanity‑check & communicate**  
- Re-read to ensure each bullet directly answers the user’s question.  
- Keep the tone explanatory, not prescriptive; offer a quick next step (e.g., “try `POST /_rollover`” if they want hands‑on practice).  
- End with a concise takeaway: rollover is an automated switch that keeps data streams efficient and queries performant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
