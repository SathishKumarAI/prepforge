---
qid: ing_cdad787767__eli5__local
question: 'Explain: A customer has 2,000 pages of internal PDFs and wants an assistant
  that answers questions over them. Fine-tune or RAG? Walk me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 240
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:04-05:00'
sources: []
---

Imagine your PDFs are a huge library of recipe books, and you want an assistant that can answer any cooking question instantly.  

**Fine‑tune** is like teaching the assistant by reading every page of all the books over and over until it memorizes every recipe. It works well if the questions match what’s in those books, but if a new dish appears or the book changes, you have to start from scratch.

**RAG (Retrieval‑Augmented Generation)** is like giving the assistant a smart search engine that can pull up the exact page you need and then explain it. It keeps the original PDFs untouched, so new pages are automatically available without retraining.

For 2,000 pages that may grow or change, RAG is usually better: quick setup, no re‑training, and it always uses the latest information. Fine‑tune could be chosen only if you need super‑fast answers for a very narrow set of questions and you’re sure the content won’t change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
