---
qid: ing_95b8226a6d__think__local
question: 'Q: Your RAG system''s costs have tripled over the last month with no increase
  in query volume. How do you diagnose and fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 384
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:00:31-05:00'
sources: []
---

**1. Clarify the problem & set assumptions**  
   - *What* exactly has tripled (compute time, storage, data transfer)?  
   - Assume query volume is truly constant and that all logs are intact.  

**2. Adopt a systematic diagnostic framework**  
   - **Input → Processing → Output**: trace each stage of the RAG pipeline.  
   - Use a cost‑by‑component ledger (vector store ops, embedding calls, API usage).  

**3. Step‑by‑step reasoning**  
   1. Pull recent billing data; break it down per service.  
   2. Inspect logs for any changes in request patterns or payload sizes.  
   3. Verify that no new indexes or embeddings were regenerated (which can be costly).  
   4. Check for increased use of expensive LLM calls (e.g., higher‑tier models).  
   5. Look at infrastructure: did a scaling event occur? Did we switch from on‑prem to cloud?  

**4. Common traps to avoid**  
   - Assuming “no volume increase” means no cost change; hidden metrics (embedding size, batch size) can inflate costs.  
   - Ignoring auto‑scaling or spot‑instance price spikes.  
   - Overlooking API quota changes from providers (e.g., new pricing tiers).  

**5. Sanity‑check & communicate**  
   - Re‑run the cost breakdown after any change to confirm a real reduction.  
   - Present findings in a concise table: component, old cost, new cost, reason for shift.  
   - Recommend concrete fixes (e.g., cache embeddings, switch to cheaper model, tighten index pruning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
