---
qid: ing_f6ecc4134c__eli5__local
question: 'Explain: Learned Sparse Embeddings (SPLADE) — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 243
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:05:46-05:00'
sources: []
---

Think of an encyclopedia that is both a book and a phone‑book.  
When you look up “quantum physics,” the book’s index (the **sparse part**) points you straight to the exact pages, while the phone‑book’s contact list (the **dense part**) gives you related topics like “particle mechanics” or “string theory.”  

SPLADE works the same way. It first turns each document into a *sparse* vector that contains only the most important words—like an index that says “this article mentions quantum, physics, entanglement.”  
Then it also creates a *dense* vector (a cloud of many tiny numbers) that captures deeper relationships between words, so it can find related documents even if they don’t share exact terms.  

When you ask a question, SPLADE searches with both vectors: the sparse part gives quick hits, and the dense part refines the list to include truly relevant but slightly different articles. The result is fast, accurate searching that feels like having an index *and* a smart assistant in one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
