---
qid: ing_6fbc0388a3__think__local
question: The pilot RAG system is giving wrong answers on the customer's contracts.
  You're on-site tomorrow. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 488
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:21:44-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
- Confirm which *contracts* are affected (specific clauses, dates).  
- Assume the RAG stack is: a retrieval engine (vector DB), a language model, and an orchestrator that merges them.  
- Assume on‑site means you can access logs, metrics, and the production environment.

**2️⃣ Adopt a “layered” mental model**  
- **Data layer**: ingestion → embeddings → storage.  
- **Inference layer**: prompt construction & LLM call.  
- **Post‑processing layer**: answer formatting & safety checks.  

**3️⃣ Step‑by‑step debugging path**  
1. **Reproduce locally**: run the same query on a copy of the index to see if the issue is environment‑specific.  
2. **Check embeddings**: validate that contract documents are properly tokenized, chunked, and stored; spot any truncation or mis‑chunking.  
3. **Inspect retrieval**: log top‑k results for a sample query; verify relevance and that correct clauses surface.  
4. **Probe the prompt**: print the exact prompt fed to the LLM; ensure it includes context, question, and any system instructions.  
5. **Model output audit**: capture raw LLM response before post‑processing; look for hallucinations or misinterpretations.  
6. **Compare against ground truth**: use a small test set of known correct answers to quantify accuracy drop.  
7. **Iterate fixes**: adjust chunk size, retrieval similarity threshold, or prompt wording and re‑test.

**4️⃣ Avoid common traps**  
- Don’t assume the LLM is wrong; first rule out data or retrieval faults.  
- Beware of “silent” post‑processing that masks errors (e.g., truncating answers).  
- Don’t overlook version mismatches between local and production embeddings/models.

**5️⃣ Sanity‑check & communicate**  
- Summarize findings in a quick slide: root cause, evidence, and fix.  
- Run the patched system on a live user query before leaving to confirm resolution.  

This structured, layer‑by‑layer approach ensures you isolate the fault efficiently while keeping stakeholders informed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
