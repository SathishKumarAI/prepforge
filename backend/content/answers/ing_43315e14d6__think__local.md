---
qid: ing_43315e14d6__think__local
question: 'Explain: The decision framework: prompt → RAG → fine-tune'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 418
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:03:30-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What is being asked?*  A high‑level flow that starts with a user prompt, goes through Retrieval‑Augmented Generation (RAG), and ends in fine‑tuning.  
   - *Assumptions:* We’re dealing with a language model pipeline, the “decision framework” refers to how each stage informs the next, and we want an explanatory rather than code answer.

**2️⃣ Adopt a mental model: three‑phase pipeline**  
   1. **Prompt ingestion** – interpret intent & context.  
   2. **RAG** – fetch relevant external knowledge and combine it with the base LM’s representation.  
   3. **Fine‑tune** – adjust weights or prompt templates based on outcomes.

**3️⃣ Reason step‑by‑step**  
   - *Prompt → RAG:* The model parses the prompt, queries a vector store (or API) for documents matching key tokens, and merges retrieved text into its context window.  
   - *RAG → Fine‑tune:* Outcomes (e.g., correctness, user feedback) are logged; this data becomes training examples that refine either the retrieval index or the model’s weights to better handle similar prompts in future.

**4️⃣ Avoid common traps**  
   - Don’t conflate RAG with simple prompting.  
   - Remember fine‑tuning is iterative; one pass rarely suffices.  
   - Beware of “retrieval hallucination”—the system may over‑trust retrieved text.

**5️⃣ Sanity‑check & verbalize**  
   - Run through a concrete example (e.g., user asks for latest COVID stats).  
   - Verify each stage: prompt → fetch CDC data → generate answer → record success → fine‑tune on similar queries.  
   - Summarize the loop in plain language to confirm coherence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
