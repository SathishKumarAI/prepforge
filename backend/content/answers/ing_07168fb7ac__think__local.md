---
qid: ing_07168fb7ac__think__local
question: 'Explain: The RAG Taxonomy — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 383
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:11:16-05:00'
sources: []
---

**1️⃣ Clarify the goal and scope**  
   - Ask: “What level of detail does the audience need?” (intro vs. deep dive).  
   - Assume the reader knows basic NLP but not Retrieval‑Augmented Generation (RAG) specifics.

**2️⃣ Adopt a mental model**  
   - Think of RAG as *retrieval + generation* = two modules that interact.  
   - Use a taxonomy framework: **(a)** *Retrieval strategy*, **(b)* *Generation style*, **(c)* *Integration design*.  

**3️⃣ Step‑by‑step reasoning**  
   1. Define the problem RAG solves (knowledge gaps, up‑to‑date facts).  
   2. Explain each taxonomy tier:  
      - Retrieval: dense vs. sparse, index type, query expansion.  
      - Generation: fine‑tuned LLMs, prompt templates, hallucination control.  
      - Integration: pipeline, end‑to‑end training, real‑time constraints.  
   3. Show how choices in each tier affect performance (latency, accuracy).  

**4️⃣ Avoid common traps**  
   - Don’t conflate “retrieval” with “caching”.  
   - Resist overpromising; highlight that RAG still relies on the generator’s hallucination risk.  
   - Beware of mixing up *index construction* with *query time retrieval*.

**5️⃣ Sanity‑check & communicate**  
   - Run a quick mental example: query → document retrieval → prompt + answer.  
   - Verify each component is covered and that the taxonomy flows logically.  
   - Summarize in bullet points so the listener can repeat the structure back, confirming understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
