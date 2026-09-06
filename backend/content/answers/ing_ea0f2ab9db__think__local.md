---
qid: ing_ea0f2ab9db__think__local
question: How does RAG work? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 468
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:28:53-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   *Assume “RAG” refers to Retrieval‑Augmented Generation, a recent paradigm in LLMs that blends retrieval from an external corpus with generation.*  
   • Confirm the user wants a high‑level explanation (not code).  
   • Note that RAG is agnostic to the underlying language model; it can be paired with GPT‑4, Llama‑2, etc.

**2️⃣ Adopt a “Pipeline” mental model**  
   *RAG = Retrieve → Augment → Generate.*  
   • Map each stage onto familiar concepts: search engines, context windows, and prompt engineering.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Input prompt** – user asks a question.  
   2. **Retrieval** – embed the query, query an index (FAISS, ElasticSearch), fetch top‑k passages.  
   3. **Augmentation** – concatenate retrieved docs with the prompt or inject them as “knowledge cards.”  
   4. **Generation** – feed this enriched prompt to a generative LLM; the model can now cite or paraphrase the external content.  
   5. **Optional post‑processing** – filter hallucinations, rank multiple generations, or verify against retrieved facts.

**4️⃣ Common traps to avoid**  
   • *Assuming retrieval guarantees correctness* – RAG still needs faith‑based generation.  
   • *Overloading the context window* – too many passages exhaust token limits.  
   • *Blindly trusting embeddings* – poor embedding quality yields irrelevant docs.

**5️⃣ Sanity‑check & verbalize**  
   • Re‑state each stage in plain terms: “We look up facts, hand them to the model, and let it answer.”  
   • Ask a quick example question (“What caused the fall of the Roman Empire?”) and mentally walk through the pipeline.  
   • Ensure the explanation remains concise yet covers retrieval, augmentation, generation, and limitations.

This structure lets you adapt the same reasoning pattern to explain other AI concepts or troubleshoot RAG implementations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
