---
qid: ing_23133a3484__think__local
question: 'Explain: Generation & citations — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 487
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:58:59-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *What is a “RAG” assistant?* (Retrieval‑Augmented Generation).  
   - *Enterprise context:* data privacy, compliance, internal knowledge bases.  
   - *Citations*: how to reference retrieved documents in the generated answer.

**2️⃣ Adopt a mental model: the RAG pipeline + provenance stack**  
   - **Retrieve → Rank → Generate → Cite**.  
   - Map each stage to system components (vector store, LLM, post‑processing).  
   - Add a *provenance layer* that captures source IDs, timestamps, and confidence scores.

**3️⃣ Step‑by‑step reasoning**  
   1. **Query interpretation** → tokenize, embed, filter for enterprise policy.  
   2. **Document retrieval** → nearest‑neighbor search over embeddings; keep top‑k hits with metadata.  
   3. **Ranking & filtering** → re‑rank by relevance + compliance flags.  
   4. **Prompt construction** → include retrieved snippets and a placeholder for citations.  
   5. **LLM generation** → produce answer plus citation markers (e.g., `[Doc‑12]`).  
   6. **Citation post‑processing** → replace placeholders with full reference strings from metadata.  

**4️⃣ Common pitfalls to avoid**  
   - *Hallucination*: LLM invents facts; mitigate by enforcing “only use retrieved text”.  
   - *Mis‑citing*: wrong document IDs or outdated links; enforce atomic citation mapping.  
   - *Privacy leaks*: inadvertently exposing sensitive data in citations; filter metadata before exposure.

**5️⃣ Sanity‑check & communicate**  
   - Run a unit test: input → retrieve → generated answer + citations → verify each citation points to an actual source.  
   - Verbally walk through the pipeline: “The assistant first fetches relevant docs, then the LLM stitches them into a response, finally we attach provenance so users can trace every claim back to its origin.”  

Follow this checklist whenever you need to explain or audit generation & citations in an enterprise RAG system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
