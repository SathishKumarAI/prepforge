---
qid: ing_cdad787767__fp__local
question: 'Explain: A customer has 2,000 pages of internal PDFs and wants an assistant
  that answers questions over them. Fine-tune or RAG? Walk me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 343
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:17:43-05:00'
sources: []
---

When a user wants answers *over* a fixed corpus (2 000 PDFs), the problem is **information extraction + relevance filtering** rather than *learning new facts*.  
1. **Fine‑tuning (FT)** rewrites the model’s weights to behave like a “search engine” for that text. It needs many labeled question–answer pairs, which are expensive to produce and will overfit if the corpus changes. FT also obscures the original knowledge base: once fine‑tuned, the model cannot easily incorporate new documents without retraining.  
2. **Retrieval‑Augmented Generation (RAG)** keeps the large language model (LLM) unchanged and supplies it with a vector index of the PDFs. Each query triggers a similarity search that brings only the most relevant passages; the LLM then generates an answer conditioned on those snippets.  

Principle: *decouple representation from reasoning*. RAG treats the corpus as an external memory, letting the LLM perform flexible inference while the retrieval system guarantees up‑to‑date evidence. It scales linearly with document size (indexing cost) and avoids catastrophic forgetting.

**Non‑obvious insight:** In practice, the bottleneck is not the LLM’s hallucinations but the *coverage* of the index. Even a perfect model will fail if its retriever misses relevant chunks; thus investing in high‑quality embeddings (e.g., using domain‑specific sentence transformers) pays more than polishing the generation head.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
