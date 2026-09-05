---
qid: ing_d8071dbda7__eli5__local
question: 'Explain: Explain the retrieval-architecture spectrum: bi-encoders, cross-encoders,
  and late interaction (ColBERT).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 259
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:17:11-05:00'
sources: []
---

Think of a library that helps you find an answer to your question.  
* **Bi‑encoder**: Two separate readers look at the query and each book independently. They give each one a short “summary” (a vector). Later we just compare these summaries, like matching two quick notes. It’s fast but can miss subtle matches because the readers never talk.  

* **Cross‑encoder**: One reader reads both the question *and* the whole book together, so it can see how they fit exactly. This gives a perfect match but is slow because you have to read every book fully for each query.  

* **Late interaction (ColBERT)**: First, each page of a book gets a quick summary just like in bi‑encoders. Then, when a question comes, the system does a fine‑grained “conversation” only between the most relevant parts of the summaries—like comparing highlighted sentences from the query with highlighted sentences from the book. It’s faster than cross‑encoder and more accurate than plain bi‑encoder.  

So the spectrum trades speed for detail: quick independent scans → deep joint reading → smart, selective comparison.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
