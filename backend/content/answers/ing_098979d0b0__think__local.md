---
qid: ing_098979d0b0__think__local
question: 'Explain: Core Tools — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 498
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:20:35-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify *Claude* as a family of OpenAI‑style models (e.g., Claude 3, Claude 2).  
- Assume the audience knows basic ML concepts but not the specific tooling.  
- Decide to focus on “core tools” that developers actually use: the API, prompts, embeddings, and fine‑tuning options.

**2️⃣ Adopt a mental model of the workflow**  
Think of the pipeline as **(1) Data → (2) Model → (3) Deployment → (4) Feedback**.  
Map each core tool to one stage:
- *Prompt engineering* → Data/Interface  
- *API client libraries* → Model access  
- *Embedding API* → Feature extraction  
- *Fine‑tuning & Retrieval Augmentation* → Customization  
- *Monitoring & Logging SDKs* → Feedback loop

**3️⃣ Reason step‑by‑step**  
1. **Prompting**: explain how to structure system/user messages and why token limits matter.  
2. **API usage**: show a quick curl or Python snippet, highlighting headers, payloads, and streaming.  
3. **Embeddings**: illustrate converting text to vectors for similarity search.  
4. **Fine‑tuning**: outline the data format (JSONL), training jobs, and versioning.  
5. **Monitoring**: point to built‑in dashboards or SDK hooks.

**4️⃣ Avoid common traps**  
- Don’t conflate *prompt* with *model*.  
- Forget that embeddings are *separate* from generation.  
- Overlook rate limits and cost controls in the API docs.  
- Assume fine‑tuning is always available; it may be gated.

**5️⃣ Sanity‑check & communicate**  
- Verify each tool’s purpose matches a stage in the pipeline.  
- Run through an example: “Given a customer query, we prompt Claude for a response, embed the answer, store it, and later retrieve similar answers.”  
- Explain trade‑offs (speed vs. cost) and best‑practice tips.  

By following this checklist you’ll present a clear, structured explanation of Claude’s core tools that is both accurate and actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
