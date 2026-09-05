---
qid: ing_e039b3d93a__star__local
question: 'Explain: Long context, hallucination, reasoning models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 375
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:09-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a generative‑QA bot for legal research. The product had to pull relevant statutes from 10 GB of PDFs and answer user questions with citations, but early tests showed the model was “hallucinating” facts—making up references that didn’t exist in the source documents.

**Task:**  
I needed to reduce hallucinations while preserving the bot’s ability to handle very long contexts (the entire legal corpus) and keep latency under 2 seconds per query.

**Action:**  
1. I switched from a single‑pass transformer to a two‑stage reasoning pipeline: first, a retrieval‑augmented encoder (FAISS with 512‑dim embeddings) fetched the top 20 paragraphs; second, a lightweight GPT‑4‑like reasoning module processed those snippets and generated answers in a “source‑first” style.  
2. I added a “citation‑validation” step that cross‑checked every claimed statute against the original PDF metadata using a custom Lucene index. If any citation failed validation, the model rewrote the answer on the fly.  
3. To handle long contexts efficiently, I implemented chunked positional embeddings and a hierarchical attention mask so the reasoning model only saw the 2 k tokens most relevant to the query.

**Result:**  
Hallucinations dropped from 32% to under 5%, while recall of correct statutes rose to 94%. End‑to‑end latency stayed at ~1.7 seconds, and user satisfaction scores climbed by 18 points in our A/B test. I learned that a modular reasoning architecture—retrieval + validation + constrained generation—is essential when scaling generative AI over huge documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
