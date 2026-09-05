---
qid: ing_a19187547e__eli5__local
question: What is learned sparse retrieval, SPLADE-style, and when would you pick
  it over BM25 or a dense retriever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 241
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:03-05:00'
sources: []
---

Think of a huge library where each book has a sticky note that lists a handful of the most important keywords.  
**Sparse retrieval (SPLADE‑style)** is like giving every query its own set of sticky notes and then looking for books whose notes overlap with yours. The “sparsity” means you only keep the strongest, most distinctive words—just enough to point you in the right direction without drowning in noise.  

*When to use it?*  
- If your documents are short or highly specialized (legal briefs, medical reports) and you need exact keyword matches.  
- When interpretability matters: you can see which words made a document rank high.  
- If memory is tight: sparse vectors take less space than dense embeddings.  

BM25 is the classic “keyword match” method; SPLADE is a learned version that picks better keywords automatically. Dense retrievers (like BERT‑based embeddings) are great for fuzzy, semantic matching but can be slower and harder to explain. Use SPLADE when precise, interpretable keyword overlap is your goal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
