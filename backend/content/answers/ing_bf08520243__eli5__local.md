---
qid: ing_bf08520243__eli5__local
question: 'Explain: Q54: Explain the difference between Agentic RAG and traditional
  RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 208
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:47-05:00'
sources: []
---

Think of a librarian (the “agent”) looking for books to answer a question.  
**Traditional Retrieval‑Augmented Generation (RAG)** is like the librarian pulling a few books from the shelf, skimming them, and then writing an answer that mixes those passages with their own knowledge. The librarian just adds the books as extra information; they don’t decide how to use each one.

**Agentic RAG** gives the librarian a tiny robot helper. The robot can ask the librarian which parts of the books are most useful, suggest new searches, and even re‑rank or rewrite passages before the answer is written. It actively chooses, filters, and refines the retrieved material rather than simply appending it.

So the difference: traditional RAG adds retrieved text as a sidekick; agentic RAG lets an extra “agent” orchestrate the retrieval process itself for better, more focused answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
