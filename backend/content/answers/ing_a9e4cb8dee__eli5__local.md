---
qid: ing_a9e4cb8dee__eli5__local
question: 'Explain: Creating Your First QA Pipeline with Retrieval-Augmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 243
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:07:02-05:00'
sources: []
---

Imagine you’re building a smart librarian that can answer any question about a huge library of books.  
**Retrieval‑augmented QA** is like this librarian first looking up the most relevant pages in the books (retrieval), then reading those pages to craft an exact answer (generation).  

1. **Question encoder** – turns your spoken or typed query into a computer “sentence” that the system can understand, just as you’d write it on a note for the librarian.  
2. **Retriever** – searches the library’s index and pulls the few best‑matching passages. Think of it as a quick “look‑up” in a table of contents.  
3. **Reader (or generator)** – reads those passages, stitches together a concise reply, and gives you the final answer.  

You build this pipeline by training two small models: one that knows how to locate useful text, and another that knows how to turn that text into a polished response. The result? A fast, accurate system that feels like talking to a knowledgeable librarian who never forgets where things are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
