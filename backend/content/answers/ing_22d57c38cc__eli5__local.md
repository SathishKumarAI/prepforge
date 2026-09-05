---
qid: ing_22d57c38cc__eli5__local
question: What is RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 208
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:36-05:00'
sources: []
---

**RAG = Retrieval‑Augmented Generation**

Think of a writer who wants to answer a question but doesn’t know all the facts. Instead of guessing, she first pulls out relevant pages from her library (retrieval) and then writes an answer that weaves those facts together (generation). In AI, RAG works the same way: it uses two parts

1. **Retriever** – quickly searches a huge database or knowledge base to fetch the most useful documents for the user’s query.  
2. **Generator** – a language model that reads those retrieved snippets and writes a polished response.

The “augmentation” is the extra information the retriever supplies, so the generator can produce more accurate, up‑to‑date answers than it could from its own internal memory alone. This blend gives AI models both the breadth of a database and the fluency of natural language.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
